import React, { useState, useEffect } from 'react';
import { getProfessions, delProfession } from '../server/Server';
import { Link } from 'react-router-dom';

const Professions = () => {
    const [professions, setProfessions] = useState([]);

    const allProfessions = () => {
        getProfessions().then((data) => {
            console.log(data)
            setProfessions(data.professions)
        })
    }

    const deleteProfession = (id) => {
        delProfession(id).then(() => {
            allProfessions();
        })
    }

    useEffect(()=>{
        allProfessions();
    },[])

    return (
        <div className="content-wrapper">
            <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>Profession Listing</h1>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Professions</li>
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
                                <th>Code</th>
                                <th>In Languages</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            professions.map((prof,i)=>{
                                return <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{prof.profession.en}</td>
                                        <td>{prof.code}</td>
                                        <td>{JSON.stringify(prof.profession)}</td>
                                        <td className="text-center">
                                            <button className="btn btn-xs" title="Delete" onClick={deleteProfession.bind(this,prof.id)}><span className="fa fa-trash"></span></button>
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

export default Professions;