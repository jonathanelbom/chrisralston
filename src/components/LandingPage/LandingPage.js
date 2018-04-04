import React, {Component} from 'react';
import './LandingPage.css';

import Row from '../Row/Row';

class LandingPage extends Component {
    render() {
        console.log('LandingPage > render\n\t this.props:', this.props);
        const {rows} = this.props;
        return (
            <div className="LandingPage">
                {rows.map((row, i) => {
                    return (
                        <Row
                            key={i}
                            {...row}
                        />
                    );
                })}
            </div>
        );
    }
}

export default LandingPage;
