import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navigation">
        <Link
          to={{
            pathname: `/products`,
          }}
          style={{ textDecoration: "none" }}
        >
          <h2 className="link">Product list page</h2>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
