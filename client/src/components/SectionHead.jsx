export default function SectionHead({ label, title, desc, light }) {
  return (
    <div className={`section-head${light ? " light" : ""}`}>
      <p className="label">{label}</p>
      <h2>{title}</h2>
      {desc && <p className="desc">{desc}</p>}
    </div>
  );
}
