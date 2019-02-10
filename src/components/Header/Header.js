import React, { Component } from 'react';
import classnames from 'classnames';
import AppContext from '../../context/AppContext';
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
                    action: this.onAboutAction
                },
                {
                    title: 'Contact',
                    action: this.onContactAction
                }
            ]
        }
    }

    onWorkAction = () => {
        console.log('onWorkAction');
    }

    onAboutAction = () => {
        console.log('onAboutAction');
    }

    onContactAction = () => {
        console.log('onContactAction');
    }

    getLinkClasses(index) {
        return classnames('Header__link', 'Header__item', {});
    }

    render() {
        const {links} = this.state;
        console.log('links:', links);
        return (
            <div className="Header-container">
                <header
                    className="Header spintro"
                    style={{
                        'animationDelay': `${1000}ms`
                    }}
                >
                    <div className="Header__logo Header__item">{'Chris Ralston'}</div>
                    <nav className="Header__nav">
                    {
                        links.map((link, index) => (
                            <div
                                key={`nav-item-${index}`}
                                role="button"
                                tabIndex="0"
                                onClick={link.onClick}
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
