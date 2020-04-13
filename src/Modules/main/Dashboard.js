import React, { useState, useEffect } from 'react';
import { getDashboard } from '../server/Server';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState([])
  const [recentUsers, setRecentUsers] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getDashboard().then( data => {
      setDashboard(data.dashboard)
      setRecentUsers(data.dashboard.recent_users)
      setQuestions(data.dashboard.recent_questions)
    });
  },[])
  
  return(
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
  <div className="container-fluid">
    <div className="row">
      
      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box">
          <span className="info-box-icon bg-info elevation-1"><i className="fas fa-question" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Questions</span>
            <span className="info-box-number">
              {dashboard.total_question}
            </span>
          </div>
        </div>
      </div>


      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box">
          <span className="info-box-icon bg-info elevation-1"><i className="fas fa-reply" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Answers</span>
            <span className="info-box-number">
              {dashboard.total_answer}
            </span>
          </div>
        </div>
      </div>



      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box mb-3">
          <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Upvotes</span>
            <span className="info-box-number">{dashboard.total_upvote}</span>
          </div>
        </div>
      </div>
      <div className="clearfix hidden-md-up" />
      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box mb-3">
          <span className="info-box-icon bg-success elevation-1"><i className="fas fa-thumbs-down" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Downvotes</span>
            <span className="info-box-number">{dashboard.total_downvote}</span>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box mb-3">
          <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Users</span>
            <span className="info-box-number">{dashboard.total_user}</span>
          </div>
        </div>
      </div>

    </div>
    
    <div className="row">
      <div className="col-md-8">
        <div className="row">

          
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Recent Users</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <ul className="users-list clearfix">
                  {  
                    recentUsers.map((user, i) => {
                     return  <li  key={i}>
                        <img src={user.image?user.image:'dist/img/user1-128x128.jpg'} alt={user.name} />
                        <a className="users-list-name" href="fakeurl">{user.firstname}</a>
                        <span className="users-list-date">{moment(user.updated_at).fromNow()}</span>
                      </li>
                    })
                  }
                
                </ul>
              </div>
              <div className="card-footer text-center">
                <a href="fakeUrl">View All Users</a>
              </div>
            </div>
          </div>
       
          <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recently Added Questions</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            <ul className="products-list product-list-in-card pl-2 pr-2">
            {
              questions.map((question, i) => {
                return <li className="item">
                  <div className="product-img">
                    <img src={question.user.image?question.user.image:'dist/img/default-150x150.png'} alt={question.user.fullname} className="img-size-50" />
                  </div>
                  <div className="product-info">
                    <a href="fakeUrl" className="product-title">{question.user.fullname}
                      <span className="badge badge-warning float-right">{moment(question.created_at).fromNow()}</span></a>
                    <span className="product-description">
                      {question.question}
                    </span>
                  </div>
                </li>
              })
            }
            </ul>
          </div>
          <div className="card-footer text-center">
            <a href="fakeUrl" className="uppercase">View All Questions</a>
          </div>
        </div>
      </div>

        </div>
      </div>
     
      
    </div>
  </div>
  </div>
  </div>
    
  )
}

export default Dashboard;