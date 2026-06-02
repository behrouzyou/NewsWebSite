import Dashboard from "../../Dashboard";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";

const formSchema = Yup.object({
  name: Yup.string().required("انتخاب خبر الزامی است"),

});
const AddCategory = () => {
    const{createCategory}=useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
          name: "",

        },
        onSubmit: (values) => {
            const data={
                name:values.name}
                createCategory(data)

        },
        validationSchema: formSchema,
      });
  return (
    <Dashboard>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="" className="label">
            نام دسته بندی
          </label>
          <div className="control">
            <input  onChange={formik.handleChange("name")} onBlur={formik.handleBlur("name")} type="text" className="input" placeholder="مثال سیاسی" />
           <p className="has-text-danger help">{
            formik.touched.name && formik.errors.name
           }</p>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-success px-6" type="">
              ذخیره
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default AddCategory;
