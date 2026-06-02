import "./index.css";
import "../node_modules/bulma/css/bulma.css";
import Login from "./admin/auth/Login";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import { ToastContainer } from "react-toastify";
import ViewNews from "./admin/dashboard/components/news/ViewNews.jsx";
import Base from "./admin/dashboard/components/main/Base.jsx";
import AddNews from "./admin/dashboard/components/news/AddNews.jsx";
import EditNews from "./admin/dashboard/components/news/EditNews.jsx";
import ViewCategory from "./admin/dashboard/components/category/ViewCategory.jsx";
import AddCategory from "./admin/dashboard/components/category/AddCategory.jsx";
import EditCategory from "./admin/dashboard/components/category/EditCategory.jsx";
import ViewVideo from "./admin/dashboard/components/video/ViewVideo.jsx";
import AddVideo from "./admin/dashboard/components/video/AddVideo.jsx";

function App() {
  return (
    <>

      <Routes>
        <Route path="/administrator" element={<Login />} />

        <Route path="/dashboard" element={<Base />} />
        <Route path="/view-news" element={<ViewNews />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/edit-news/:id" element={<EditNews />} />
        <Route path="/view-category" element={<ViewCategory />} />
        <Route path="/add-category" element={<AddCategory/>} />
        <Route path="/edit-category" element={<EditCategory/>} />
        <Route path="/view-video" element={<ViewVideo/>}/>
        <Route path="/add-video" element={<AddVideo/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer  />
    </>
  );
}

export default App;
