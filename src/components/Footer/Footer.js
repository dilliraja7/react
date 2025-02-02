import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="text-center px-4 pt-5 pb-4">
          <Link to="/"><h1 className="fw-bold fs-1 Logo-text">LearnHub</h1></Link>
          <p className="fs-6 text-secondary py-2">
            © 2022 Tailwind Labs Inc. All rights reserved.
          </p>
          <div className="d-flex justify-content-center fw-semibold py-3">
            <Link to="/form" className="px-3 text-white">
              Form
            </Link>
            <div className="vr text-white"></div>
            <Link to="/" className="px-3 text-white">
              Notes
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
