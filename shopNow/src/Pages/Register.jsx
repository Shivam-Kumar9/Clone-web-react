import './css/register.css';
import { useState, useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { AuthData } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const { userData, setUserData, setToken } = useContext(AuthData);
  const [user, setUser] = useState({ name: '', email: '', password: '', gender: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password || !user.gender) {
      alert('Please fill all the details');
      return;
    }

    const userExists = userData?.some((existingUser) => 
      existingUser.name === user.name || existingUser.email === user.email
    );

    if (userExists) {
      alert('User already exists');
      return;
    }

    const newUser = { ...user, cart: [] };
    setUserData((prev) => [...prev, newUser]);
    localStorage.setItem('userData', JSON.stringify([...userData, newUser]));
    setToken(user.name); // Consider more secure token handling
    alert('Registered Successfully');
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <h2 className="register-title">Create Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={user.password}
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3498db"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {showPassword ? (
                    <>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  ) : (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M14.06 14.06A10.07 10.07 0 0 1 12 4c-7 0-11 8-11 8a18.45 18.45 0 0 1 5.06 5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <path d="M1 1l22 22" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={user.gender === 'male'}
                  onChange={handleChange}
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={user.gender === 'female'}
                  onChange={handleChange}
                  required
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={user.gender === 'other'}
                  onChange={handleChange}
                  required
                />
                Other
              </label>
            </div>
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")}>Login</button>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Register;