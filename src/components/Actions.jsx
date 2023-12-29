const Actions = ({ icon: Icon, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex justify-center items-center rounded cursor-pointer text-slate-700 border border-slate-400  p-2 ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
    >
      <Icon size={18} />
    </button>
  );
};

export default Actions;
