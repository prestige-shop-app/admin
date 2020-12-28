import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login/Login.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "antd/dist/antd.css";


class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
         <Login/>
          
      </div>
    );
}
}
 

ReactDOM.render(<App />, document.getElementById("root"));
