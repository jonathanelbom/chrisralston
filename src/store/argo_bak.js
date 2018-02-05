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
    rows: [
        {
            type: 'hero',
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.dark,
                    image: computer,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 4,
                    backgroundColor: COLORS.white,
                    textColor: 'dark',
                    text: (
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
                },
                {
                    width: 8,
                    backgroundColor: COLORS.darkGray,
                    text: (
                        <div className="text-module text-module--light">
                            <span>Agro Energy is a leader in energy systems in the agricultural sector in the Netherlands. Agro approached our team at TAM/TAM to update their platform, Energy Manager, to better accommodate greenhouse farmers' ability to buy and sell energy in real-time</span>
                        </div>
                    )
                }
            ]
        },
        {
            modules: [
                {
                    width: 8,
                    backgroundColor: COLORS.dark,
                    image: farm,
                    imagePosition: 'center'
                },
                {
                    type: 'stacked',
                    width: 4,
                    modules: [
                        {
                            backgroundColor: COLORS.dark,
                            image: mark,
                            imagePosition: 'center'
                        },
                        {
                            backgroundColor: COLORS.white,
                            text: (
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
        },
        {
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.lightGray,
                    image: dashboards,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.dark,
                    image: dashboard,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    type: 'stacked',
                    width: 4,
                    modules: [
                        {
                            backgroundColor: COLORS.white,
                            text: (
                                <div className="text-module text-module--dark">
                                    <div className="group">
                                        <div className="title">Energy Manager, whereever</div>
                                        <div className="content">Trade on the go, from the palm of your hand</div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            backgroundColor: COLORS.dark,
                        }
                    ]
                },
                {
                    width: 8,
                    backgroundColor: COLORS.white,
                    image: phone,
                    imagePosition: 'center'
                },

            ]
        },
        {
            modules: [
                {
                    width: 6,
                    backgroundColor: COLORS.dark,
                    image: phone1,
                    imagePosition: 'center'
                },
                {
                    width: 6,
                    backgroundColor: COLORS.dark,
                    image: phone2,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 6,
                    backgroundColor: COLORS.dark,
                    image: phone3,
                    imagePosition: 'center'
                },
                {
                    width: 6,
                    backgroundColor: COLORS.dark,
                    image: phone4,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.white,
                    image: watch,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.white,
                    image: watches,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.lightGray,
                    image: videoBg,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 4,
                    backgroundColor: COLORS.lightGray,
                    text: (
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
