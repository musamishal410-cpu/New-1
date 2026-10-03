import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/home")
      .then((r) => r.json())
      .then(setContent)
      .catch(() => setError(true));
  }, []);

  return (
    <>
      <Navbar />
      {content ? (
        <Home content={content} />
      ) : (
        <p className="status">{error ? "Could not load content." : "Loading..."}</p>
      )}
      <Footer />
    </>
  );
}
