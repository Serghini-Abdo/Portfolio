import "./card-grid.css";

const CardGrid = ({ className = "", children }) => (
  <div className={`card-grid ${className}`.trim()}>{children}</div>
);

export default CardGrid;
