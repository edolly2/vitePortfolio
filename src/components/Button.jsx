/* eslint-disable react/prop-types */
import "../styles/Button.css";

const Button = ({ color, text, disabled, onClick }) => {
  return (
    <button className={`btn ${color}`} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
