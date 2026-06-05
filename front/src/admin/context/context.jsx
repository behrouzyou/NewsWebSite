import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import swal from "sweetalert";

export const AuthContext = createContext();
axios.defaults.withCredentials = true;

export const AuthContextProvider = ({ children }) => {
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(null);
  const [expire, setExpire] = useState("");
  const [allUser, setAllUser] = useState([]);
  const [news, setNews] = useState([]);
<<<<<<< HEAD
  const[videoList,setVideoList]=useState([])
=======
<<<<<<< HEAD
  const[videoList,setVideoList]=useState([])
=======
  const [videoList, setVideoList] = useState([]);
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
  const [categoryList, setCategoryList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    refreshToken();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axiosJWT.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setUserId(decoded.userId);
      setAdmin(decoded.isAdmin);
      setExpire(decoded.exp);
    } catch (error) {
      console.log(error);
    }
  };
  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 100 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setUserId(decoded.userId);
        setAdmin(decoded.isAdmin);
        setExpire(decoded.exp);
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  const login = async (input) => {
    try {
      const res = await axiosJWT.post(
        "http://localhost:5000/api/users/login",
        input,
      );
      if (res.data.error) {
        setError(res.data.error);
      } else {
        navigate("/dashboard");
        toast.success("خوش آمدید!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setName(res.data.name);
        setUserId(res.data.userId);
        setAdmin(res.data.isAdmin);
        setToken(res.data.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllUsers = async () => {
    try {
      const res = await axiosJWT.get("http://localhost:5000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
<<<<<<< HEAD
      setAllUser(res.data)

=======
<<<<<<< HEAD
      setAllUser(res.data)

=======
      setAllUser(res.data);
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
    } catch (error) {
      console.log(error);
    }
  };
<<<<<<< HEAD
  const Register=async (db) => {
    const formData=new FormData()
=======
<<<<<<< HEAD
  const Register=async (db) => {
    const formData=new FormData()
=======
  const [userProfile, setUserProfile] = useState([]);
  const getProfile = async () => {
    try {
      const res = await axiosJWT.get(
        "http://localhost:5000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setUserProfile(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateProfile = async (db) => {
    const formData = new FormData();
    formData.append("name", db.name);
    formData.append("password", db.password);
    formData.append("confPassword", db.confirmPassword);
    formData.append("id", db.id);
    formData.append("file", db.file);

    try {
      const res = await axiosJWT.put(
        `http://localhost:5000/api/users/profile/${db.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res.data.msg) {
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/view-user");
      } else {
        toast.error(res.data, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   const [avatar,setAvatar]=useState([])
  //   const profile=async () => {
  //  try {
  //     const res= await axiosJWT.get("http:localhost:5000/api/users/profile",{
  //         headers:{
  //             Authorization:`Bearer ${token}`
  //         }
  //     })
  //     setAvatar(res.data)
  //     console.log(res.data.url);
  //     if (res.data.msg) {
  //         toast.success(res.data.msg, {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: false,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });
  //         navigate("/view-user");
  //       } else {
  //         toast.error(res.data, {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: false,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });
  //     }}
  //   catch (error) {
  //        console.log(error);
  //  }
  //   }

  const Register = async (db) => {
    const formData = new FormData();
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
    formData.append("name", db.name);
    formData.append("email", db.email);
    formData.append("password", db.password);
    formData.append("confirmPassword", db.confirmPassword);
    formData.append("isAdmin", db.role);
    formData.append("userId", userId);
    try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c4f0310 (upload)
     const res=await axiosJWT.post("http://localhost:5000/api/users/register",formData,{
        headers:{
            Authorization:`Bearer ${token}`
        }
     })

      if(res.data.message){
        toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
        navigate("/view-user");}
        else{
            toast.error(res.data, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }}

     catch (error) {
        console.log(error);
    }

  }
<<<<<<< HEAD
=======
=======
      const res = await axiosJWT.post(
        "http://localhost:5000/api/users/register",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.message) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/view-user");
      } else {
        toast.error(res.data, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
  const createNews = async (db) => {
    const formData = new FormData();
    formData.append("title", db.title);
    formData.append("desc", db.desc);
    formData.append("catId", db.catId);
    formData.append("userId", userId);
    formData.append("file", db.file);

    try {
      const res = await axiosJWT.post(
        "http://localhost:5000/api/news",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/view-news");
    } catch (error) {
      console.log(error);
    }
  };
  const createCategory = async (cat) => {
    const formData = new FormData();
    formData.append("name", cat.name);
    formData.append("userId", userId);

    try {
      const res = await axiosJWT.post(
        "http://localhost:5000/api/create-category",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/view-category");
    } catch (error) {
      console.log(error);
    }
  };
  const createVideo = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("userId", userId);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/create-video",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c4f0310 (upload)
      if(res.data.msg){
        toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
        navigate("/view-video");}else{
            toast.error(res.data.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
        }
<<<<<<< HEAD
=======
=======
      if (res.data.msg) {
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/view-video");
      } else {
        toast.error(res.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const res = await axiosJWT.get("http://localhost:5000/api/get-category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategoryList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c4f0310 (upload)
  const getAllVideo=async () => {
    try {
        const res=await axiosJWT.get("http://localhost:5000/api/get-video",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        setVideoList(res.data)

    } catch (error) {
        console.log(error);
    }

  }
<<<<<<< HEAD
=======
=======
  const getAllVideo = async () => {
    try {
      const res = await axiosJWT.get("http://localhost:5000/api/get-video", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVideoList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)

  //    const singleNews=async (id) => {

  //     try {
  //             const res=await axiosJWT.get(`http://localhost:5000/api/news/${id}`,{
  //                 headers:{
  //                     Authorization:`Bearer ${token}`
  //                 }
  //             })

  //     } catch (error) {
  //         console.log(error);
  //     }

  //    }
  const EditNews = async (db, id) => {
    const formData = new FormData();
    formData.append("title", db.title);
    formData.append("desc", db.desc);
    formData.append("catId", db.catId);
    formData.append("userId", userId);
    formData.append("file", db.file);
    console.log(formData);
    console.log();
    try {
      const res = await axiosJWT.put(
        `http://localhost:5000/api/news/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/view-news");
    } catch (error) {
      console.log(error);
    }
  };
  const updateCategory = async (db, id) => {
    const formData = new FormData();
    formData.append("name", db.name);
    formData.append("id", db.id);
    formData.append("userId", userId);
    console.log(formData);
    try {
      const res = await axiosJWT.put(
        `http://localhost:5000/api/update-category/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(res.data, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/view-category");
    } catch (error) {
      console.log(error);
    }
  };
<<<<<<< HEAD
  const updateUser=async (db) => {
    const formData=new FormData()
    formData.append("id",db.id)
=======
<<<<<<< HEAD
  const updateUser=async (db) => {
    const formData=new FormData()
    formData.append("id",db.id)
=======
  const updateUser = async (db) => {
    const formData = new FormData();
    formData.append("id", db.id);
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
    formData.append("name", db.name);
    formData.append("email", db.email);
    formData.append("password", db.password);
    formData.append("confirmPassword", db.confirmPassword);
    formData.append("isAdmin", db.role);
    formData.append("userId", userId);
    try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c4f0310 (upload)
     const res=await axiosJWT.put(`http://localhost:5000/api/users/${db.id}`, formData,{
        headers:{
            Authorization:`Bearer ${token}`
        }
     })
     console.log(res);
     if(res.data.message){
        toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
        navigate("/view-user");}else{
            toast.error(res.data.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });}
    } catch (error) {
           console.log(error);
    }

  }
<<<<<<< HEAD
=======
=======
      const res = await axiosJWT.put(
        `http://localhost:5000/api/users/${db.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(res);
      if (res.data.message) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/view-user");
      } else {
        toast.error(res.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)

  const handleNews = async () => {
    try {
      const res = await axiosJWT.get("http://localhost:5000/api/news", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  //                  DELETE METHOD

>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
  const deleteNews = async (id) => {
    const willDelete = await swal({
      title: "حذف کردن",
      text: "آیا از حذف خبر اطمینان دارید",
      icon: "warning",
      buttons: ["انصراف", "حذف"],
      dangerMode: true,
    });

    if (willDelete) {
      try {
        const res = await axiosJWT.delete(
          `http://localhost:5000/api/news/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        swal(res.data.msg, "success");
        handleNews();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteCategory = async (id) => {
    const willDelete = await swal({
      title: "حذف کردن",
      text: "آیا از حذف دسته اطمینان دارید",
      icon: "warning",
      buttons: ["انصراف", "حذف"],
      dangerMode: true,
    });

    if (willDelete) {
      try {
        const res = await axiosJWT.delete(
          `http://localhost:5000/api/delete-category/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        getCategory();
        swal(res.data.msg, "success");
      } catch (error) {
        console.log(error);
      }
    }
  };
<<<<<<< HEAD
  const deleteVideo=async (id) => {
     const willDelete = await swal({
=======
<<<<<<< HEAD
  const deleteVideo=async (id) => {
     const willDelete = await swal({
=======
  const deleteVideo = async (id) => {
    const willDelete = await swal({
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
      title: "حذف کردن",
      text: "آیا از حذف ویدیو اطمینان دارید",
      icon: "warning",
      buttons: ["انصراف", "حذف"],
      dangerMode: true,
    });

    if (willDelete) {
      try {
        const res = await axiosJWT.delete(
          `http://localhost:5000/api/delete-video/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        swal(res.data.msg, "success");
<<<<<<< HEAD
        getAllVideo()
=======
<<<<<<< HEAD
        getAllVideo()
=======
        getAllVideo();
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
      } catch (error) {
        console.log(error);
      }
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c4f0310 (upload)


  }
  const deleteUser=async (id) => {
<<<<<<< HEAD
=======
=======
  };
  const deleteUser = async (id) => {
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
    const willDelete = await swal({
      title: "حذف کردن",
      text: "آیا از حذف ویدیو اطمینان دارید",
      icon: "warning",
      buttons: ["انصراف", "حذف"],
      dangerMode: true,
    });

    if (willDelete) {
      try {
        const res = await axiosJWT.delete(
          `http://localhost:5000/api/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        swal(res.data.message, "success");
<<<<<<< HEAD
        getAllUsers()
=======
<<<<<<< HEAD
        getAllUsers()
=======
        getAllUsers();
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
      } catch (error) {
        console.log(error);
      }
    }
<<<<<<< HEAD


  }
=======
<<<<<<< HEAD


  }
=======
  };

  //        HOME PAGE
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);
  const LoadVideo = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/single-video");

      if (res.data) {
        setVideo(res.data.url);
        setLoading(false);
      } else {
        toast.error(res.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

   const [lastNews, setLastNews] = useState([]);
  const [loadingLastNews, setLoadingLastNews] = useState(false);
  const LoadLastNews = async () => {
    try {
      setLoadingLastNews(true);
      const res = await axios.get("http://localhost:5000/api/news/lastnews");
   

      if (res.data) {
        setLastNews(res.data);
        setLoadingLastNews(false);
      } else {
        toast.error(res.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)

  return (
    <AuthContext.Provider
      value={{
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        lastNews,
        loadingLastNews,
        LoadLastNews,
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
        deleteUser,
        login,
        error,
        getAllUsers,
        axiosJWT,
        token,
        createNews,
        handleNews,
        news,
        deleteNews,
        EditNews,
        createCategory,
        categoryList,
        getCategory,
        deleteCategory,
        updateCategory,
        createVideo,
        getAllVideo,
        videoList,
        deleteVideo,
        Register,
        allUser,
<<<<<<< HEAD
        updateUser
=======
<<<<<<< HEAD
        updateUser
=======
        updateUser,
        admin,
        userProfile,
        getProfile,
        updateProfile,
        video,
        loading,
        LoadVideo,
>>>>>>> d5cc3fe (landing page Create(navbar,top side,news, video news)CRUD)
>>>>>>> c4f0310 (upload)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
