import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import {CSSTransition} from 'react-transition-group';

import Header from './components/Header/Header';
import AppContext from './context/AppContext';
import constants from './constants';
import LandingPage from './components/LandingPage/LandingPage';
import Project from './components/Project/Project';
import {agro} from './projects';

// import logo from './logo.svg';
import './App.css';


const projects = [
    agro,
    agro
];

class App extends Component {

    constructor(props) {
        super(props)

        this.changeMode = (mode) => {
            // console.log('App > changeMode, mode:', mode);
            if (mode !== this.state.mode) {
                this.setState({mode})
            }
        };
    
        this.changeIndex = (index) => {
            // console.log('App > changeMode, index:', index);
            if (index !== this.state.index || this.state.mode !== constants.MODE_CASE_STUDY) {
                this.setState({
                    index,
                    mode: constants.MODE_CASE_STUDY
                });
            }
        };

        this.changeDirection = (direction) => {
            const {index} = this.state;
            const newIndex = this.getNewIndex(index, direction);
            if (index !== newIndex) {
                this.setState({
                    index: newIndex
                });
            }
        };

        this.state = {
            mode: constants.MODE_LANDING_PAGE, // constants.MODE_CASE_STUDY, // constants.MODE_LANDING_PAGE,
            index: 0,
            changeMode: this.changeMode,
            changeIndex: this.changeIndex,
            changeDirection: this.changeDirection
        };

        window.ralston = window.ralston || {};
        window.ralston.changeDirection = this.changeDirection;
    }

    getNewIndex(index, dir) {
        const l = projects.length;
        if (dir === 'next') {
            return index > l - 2 ? 0 : index + 1;
        } else {
            return index < 1 ? l - 1 : index - 1;
        }
        return index;

    }

    componentDidUpdate(nextProps, nextState) {
        // const {index} = this.state;
        // if (index !== nextState.index) {
        //     document.documentElement.scrollTop = 5000;
        // }
    }

    render() {
        const timeout = {
            enter: 1100,
            exit: 550,
        };

        const {index, mode} = this.state;
        // const CaseStudy = caseStudies[index];
        const containerClass = classnames('ChrisRalston__content-container', {
            'ChrisRalston__content-container--landing-page': mode === constants.MODE_LANDING_PAGE,
            'ChrisRalston__content-container--case-study': mode === constants.MODE_CASE_STUDY
        })
        return (
            <AppContext.Provider value={this.state}>
                <Fragment>
                <AppContext.Consumer>
                    {({changeMode}) => (<Header changeMode={changeMode}/>)}
                </AppContext.Consumer>
                    <CSSTransition
                        in={mode === constants.MODE_LANDING_PAGE}
                        timeout={timeout}
                        classNames="LandingPage-transition"
                        unmountOnExit
                        mountOnEnter
                        appear
                    >
                        <AppContext.Consumer>
                            {({changeMode, changeIndex}) => (
                                <LandingPage
                                    changeMode={changeMode}
                                    changeIndex={changeIndex}
                                />
                            )}
                        </AppContext.Consumer>
                    </CSSTransition>
                    {projects.map((project, i) => (
                        <CSSTransition
                            key={`project-${i}`}
                            in={mode === constants.MODE_CASE_STUDY && index === i}
                            timeout={timeout}
                            classNames={`Project-transition`}
                            unmountOnExit
                            mountOnEnter
                            appear
                        >
                            <Project project={projects[i]}/>
                        </CSSTransition>
                    ))}
                </Fragment>
            </AppContext.Provider>
        );
    }
}

export default App;
