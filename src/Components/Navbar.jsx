import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.module.css";
import Amenities from './Amenities';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg w-100">
      <div className="container-fluid">
        <a className="navbar-brand text-center" href="#">
          <img
            src="https://media.licdn.com/dms/image/D5603AQG2UVi3xWiXAA/profile-displayphoto-shrink_800_800/0/1680588517745?e=1721865600&v=beta&t=brjX-1E0XbTldOdR2a55gkwn9DpfISPhkBaUjSfETOg"
            alt="Logo"
            className="rounded-circle"
            height="55px"
            width="55px"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            borderColor: "#FFF",
          }}
        >
          <MenuIcon color="white" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-center align-items-center  m-auto  rounded-4 rounded-lg-5 mt-4 py-3 py-md-1 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link text secondary active " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-secondary" href="#">
                Rooms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-secondary" href={<Amenities />}>
                Amentities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-secondary" aria-disabled="true">
                Gallery
              </a>
            </li>
            <li className="nav-item d-lg-none d-xl-none">
              <a className="nav-link" href="#">
                <button className="btn btn-outline-dark me-2  text-secondary" type="button">
                  Contact Us
                </button>
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-light me-2 d-none d-lg-block d-xl-block shadow-sm  text-secondary"
          type="button"
        >
          Reserve Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
