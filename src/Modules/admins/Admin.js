import React, { useState, useEffect } from 'react';
import { getAdmins, deleteAdmin } from "../server/Server";
import { Link } from 'react-router-dom';


const Admin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const[admins, setAdmins] = useState([]);

    const userDelete = (id) => {
        if(user.id === id) {
            alert('You can not delete yourself')
            return;
        }
        if(!window.confirm('Are you sure?')) return;
        deleteAdmin(id).then( data => {
            fetchData();
        }).catch( error => {
            alert(error)
        })
    }
    
    
    useEffect( () =>{
        fetchData();
    },[])

    const fetchData = () => {
        getAdmins().then( data => {
            console.log('response',data);
            setAdmins(data.admins);
        });
    }

    return (
     <div className="content-wrapper">
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>Admin User Listing</h1>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Admins</li>
                </ol>
                </div>
            </div>
            </div>
        </section>

        <section className="content">
            <div className="container-fluid">
                <div className="row">
            
                <div className="col-md-12">
                    <div className="card">
                    <div className="card-header">
                        <div className="card-tools">
                        <ul className="pagination pagination-sm float-right">
                            <li className="page-item"><a className="page-link" href="#">«</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">»</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <table className="table">
                        <thead>
                            <tr>
                                <th style={{width: 10}}>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            admins.map((admin,i)=>{
                            return <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{admin.name}</td>
                                        <td>{admin.email}</td>
                                        <td>{admin.mobile?admin.mobile:'-'}</td>
                                        <td>
                                            <img src={admin.image?admin.image:'#'} alt={admin.name}/>
                                        </td>
                                        <td className="text-center">
                                            {/* <button className="btn btn-xs" title="View"><span className="fa fa-eye"></span></button>
                                            <button className="btn btn-xs" title="Edit"><span className="fa fa-edit"></span></button> */}
                                            <button className="btn btn-xs" title="Delete" onClick={userDelete.bind(this,admin.id)}><span className="fa fa-trash"></span></button>
                                        </td>
                                    </tr>
                            })
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Admin;