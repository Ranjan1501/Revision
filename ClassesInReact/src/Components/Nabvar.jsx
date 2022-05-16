import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div style={{ margin: "20px" }}>
      <Link to="/" style={{ margin: "20px" }}>
        Greeting{" "}
      </Link>
      <Link to="/clock" style={{ margin: "20px" }}>
        {" "}
        Clock
      </Link>
      <Link to="/timer" style={{ margin: "20px" }}>
        {" "}
        Timer
      </Link>
    </div>
  );
};
