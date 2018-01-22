import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CaseStudy from './components/CaseStudy/CaseStudy';
import argo from './store/argo';

class App extends Component {
    render() {

        return (
            <div className="App">
                <CaseStudy {...argo} />
            </div>
        );
    }
}

export default App;
