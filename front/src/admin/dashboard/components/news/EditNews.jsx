import Dashboard from "../../Dashboard";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/context";
import { useLocation} from "react-router-dom";

const formSchema = Yup.object({
  title: Yup.string().required("انتخاب خبر الزامی است"),
  desc: Yup.string().required("انتخاب متن خبر الزامی است"),
  catId: Yup.string().required("انتخاب دسته بندی خبر الزامی است"),
});




const EditNews = () => {
    const location=useLocation()
    const stat=location.state





    const { axiosJWT, token,EditNews} = useContext(AuthContext);
  const [categoryList, setCategoryList] = useState([]);
  const [file, setFile] = useState([]);
  const [preview, setPreview] = useState("");

   const loadImage = (e) => {
    const image = e.target.files[0];
    console.log(image);
    setFile(image);
    setPreview(URL.createObjectURL(image));

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
  useEffect(() => {

    getCategory();

  }, []);

   const formik = useFormik({
      initialValues: {
        title: stat.title,
        desc: stat.desc,
        catId:stat.catId,
        file: stat.image,
      },
      onSubmit: (values) => {
          const data={
              title:values.title,
              desc:values.desc,
              catId:values.catId,
              file:file
          }
        EditNews(data,stat.name);

      },
      validationSchema: formSchema,
    });

    return (
         <Dashboard>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label className="label">عنوان خبر</label>
          <div className="control">
            <input
              defaultValue={formik.values.title}
              onChange={formik.handleChange("title")}
              onBlur={formik.handleBlur("title")}
              placeholder="این عنوان است"
              type="text"
              className="input"
            />
            <p className="help has-text-danger">
              {formik.touched.title && formik.errors.title}
            </p>
          </div>
        </div>
        <div className="field">
          <label className="label">متن خبر</label>
          <div className="control">
            <textarea
              defaultValue={formik.values.desc}
              onChange={formik.handleChange("desc")}
              onBlur={formik.handleBlur("desc")}
              placeholder="این متن است"
              className="textarea"
            ></textarea>
            <p className="help has-text-danger">
              {formik.touched.desc && formik.errors.desc}
            </p>
          </div>
        </div>
        <div className="field ">
          <label className="label">دسته بندی خبر</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                defaultValue={formik.values.catId}
                onChange={formik.handleChange("catId")}
                onBlur={formik.handleBlur("catId")}
              >
                <option>انتخاب کنید</option>
                {categoryList &&
                  categoryList.map((cat) => {
                    return (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
              </select>
              <p className="help has-text-danger">
                {formik.touched.catId && formik.errors.catId}
              </p>
            </div>
          </div>
        </div>
        <div className="field pt-3">
          <label className="label">تصاویر خبر</label>
          <div className="file has-name is-boxed is-primary">
            <label className="file-label">
              <input className="file-input" type="file" onChange={loadImage}  />

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
                <span className="file-label-text">تعغییر تصویر</span>
              </span>
              <span className="file-name">هیچ تصویری انتخاب نشده</span>
            </label>
          </div>
        </div>
        <div className="field mt-6">
          <div className="control">
            <button   className="button is-success px-6">دخیره</button>
          </div>
        </div>
      </form>
    </Dashboard>
    );
}

export default EditNews;
