import "./Header.css";
import logo from "../Qterview-001.png";

function Header() {
  return (
    <div className="Header">
      <img alt="로고" src={logo}></img>
      <form>
        <input type="search" placeholder="Search..."></input>
      </form>
    </div>
  );
}

export default Header;
