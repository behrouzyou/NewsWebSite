import { Link } from "react-router-dom"
import Dashboard from "../../Dashboard"
import './news.css'
import { useContext,useEffect, useState} from "react"
import { AuthContext } from "../../../context/context"

const ViewNews=()=> {
 const{handleNews,news,deleteNews}=useContext(AuthContext)




useEffect(() => {
   handleNews()

 }, []);


  return (
    <Dashboard>
        <div className="is-flex is-justify-content-end">
            <Link to='/add-news' className="button px-6 is-success mb-6">افزودن خبر</Link>
        </div>
        <table className="table is-fullwidth">
            <thead >
                <tr>
                    <th>شماره</th>
                    <th>عنوان</th>
                    <th>تصویر</th>
                    <th>نویسنده</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                </tr>
            </thead>
            <tbody>
                {
                   news && news.map((nw,index)=>{
                    return(
                         <tr key={nw.id}>
                    <td>{index + 1}</td>
                    <td>{nw.title}</td>
                    <td><img src={nw.url} alt="" width='100'/></td>
                    <td>{nw.user.name}</td>
                    <td>
                        <Link to={`/edit-news/${nw.id}`} className="button is-success " state={{title:nw.title,desc:nw.desc,image:nw.url,name:nw.id,catId:nw.catId}} >ویرایش</Link>
                    </td>
                    <td><button onClick={()=>deleteNews(nw.id)} className="button is-danger">حذف</button></td>
                </tr>
                    )
                   })
                }
            </tbody>
        </table>
    </Dashboard>
  )
}

export default ViewNews
