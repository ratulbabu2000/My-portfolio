import "./card.css";

export default function card({ icon, title, disc }) {
  return (
    <div className="c-card">
      <img src={icon} alt="" />
      <span>{title}</span>
      <span>{disc}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
}
