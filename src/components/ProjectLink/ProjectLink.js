import React, { Component } from 'react';
import classnames from 'classnames';
import './ProjectLink.css';

class ProjectLink extends Component {

    constructor(props) {
        super(props);

        this.state = {
            words: this.createWords(this.props)
        }
    }

    createWords({text}) {
        // const words = text.split(' ');
        // const hash = words.map((word, index) => (
        //     word.split('').map((letter, jndex) => (
        //         letter
        //     ))
        // ));
        // console.log('words:', words);
        // console.log('hash:', hash);
        // return words;
        return [];
    }

    onOverOut = (e) => {
        console.log('ProjectLink > onOverOut, e.type:', e.type);
    }

    render() {
        const {text, id} = this.props;
        const rootClass = classnames('ProjectLink', `ProjectLink--${id}`, {});
        const wordClass = classnames('ProjectLink__word', {});
        const letterClass = classnames('ProjectLink__letter', `ProjectLink__letter--${id}`, 'medium', {});

        console.log('this.props:', this.props);

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
                    >
                        {
                            word.split('').map((letter, jndex) => (
                                <span
                                    className={letterClass}
                                    key={`${word}-${index}-${jndex}-${letter}`}
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
