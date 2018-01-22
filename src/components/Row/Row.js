import React, {Component} from 'react';
import Module from '../Module/Module';

import './Row.css';

class Row extends Component {
    render() {
        // console.log('render > Row\n\t this.props:', this.props);
        const {
            modules,
            type
        } = this.props;
        return (
            <div className={`Row${type === 'hero' ? ' Row--hero' : ''}`} >
                {modules.map((module, i) => {
                    return <Module key={i} {...module} />;
                })}
            </div>
        );
    }
}

export default Row;
