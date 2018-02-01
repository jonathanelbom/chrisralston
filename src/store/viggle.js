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
        {
            type: 'hero',
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.yellow,
                    image: hero,
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
                },
                {
                    width: 8,
                    backgroundColor: COLORS.white,
                    text: (
                        <div className="text-module text-module--dark">
                            <span>Beginning as a startup with an ambitios goal, Viggle was created to bring fans even closer to their favorite shows  while connecting content creators with a highly engaged audience. To do so, Viggle set out to create the first-ever loyalty program for television, where real fans are given real rewards for watching their favorite shows.</span>
                        </div>
                    )
                }
            ]
        },
        {
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.white,
                    image: swatch,
                    imagePosition: 'center'
                },
            ]
        },
        {
            modules: [
                {
                    width: 8,
                    backgroundColor: COLORS.grayBg,
                    image: logoLockup,
                    imagePosition: 'center'
                },
                {
                    type: 'stacked',
                    width: 4,
                    modules: [
                        {
                            backgroundColor: COLORS.white,
                            image: logo,
                            imagePosition: 'center'
                        },
                        {
                            backgroundColor: COLORS.yellow,
                            text: (
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
        },
        {
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.purple,
                    image: icons,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.white,
                    image: waves,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 12,
                    backgroundColor: COLORS.purple,
                    image: bbad,
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
                                    <div>Anthony Faria</div>
                                    <div>Ray Masaki</div>
                                </div>
                            </div>
                        </div>
                    )
                },
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
