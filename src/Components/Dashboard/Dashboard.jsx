import React, { Component } from "react";
import "../Dashboard/style.css";
import { FaRegAddressBook } from 'react-icons/fa';
import { MDBBtn } from "mdbreact";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "overview",
      username: "",
      usertitle: "",
    };
    this.setView = this.setView.bind(this);
    this.currentView = this.currentView.bind(this);
    this.profile = this.profile.bind(this);
  }

  setView(view) {
    this.setState({ view: view });
  }
  currentView(view) {
    this.setState({ view: view });
  }
  profile(e) {
    e.preventDefault();
    this.setState({
      check: "profile",
    });
  }

  render() {
    switch (this.state.view) {
      case "overview":
        return (
          <div style={{backgroundColor:'#010008'}} id="dashboard">
            <Sidebar setView={this.setView} />
            <Overview />
          </div>
        );
      case "schedule":
        return (
          <div id="dashboard">
            <Sidebar setView={this.setView} />
            <ScheduleView />
          </div>
        );
    }
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  setView(view) {
    this.props.setView(view);
    console.log("level 2 " + view);
  }
  render() {
    return (
      <div className="sidebar-menu">
        
        <UserProfileView />
        <SidebarMenu
          item1={"Update Profile"}
          item2={"All Admin"}
          setView={this.props.setView}
        />
        <div>
        </div>
      </div>
    );
  }
}

class UserProfileView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-profile">
        <h3 id="display-name">{this.props.username}</h3>
        <p className="subtitle">{this.props.usertitle}</p>
      </div>
    );
  }
}

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: "active-item",
      schedule: "inactive-item",
    };
    this.setBtnAndView = this.setBtnAndView.bind(this);
  }

  setBtnAndView(view) {
    this.props.setView(view);
    if (view === "overview") {
      this.setState({
        overview: "active-item",
        schedule: "inactive-item",
      });
    } else if (view === "schedule") {
      this.setState({
        overview: "inactive-item",
        schedule: "active-item",
      });
    }
  }
  render() {
    return (
      <div className="menu-items">
        <a
          style={{ color: "white" }}
          className={this.state.overview}
          onClick={() => this.setBtnAndView("overview")}
        >
          <FaRegAddressBook/>
          {this.props.item1}
        </a>
        <a
          style={{ color: "white" }}
          className={this.state.schedule}
          onClick={() => this.setBtnAndView("schedule")}
        >
          <FaRegAddressBook/>
          {this.props.item2}
        </a>
      </div>
    );
  }
}
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "", phoneNumber: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        } 
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div  className="dash-view">
        <center>
        <div className="vid-container">
  
  <div className="inner-container">
    
    <div style={{backgroundColor:'rgb(217, 217, 217)'}} className="box" >
      <h1>Change password</h1>
      <input  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  onChange={this.onChange}/>
     <input  type="Newpassword"
                  placeholder="NewPassword"
                  required
                  name="password"
                  onChange={this.onChange}/>
                  <input  type="Newpassword"
                  placeholder="RepeatNewPassword"
                  required
                  name="password"
                  onChange={this.onChange}/>
      <br/>
      <MDBBtn style={{width:'150px'}}color="danger" type="submit" onClick={this.onSubmit}>
      Add
                </MDBBtn>
    </div>
  </div>
</div>
          
        </center>
        <DashboardCard />
      </div>
    );
  }
}
class ScheduleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
        setTimeout(() => {
          window.location.reload();
        }, 2500);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div  className="dash-view">
        <center>
        <div className="vid-container">
 
  <div  className="inner-container">
    
    <div className="box" style={{marginRight:'500px',backgroundColor:'rgb(217, 217, 217)'}}>
      <h1>All Admin</h1>
      <input type="email"
                  placeholder="email"
                  required
                  name="email"
                  onChange={this.onChange}/>
      <input  onChange={this.onChange}
                  type="number"
                  placeholder="PhoneNumber"
                  required
                  name="phoneNumber"/>
      <br/>
      <MDBBtn style={{width:'150px'}}color="danger" type="submit" onClick={this.onSubmit}>
      Add
                </MDBBtn>
     
    </div>
  </div>
</div>   
        </center>
        <DashboardCard />
      </div>
    );
  }
}
var currentView = "overview";

class DashboardCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (currentView) {
      case "overview":
        return (
          <div className="dash-card">
            <OverviewCardContent />
          </div>
        );
      case "schedule":
        return (
          <div className="dash-card">
            <ScheduleCardContent />
          </div>
        );
     
       
    }
  }
}

const OverviewCardContent = () => <div></div>;
const ScheduleCardContent = () => <div></div>;

export default Dashboard;
