import "./Sidebar.css";
import logo from "../../../../../public/images/logo.png"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/context";
function Sidebar() {
    const[showNews,setShowNews]=useState()
    const[showCat,setShowCat]=useState()
    const [showVideo,setShowVideo]=useState()
    const[showUser,setShowUser]=useState()
    const {admin}=useContext(AuthContext)

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
            <div onClick={()=>setShowNews(!showNews)}><span >اخبار</span></div>
            { showNews &&
               <ul>
                <li>
                    <Link style={{background:"white"}} to='/add-news'>افزودن خبر</Link></li>
                   <li> <Link style={{background:"white"}} to='/view-news'>مشاهده خبر</Link>
                </li>
            </ul>}

        </li>
        <li>
            <div onClick={()=>setShowCat(!showCat)}><span >دسته بندی</span></div>
            { showCat &&
               <ul>
                <li>
                    <Link style={{background:"white",}} to='/add-category'>افزودن دسته بندی</Link></li>
                   <li> <Link style={{background:"white"}} to='/view-category'>مشاهده دسته بندی</Link>
                </li>
            </ul>}

        </li>
        <li>
           <div onClick={()=>setShowVideo(!showVideo)}><span >ویدیو</span></div>
            { showVideo &&
               <ul>
                <li>
                    <Link style={{background:"white",}} to='/add-video'>افزودن ویدیو </Link></li>
                   <li> <Link style={{background:"white"}} to='/view-video'>مشاهده ویدیو </Link>
                </li>
            </ul>}
        </li>
        {admin &&
        <li>
            <div onClick={()=>setShowUser(!showUser)}><span>کاربران</span></div>
            { showUser &&
               <ul>
                <li>
                    <Link style={{background:"white",}} to='/add-user'>افزودن کاربر </Link></li>
                   <li> <Link style={{background:"white"}} to='/view-user'>مشاهده کاربران </Link>
                </li>
            </ul>}
        </li>}
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
