import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();
axios.defaults.withCredentials = true;

export const AuthContextProvider = ({ children }) => {
  const [error, setError] = useState("");

const[name,setName]=useState("")
const[userId,setUserId]=useState("")
const[token,setToken]=useState("")
const[admin,setAdmin]=useState(null)


  const navigate = useNavigate();

  const login = async (input) => {
    try {
      const res = await axios.post(
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
        setName(res.data.name)
        setUserId(res.data.userId)
        setAdmin(res.data.isAdmin)
        setToken(res.data.accessToken)
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ login,error }}>{children}</AuthContext.Provider>
  );
};
