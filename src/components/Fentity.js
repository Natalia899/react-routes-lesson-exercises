import React, { Component } from 'react';
import '../styles/fentity.css'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Fentity extends Component {
    render() {
        const match = this.props.match
        console.log(match);
        const fentitiesCategory = match.params.fentities
        const name = match.params.name
        
        const fentity = this.props.state[fentitiesCategory].filter(f => {
            return f.name.toLowerCase() === name.toLowerCase()
        })[0]

        return (
            <Router>
            <div id="creature-container">
               <Link to={`/directory/${fentitiesCategory}`}>Back</Link>
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
            </Router>
        )
    }
}

export default Fentity;
