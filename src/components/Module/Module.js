import React, { Component } from 'react';
import classnames from 'classnames';
import './Module.css';

class Module extends Component {

    elementsMap = {
        'image': this.renderImage,
        'markup': this.renderMarkup,
    }

    renderElements(elements) {
        let elems = [];
        console.log('elements:', elements);
        if (elements && elements.length > 0) {
            elems = elements.map((element, i) => {
                const {type} = element;
                console.log('this.elementsMap:', this.elementsMap, ', type:', type);
                if (this.elementsMap[type])
                return this.elementsMap[type](element, i)
            });
        }
        console.log('elems:', elems);
        return elems;
    }

    renderImage(data, i) {
        const style = data.backgroundData || {};
        return (
            <div
                key={i}
                className="Module__element Module__element--image"
                style={style}
            />
        );
    }

    renderMarkup(data, i) {
        console.log('data.markup:', data.markup)
        return React.cloneElement(
            data.markup,
            {key: i}
        );
    }

    render() {
        const {
            width,
            backgroundColor,
            stacked,
            elements
        } = this.props;
        console.log('Module > render\n\tthis.props:', this.props);
        const style = {
            backgroundColor: backgroundColor || ''
        };
        const rootClass = classnames('Module', `col-${width}`, {
            'Module--stacked': stacked
        });
        const wrapperClass = 'Module__inner-wwrapper';
        return (
            <div className={rootClass} style={style}>
                <div className={wrapperClass}>
                    {this.renderElements(elements)}
                </div>
            </div>
        );
    }
}

export default Module;
