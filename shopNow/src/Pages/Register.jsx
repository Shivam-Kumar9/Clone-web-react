import { useState, useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { AuthData } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import './css/register.css';

function Register() {
  const navigate = useNavigate();
  const { userData, setUserData, setToken } = useContext(AuthData);
  
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!user.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (user.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!user.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Check if user already exists
      const userExists = userData?.some(
        existingUser => 
          existingUser.name === user.name || existingUser.email === user.email
      );
      
      if (userExists) {
        showNotification('User with this name or email already exists', 'error');
        setIsSubmitting(false);
        return;
      }
      
      // Create new user
      const newUser = { ...user, cart: [] };
      const updatedUserData = [...(userData || []), newUser];
      
      setUserData(updatedUserData);
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      
      showNotification('Account created successfully!', 'success');
      
      // Reset form
      setUser({ name: '', email: '', password: '' });
      
      // Navigate to login after short delay
      setTimeout(() => {
        navigate('/login');
      }, 1500);
      
    } catch (error) {
      showNotification('Something went wrong. Please try again.', 'error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">Create Account</h2>
          
          {notification && (
            <div className={`notification notification-${notification.type}`}>
              {notification.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={user.name}
                onChange={handleInputChange}
                className={`form-input ${errors.name ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={user.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password (min. 6 characters)"
                  value={user.password}
                  onChange={handleInputChange}
                  className={`form-input password-input ${errors.password ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isSubmitting}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Gender</label>
              <div className="radio-group">
                <label className={`radio-option ${errors.gender ? 'error' : ''}`}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={user.gender === 'male'}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-label">Male</span>
                </label>
                
                <label className={`radio-option ${errors.gender ? 'error' : ''}`}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={user.gender === 'female'}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-label">Female</span>
                </label>
                
                <label className={`radio-option ${errors.gender ? 'error' : ''}`}>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={user.gender === 'other'}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-label">Other</span>
                </label>
              </div>
              {errors.gender && <span className="error-message">{errors.gender}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="login-link">
            <p>Already have an account? 
              <button 
                type="button" 
                className="link-btn" 
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;