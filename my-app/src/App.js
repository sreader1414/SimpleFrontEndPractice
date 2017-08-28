import React, { Component } from 'react';
import {RaisedButton, DatePicker, Dialog, TextField, List, ListItem} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      open2: false,
      status: null,
      focusStyle: {border: '2px', borderRadius: '10px', borderColor:"#f3f3f3", borderStyle: "solid", paddingLeft: "10px"}
    };
    // this.handleClose = this.handleClose.bind(this);
  }

  handleFocus = () => {
    this.setState({focusStyle: {border: '2px', borderRadius: '10px', borderColor:"#6ceaff", borderStyle: "solid", paddingLeft: "10px", backgroundColor: "#f1feff"}});
  };

  handleBlur = () => {
    this.setState({focusStyle: {border: '2px', borderRadius: '10px', borderColor:"#f3f3f3", borderStyle: "solid", paddingLeft: "10px"}});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose (){
    console.log(this);
    this.setState({open: false, status: null});
  };

  handleOpen2 = () => {
    this.setState({open2: true});
  };

  handleClose2 = () => {
    this.setState({open2: false,});
  };

  click1 = (status) => {
    this.handleClose2();
    this.setState({status: status});
  };

  render() {
    const closer = {cursor: "pointer", width: "20px", float: "right", color:"#e8e8e8", fontFamily: "Arial, sans-serif", fontWeight: "lighter"};
    const title = {float: "left", marginLeft: "20px", textTransform: "Uppercase", color: "#b2b2b2", fontSize:"10px", paddingTop:"10px", paddingBottom:"5px", fontWeight: "lighter"};
    const border = {border: "2px", borderRadius: "10px", borderColor: "#f3f3f3", borderStyle: "solid", paddingLeft: "10px"};
    const listItem = {borderBottom: "1px solid #a9a9a9", paddingBottom: "3px", color: "#696969"};
    const theList = [
      <List style={{height:"250px"}}>
        <ListItem onClick={() => this.click1("Part-Time")} primaryText="Part-Time" style={listItem}/>
        <ListItem onClick={() => this.click1("Full-Time")} primaryText="Full-Time" style={listItem}/>
        <ListItem onClick={() => this.click1("Contractor")} primaryText="Contractor" style={listItem}/>
        <ListItem onClick={() => this.click1("Volunteer")} primaryText="Volunteer" style={{color: "#696969"}}/>
      </List>
    ];

    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Tesani Front End</h2>
          </div>
          <RaisedButton
            style={{boxShadow: "none", marginTop: "30px", width: "400px"}}
            backgroundColor = "#02F68F"
            label={"Open"}
            labelColor={"#FFFFFF"}
            onClick={this.handleOpen}
          />
          <div style={{border: "2px", borderRadius: "100px"}}>
            <Dialog
              title={
                <div>
                  <span style={closer} onClick={() => this.handleClose()}>X</span>
                  <div style={{marginTop: "30px", fontSize: "30px", fontWeight: "lighter"}}>
                    Employment Status
                  </div>
                </div>
              }
              contentStyle={{
                border: "1px solid #000",
                borderRadius: "15px",
                overflow: "auto"
              }}
              style={{width: '440px', marginLeft: "33%", textAlign:"Center"}}
              bodystyle={{backgroundColor:"Red", border: '2px',borderRadius: '100px'}}
              modal={true}
              open={this.state.open}
            >
              <span style={title}>effective date</span>
              <DatePicker
                textFieldStyle={{border: '2px', borderRadius: '10px', borderColor:"#f3f3f3", borderStyle: "solid", paddingLeft: "10px", cursor: "pointer"}}
                underlineStyle={{display: 'none'}}
              />
              <img style={{position: "absolute", top: "150px", left:"270px", pointerEvents: 'none'}} src = "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" ></img>

              <span style={title}>employment status</span>
              <TextField
                style={border}
                underlineStyle={{display: 'none'}}
                hintText={"Employment Status"}
                value={this.state.status}
                onClick={this.handleOpen2}
              />

              <span style={title}>notes</span>
              <TextField
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                style={this.state.focusStyle}
                underlineStyle={{display: 'none'}}
              />

              <RaisedButton
                style={{boxShadow: "none", width: "270px", marginTop: "25px"}}
                backgroundColor = "#02F68F"
                label={"save"}
                labelColor={"#FFFFFF"}
                onClick={this.handleClose}
              />
            </Dialog>
          </div>
          <Dialog
            title={
              <div>
                <span style={closer} onClick={() => this.handleClose2()}>X</span>
                <div style={{marginTop: "30px", fontSize: "30px", fontWeight: "lighter"}}>
                  Employement Status
                </div>
              </div>
            }
            contentStyle={{
              border: "1px solid #000",
              borderRadius: "15px",
              overflow: "auto"
            }}
            style={{width: '440px', marginLeft: "33%", textAlign:"Center"}}
            bodystyle={{backgroundColor:"Red", border: '2px',borderRadius: '100px'}}
            modal={true}
            open={this.state.open2}
          >
            {theList}
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;