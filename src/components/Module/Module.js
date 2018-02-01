import React, { Component } from 'react';
import './Module.css';

class Module extends Component {

    render() {
        const {
            width,
            backgroundColor,
            image,
            text,
            imagePosition,
            stacked
        } = this.props;
        // console.log('Module > render\n\tthis.props:', this.props);
        const style = {
            backgroundColor: backgroundColor ? backgroundColor : '',
            backgroundImage: image ? `url(${image}` : '',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        };
        const classname = `Module ${stacked ? 'Module--stacked ' : ''}col-${width}`;
        return (
            <div
                className={classname}
                style={style}
            >
                {text &&
                    text
                }
            </div>
        );
    }
}

export default Module;
