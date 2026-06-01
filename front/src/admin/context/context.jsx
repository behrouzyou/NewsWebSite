import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();
axios.defaults.withCredentials = true;

export const AuthContextProvider = ({ children }) => {
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(null);
  const [expire, setExpire] = useState("");

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
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const createNews=async (db) => {

      const formData=new FormData()
      formData.append("title",db.title);
      formData.append("desc",db.desc);
      formData.append("catId",db.catId);
      formData.append("userId",userId);
      formData.append("file",db.file);
      console.log(formData);
      try {
        const res=await axiosJWT.post("http://localhost:5000/api/news",formData,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
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
       navigate("/view-news")
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <AuthContext.Provider value={{ login, error, getAllUsers,axiosJWT,token,createNews }}>
      {children}
    </AuthContext.Provider>
  );
};
