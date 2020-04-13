import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createLanguage } from '../server/Server';

const Language = () => {
    const {register, errors, handleSubmit} = useForm();
    const [redirect, setRedirect] = useState(false);
    const onSubmit = (data) => {
        createLanguage(data)
            .then( data => {
                console.log(data)
                if(data.code == 200) {
                    setRedirect(true)
                }else if(data.errors) {
                    alert(data.message);
                }
            })
    }

    if(redirect) {
        return ( <Redirect to="/languages"/>)
    }

    return (
        <div className="content-wrapper">
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h2>Create New Language</h2>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Language</li>
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
                       
                        <form role="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Language Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter a language name" name="name"
                                    ref={register({required:true, message:'Name can not be empty'})}
                                />
                                {errors.name && <span className="label label-danger">Language name is required</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Language Code</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter the language code"
                                name="code"
                                    ref={register({required:true, message:'Invalid code'})}
                                />
                                {errors.code && <span className="label label-danger">Language code is required</span>}
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

export default Language;