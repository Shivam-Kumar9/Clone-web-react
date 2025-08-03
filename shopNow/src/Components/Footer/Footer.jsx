import { FaTwitter, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const footerLinks = [
    { to: "/", text: "Home" },
    { to: "/products", text: "Products" },
    { to: "/cart", text: "Cart" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav">
          {footerLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "footer__nav__item--active" : "footer__nav__item"
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div className="footer__contact">
          <p>Contact Us</p>
          <a href="mailto:support@example.com">support@example.com</a>
          <p>+1-800-123-4567</p>
        </div>
        <div className="footer__social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;