// app/components/atoms/Button.jsx
const Button = ({ className, children, onClick }) => {
  return (
    <button className={`glass ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
