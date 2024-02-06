import { CarWidget } from "../carwidget/CarWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h2 className="logo">Fandom Storage</h2>
      <ul className="navbar">
        <li className="home">Home</li>
        <li className="products">Products</li>
        <li className="services">Services</li>
        <li className="galery">Galery</li>
      </ul>
      <div className="cart">
        <CarWidget />
        <h5 className="count">1</h5>
      </div>
    </div>
  );
};
