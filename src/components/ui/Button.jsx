const Button = ({ as: Element = "button", className = "", children, ...props }) => (
  <Element className={`button button--flex${className ? ` ${className}` : ""}`} {...props}>
    {children}
  </Element>
);

export default Button;
