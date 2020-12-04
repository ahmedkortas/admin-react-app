import React from "react";

import Wrapper from "./Wrapper/index.jsx";
import Table from "./Table/index.jsx";
import TableHead from "./TableHead//index.jsx";
import Row from "./Row/index.jsx";
import ResetButton from "./ResetButton/index.jsx";
import SearchForm from "./SearchForm/index.jsx";
import "./App.css";
import axios from "axios";

//store default state so that each filter uses the entire employees object

class Employee extends React.Component {
  state = {
    employees: [],
    firstName: "",
    lastName: "",
  };

  // sortCriteria = (e) => {
  //   const criteria = e.target.name;
  //   let sortArr;
  //   switch (criteria) {
  //     case "name":
  //       sortArr = this.state.employees.sort((a, b) =>
  //         a.name > b.name ? 1 : -1
  //       );
  //       break;
  //     case "email":
  //       sortArr = this.state.employees.sort((a, b) =>
  //         a.email > b.email ? 1 : -1
  //       );
  //       break;
  //     default:
  //       sortArr = this.state.employees.sort((a, b) => (a.id > b.id ? 1 : -1));
  //       break;
  //   }
  //   this.setState({ employees: sortArr });
  // };

  requestEmployee() {
    axios
      .get("https://server-cunsulting.herokuapp.com/employee")
      .then((res) => {
        console.log(res.data);
        if (this.state.employees.length < res.data.length) {
          this.setState({ employees: res.data });
        }
      });
  }

  render() {
    this.requestEmployee();
    return (
      <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Wrapper>
          <Row>
            <div class="bg_move">
              <h1>My employees</h1>
            </div>
          </Row>
          <Row>
            <br></br> <br></br>
            <br></br>
            <br></br>
            <ResetButton
              style={{ backgroundColor: "blue" }}
              resetTable={this.resetTable}
            >
              Reset Table
            </ResetButton>
          </Row>
          <Row>
            <SearchForm
              firstName={this.state.firstName}
              firstInputChange={this.firstInputChange}
              searchFirstName={this.searchFirstName}
              lastName={this.state.lastName}
              lastInputChange={this.lastInputChange}
              searchLastName={this.searchLastName}
            />
          </Row>{" "}
          <br></br>
          <br></br>
          <br></br>
          <Table>
            <TableHead></TableHead>
            {this.state.employees.map((employee, index) => (
              <tr className="trContainer">
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNumber}</td>
              </tr>
            ))}
          </Table>
        </Wrapper>
      </>
    );
  }
}

export default Employee;
