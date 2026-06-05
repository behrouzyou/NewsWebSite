import { useLocation } from "react-router-dom";
import Dashboard from "../../Dashboard";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";
import { Link } from "react-router-dom";

const formSchema = Yup.object({
  name: Yup.string().required("انتخاب نام الزامی است"),
  email: Yup.string()
    .required("ایمیل وارد نشده است")
    .email("فرمت ایمیل نادرست است"),
  password: Yup.string().required("انتخاب پسورد الزامی است"),
  confirmPassword: Yup.string()
    .required('تکرار رمز عبور الزامی است')
    .oneOf([Yup.ref('password')], 'رمز عبور و تکرار آن یکسان نیستند'),

});


const EditUser = () => {
    const{state}=useLocation()
    const{updateUser}=useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            id:state.user.id,
          name:state.user.name,
          email:state.user.email,
          password:state.user.password,
          confirmPassword:state.user.confirmPassword,
          role:state.user.name,
        },
        onSubmit: (values) => {
          const data = {
            id:values.id,
            name: values.name,
            email: values.email,
            password: values.password,
            confirmPassword:values.confirmPassword,
            role:values.role
          };
         updateUser(data);

        },
        validationSchema: formSchema,
      });
  return (
      <Dashboard>
    <div className="is-flex is-justify-content-end">
            <Link to='/view-user' className="button px-6 is-success mb-6">مشاهده کاربر</Link>
        </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label className="label"> نام و نام خانوادگی</label>
          <div className="control">
            <input
              type="text"
              className="input" defaultValue={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
            />
            <p className="help has-text-danger">{formik.touched.name && formik.errors.name}</p>
          </div>
        </div>
        <div className="field">
          <label className="label"> ایمیل</label>
          <div className="control">
            <input
              type="text"
              className="input" defaultValue={formik.values.email}
              placeholder="example@gmail.com"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            <p className="help has-text-danger">{formik.touched.email && formik.errors.email}</p>
          </div>
        </div>
        <div className="field">
          <label className="label"> پسورد</label>
          <div className="control">
            <input
              type="text"
              className="input"
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
            />
            <p className="help has-text-danger">{formik.touched.password && formik.errors.password}</p>
          </div>
        </div>
        <div className="field">
          <label className="label"> تکرار پسورد</label>
          <div className="control">
            <input
              type="text"
              className="input"
              onChange={formik.handleChange("confirmPassword")}
              onBlur={formik.handleBlur("confirmPassword")}
            />
            <p className="help has-text-danger">{formik.touched.confirmPassword && formik.errors.confirmPassword}</p>
          </div>
        </div>
        <div className="field">
          <label className="label"> نقش</label>
          <div className="select is-fullwidth">
            <select
              onChange={formik.handleChange("role")}
              onBlur={formik.handleBlur("role")}
            >

              <option defaultValue={formik.values.role}>انتخاب کنید</option>
              <option value="0">نویسنده</option>
              <option value="1"> مدیر</option>
            </select>
             <p className="help has-text-danger">{formik.touched.role && formik.errors.role}</p>
          </div>
        </div>
        <div className="field mt-6">
          <div className="control">
            <button className="button is-success px-6" type="submit">دخیره</button>
          </div>
        </div>
      </form>
    </Dashboard>
  )
};

export default EditUser;
