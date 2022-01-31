const Button = (className, text, actionOnClick) => {
  return (
    <button className={className} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
