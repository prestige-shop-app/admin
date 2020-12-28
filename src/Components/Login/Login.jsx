import React, { Component } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "../Login/style.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      view: "main",
    };
    this.changeView = this.changeView.bind(this);
  }


  changeView(e) {
    this.setState({ view: e.target.value });
  }

 

  render() {
    if (this.state.view === "main") {
      return (
        <div>
          <center>
            <br></br> <br></br>
            <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input className="loginInput"  type="text" name="" placeholder="email"  onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input className="loginInput"  type="password" placeholder="Password"  onChange={(e) => this.setState({ password: e.target.value })}
                value={this.state.password}/>
      <label>Password</label>
      
    </div>
    <button style={{color:'white',fontStyle:'oblique',fontWeight:'bold'}} type="button" value ="log" onClick={this.changeView}  >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </button>
  </form>
</div>
          </center>
        </div>
      );
    } else if (this.state.view === "log") {
      return (
          <Navbar/>
      );
    }
  }
}

export default Login;
