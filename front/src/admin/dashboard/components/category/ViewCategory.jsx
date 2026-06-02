import { Link } from "react-router-dom";
import Dashboard from "../../Dashboard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/context";


const ViewCategory = () => {
    const {getCategory,categoryList,deleteCategory} = useContext(AuthContext);
    useEffect(() => {

     getCategory()
    }, []);

    return (
       <Dashboard>
        <div className="is-flex is-justify-content-end">
            <Link to='/add-category' className="button px-6 is-success mb-6">افزودن دسته</Link>
        </div>
        <table className="table is-fullwidth">
            <thead >
                <tr>
                    <th>شماره</th>
                    <th>نام دسته</th>
                    <th>ویرایش</th>
                    <th>حذف</th>

                </tr>
            </thead>
            <tbody>
            {categoryList && categoryList.map((cat,index)=>{
                return(
                    <tr key={cat.id}>
                <td>{index + 1}</td>
                <td>{cat.name}</td>
                <td>
                    <Link to="/edit-category" state={{cat}} className="button is-info">ویرایش</Link>
                </td>
                <td>
                    <Link className="button is-danger" onClick={()=>deleteCategory(cat.id)}>حذف</Link>
                </td>
            </tr>
                )
            })}
            </tbody>
        </table>
    </Dashboard>
  )
}

export default ViewCategory;
