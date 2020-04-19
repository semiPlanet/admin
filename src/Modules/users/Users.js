import React, { useEffect } from 'react';
import { useState } from 'react';
import { getUsers, verifyUser, suspendUser } from '../server/Server';
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        getUsers().then(( data ) => {
            setUsers(data.users);
        })
    }

    const verify = (slug) => {
        if(!window.confirm('Are you sure?')) return;
        verifyUser(slug).then( () => {
            getAllUsers();
        })
    }

    const suspend = (slug) => {
        if(!window.confirm('Are you sure?')) return;
        suspendUser(slug).then( () => {
            getAllUsers();
        })
    }

    useEffect(() => {
        getAllUsers();
    },[])

    return (
        <div className="content-wrapper">
             <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h4>User Listing</h4>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Users</li>
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
                                    <th>Verification</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                users.map((user,i)=>{
                                return <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{user.fullname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.mobile?user.mobile:'-'}</td>
                                            <td>
                                                <img src={user.image?user.image:'#'} alt={user.name} style={{width:30}}/>
                                            </td>
                                            <td>
                                                {    
                                                    <span onClick={verify.bind(this, user.slug)} className={"fa fa-check-circle " + (user.verified?'verified':'')} title={user.verified?'unverify':'verify'} style={{cursor:'pointer',fontSize:12}}>
                                                        {user.verified?' Verified':' Unverified'}
                                                    </span>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    <span onClick={suspend.bind(this, user.slug)} className={"btn btn-xs " + (user.suspended?'btn-danger':'btn-success')} title={user.suspended?'Activate':'Suspend'}> {user.suspended?'suspended':'active'} </span>
                                                }
                                            </td>
                                            <td className="text-center">
                                                <button className="btn btn-xs" title="View"><span className="fa fa-eye"></span></button>
                                                <button className="btn btn-xs" title="Edit"><span className="fa fa-edit"></span></button>
                                                <button className="btn btn-xs" title="Delete"><span className="fa fa-trash"></span></button>
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

export default Users;