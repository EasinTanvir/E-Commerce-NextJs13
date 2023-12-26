import Stripe from "stripe";
import { buffer } from "micro";
import { prisma } from "../../libs/prismaConfig";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const buff = await buffer(req);
    const sig = req.headers["stripe-signature"];

    if (!sig) {
      return res.send({ message: "Sign is required" }).status(401);
    }

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buff,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET_KEY
      );
    } catch (err) {
      return res.status(401).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case "charge.succeeded":
        const charge = event.data.object;

        if (typeof charge.payment_intent === "string") {
          let pay;
          try {
            pay = await prisma.order.findUnique({
              where: { paymentIntentId: charge.payment_intent },
            });
          } catch (err) {
            console.log(err);
          }
          if (!pay) {
            console.log("no pay found");
          }

          try {
            const res = await prisma.order.update({
              where: { paymentIntentId: charge.payment_intent },
              data: {
                status: "complete",
                address: charge.shipping?.address,
              },
            });
          } catch (err) {
            console.log(err);
          }
        }

        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).end();
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
