import './Footer.css';

/**
 * Site footer with social links.
 * CUSTOMIZE: Update social URLs and footer copy.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Andrez. Built with React & Go.
        </p>
        <div className="footer__socials">
          <a
            href="https://github.com/Andrez-Dev01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/andys_wrx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61572371544743"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
