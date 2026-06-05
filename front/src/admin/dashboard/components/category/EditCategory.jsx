import Dashboard from "../../Dashboard";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/context";
import { useLocation} from "react-router-dom";

const formSchema = Yup.object({
  name: Yup.string().required("انتخاب خبر الزامی است"),

});


const EditCategory = () => {
    const {state}=useLocation()
    const{updateCategory}=useContext(AuthContext)


   const formik = useFormik({
      initialValues: {
        name:state.cat.name,

      },
      onSubmit: (values) => {
          const data={
              name:values.name,

          }
          updateCategory(data,state.cat.id)
          console.log(data,state.cat.id);




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
              defaultValue={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
              placeholder="این عنوان است"
              type="text"
              className="input"
            />
            <p className="help has-text-danger">
              {formik.touched.name && formik.errors.name}
            </p>
          </div>
        </div>
        <div className="field mt-6">
          <div className="control">
            <button  className="button is-success px-6">دخیره</button>
          </div>
        </div>

      </form>
    </Dashboard>
    );
}

export default EditCategory;
