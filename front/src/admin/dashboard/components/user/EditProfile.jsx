import { useLocation } from "react-router-dom";
import Dashboard from "../../Dashboard";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/context";
import { Link } from "react-router-dom";

const formSchema = Yup.object({
  name: Yup.string().required("انتخاب نام الزامی است"),
  password: Yup.string().required("انتخاب پسورد الزامی است"),
  confirmPassword: Yup.string()
    .required('تکرار رمز عبور الزامی است')
    .oneOf([Yup.ref('password')], 'رمز عبور و تکرار آن یکسان نیستند'),

});

const EditProfile = () => {
    const{state}=useLocation()

    const{updateProfile}=useContext(AuthContext)
    const [file, setFile] = useState([]);
     const [preview, setPreview] = useState("");

      const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
      };


    const formik = useFormik({
        initialValues: {
         id:state.id,
          name:state.name,
          password:"",
          confirmPassword:"",
          file:""

        },
        onSubmit: (values) => {
          const data = {
            id:values.id,
            name: values.name,
            password: values.password,
            confirmPassword:values.confirmPassword,
            file:file

          };
         updateProfile(data)


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
        <div className="field pt-3">
          <label className="label">ویرایش تصویر</label>
          <div className="file has-name is-boxed is-primary">
            <label className="file-label">
              <input className="file-input" type="file" onChange={loadImage} />
              {preview ? (
                <figure className="mt-3">
                  <img src={preview} alt="" width="250" />
                </figure>
              ) : (
                ""
              )}
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label-text">انتخاب تصویر</span>
              </span>
              <span className="file-name">هیچ تصویری انتخاب نشده</span>
            </label>
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


export default EditProfile;
