const Button = ({ onTap, color, label, isOutlined }) => {
  return (
    <button onClick={onTap} className={`${color} font-bold px-8 py-1`}>
      {label}
    </button>
  );
};
export default Button;
