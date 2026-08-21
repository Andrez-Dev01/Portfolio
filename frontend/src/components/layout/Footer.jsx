import './Footer.css';
import './Footer.responsive.css';

/**
 * Site footer with social links from the original portfolio.
 * TODO(PERSONALIZE): Update social URLs and footer copy.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          {/* TODO(PERSONALIZE): Replace with your preferred footer message. */}
          Built with precision. Thank you for visiting.
        </p>
        <div className="site-footer__socials">
          <a href="https://github.com/Andrez-Dev01" target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a
            href="https://www.instagram.com/andys_wrx?igsh=MWQ1ZGUxMzBkMA=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61572371544743"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
