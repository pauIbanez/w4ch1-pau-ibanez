const Button = ({ buttonClass, buttonText, actionOnClick }) => {
  return (
    <button className={buttonClass} onClick={actionOnClick}>
      {buttonText}
    </button>
  );
};

export default Button;
