import React, { Component } from 'react';
import classnames from 'classnames';
import ProjectLink from '../ProjectLink/ProjectLink';
import './Module.css';

const PROJECTS = [
    {
        id: 'argo',
        text: 'A new way to trade green energy.'
    },
    {
        id: 'homeaway',
        text: 'Discovering a better vacation home.'
    },
    {
        id: 'amex',
        text: 'A true digital banking alternative.'
    },
    {
        id: 'viggle',
        text: 'The first loyalty program for TV.'
    }
];

class LandingPageModule extends Component {

    onOverOut = (e) => {
        console.log('Module > onOverOut, e.target:', e.target);
    }

    render() {
        const {
            width,
            backgroundColor,
            stacked,
            elements
        } = this.props;
        console.log('LandingPageModule > render\n\tthis.props:', this.props);
        const style = {
            backgroundColor: backgroundColor || ''
        };
        const rootClass = classnames('Module', `col-${width}`, {
        });
        const wrapperClass = 'Module__inner-wrapper--landing-page';
        return (
            <div className={`Module Module--landing-page col-${width}`} style={style}>
                <div className={wrapperClass}>
                    {PROJECTS.map((project, index) => (
                        <ProjectLink
                            {...project}
                            key={`project-link-${index}`}
                            onOverOut={this.onOverOut}
                        />
                    ))}
                </div>
            </div>
        );
    }

    // elementsMap = {
    //     'image': this.renderImage,
    //     'markup': this.renderMarkup,
    // }
    //
    // renderElements(elements) {
    //     let elems = [];
    //     // console.log('elements:', elements);
    //     if (elements && elements.length > 0) {
    //         elems = elements.map((element, i) => {
    //             const {type} = element;
    //             // console.log('this.elementsMap:', this.elementsMap, ', type:', type);
    //             if (this.elementsMap[type])
    //             return this.elementsMap[type](element, i)
    //         });
    //     }
    //     // console.log('elems:', elems);
    //     return elems;
    // }
    //
    // renderImage(data, i) {
    //     const style = data.backgroundData || {};
    //     return (
    //         <div
    //             key={i}
    //             className="Module__element Module__element--image"
    //             style={style}
    //         />
    //     );
    // }
    //
    // renderMarkup(data, i) {
    //     // console.log('data.markup:', data.markup)
    //     return React.cloneElement(
    //         data.markup,
    //         {key: i}
    //     );
    // }
    //
    // render() {
    //     const {
    //         width,
    //         backgroundColor,
    //         stacked,
    //         elements
    //     } = this.props;
    //     console.log('LandingPageModule > render\n\tthis.props:', this.props);
    //     const style = {
    //         backgroundColor: backgroundColor || ''
    //     };
    //     const rootClass = classnames('Module', `col-${width}`, {
    //         'Module--stacked': stacked
    //     });
    //     const wrapperClass = 'Module__inner-wwrapper';
    //     return (
    //         <div className={rootClass} style={style}>
    //             <div className={wrapperClass}>
    //                 {this.renderElements(elements)}
    //             </div>
    //         </div>
    //     );
    // }
}

export default LandingPageModule;
