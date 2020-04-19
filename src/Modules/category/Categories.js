import React, { useState, useEffect } from 'react';
import { getCategories, delCategory } from '../server/Server';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const allCategories = () => {
        getCategories().then( (data) => {
            setCategories(data.categories)
        })
    }

    const deleteCategory = (id) => {
        if(!window.confirm('Are you sure?')) return;
        delCategory(id).then((data) => {
            allCategories();
        })
    }

    useEffect(() => {
        allCategories();
    }, [])

    return (
        <div className="content-wrapper">
            <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>Category Listing</h1>
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
            
                <div className="col-md-12">
                    <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body p-0">
                        <table className="table">
                        <thead>
                            <tr>
                                <th style={{width: 10}}>#</th>
                                <th>Common Name</th>
                                <th>In Languages</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.length > 0 
                                    ? 
                                    categories.map((cat,i)=>{
                                        return <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{cat.category.en}</td>
                                                <td>{JSON.stringify(cat.category)}</td>
                                                <td className="text-center">
                                                    <button className="btn btn-xs" title="Delete" onClick={deleteCategory.bind(this, cat.id)}><span className="fa fa-trash"></span></button>
                                                </td>
                                            </tr>
                                        })
                                    :
                                        <tr>
                                            <td colspan="4" className="text-center">No data available</td>
                                        </tr>
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

export default Categories;