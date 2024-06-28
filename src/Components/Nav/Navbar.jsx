import "./Navbar.css";
import Logo from "../../Assets/bloom-logo.png";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
      <div className="nav-wrapper flex space-between">
        <div className="space-between">
          <a href="/shops" className="logo flex">
            <img src={Logo} alt="Logo" className="img-logo" />
          </a>
        </div>
        <div className="space-between">
          <p className="btn">
            <Link
              to="/"
              style={{
                color: "rgb(255, 90, 95)",
                fontWeight: "bold",
                textDecoration: "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              Switch
            </Link>
          </p>
          <p className="btn">
            <Link
              to="/login"
              style={{
                color: "rgb(255, 90, 95)",
                fontWeight: "bold",
                textDecoration: "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              <MdLogout style={{ fontSize: "25px", fontWeight: "bold" }} />{" "}
              Logout
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
