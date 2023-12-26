import Stripe from "stripe";
import { prisma } from "../../../../libs/prismaConfig";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentuser } from "../../../../getUser/currentUser";

export async function POST(req) {
  const { items, payment_intent_id } = await req.json();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });
  const calculateOrderPrice = (dnum) => {
    const totalPrice = dnum.reduce((acc, item) => {
      const itemTotal = item.price * item.quantity;
      return acc + itemTotal;
    }, 0);

    return Math.floor(totalPrice) * 100;
  };

  const currenUser = await getCurrentuser();

  if (!currenUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const total = calculateOrderPrice(items);

  console.log("payment_intent_id = ", payment_intent_id);

  const orderData = {
    user: { connect: { id: currenUser.id } },
    amount: total,
    currency: "usd",
    status: "pending",
    delivaryStatus: "pending",
    paymentIntentId: payment_intent_id,
    products: items,
  };

  if (payment_intent_id) {
    //update
    const current_intent = await stripe.paymentIntents.retrieve(
      payment_intent_id
    );

    let updated_intent;

    if (current_intent) {
      updated_intent = await stripe.paymentIntents.update(payment_intent_id, {
        amount: total,
      });
    }

    const [existing_order, updated_order] = await Promise.all([
      prisma.order.findFirst({ where: { paymentIntentId: payment_intent_id } }),
      prisma.order.update({
        where: { paymentIntentId: payment_intent_id },
        data: { amount: total / 100, products: items },
      }),
    ]);

    if (!existing_order) {
      return NextResponse.json(
        { mesasge: "invalid payment intent" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { paymentIntent: updated_intent },
      { status: 201 }
    );
  } else {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    orderData.paymentIntentId = paymentIntent.id;
    await prisma.order.create({ data: { ...orderData, amount: total / 100 } });

    return NextResponse.json({ paymentIntent }, { status: 201 });
  }
}
