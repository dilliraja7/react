import './Header.css';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border border-2 border-white py-3 px-3 mx-auto">
      <div className="d-flex flex-row justify-content-between">
        <div className="">
          <Link aria-current="page" to="/" className="Logo-link">
            <h4 className="Logo-text m-0 fw-bold">LearnHub</h4>
          </Link>
        </div>
        <Link aria-label="admin-page" to="/form" className="m-0">
          <button className="btn rounded px-2 py-1 text-white"> Admin</button>
        </Link>
      </div>
    </header>
  );
}
