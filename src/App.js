import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CaseStudy from './components/CaseStudy/CaseStudy';
import argo from './store/argo';
import viggle from './store/viggle';

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="App">
                <CaseStudy {...viggle} />
            </div>
        );
    }
}

export default App;
