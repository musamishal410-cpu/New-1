import SectionHead from "./SectionHead.jsx";
import AppointmentForm from "./AppointmentForm.jsx";

export default function Home({ content: c }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <h1>{c.hero.title}</h1>
          <p className="sub">{c.hero.subtitle}</p>
          <p>{c.hero.text}</p>
          <div className="hero-btns">
            {c.hero.buttons.map((b) => (
              <a key={b.text} className="btn outline" href={b.href}>{b.text}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        {c.stats.map((s) => (
          <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
        ))}
      </section>

      <section className="features container">
        {c.features.map((f) => (
          <div key={f.title} className="card"><h3>{f.title}</h3><p>{f.desc}</p></div>
        ))}
      </section>

      <section className="block container">
        <SectionHead {...c.treatments} />
        <div className="grid g3">
          {c.treatments.items.map((t) => (
            <a key={t.id} className="card tile" href={`/treatments/${t.id}`}>
              <div className="thumb" />
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
            </a>
          ))}
        </div>
        <div className="center"><a className="btn outline-gold" href="/treatments">View All Treatments →</a></div>
      </section>

      <section className="block alt">
        <div className="container">
          <SectionHead {...c.products} />
          <div className="grid g4">
            {c.products.items.map((p) => (
              <a key={p.id} className="card tile" href={`/medicines/${p.id}`}>
                <div className="thumb" />
                <h3>{p.name}</h3>
              </a>
            ))}
          </div>
          <div className="center"><a className="btn outline-gold" href="/medicines">View All Products →</a></div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <p className="label">{c.about.label}</p>
          <h2>{c.about.title}</h2>
          <p>{c.about.text}</p>
        </div>
      </section>

      <section className="cta" id="appointment">
        <div className="container">
          <h2>{c.cta.title}</h2>
          <p>{c.cta.text}</p>
          <AppointmentForm />
        </div>
      </section>
    </main>
  );
}
