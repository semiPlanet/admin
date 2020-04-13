import React, { useState, useEffect } from 'react';
import { getLanguages, langDelete } from '../server/Server';
import { Link } from 'react-router-dom';

const Languages = () => {
    const [languages, setLanguages] = useState([]);

    const allLanguages = () => {
        getLanguages().then( data => {
            setLanguages(data.languages)
        })
    }

    const languageDelete = (id) => {
        if(!window.confirm('Are you sure?')) return;
        langDelete(id).then((data)=>{
            console.log(data)
            allLanguages();
        })
    }

    useEffect(()=>{
        allLanguages();
    },[])

    return (
        <div className="content-wrapper">
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>Languages Listing</h1>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Languages</li>
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
                                <th>Name</th>
                                <th>Code</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            languages.map((lang,i)=>{
                            return <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{lang.name}</td>
                                        <td>{lang.code}</td>
                                        <td className="text-center">
                                            {/* <button className="btn btn-xs" title="View"><span className="fa fa-eye"></span></button>
                                            <button className="btn btn-xs" title="Edit"><span className="fa fa-edit"></span></button> */}
                                            <button className="btn btn-xs" title="Delete" onClick={languageDelete.bind(this,lang.id)}><span className="fa fa-trash"></span></button>
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

export default Languages;