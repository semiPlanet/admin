import React, { useState }  from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createAdmin } from '../server/Server';

const CreateAdmin = () => {
    const {register, errors, handleSubmit } = useForm();
    const [redirect, setRedirect] = useState(false);
    const onSubmit = (data) => {
        createAdmin(data).then( data => {
            if(data.code === 200 && data.status) {
                setRedirect(true);
            }else if(data.errors) {
                if('email' in data.errors) {
                    alert(data.errors.email[0])
                } else if('image' in data.errors) {
                    alert(data.errors.image[0])
                }
            }
        })
    }

    const handleChange = (e) => {
        register({name:'image', value:e.target.files[0]});
    }

    if(redirect) {
        return ( <Redirect to="/admins" /> )
    }

    const roles = [{name:'admin'},{name:'editor'},{name:'visitor'},{name:'collaborator'}];

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Create New Admin User</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Create Admin</li>
                    </ol>
                    </div>
                </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                        <div className="card card-primary">
                            <div className="card-header">
                            <h3 className="card-title">New Admin</h3>
                            </div>
                            <form role="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter full name" name="name"
                                        ref={register({required:true, message:'Name can not be empty'})}
                                    />
                                    {errors.name && <span className="label label-danger">Name is required</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                    name="email"
                                        ref={register({required:true, message:'Input valid email address', pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                                    />
                                    {errors.email && <span className="label label-danger">Email address is invalid</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                    name="password"
                                     ref={register({required:true, minLength:8, message:'Password must be 8 characters or longer'})}
                                    />
                                    {errors.password && <span className="label label-danger">Password must be 8 characters or longer</span>}
                                </div>


                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Mobile No.</label>
                                    <input type="mobile" className="form-control" id="exampleInputPassword1" placeholder="Mobile number"
                                    name="mobile"
                                     ref={register({minLength:10, message:'Mobile number must be 10 digits'})}
                                    />
                                    {errors.mobile && <span className="label label-danger">Mobile number must be 10 digits</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputFile">Profile Picture</label>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="exampleInputFile" name="image" onChange={handleChange}/>
                                            <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Role</label>
                                    <select className="form-control"
                                        name="role"
                                         ref={register({required:true, message:'Please select a role'})}
                                        >
                                        {
                                            roles.map((role,i) => {
                                                return <option key={i} value={role.name}>{role.name}</option>
                                            })
                                        }
                                    </select>
                                    {errors.role && <span className="label label-danger">Please select a role</span>}
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
            </section>
        </div>
    )
}

export default CreateAdmin;