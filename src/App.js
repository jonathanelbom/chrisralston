import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CaseStudy from './components/CaseStudy/CaseStudy';
import argo from './store/argo';
import viggle from './store/viggle';

const caseStudyMap = {
    '#argo'   : argo,
    '#viggle' : viggle
};

const caseStudies = [
    viggle,
    argo
];

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {index: 0};

        window.ralston = window.ralston || {};
        window.ralston.changeDirection = this.changeDirection;
    }

    changeDirection = (direction) => {
        const {index} = this.state;
        const newIndex = this.getNewIndex(index, direction);
        if (index !== newIndex) {
            this.setState({index: newIndex});
        }
    }

    getNewIndex(index, dir) {
        const l = caseStudies.length;
        if (dir === 'next') {
            return index > l - 2 ? 0 : index + 1;
        } else {
            return index < 1 ? l - 1 : index - 1;
        }
        return index;

    }

    componentDidUpdate(nextProps, nextState) {
        const {index} = this.state;
        if (index !== nextState.index) {
            document.documentElement.scrollTop = 0;
        }
    }

    render() {
        const {index} = this.state;
        const caseStudy = caseStudies[index];
        return (
            <div className="App">
                <CaseStudy {...caseStudy} />
            </div>
        );
    }
}

export default App;
