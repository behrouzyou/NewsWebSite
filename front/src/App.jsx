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
import Users from "./admin/dashboard/components/user/Users.jsx";
import ViewUser from "./admin/dashboard/components/user/ViewUser.jsx";
import EditUser from "./admin/dashboard/components/user/EditUser.jsx";
import { AuthContext } from "./admin/context/context.jsx";
import { useContext } from "react";
import EditProfile from "./admin/dashboard/components/user/EditProfile.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import Detail from "./pages/Detail.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  const { admin } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />










        <Route path="/administrator" element={<Login />} />
        <Route path="/dashboard" element={<Base />} />
        <Route path="/view-news" element={<ViewNews />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/edit-news/:id" element={<EditNews />} />
        <Route path="/view-category" element={<ViewCategory />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/edit-category" element={<EditCategory />} />
        <Route path="/view-video" element={<ViewVideo />} />
        <Route path="/add-video" element={<AddVideo />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        {admin && (
          <>
            <Route path="/add-user" element={<Users />} />
            <Route path="/view-user" element={<ViewUser />} />
            <Route path="/edit-user" element={<EditUser />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
