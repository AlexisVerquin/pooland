// ./assets/components/Languages.js
    
import React, {Component} from 'react';
import axios from 'axios';
    
class Languages extends Component {
    constructor() {
        super();
        this.state = { languages: [], loading: true};
    }
    
    componentDidMount() {
        this.getUsers();
    }
    
    getUsers() {
       axios.get(`http://pooland.test/api/languages`).then(languages => {
           this.setState({ languages: languages.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of Languages</span>Created with <i
                                className="fa fa-heart"></i> by yemiwebby</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.languages.map(language =>
                                    <div className="col-md-10 offset-md-1 row-block" key={language.id}>
                                        <ul id="sortable">
                                            <li>
                                                <h4>  {language.name} </h4>
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
export default Languages;