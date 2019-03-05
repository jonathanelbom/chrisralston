import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';
import './LandingPage.css';

// images
import overImage from '../../img/argo/hover_sample.png';
import overImage2 from '../../img/argo/hover_sample2.png';


const jobs = [
    {employer: 'Outdoor Voices', year: '2018', state: 'up'},
    {employer: 'HomeAway', year: '2017', state: 'up' },
    {employer: 'American Express', year: '2016', state: 'up'},
    {employer: 'Agro Energy', year: '2016', state: 'up'},
    {employer: 'Viggle', year: '2016', state: 'up'}
];

const images = [
    overImage,
    overImage2
];

class LandingPage extends Component {
    onMouseMove = (e) => {}
    onClick = (e) => {
        const index = parseInt(e.target.dataset.index, 10);
        // console.log('LandingPage > onClick, index:', index);
        this.props.changeIndex(index);
    }

    constructor(props) {
        super(props);

        this.state = {
            overIndex: -1
        };
    }

    onMouseOver = (e) => { 
        const index = parseInt(e.target.dataset.index, 10);
        
        // console.log('over, index:', index);

        if (this.state.overIndex !== index) {
            this.setState({
                overIndex: index
            });
        }
    }

    onMouseOut = (e) => { 
        const index = parseInt(e.target.dataset.index, 10);
    
        
        if (this.state.overIndex === index) {
            
            // console.log('out > index:', index);

            this.setState({
                overIndex: -1
            });
        }

    }

    getSetJobRef = (index) => {
        return (ref) => {
            this[`job-${index}`] = ref;
        }
    }

    getJobClasses(job, index) {
        const {overIndex} = this.state
        return classnames('LandingPage__job', {
            'LandingPage__job--over': overIndex === index
        });
    }

    render() {
        const {overIndex} = this.state;
        return (
            <div className="LandingPage">
                    {images.map((image, index) => (
                        <CSSTransition
                            key={`landing-page-image-${index}`}
                            in={overIndex === index}
                            timeout={550}
                            classNames="LandingPage-image-transition"
                            unmountOnExit
                            mountOnEnter
                            appear
                        >
                            <div className="LandingPage__hover-image-container">
                                <img
                                    className="LandingPage__hover-image"
                                    src={image}
                                />
                            </div>
                        </CSSTransition>
                    ))}
                <ul className="LandingPage__jobs">
                {
                    jobs.map((job, index) => (
                        <li
                            className={this.getJobClasses(job, index)}
                            style={{
                                'animationDelay': `${index * 200 + 1500}ms`
                            }}
                            data-index={index}
                            key={`job-${index}`}
                            ref={this.getSetJobRef(index)}
                            onMouseOver={this.onMouseOver}
                            onMouseMove={this.onMouseMove}
                            onMouseOut={this.onMouseOut}
                            onClick={this.onClick}
                        >
                            <div className="LandingPage__employeer title">
                                {job.employer}
                            </div>
                            <div className="LandingPage__year">
                                {job.year}
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default LandingPage;
