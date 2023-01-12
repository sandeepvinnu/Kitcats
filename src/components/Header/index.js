import { Link, withRouter, Redirect } from "react-router-dom";

import "./index.css";

const Header = (props) => {
  const onClickCreateAccount = () => {
    <Redirect to="login" />;
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img className="website-logo" src="#" alt="website logo" />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img src="#" alt="nav logout" className="nav-bar-img" />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img className="website-logo" src="#" alt="website logo" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/doctors" className="nav-link">
                Doctors
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="create-account-desktop-btn"
            onClick={onClickCreateAccount}
          >
            Create Your Account
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img src="#" alt="nav home" className="nav-bar-img" />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/services" className="nav-link">
              <img src="#" alt="nav services" className="nav-bar-img" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/doctors" className="nav-link">
              <img src="#" alt="nav doctors" className="nav-bar-img" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
