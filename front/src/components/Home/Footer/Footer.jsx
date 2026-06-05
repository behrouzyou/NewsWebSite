import travel from "../../../assets/images/traveling.jpg"
import newsImg from "../../../assets/images/1.jpeg"
import logo from "../../../assets/images/logo.png"
import {Link} from "react-router-dom"
import "./footer.css"
const Footer = () => {
  return (
  <footer className="mt-6 pt-6 pb-6">
    <div className="container pt-6 pb-6">
      <div className="columns">
        <div className="column is-one-third">
          <img src={travel} width="270" alt="" />
        </div>
        <div className="column is-one-third">
          <h1 className="subtitle has-text-white mb-5">محبوب ترین خبرها</h1>
          <ul>
            <li className='mt-4'>
              <div className="post-footer is-flex is-align-items-center">
                <div className="post-footer-image">
                  <Link to="/">
                    <img src={newsImg} alt="" />
                  </Link>
                </div>
                <div className="post-footer-title pr-3">
                  <Link ti="/">
                    <h1>تست تایتل</h1>
                  </Link>
                  <h1 className='post-footer-name'>بهروز</h1>
                </div>

              </div>
            </li>
          </ul>
        </div>
        <div className="column is-one-third">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-desc pt-5">
            <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="footer-address pt-6">
            <p>
            ایران تهران ورامین سمت راست واحد ششم
            </p>
          </div>
          <div className="footer-phone pt-6">
            <p>
              تلفن : 09373007494
            </p>
          </div>
        </div>
      </div>
      <div className="columns mt-6 has-text-centered is-flex is-justify-content-center">
        <p>تمام حقوق مادی و معنوی سایت متعلق به خودمون میباشد.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
