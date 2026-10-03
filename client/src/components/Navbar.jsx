import { useState } from "react";

const links = ["Home", "About", "Treatments", "Medicines", "Videos", "Articles", "Testimonials", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <a className="brand" href="/">Hakeem Ali Waqas</a>
      <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      <ul className={open ? "open" : ""}>
        {links.map((l) => (
          <li key={l}><a href={l === "Home" ? "/" : `/${l.toLowerCase()}`}>{l}</a></li>
        ))}
        <li><a className="btn gold" href="#appointment">Book Appointment</a></li>
      </ul>
    </nav>
  );
}
