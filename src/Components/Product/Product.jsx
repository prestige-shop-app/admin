import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

class Product extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div  className="dash-view">
        <center>
        <div className="vid-container">
 
  <div  className="inner-container">
    
    <div className="box" style={{marginRight:'500px',backgroundColor:'rgb(217, 217, 217)'}}>
      <h1>Add Product</h1>
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
                   <input type="email"
                  placeholder="email"
                  required
                  name="email"
                  onChange={this.onChange}/>
                   <input type="email"
                  placeholder="email"
                  required
                  name="email"
                  onChange={this.onChange}/>
                   <input type="email"
                  placeholder="email"
                  required
                  name="email"
                  onChange={this.onChange}/>
      <br/>
      <MDBBtn style={{width:'150px'}}color="danger" type="submit" onClick={this.onSubmit}>
      Add
                </MDBBtn>
     
    </div>
  </div>
</div>   
        </center>
      </div>
        )
    }
}
export default Product;