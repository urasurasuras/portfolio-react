function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="small text-center text-muted">
          Copyright © 2023 - Uras Oran
        </div>
        <div className="small text-center text-muted">
          v{process.env.REACT_APP_VERSION}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
