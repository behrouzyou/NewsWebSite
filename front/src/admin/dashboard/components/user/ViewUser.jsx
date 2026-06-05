import { Link } from 'react-router-dom';
import Dashboard from '../../Dashboard';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import { useEffect } from 'react';

const ViewUser = () => {
    const {getAllUsers,allUser,deleteUser}=useContext(AuthContext)
    useEffect(() => {

      getAllUsers()
    }, []);
    return (
        <Dashboard>
            <div className="is-flex is-justify-content-end">
            <Link to='/add-user' className="button px-6 is-success mb-6">افزودن کاربر</Link>
        </div>
        <table className="table is-fullwidth">
            <thead>
                <tr>
                    <th>شماره</th>
                    <th>نام و نام خانوادگی</th>
                    <th>ایمیل</th>
                    <th>نقش</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                </tr>
            </thead>
            <tbody>
                {allUser && allUser.map((user,index)=>{
                    return(
                        <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "مدیر" : "نویسنده"}</td>
                    <td><Link state={{user}} to="/edit-user" className="button is-success">ویرایش</Link></td>
                    <td><button className="button is-danger" onClick={()=>deleteUser(user.id)}>حذف</button></td>
                </tr>
                    )
                })}
            </tbody>
        </table>
        </Dashboard>
    );
}

export default ViewUser;
