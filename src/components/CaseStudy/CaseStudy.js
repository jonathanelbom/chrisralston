import React, {Component} from 'react';
import './CaseStudy.less';

import Row from '../Row/Row';

class CaseStudy extends Component {
    render() {
        // console.log('CaseStudy > render\n\t this.props:', this.props);
        return (
            <div className="CaseStudy">
                {this.props.rows.map((row, i) => {
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

export default CaseStudy;