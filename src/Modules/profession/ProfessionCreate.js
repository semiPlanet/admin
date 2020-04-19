import React, { useState, useEffect } from 'react';
import { getLanguages, createProfession } from '../server/Server';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ProfessionCreate = () => {
    const [languages, setLanguages] = useState([]);
    var [names, setNames] = useState({hi:'',en:'',ne:''});
    const {register, errors, handleSubmit} = useForm();
    const [redirect, setRedirect] = useState(false);

    const allLanguages = () => {
        getLanguages().then( data => {
            setLanguages(data.languages)
        })
    }

    const handleNameChange = (key, event) => {
        if(key=='hi') {
            setNames({...names, hi:event.target.value});
        }else if(key == 'en') {
            setNames({...names, en:event.target.value});
        }else if(key == 'ne') {
            setNames({...names, ne:event.target.value});
        } else {
            var name = [];
            names[key] = event.target.value
            // setNames({...names, name});
        }
    }

    useEffect(()=>{
        allLanguages();
    },[])

    const onSubmit = (data) =>{
        const formData =  {code:data.code, profession:names};
        createProfession(formData)
                .then((data)=> {
                    setRedirect(true)
                })
    }

    if(redirect) {
        return ( <Redirect to="/professions"/> )
    }

    return (
        <div className="content-wrapper">
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h2>Create New Profession</h2>
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
                                <label htmlFor="exampleInputEmail1">Profession Code</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter the profession code"
                                name="code"
                                    ref={register({required:true, message:'Invalid code'})}
                                />
                                {errors.code && <span className="label label-danger">Language code is required</span>}
                            </div>

                            {
                                languages.map((lang, i) => {
                                    return <div className="form-group" key={i}>
                                        <label htmlFor="exampleInputEmail1">Profession Name in {lang.name}</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter a profession name" name="name"
                                            onChange={handleNameChange.bind(this, lang.code)}
                                        />
                                        {errors.name && <span className="label label-danger">Profession name in {lang.name} is required</span>}
                                    </div>
                                })
                            }

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

export default ProfessionCreate;