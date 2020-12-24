import React, { Component } from 'react';

import '../styles/fentity-directory.css'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
class Fentities extends Component {
    render() {
        const fentitiesCategory = this.props.match.params.fentities
        const fentities = this.props.state[fentitiesCategory]
       
        return (
            <div>
               
                <h1 id="fentities-title">{fentitiesCategory}</h1>
                <div id="fentities-container">
                    {fentities.map(f => {
                        return (
                            <div className="mini">
                                <img className="directory-img" src={f.imgUrl} alt="" />
                                <Link to={`/directory/${fentitiesCategory}/${f.name}`}>  <span>{f.name}</span>  </Link>
                            </div>  ) })}
                </div>
            </div>)
    }
}

export default Fentities