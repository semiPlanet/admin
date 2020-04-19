import React, { useEffect, useState } from 'react';
import { getLanguages, createCategory, langDelete } from '../server/Server';
import { useForm } from 'react-hook-form';
import { Redirect, Link } from 'react-router-dom';

const CategoryCreate = () => {
    const [languages, setLanguages] = useState([]);
    var names = {};
    const {register, errors, handleSubmit} = useForm();
    const [redirect, setRedirect] = useState(false);

    const onSubmit = (data) => {
        createCategory({name:names.en,category:names})
            .then((data) => {
                console.log(data)
                setRedirect(true)
            }) 
    }

    const handleCatChange = ( key, event ) => {
       names[key] = event.target.value
    }


    useEffect(() => {
        getLanguages().then( data => {
            setLanguages(data.languages)
        })
    }, [])

    if(redirect) {
        return ( <Redirect to="/categories"/>)
    }

    return (
        <div className="content-wrapper">
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h2>Create New Category</h2>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Categories</li>
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

                            {
                                languages.map((lang, i) => {
                                    return <div className="form-group" key={i}>
                                        <label htmlFor="exampleInputEmail1">Category Name in {lang.name}</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder={"Enter category name in "+ lang.name} name="category"
                                            name={lang.name}
                                            ref={register({required:true})}
                                            onChange={handleCatChange.bind(this, lang.code)}
                                        />
                                        {errors[lang.name] && <span className="label label-danger">Category name in {lang.name} is required</span>}
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

export default CategoryCreate;