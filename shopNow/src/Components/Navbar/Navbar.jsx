import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink , useNavigate } from "react-router-dom";
import { useState , useContext  } from "react";
import { AuthData } from "../../Context/authContext";

import "./Navbar.css";

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Products" },
  { to: "/cart", text: "Cart" },
];

function Navbar() {
  const { token , setToken } = useContext(AuthData);
  const  routerNavigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    routerNavigate('/login')
    // setUser({ name: "Shivam" });
    if(token) setUser(token)
  }; 

  const handleLogout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo" style={{fontFamily : 'cursive',color: '#0d9488'}}>SHOP<span style={{color:'black'}}>now</span></div>

        <div className="navbar__search">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>

        <div className={`navbar__links ${isMenuOpen ? "show" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__links__item ${isActive ? "navbar__links__item--active" : ""}`
              }
              end // Add 'end' prop to ensure exact match for root route "/"
            >
              {link.text}
            </NavLink>
          ))}
        </div>

        <div className="navbar__user">
          {user ? (
            <>
              <span className="navbar__username">Hello, {user.name}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button className="navbar__auth" onClick={handleLogin}>
              Login / Register
            </button>
          )}

          <div
            className="navbar__hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RxHamburgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;