import "./HomeWrapper.css";
import img from "../../../assets/images/1.jpeg";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../admin/context/context";
import { ClipLoader } from "react-spinners";
import moment, {  } from "jalali-moment";
const HomeWrapper = () => {
  const { video, loading, LoadVideo, lastNews, loadingLastNews, LoadLastNews } =
    useContext(AuthContext);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  useEffect(() => {
    LoadVideo();
    LoadLastNews();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="container">
        <div className="columns is-flex-widescreen is-block-tablet is-align-items-start">
          <div className="column is-one-quarter-widescreen is-full-desktop">
            <div className="right-side-post">
            {loadingLastNews ? (
                <ClipLoader
                  color="crimson"
                  loading={loadingLastNews}
                  cssOverride={override}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (lastNews && lastNews.map((news)=>{
                return (
                    <div className="right-side-top">
                <div className="right-side-img">
                  <div className="overlay"></div>
                  <img src={news.url} alt="" />
                </div>
                <div className="post-info">
                  <div className="post-cat">
                    <span>{news.title}</span>
                  </div>
                  <div className="post-title">{news.desc}</div>
                  <div className="post-date">{moment(news.createdAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</div>
                </div>
              </div>
                )
              })


              )}
              </div>

          </div>
          <div className="column is-three-quarters-widescreen is-full-tablet">
            <div className="post-left-side">
              {loading ? (
                <ClipLoader
                  color="crimson"
                  loading={loading}
                  cssOverride={override}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <video src={video} controls width="100%" height="100%"></video>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWrapper;
