import { Link } from "react-router-dom";
import Dashboard from "../../Dashboard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/context";

const ViewVideo = () => {
    const{videoList,getAllVideo,deleteVideo}=useContext(AuthContext)
    useEffect(() => {
         getAllVideo()


    }, []);


  return (
    <Dashboard>
      <div className="is-flex is-justify-content-end">
        <Link to="/add-video" className="button px-6 is-success mb-6">
          افزودن ویدیو
        </Link>
      </div>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>شماره</th>
            <th>عنوان ویدیو</th>
            <th>ویدیو</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {videoList && videoList.map((video,index)=>{
            return(
                <tr key={video.id}>
            <td>{index + 1}</td>
            <td>{video.video}</td>
            <td><video src={video.url} width="500" controls></video></td>
            <td>
              <button className="button is-danger" onClick={()=>deleteVideo(video.id)}>حذف</button>
            </td>
          </tr>
            )
          })}
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewVideo;
