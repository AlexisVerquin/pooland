// ./assets/components/Languages.js

import React, {Component} from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor() {
        super();
        this.state = { profile: [], loading: true};
    }

    componentDidMount() {
        this.getProfile();
    }

    getProfile() {
       axios.get(`http://pooland.test/api/profile`).then(profile => {
           this.setState({ data: profile.data, loading: false})
       })
    }

    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center">Profile</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.profile.map(profil =>
                                    <div className="col-md-4 offset-md-1 row-block" key={profil.id}>
                                        <ul id="sortable">
                                            <li>
                                                <h4>  {profil.name} </h4>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}
export default Profile;