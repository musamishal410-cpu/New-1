import { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [state, setState] = useState("idle");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setState("sending");
    try {
      const r = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error();
      setState("done");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setState("error");
    }
  }

  return (
    <form className="appt" onSubmit={submit}>
      <input name="name" placeholder="Your name" value={form.name} onChange={change} required />
      <input name="phone" placeholder="Phone number" value={form.phone} onChange={change} required />
      <textarea name="message" placeholder="Your problem (optional)" rows="3" value={form.message} onChange={change} />
      <button className="btn gold" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Book Appointment"}
      </button>
      {state === "done" && <p className="ok">Thank you! We will contact you soon.</p>}
      {state === "error" && <p className="err">Something went wrong. Please try again.</p>}
    </form>
  );
}
