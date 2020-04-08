import React, { Component } from 'react';


export default class Dashboard extends Component {
    render() {
        return(
            <div class="content-wrapper">
                <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Dashboard v2</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Dashboard v2</li>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
            
                <div class="content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box">
                      <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>
        
                      <div class="info-box-content">
                        <span class="info-box-text">CPU Traffic</span>
                        <span class="info-box-number">
                          10
                          <small>%</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3">
                      <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-thumbs-up"></i></span>
        
                      <div class="info-box-content">
                        <span class="info-box-text">Likes</span>
                        <span class="info-box-number">41,410</span>
                      </div>
                    </div>
                  </div>
        
                  <div class="clearfix hidden-md-up"></div>
        
                  <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3">
                      <span class="info-box-icon bg-success elevation-1"><i class="fas fa-shopping-cart"></i></span>
        
                      <div class="info-box-content">
                        <span class="info-box-text">Sales</span>
                        <span class="info-box-number">760</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3">
                      <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-users"></i></span>
        
                      <div class="info-box-content">
                        <span class="info-box-text">New Members</span>
                        <span class="info-box-number">2,000</span>
                      </div>
                    </div>
                  </div>
                </div>
        
               
                <div class="row">
                  <div class="col-md-8">
                   
                    <div class="row">
                      <div class="col-md-6">
                        <div class="card direct-chat direct-chat-warning">
                          <div class="card-header">
                            <h3 class="card-title">Direct Chat</h3>
        
                            <div class="card-tools">
                              <span data-toggle="tooltip" title="3 New Messages" class="badge badge-warning">3</span>
                              <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                              </button>
                              <button type="button" class="btn btn-tool" data-toggle="tooltip" title="Contacts"
                                      data-widget="chat-pane-toggle">
                                <i class="fas fa-comments"></i></button>
                              <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                              </button>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="direct-chat-messages">
                              <div class="direct-chat-msg">
                                <div class="direct-chat-infos clearfix">
                                  <span class="direct-chat-name float-left">Alexander Pierce</span>
                                  <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                </div>
                                <img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                                <div class="direct-chat-text">
                                  Is this template really for free? That's unbelievable!
                                </div>
                              </div>
        
                              <div class="direct-chat-msg right">
                                <div class="direct-chat-infos clearfix">
                                  <span class="direct-chat-name float-right">Sarah Bullock</span>
                                  <span class="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                </div>
                                <img class="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image"/>
                                <div class="direct-chat-text">
                                  You better believe it!
                                </div>
                              </div>
        
                              <div class="direct-chat-msg">
                                <div class="direct-chat-infos clearfix">
                                  <span class="direct-chat-name float-left">Alexander Pierce</span>
                                  <span class="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                                </div>
                                <img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                                <div class="direct-chat-text">
                                  Working with AdminLTE on a great new app! Wanna join?
                                </div>
                              </div>
        
                              <div class="direct-chat-msg right">
                                <div class="direct-chat-infos clearfix">
                                  <span class="direct-chat-name float-right">Sarah Bullock</span>
                                  <span class="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                                </div>
                                <img class="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image"/>
                                <div class="direct-chat-text">
                                  I would love to.
                                </div>
                              </div>
        
                            </div>
        
                            <div class="direct-chat-contacts">
                              <ul class="contacts-list">
                                <li>
                                  <a href="#">
                                    <img class="contacts-list-img" src="dist/img/user1-128x128.jpg"/>
        
                                    <div class="contacts-list-info">
                                      <span class="contacts-list-name">
                                        Count Dracula
                                        <small class="contacts-list-date float-right">2/28/2015</small>
                                      </span>
                                      <span class="contacts-list-msg">How have you been? I was...</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img class="contacts-list-img" src="dist/img/user7-128x128.jpg"/>
        
                                    <div class="contacts-list-info">
                                      <span class="contacts-list-name">
                                        Sarah Doe
                                        <small class="contacts-list-date float-right">2/23/2015</small>
                                      </span>
                                      <span class="contacts-list-msg">I will be waiting for...</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img class="contacts-list-img" src="dist/img/user3-128x128.jpg"/>
        
                                    <div class="contacts-list-info">
                                      <span class="contacts-list-name">
                                        Nadia Jolie
                                        <small class="contacts-list-date float-right">2/20/2015</small>
                                      </span>
                                      <span class="contacts-list-msg">I'll call you back at...</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img class="contacts-list-img" src="dist/img/user5-128x128.jpg"/>
        
                                    <div class="contacts-list-info">
                                      <span class="contacts-list-name">
                                        Nora S. Vans
                                        <small class="contacts-list-date float-right">2/10/2015</small>
                                      </span>
                                      <span class="contacts-list-msg">Where is your new...</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img class="contacts-list-img" src="dist/img/user6-128x128.jpg"/>
        
                                    <div class="contacts-list-info">
                                      <span class="contacts-list-name">
                                        John K.
                                        <small class="contacts-list-date float-right">1/27/2015</small>
                                      </span>
                                      <span class="contacts-list-msg">Can I take a look at...</span>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img class="contacts-list-img" src="dist/img/user8-128x128.jpg"/>
        
                                    <div class="contacts-list-info">
                                      <span class="contacts-list-name">
                                        Kenneth M.
                                        <small class="contacts-list-date float-right">1/4/2015</small>
                                      </span>
                                      <span class="contacts-list-msg">Never mind I found...</span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="card-footer">
                            <form action="#" method="post">
                              <div class="input-group">
                                <input type="text" name="message" placeholder="Type Message ..." class="form-control"/>
                                <span class="input-group-append">
                                  <button type="button" class="btn btn-warning">Send</button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
        
                      <div class="col-md-6">
                        <div class="card">
                          <div class="card-header">
                            <h3 class="card-title">Latest Members</h3>
        
                            <div class="card-tools">
                              <span class="badge badge-danger">8 New Members</span>
                              <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                              </button>
                              <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                              </button>
                            </div>
                          </div>
                          <div class="card-body p-0">
                            <ul class="users-list clearfix">
                              <li>
                                <img src="dist/img/user1-128x128.jpg" alt="User Image"/>
                                <a class="users-list-name" href="#">Alexander Pierce</a>
                                <span class="users-list-date">Today</span>
                              </li>
                              <li>
                                <img src="dist/img/user8-128x128.jpg" alt="User Image"/>
                                <a class="users-list-name" href="#">Norman</a>
                                <span class="users-list-date">Yesterday</span>
                              </li>
                              <li>
                                <img src="dist/img/user7-128x128.jpg" alt="User Image"/>
                                <a class="users-list-name" href="#">Jane</a>
                                <span class="users-list-date">12 Jan</span>
                              </li>
                              <li>
                                <img src="dist/img/user6-128x128.jpg" alt="User Image"/>
                                <a class="users-list-name" href="#">John</a>
                                <span class="users-list-date">12 Jan</span>
                              </li>
                              <li>
                                <img src="dist/img/user2-160x160.jpg" alt="User Image"/>
                                <a class="users-list-name" href="#">Alexander</a>
                                <span class="users-list-date">13 Jan</span>
                              </li>
                              <li>
                                <img src="dist/img/user5-128x128.jpg" alt="User Image"/>
                                <a class="users-list-name" href="#">Sarah</a>
                                <span class="users-list-date">14 Jan</span>
                              </li>
                              <li>
                                <img src="dist/img/user4-128x128.jpg" alt="User Image"/>
                                <a class="users-list-name" href="#">Nora</a>
                                <span class="users-list-date">15 Jan</span>
                              </li>
                              <li>
                                <img src="dist/img/user3-128x128.jpg" alt="User Image"/>
                                <a class="users-list-name" href="#">Nadia</a>
                                <span class="users-list-date">15 Jan</span>
                              </li>
                            </ul>
                          </div>
                          <div class="card-footer text-center">
                            <a href="javascript::">View All Users</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="card-title">Recently Added Products</h3>
        
                        <div class="card-tools">
                          <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                          </button>
                          <button type="button" class="btn btn-tool" data-card-widget="remove">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                      <div class="card-body p-0">
                        <ul class="products-list product-list-in-card pl-2 pr-2">
                          <li class="item">
                            <div class="product-img">
                              <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                            </div>
                            <div class="product-info">
                              <a href="javascript:void(0)" class="product-title">Samsung TV
                                <span class="badge badge-warning float-right">$1800</span></a>
                              <span class="product-description">
                                Samsung 32" 1080p 60Hz LED Smart HDTV.
                              </span>
                            </div>
                          </li>
                          <li class="item">
                            <div class="product-img">
                              <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                            </div>
                            <div class="product-info">
                              <a href="javascript:void(0)" class="product-title">Bicycle
                                <span class="badge badge-info float-right">$700</span></a>
                              <span class="product-description">
                                26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                              </span>
                            </div>
                          </li>
                          <li class="item">
                            <div class="product-img">
                              <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                            </div>
                            <div class="product-info">
                              <a href="javascript:void(0)" class="product-title">
                                Xbox One <span class="badge badge-danger float-right">
                                $350
                              </span>
                              </a>
                              <span class="product-description">
                                Xbox One Console Bundle with Halo Master Chief Collection.
                              </span>
                            </div>
                          </li>
                          <li class="item">
                            <div class="product-img">
                              <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                            </div>
                            <div class="product-info">
                              <a href="javascript:void(0)" class="product-title">PlayStation 4
                                <span class="badge badge-success float-right">$399</span></a>
                              <span class="product-description">
                                PlayStation 4 500GB Console (PS4)
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer text-center">
                        <a href="javascript:void(0)" class="uppercase">View All Products</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}