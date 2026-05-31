import "./Sidebar.css";
import logo from "../../../../../public/images/logo.png"
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo mb-5 has-text-centered">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
            <Link to="/dashboard">داشبورد</Link>
        </li>
        <li>
            <Link to="">اخبار</Link>
        </li>
        <li>
            <Link to="">دسته بندی</Link>
        </li>
        <li>
            <Link to="">ویدیو</Link>
        </li>
        <li>
            <Link to="">کاربران</Link>
        </li>
        <li>
            <Link to="">نظرات</Link>
        </li>
        <li>
            <Link to="">خروج</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
