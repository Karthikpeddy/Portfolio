import { Link } from "react-scroll";
function Navbar() {
  return (
    <header>
      <nav className="flex  flex-row space-x-4 ">
        <ul className="hidden md:flex ">
          <li className="mr-10">
            <button className="btn-primary">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </button>
          </li>
          <li className="mr-5">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="mr-5">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="mr-5">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
