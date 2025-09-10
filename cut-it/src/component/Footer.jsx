function Footer() {
  return (
    <footer
      className="mt-5 bg-body-tertiary text-center text-lg-start"
      style={{ position: "fixed", width: "100%", left: "0", bottom: "0" }}
    >
      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 1)", color: "white" }}
      >
        © 2024 Copyright:
        <a
          className="text-white text-decoration-none"
          href="https://github.com/AwaizSayed"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Click here Github(Awaiz Sayed)
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
