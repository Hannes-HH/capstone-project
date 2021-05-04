import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="Header">
      <h1>Movie APP</h1>
    </span>
  );
};

export default Header;
