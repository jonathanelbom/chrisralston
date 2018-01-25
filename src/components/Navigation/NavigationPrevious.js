import React, { Component } from 'react';
import './Module.css';

class NavigationPrevious extends Component {

    render() {
        const {
            width,
            backgroundColor
        } = this.props;
        console.log('Module > render\n\tthis.props:', this.props);
        const classname = `Module col-${width}`;
        return (
            <div
                className={classname}
                style={style}
            >

            </div>
        );
    }
}

export default NavigationPrevious;
