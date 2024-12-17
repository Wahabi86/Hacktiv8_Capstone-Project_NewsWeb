import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [searchNews, setSearchNews] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // mencegah halaman relod setelah melakukan searching
    if (searchNews.trim()) {
      navigate(`/search/${encodeURIComponent(searchNews)}`);
      setSearchNews(""); // untuk mengosongkan search setelah melakukan searching
    }
  };
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark p-0">
        <div className="container">
          <Link className="navbar-brand text-white px-3 mt-2 d-flex align-items-center" to="/">
            <h3><span>N</span>EWS</h3>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row align-items-center">
              <li className="nav-item">
                <Link className="nav-link text-white px-3 d-flex align-items-center" to="/" style={{ backgroundColor: "#c62e2e", height: "60px" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-2 d-flex align-items-center" to="/indonesia">
                  Indonesia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-2 d-flex align-items-center" to="/programming">
                  Programming
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-2 d-flex align-items-center" to="/saved">
                  Saved
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input className="form-control me-2 rounded-pill" type="search" placeholder="Search..." aria-label="Search" value={searchNews} onChange={(e) => setSearchNews(e.target.value)} />
              <button className="btn btn-outline-light rounded-circle" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
