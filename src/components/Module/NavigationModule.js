import React, { Component } from 'react';
import classnames from 'classnames';

import NavigationButton from '../Navigation/NavigationButton';

import './Module.css';

class NavigationModule extends Component {

    constructor(props) {
        super(props);
            this.state = {
                next: 'out',
                prev: 'out'
            }
    }

    onOverOrOut = (buttonType, overOrOut) => {
        // console.log('onOverOrOut\n\tbuttonType:', buttonType, '\n\toverOrOut:', overOrOut)
        this.setState({
            [buttonType]: overOrOut
        });
    }

    render() {
        const {width, backgroundColor} = this.props;
        const {next, prev} = this.state;
        const rootClass = `Module NavigationModule col-${width}`;
        const nextState = prev === 'over' ? 'under' : next;
        const prevState = next === 'over' ? 'under' : prev;
        return (
            <div className={rootClass}>
                <NavigationButton
                    state={prevState}
                    type="prev"
                    onOverOrOut={this.onOverOrOut}
                />
                <NavigationButton
                    state={nextState}
                    type="next"
                    onOverOrOut={this.onOverOrOut}
                />
            </div>
        );
    }
}

export default NavigationModule;
