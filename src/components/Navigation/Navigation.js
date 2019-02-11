import React, { Component } from 'react';
import classnames from 'classnames';

import NavigationButton from './NavigationButton';

import './Navigation.css';

class Navigation extends Component {

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
        const nextState = prev === 'over' ? 'under' : next;
        const prevState = next === 'over' ? 'under' : prev;
        return (
            <div className="Navigation block--content-full-width">
                <div className="Navigation__wrapper">
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
            </div>
        );
    }
}

export default Navigation;
