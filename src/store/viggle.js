import React from 'react';
import hero from '../img/viggle/hero.png';
import swatch from '../img/viggle/swatch.png';
import logoLockup from '../img/viggle/logo-lockup.png';
import logo from '../img/viggle/logo.png';
import icons from '../img/viggle/icons.png'
import waves from '../img/viggle/computer-waves.png';
import bbad from '../img/viggle/breaking-bad.png';

const COLORS = {
    lightGray: '#E6ECEF',
    white: '#FFFFFF',
    yellow: '#FFDA1A',
    purple: '#A82B9F',
    grayBg: '#F4F5F7'
}
const viggle = {
    rows: [
        // ------------ row ------------
        {
            type: 'hero',
            modules: [
                // ---- module ----
                {
                    width: 12,
                    backgroundColor: COLORS.yellow,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${hero}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                }
            ]
        },
        // ------------ row ------------
        {
            modules: [
                // ---- module ----
                {
                    width: 4,
                    backgroundColor: COLORS.lightGray,
                    elements: [
                        {
                            type: 'markup',
                            markup: (
                                <div className="text-module text-module--dark">
                                    <div className="group">
                                        <div className="title">Client</div>
                                        <div className="content">Viggle Inc.</div>
                                    </div>
                                    <div className="group">
                                        <div className="title">Role</div>
                                        <div className="content">Product Designer</div>
                                    </div>
                                    <div className="group">
                                        <div className="title">Services</div>
                                        <div className="content">
                                            <div>Product Design</div>
                                            <div>Art Direction</div>
                                            <div>Motion Design</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]
                },
                // ---- module ----
                {
                    width: 8,
                    backgroundColor: COLORS.white,
                    elements: [
                        {
                            type: 'markup',
                            markup: (
                                <div className="text-module text-module--dark">
                                    <span>Beginning as a startup with an ambitios goal, Viggle was created to bring fans even closer to their favorite shows  while connecting content creators with a highly engaged audience. To do so, Viggle set out to create the first-ever loyalty program for television, where real fans are given real rewards for watching their favorite shows.</span>
                                </div>
                            )
                        }
                    ]
                }
            ]
        },
        // ------------ row ------------
        {
            modules: [
                // ---- module ----
                {
                    width: 12,
                    backgroundColor: COLORS.white,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${swatch}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                },
            ]
        },
        // ------------ row ------------
        {
            modules: [
                // ---- module ----
                {
                    width: 8,
                    backgroundColor: COLORS.grayBg,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${logoLockup}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                },
                // ---- module ----
                {
                    type: 'stacked',
                    width: 4,
                    modules: [
                        {
                            backgroundColor: COLORS.white,
                            elements: [
                                {
                                    type: 'image',
                                    backgroundData: {
                                        backgroundImage: `url(${logo}`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }
                                }
                            ]
                        },
                        {
                            backgroundColor: COLORS.yellow,
                            elements: [
                                {
                                    type: 'markup',
                                    markup: (
                                        <div className="text-module text-module--light">
                                            <div className="group">
                                                <div className="title">Watch TV.</div>
                                                <div className="content">Get Rewards.</div>
                                            </div>
                                        </div>
                                    )
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        // ------------ row ------------
        {
            modules: [
                // ---- module ----
                {
                    width: 12,
                    backgroundColor: COLORS.purple,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${icons}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                }
            ]
        },
        // ------------ row ------------
        {
            modules: [
                // ---- module ----
                {
                    width: 12,
                    backgroundColor: COLORS.white,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${waves}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                }
            ]
        },
        // ------------ row ------------
        {
            modules: [
                // ---- module ----
                {
                    width: 12,
                    backgroundColor: COLORS.purple,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${bbad}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                }
            ]
        },
        // ------------ row ------------
        {
            modules: [
                // ---- module ----
                {
                    width: 4,
                    backgroundColor: COLORS.lightGray,
                    elements: [
                        {
                            type: 'markup',
                            markup: (
                                <div className="text-module text-module--dark">
                                    <div className="group">
                                        <div className="title">Team</div>
                                        <div className="content">
                                            <div>Anthony Faria</div>
                                            <div>Ray Masaki</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]
                },
                // ---- module ----
                {
                    type: 'nav',
                    width: 8,
                    backgroundColor: COLORS.white,
                }
            ]
        }
    ]
}

export default viggle;
