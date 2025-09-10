import { react } from "react";

function Navbar() {
  return (
    <>
      {/* <!-- As a link --> */}
      <nav className="navbar bg-white shadow-sm ">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Cut-It(make your URL short)
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
