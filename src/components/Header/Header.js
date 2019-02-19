import React, { Component } from 'react';
import classnames from 'classnames';

import AppContext from '../../context/AppContext';
import constants from '../../constants';

import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    title: 'Work',
                    handler: this.onWorkAction
                },
                {
                    title: 'About',
                    handler: this.onAboutAction
                },
                {
                    title: 'Contact',
                    handler: this.onContactAction
                }
            ]
        }
    }

    onWorkAction = () => {
        // console.log('onWorkAction, this.props.changeMode:', this.props.changeMode);
        if (this.props.changeMode) {
            this.props.changeMode(constants.MODE_LANDING_PAGE);
        }
    }

    onAboutAction = () => {
        // console.log('onAboutAction');
    }

    onContactAction = () => {
        // console.log('onContactAction');
    }

    getLinkClasses(index) {
        return classnames('Header__link', 'Header__item', 'title', {});
    }

    render() {
        const {links} = this.state;
        return (
            <div className="Header-container">
                <header
                    className="Header spintro"
                    style={{
                        'animationDelay': `${1000}ms`
                    }}
                >
                    <div className="Header__logo Header__item title">{'Chris Ralston'}</div>
                    <nav className="Header__nav">
                    {
                        links.map((link, index) => (
                            <div
                                key={`nav-item-${index}`}
                                role="button"
                                tabIndex="0"
                                onClick={link.handler}
                                className={this.getLinkClasses(index)}
                            >
                                {link.title}
                            </div>
                        ))
                    }
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;
