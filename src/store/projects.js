import React from 'react';

const COLORS = {
    dark: '#171719',
    darkGray: '#3E4648',
    lightGray: '#E6ECEF',
    white: '#FFFFFF'
}

const projects = {
    id: 'projects',
    rows: [
        // ------------ row ------------
        {
            type: 'hero',
            modules: [
                // ---- module ----
                {
                    type: 'landing',
                    width: 12,
                    backgroundColor: COLORS.white,
                    elements: []
                }
            ]
        },
        // ------------ row ------------
        {
            modules: [
                // ---- module ----
                {
                    width: 8,
                    backgroundColor: COLORS.lightGray,
                    elements: [
                        {
                            type: 'markup',
                            markup: (
                                <div className="text-module text-module--dark">
                                    <span>With almost a decade of experience in digital product design and art driection, Chris is currently a design lead at HomeAway. Previously, he’s worked with both agencies and start-ups in New York and Amsterdam before landing in Austin.<br/><br/>Everything here is set in Sailec.</span>
                                </div>
                            )
                        }
                    ]
                },
                // ---- module ----
                {
                    width: 4,
                    backgroundColor: COLORS.dark,
                    elements: [
                        {
                            type: 'markup',
                            markup: (
                                <div className="text-module text-module--light">
                                    <div className="group">
                                        <div className="title">Chris Ralston</div>
                                        <div className="content">Designer &amp; Art Director</div>
                                    </div>
                                    <div className="group">
                                        <div className="title">Email</div>
                                        <div className="content">crralston@gmail.com</div>
                                    </div>
                                    <div className="group">
                                        <div className="title">Personal Projects</div>
                                        <div className="content">
                                            <div>&amp;friends</div>
                                            <div>Knead</div>
                                            <div>Emeez Ansari</div>
                                            <div>Unsplash</div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="title">Social</div>
                                        <div className="content">
                                            <div>LinkedIn</div>
                                            <div>Instagram</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]
                }
            ]
        }
    ]
}

export default projects;
