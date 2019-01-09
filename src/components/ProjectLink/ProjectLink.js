import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './ProjectLink.css';

class ProjectLink extends Component {

    static propTypes = {
        over: PropTypes.bool,
        otherOver: PropTypes.bool
    };

    static defaultProps = {
        over: false,
        otherOver: false
    };

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        const {text, id, over, otherOver} = this.props;
        return (nextProps.over !== over
            || nextProps.id !== id
            || nextProps.text !== text
            || nextProps.otherOver !== otherOver
        );
    }

    onOverOut = (e) => {
        const {over, id, onOverOut} = this.props;
        console.log('ProjectLink > onOverOut, e:', e, ', id:', id, 'over:', over);
        // if (!over) {
        onOverOut({type: e.type, id: id})
        // }
    }

    getNumFromRange([start, end]) {
        const val = start + (Math.random() * (end - start));
        // console.log('[', start, ', ', end, '], val:', val);
        return val;
    };

    getLetterStyle({over, otherOver}) {
        if (over) {
            return {
                opacity: '1',
                zIndex: '2'
            }
        } else if (otherOver) {
            return {
                //transform: `translateZ(${this.getNumFromRange([-300, 300])}px`,
                // transform: `perspective(600px) rotateY(${this.getNumFromRange([-60, 60])}deg) translate3d(${this.getNumFromRange([90, 270])}px, ${this.getNumFromRange([-400, 400])}px, ${this.getNumFromRange([-700, 700])}px)`,
                //transform: `perspective(600px) translate3d(${this.getNumFromRange([-100, 100])}px, ${this.getNumFromRange([-100, 100])}px, ${this.getNumFromRange([-300, 300])}px)`,
                //transform: `perspective(600px) rotate3d(.5, .5, .5) translateZ(${this.getNumFromRange([-1000, 1000])}px)`,
                // opacity: '0',
                transform: `perspective(600px) translate3d(${this.getNumFromRange([-100, 100])}px, ${this.getNumFromRange([-100, 100])}px, ${this.getNumFromRange([-900, -300])}px)`,
                pointerEvents: 'none'
            }
        }
        return {
            transform: `perspective(600px) translate3d(${this.getNumFromRange([-100, 100])}px, ${this.getNumFromRange([-100, 100])}px, ${this.getNumFromRange([-300, 300])}px)`,
        };

    }
    render() {
        const {text, id, over, otherOver} = this.props;
        const rootClass = classnames('ProjectLink', `ProjectLink--${id}`, {});
        const wordClass = classnames('ProjectLink__word', {});
        const letterClass = classnames('ProjectLink__letter', `ProjectLink__letter--${id}`, 'medium', {
            'ProjectLink__letter--over': over,
            'ProjectLink__letter--otherOver': otherOver
        });

        // console.log('this.props:', this.props);

        const wordStyle = {
            perspective: '600px'
        };

        return (
            <span
                key={`link-${id}`}
                className={rootClass}
                onMouseOver={this.onOverOut}
                onMouseOut={this.onOverOut}
            >
                {text.split(' ').map((word, index) => (
                    [<span
                        className={`ProjectLink__word ProjectLink__word--${word}-${index}`}
                        key={`${word}-${index}`}
                        style={wordStyle}
                    >
                        {
                            word.split('').map((letter, jndex) => (
                                <span
                                    className={letterClass}
                                    key={`${word}-${index}-${jndex}-${letter}`}
                                    style={this.getLetterStyle({over, otherOver})}
                                >
                                    {letter}
                                </span>
                            ))
                        }
                    </span>,
                    <span className={letterClass}>
                        {' '}
                    </span>]
                ))}
            </span>
        );

        // return (
        //     <span className={rootClass}>
        //         {text.split('').map((letter, index) => (
        //             <span
        //                 className={letterClass}
        //                 key={`${id}_letter=${index}`}
        //             >
        //                 {letter}
        //             </span>
        //         ))}
        //     </span>
        // );
    }
}

export default ProjectLink;
