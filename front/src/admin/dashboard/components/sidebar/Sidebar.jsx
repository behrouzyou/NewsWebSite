import "./Sidebar.css";
import logo from "../../../../../public/images/logo.png"
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useState } from "react";
=======
<<<<<<< HEAD
import { useState } from "react";
=======
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/context";
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
function Sidebar() {
    const[showNews,setShowNews]=useState()
    const[showCat,setShowCat]=useState()
    const [showVideo,setShowVideo]=useState()
    const[showUser,setShowUser]=useState()
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    const {admin}=useContext(AuthContext)
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {admin &&
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
        <li>
            <div onClick={()=>setShowUser(!showUser)}><span>کاربران</span></div>
            { showUser &&
               <ul>
                <li>
                    <Link style={{background:"white",}} to='/add-user'>افزودن کاربر </Link></li>
                   <li> <Link style={{background:"white"}} to='/view-user'>مشاهده کاربران </Link>
                </li>
            </ul>}
<<<<<<< HEAD
        </li>
=======
<<<<<<< HEAD
        </li>
=======
        </li>}
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
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
