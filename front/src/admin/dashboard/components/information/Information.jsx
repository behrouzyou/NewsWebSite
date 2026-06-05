import { Link } from "react-router-dom";
import "./information.css";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c4f0310 (upload)
import profile from "../../../../../public/images/beh.png"
import { BsChatDots, BsFillCapslockFill, BsFillPersonFill } from "react-icons/bs";

function Information() {
  return (
    <div className="information">
      <div className="view-web is-flex is-align-items-center is-justify-content-space-between">
        <div className="view-webpage">
          <a className="button has-background-success has-text-white" href="/">مشاهده وب سایت</a>
        </div>
        <div className="view-profile">
          <span>
            <Link to="/">
                <img src={profile} alt="" className="image profile-photo"/>
<<<<<<< HEAD
=======
=======
import profiles from "../../../../../public/images/beh.png"
import { BsChatDots, BsFillCapslockFill, BsFillPersonFill } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/context";

function Information() {
    const {userProfile,getProfile}=useContext(AuthContext)
    useEffect(() => {

        getProfile()


    }, []);

  return (
    <>

    <div className="information">
      <div className="view-web is-flex is-align-items-center is-justify-content-space-between">
        <div className="view-webpage">
          <Link className="button has-background-success has-text-white mt-6 mb-0" to="/">مشاهده وب سایت</Link>
        </div>
        <div className="view-profile mb-6">
          <span>
            <Link to="/edit-profile" state={userProfile}>
                <img src={profiles} alt="" className="image profile-photo" style={{position:"relative"}}/>
                <span className="button has-background-success has-text-white" style={{position:"absolute",top:"105px",left:"165px"}} >ویرایش کاربر:  {userProfile.name} </span>
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
            </Link>
          </span>
        </div></div>
        <div className="info">
        <div className="info-item">
            <h4>خبرها</h4>
            <span>16</span>
            <BsFillCapslockFill/>
        </div>
        <div className="info-item">
            <h4>کاربران</h4>
            <span>16</span>
            <BsFillPersonFill/>
        </div>
        <div className="info-item">
            <h4>نظرات</h4>
            <span>16</span>
            <BsChatDots/>
        </div>

        </div>

    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    </>
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
  );
}

export default Information;
