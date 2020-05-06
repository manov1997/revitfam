import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select'
import countryList from 'react-select-country-list'

class Profile extends React.Component {



  constructor(props) {
    super(props)
 
    this.options = countryList().getData()
 
    this.state = {
      options: this.options,
      value: null,
    }
  }
 
  changeHandler = value => {
    this.setState({ value })
  }





  state = {
    startDate: new Date()
  };


  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

 



  render() {
    
    return (
      <div className="bg-light border rounded p-4" >

        <form >
          <h3 className="mb-4">Basic Information</h3>
          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Username</label>
            <div class="col">
              <input type="text" class="form-control w-100" placeholder="Username" />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Email Address</label>
            <div class="col">
              <input type="email" class="form-control" placeholder="Email Address" />
            </div>
          </div>


          <div class="form-group row">
            <label class="col-sm-5 col-form-label">First Name</label>
            <div class="col-sm-7">
              <input type="text" class="form-control" placeholder="First Name" />
            </div>
          </div>


          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Last Name</label>
            <div class="col-sm-7">
              <input type="text" class="form-control" placeholder="Last Name" />
            </div>
          </div>

          <h3 className="mb-4">Additional Information</h3>


          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Company</label>
            <div class="col-sm-7">
              <input type="text" class="form-control" placeholder="Company" />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Education</label>
            <div class="col-sm-7">
              <input type="text" class="form-control" placeholder="Education" />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Phone Number</label>
            <div class="col-sm-7">
              <input type="text" class="form-control" placeholder="Phone Number" />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Website</label>
            <div class="col-sm-7">
              <input type="text" class="form-control" placeholder="Website" />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Date of Birth</label>
            <div class="col-sm-7 datepick">
              <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={20}
            scrollableYearDropdown
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-5 col-form-label">Location</label>
            <div class="col-sm-7">
              
              <Select
        style={{backgroundColor:"red"}}
        options={this.state.options}
        value={this.state.value}
        onChange={this.changeHandler}
      />
            </div>
          </div>



        </form>

      </div>
    );

  }
}

export default Profile;