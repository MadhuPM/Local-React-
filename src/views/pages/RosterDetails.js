import React, {Component} from "react";

import {Input,FormGroup} from "reactstrap";

class RosterDetails extends Component {
    constructor(props) {
        super(props);
        var rosterState = {};
        if(this.props.location.state){
             rosterState = this.props.location.state.rosterData;
        } else {
             rosterState =  {
                    person:{displayName:''},
                    unit:'',
                    position:'',
                    depthOrder:''
                };
        }

        this.state = {
            rosterData: rosterState,
            showEdit:false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);


    }

    handleClick() {
        this.setState(state => ({
            showEdit: !state.showEdit
        }));
    }

    handleSaveClick() {
        this.setState(state => ({
            showEdit: false
        }));
    }
    handleCancelClick() {
        this.setState({rosterData:this.props.location.state.rosterData, showEdit: false});
    }

    handleChange(event) { 
        const inputKey = event.target.name; 
        console.log(event.target.value);
        if(inputKey === 'displayName'){
            this.setState({
                rosterData: {...this.state.rosterData,
                    ['person']: {...this.state.rosterData.person,
                        [inputKey]: event.target.value}
                } });
        } else {
            this.setState({
                rosterData: {...this.state.rosterData,[inputKey]: event.target.value} });
        }

    }



    render() {
        const rosterDetails = <div className="row mt-3">
            <div className="col-md-12">
                <div className="ourservice-item transition">
                    {this.state.showEdit ? (
                        <React.Fragment>
                            <FormGroup>
                            <Input   class="form-control"   type="text"   id="displayName"   name="displayName"   placeholder="Person Name"   onChange={this.handleChange}   value={this.state.rosterData.person.displayName} />
                            </FormGroup>
                            <FormGroup>
                            <Input   class="form-control"   type="text"   id="unit"   name="unit"   placeholder="Unit"   onChange={this.handleChange}   value={this.state.rosterData.unit} />
                            </FormGroup>
                            <FormGroup>
                            <Input   class="form-control"   type="text"   id="position"   name="position"   placeholder="position"   onChange={this.handleChange}   value={this.state.rosterData.position} />
                            </FormGroup>
                            <FormGroup>
                            <Input   class="form-control"   type="text"   id="depthOrder"   name="depthOrder"   placeholder="depthOrder"   onChange={this.handleChange}   value={this.state.rosterData.depthOrder} />
                            </FormGroup>

                        <div className="col-md-3 align-content-center">
                        <button className="btn btn-primary" onClick={this.handleSaveClick}>Save</button>&nbsp;
                        <button className="btn btn-danger" onClick={this.handleCancelClick}>cancel</button>
                        </div></React.Fragment>
                    ):(<React.Fragment><h2>{this.state.rosterData.person.displayName}</h2>
                        <p>Unit: {this.state.rosterData.unit}</p>
                        <p>Position: {this.state.rosterData.position}</p>
                        <p>Depth Order: {this.state.rosterData.depthOrder}</p>
                        <div className="col-md-3 align-content-center">
                            <button className="btn btn-primary" onClick={this.handleClick}>Edit</button>&nbsp;

                        </div></React.Fragment>)}

                </div>

            </div>
        </div>;

        return (
            <React.Fragment>
                    <div className="RosterBox pt-5">
                        <div className="container">
                            {rosterDetails}
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default RosterDetails;