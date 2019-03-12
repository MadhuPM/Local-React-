import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
    }

    componentDidMount() {
        this.getAllTeams();
    }

    getAllTeams() {
        const url = './data.json';
        axios.get(url).then(res => {
            if (res.status && res.status === 200) {
                this.setState({teams: res.data.teams});
            }

        }).catch(e => {
        });
    }

    render() {
        const teamsList = this.state.teams.map((team,index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <Link to={'/team/view/'+team.id}>
                    <div className="ourservice-item transition">
                        <h4>{team.name}</h4>
                        <p>{team.fullName}</p>
                        <p>No Of Rosters: {team.roster.length}</p>
                    </div>
                </Link>
            </div>
        ));
        return (<React.Fragment>
            <div className="RosterBox pt-5">
                <div className="container">
                    <div className="row">
                        {teamsList}
                        </div>
                    </div>
                </div>
        </React.Fragment>);
    }
}

export default Home;
