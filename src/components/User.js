import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  static defaultProps = {
    name: "Bilgi Yok",
    salary: "0",
    department: "Bilgi Yok",
  };
  render() {
    // destructing
    const { name, department, salary } = this.props;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
         <div className="card-header d-flex justify-content-between ">
          <h4 className="d-inline">{name}</h4><i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
         </div>
         <div className="card-body">
          <p className="card-text"> Maaş: {salary}</p>
          <p className="card-text"> Department: {department}</p>
         </div>
        </div>
        {/* <ul>
          <li>Isim : {name} <i className="far fa-trash-alt"></i></li>
          <li>Departman : {department}</li>
          <li>Maas : {salary}</li>
        </ul> */}
      </div>
    );
    // return (
    //   <div>
    //     <ul>
    //       <li>Isim :  {this.props.name}</li>
    //       <li>Departman : {this.props.department}</li>
    //       <li>Maas : {this.props.salary}</li>
    //     </ul>
    //   </div>
    // )
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};
export default User;
