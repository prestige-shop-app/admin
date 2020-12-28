import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard.jsx";
import Product from "../Product/Product.jsx";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      check: "dashboard",
      isOpen: false,
    };
  }
  componentDidMount() {
    this.setState({
      check: "dashboard",
    });
  } 
  dashboard(e) {
    e.preventDefault();
    this.setState({
      check: "dashboard",
    });
  }
  Product(e) {
    e.preventDefault();
    this.setState({
      check: "Product",
    });
  }
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    if (this.state.check === "dashboard") {
      return (
        <div>
           <div className="navbar">
            <span  style={{width:'400px',color:'red',fontSize:'X-large'}} onClick={(e) => this.dashboard(e)}>
          Dashboard
            </span>
            <span  style={{width:'400px',color:'red',fontSize:'X-large'}}
              onClick={(e) => this.Product(e)}
            >  {" "}
             Add Product           
            </span>
            <span
          style={{width:'150px' ,color:'red',fontSize:'X-large'}}
          rounded
            color="danger"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            LOGOUT
          </span>
          </div>
          <Dashboard/>
        </div>
      );
    } else if (this.state.check === "Product") {
      return (
        <div>
          <div className="navbar">
           <span   style={{width:'400px',color:'red',fontSize:'X-large'}} onClick={(e) => this.dashboard(e)}>
           Dashboard
            </span>
          <span  style={{width:'400px',color:'red',fontSize:'X-large'}}
            onClick={(e) => this.Product(e)}
          >  {" "}
          Add Product   
        </span>
        <span
          style={{width:'400px',color:'red',fontSize:'X-large'}}
          rounded
            color="danger"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            LOGOUT
          </span>
        </div>
        <Product/>
        </div>
      );
    } 
  }
}
export default Navbar;
