import { Link } from "react-router-dom";
import "./information.css";
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
  );
}

export default Information;
