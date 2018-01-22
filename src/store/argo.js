import React from 'react';
import computer from '../img/argo/computer.png'
import farm from '../img/argo/farm.png'

const argo = {
    rows: [
        {
            type: 'hero',
            modules: [
                {
                    width: 12,
                    backgroundColor: '#171719',
                    image: computer,
                    imagePosition: 'center'
                }
            ]
        },
        {
            modules: [
                {
                    width: 4,
                    backgroundColor: '#E6ECEF',
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
                    backgroundColor: '#3E4648',
                    text: (
                        <div className="text-module text-module--light">
                            <span>{'Agro Energy is a leader in energy systems in the agricultural sector in the Netherlands. Agro approached our team at TAM/TAM to update their platform, Energy Manager, to better accommodate greenhouse farmers\' ability to buy and sell energy in real-time'}</span>
                        </div>
                    )
                }
            ]
        },
        {
            modules: [
                {
                    width: 8,
                    backgroundColor: '#171719',
                    image: farm,
                    imagePosition: 'center'
                }
            ]
        }
    ]
}

export default argo;
