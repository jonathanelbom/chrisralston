import React, { Component } from 'react';
import classnames from 'classnames';
import './NavigationButton.css';

class NavigationButton extends Component {

    constructor(props) {
        super(props);

        this.onMouseOver = this.onMouseOverOut.bind(this, 'over');
        this.onMouseOut = this.onMouseOverOut.bind(this, 'out');
    }

    onMouseOverOut(actionType) {
        const {type, onOverOrOut} = this.props;
        if (typeof onOverOrOut === 'function') {
            this.props.onOverOrOut(type, actionType);
        }
    }

    onClick = () => {
        const {type} = this.props;
        // console.log('click, type:', type);
        if (window && window.ralston && window.ralston.changeDirection) {
            window.ralston.changeDirection(type)
        }
    }
    render() {
        const {width, backgroundColor, text, type, state} = this.props;
        // console.log('NavigationButton > render\n\tthis.props:', this.props);
        const label = `${type === 'prev' ? 'Previous' : 'Next'} project`;
        const rootClass = classnames('NavigationButton', {
            'NavigationButton--prev' : type !== 'next',
            'NavigationButton--next' : type === 'next',
            'NavigationButton--under' : state === 'under',
            'NavigationButton--over' : state === 'over',

        });
        const textClass = classnames('NavigationButton__text', {
            'NavigationButton__text--prev' : type !== 'next',
            'NavigationButton__text--next' : type === 'next',
        });
        const lineClass = classnames('NavigationButton__line', {
            'NavigationButton__line--prev' : type !== 'next',
            'NavigationButton__line--next' : type === 'next',
        });
        return (
            <div
                className={rootClass}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onClick={this.onClick}
            >
                <div className={textClass}>{label}</div>
                <div className={lineClass}></div>
            </div>
        );
    }
}

export default NavigationButton;
