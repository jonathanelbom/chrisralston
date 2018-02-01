import React, { Component } from 'react';
import Module from './Module.js';
import './Module.css';

class StackedModule extends Component {

    render() {
        const {
            width,
            modules = []
        } = this.props;
        const classname = `StackedModule col-${width}`;

        // console.log('StackedModule > render\n\tthis.props:', this.props);
        return (
            <div className={classname}>
                {modules.map((module, i) => {
                    return (
                        <Module {...{...module, ...{stacked: true}}} key={i} />
                    );
                })}
            </div>
        );
    }
}

export default StackedModule;
