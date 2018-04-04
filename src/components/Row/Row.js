import React, {Component} from 'react';
import Module from '../Module/Module';
import StackedModule from '../Module/StackedModule';
import NavigationModule from '../Module/NavigationModule';
import LandingPageModule from '../Module/LandingPageModule';

import './Row.css';

class Row extends Component {
    getModule(type, data, index) {
        switch (type) {
            case 'stacked':
                return <StackedModule key={index} {...data} />;
            case 'nav':
                return <NavigationModule key={index} {...data} />;
            case 'landing':
                return <LandingPageModule key={index} {...data} />;
            default:
                return <Module key={index} {...data} />;
        }
    };

    render() {
        // console.log('render > Row\n\t this.props:', this.props);
        const {
            modules,
            type
        } = this.props;
        return (
            <div className={`Row${type === 'hero' ? ' Row--hero' : ''}`} >
                {modules.map((module, i) => {
                    const {type} = module;
                    return this.getModule(type, module, i);
                })}
            </div>
        );
    }
}

export default Row;
