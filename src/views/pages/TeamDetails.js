import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";


class TeamDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: {
                roster: []
            }
            ,
            teamDetails: []
        };

    }

    componentDidMount() {
        var teamId = this.props.match.params.id;
        this.getTeamDetails(teamId);

    }

    getTeamDetails(teamId) {
        const url = './data.json';
        axios.get(url).then(res => {
            if (res.status && res.status === 200) {
                res.data.teams.map(value => {
                    if(teamId === value.id){
                        this.setState({team: value});
                    }
                    return true;
                });

            }


        }).catch(e => {
        });
    }

    render() {
        const teamRoasters = this.state.team.roster.map((roaster,index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                    <Link to={{
                        pathname: '/roster/views/'+roaster.person.displayName,
                        state: {
                            rosterData: roaster
                        }
                    }}>
                    <div className="ourservice-item transition">
                        <h6>{roaster.person.displayName}</h6>
                        <p>Unit: {roaster.unit}</p>
                        <p>Position: {roaster.position}</p>
                        <p>Depth Order: {roaster.depthOrder}</p>
                    </div>
                    </Link>
                </div>

        ));

        const teamDetails = <div className="row mt-3">
            <div className="col-md-8">
                <h1>{this.state.team.name}</h1>
                <p>{this.state.team.fullName}</p>
            </div>
        </div>;

        return (
            <React.Fragment>
                <div className="RosterBox pt-5">
                    <div className="container">
                        {teamDetails}
                    </div>
                    <div>
                        {this.state.team.roster.length > 0 ? (
                            <React.Fragment>
                                <div className="container justify-content-center text-center mt-5">
                                    <h1>Rosters: </h1>
                                </div>
                                <div className="container">
                                    <div className="row mt-5">
                                        {teamRoasters}
                                    </div>
                                </div>
                            </React.Fragment>) : ('')}
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default TeamDetails;