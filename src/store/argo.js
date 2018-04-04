import React from 'react';
import computer from '../img/argo/computer.png';
import farm from '../img/argo/farm.png';
import mark from '../img/argo/the-mark.png';
import dashboards from '../img/argo/floating-dashboards.png';
import dashboard from '../img/argo/black-dashboard.png'
import phone1 from '../img/argo/phone-1.png';
import phone2 from '../img/argo/phone-2.png';
import phone3 from '../img/argo/phone-3.png';
import phone4 from '../img/argo/phone-4.png';
import phone from '../img/argo/phone-in-hand.png';
import watch from '../img/argo/watch-on-arm.png';
import watches from '../img/argo/watches.png';
import videoBg from '../img/argo/video-bg.png';

const COLORS = {
    dark: '#171719',
    darkGray: '#3E4648',
    lightGray: '#E6ECEF',
    white: '#FFFFFF'
}
const argo = {
    id: 'argo',
    rows: [
        // ------------ row ------------
        {
            type: 'hero',
            modules: [
                // ---- module ----
                {
                    width: 12,
                    backgroundColor: COLORS.dark,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${computer}`,
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
                    backgroundColor: COLORS.white,
                    elements: [
                        {
                            type: 'markup',
                            markup: (
                                <div className="text-module text-module--dark">
                                    <div className="group">
                                        <div className="title">Client</div>
                                        <div className="content">Argo Energy</div>
                                    </div>
                                    <div className="group">
                                        <div className="title">Role</div>
                                        <div className="content">Sr. Interaction Designer</div>
                                    </div>
                                    <div className="group">
                                        <div className="title">Services</div>
                                        <div className="content">
                                            <div>Product Design</div>
                                            <div>Design Research</div>
                                            <div>Interaction Design</div>
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
                    backgroundColor: COLORS.darkGray,
                    elements: [
                        {
                            type: 'markup',
                            markup: (
                                <div className="text-module text-module--light">
                                    <span>Agro Energy is a leader in energy systems in the agricultural sector in the Netherlands. Agro approached our team at TAM/TAM to update their platform, Energy Manager, to better accommodate greenhouse farmers' ability to buy and sell energy in real-time</span>
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
                    width: 8,
                    backgroundColor: COLORS.dark,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${farm}`,
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
                            backgroundColor: COLORS.dark,
                            elements: [
                                {
                                    type: 'image',
                                    backgroundData: {
                                        backgroundImage: `url(${mark}`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }
                                }
                            ]
                        },
                        {
                            backgroundColor: COLORS.white,
                            elements: [
                                {
                                    type: 'markup',
                                    markup: (
                                        <div className="text-module text-module--dark">
                                            <div className="group">
                                                <div className="title">The Dial</div>
                                                <div className="content">A confident new mark for a refreshed platform</div>
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
                    backgroundColor: COLORS.lightGray,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${dashboards}`,
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
                    backgroundColor: COLORS.dark,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${dashboard}`,
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
                    type: 'stacked',
                    width: 4,
                    modules: [
                        {
                            backgroundColor: COLORS.white,
                            elements: [
                                {
                                    type: 'markup',
                                    markup: (
                                        <div className="text-module text-module--dark">
                                            <div className="group">
                                                <div className="title">Energy Manager, whereever</div>
                                                <div className="content">Trade on the go, from the palm of your hand</div>
                                            </div>
                                        </div>
                                    )
                                }
                            ]
                        },
                        {
                            backgroundColor: COLORS.dark,
                        }
                    ]
                },
                // ---- module ----
                {
                    width: 8,
                    backgroundColor: COLORS.white,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${phone}`,
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
                    width: 6,
                    backgroundColor: COLORS.dark,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${phone1}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                },
                // ---- module ----
                {
                    width: 6,
                    backgroundColor: COLORS.dark,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${phone2}`,
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
                    width: 6,
                    backgroundColor: COLORS.dark,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${phone3}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                },
                // ---- module ----
                {
                    width: 6,
                    backgroundColor: COLORS.dark,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${phone4}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                }
            ]
        },
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
                                backgroundImage: `url(${watch}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                }
            ]
        },
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
                                backgroundImage: `url(${watches}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                }
            ]
        },
        {
            modules: [
                // ---- module ----
                {
                    width: 12,
                    backgroundColor: COLORS.lightGray,
                    elements: [
                        {
                            type: 'image',
                            backgroundData: {
                                backgroundImage: `url(${videoBg}`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }
                        }
                    ]
                }
            ]
        },
        {
            modules: [
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
                                            <div>Julius Simon</div>
                                            <div>Danijel Bonacic</div>
                                            <div>Mark Toonen</div>
                                            <div>Keyjay Entel</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]
                },
                {
                    width: 8,
                    type: 'nav',
                    backgroundColor: COLORS.white
                }
            ]
        }
    ]
}

export default argo;
