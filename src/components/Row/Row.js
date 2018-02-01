import React, {Component} from 'react';
import Module from '../Module/Module';
import StackedModule from '../Module/StackedModule';
import NavigationModule from '../Module/NavigationModule';

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
                    if (module.type === 'stacked') {
                        return <StackedModule key={i} {...module} />;
                    } else if (module.type === 'nav') {
                        return <NavigationModule key={i} {...module} />;
                    }
                    return <Module key={i} {...module} />;
                })}
            </div>
        );
    }
}

export default Row;
