import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './LandingPage.css';

const jobs = [
    {employer: 'Outdoor Voices', year: '2018', state: 'up'},
    {employer: 'HomeAway', year: '2017', state: 'up' },
    {employer: 'American Express', year: '2016', state: 'up'},
    {employer: 'Agro Energy', year: '2016', state: 'up'},
    {employer: 'Viggle', year: '2016', state: 'up'}
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
        return classnames('LandingPage__job', 'spintro', {
            'LandingPage__job--over': overIndex === index
        });
    }

    render() {
        return (
            <div className="LandingPage">
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
                            <div className="LandingPage__employeer">
                                {job.employer}
                            </div>
                            <div className="LandingPage__year">
                                {job.year}
                            </div>
                        </li>
                    ))
                }
                </ul>
                <div className="LandingPage__photo">
                </div>
            </div>
        );
    }
}

export default LandingPage;
