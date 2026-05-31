import Sidebar from "./components/sidebar/Sidebar";
import Information from "./components/information/Information";
import "./Index.css"

function Dashboard() {
  return (
    <>
      <div className="dashboard-wrapper">
        <Sidebar />
        <div className="main-info">
          <Information />
          <div className="main">
            <h1 className="is-size-3">به پنل مدیریت خوش آمدی</h1>
            <h3 className="is-size-5 mt-3">خوش خبر باشی</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
