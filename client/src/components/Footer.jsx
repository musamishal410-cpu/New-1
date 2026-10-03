export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Prof Hakeem Ali Waqas. All rights reserved.</p>
      <p><a href="/privacy-policy">Privacy Policy</a> · <a href="/terms-of-service">Terms of Service</a></p>
    </footer>
  );
}
