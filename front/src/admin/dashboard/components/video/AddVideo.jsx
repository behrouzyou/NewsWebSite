import { useContext, useState } from "react";
import Dashboard from "../../Dashboard";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../../context/context";

// const validate = Yup.object({
//   file: Yup.object().required("ویدیو بارگزاری نشده است"),
// });

const AddVideo = () => {

  const [file, setFile] = useState({});
  const {createVideo}=useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      file: "",
    },
    onSubmit: (values) => {
      const data = {
        file: file,
      };
      createVideo(data)
    },
    // validationSchema: validate,
  });

  return (
    <Dashboard>
      <form onSubmit={formik.handleSubmit}>
        <div className="control">
          <div className="field pt-3">
            <label className="label">ویدیو خبری</label>
            <div className="file has-name is-boxed is-primary">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  onChange={(e)=>setFile(e.target.files[0])}

                />



                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label-text">انتخاب ویدیو</span>
                </span>
                <span className="file-name">هیچ ویدیو انتخاب نشده</span>
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="button is-success is-size-6 px-6 my-5">
          افزودن ویدیو
        </button>
      </form>
    </Dashboard>
  );
};

export default AddVideo;
