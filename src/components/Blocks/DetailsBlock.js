import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// styles
import './Block.css';

class DetailsBlock extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        index: PropTypes.number,
        name: PropTypes.string,
        className: PropTypes.string,
        role: PropTypes.string,
        client: PropTypes.string,
        year: PropTypes.string
    }

    static defaultProps = {
        className: '',
        role: '[role]',
        client: '[client]',
        year: '[year]'
    }

    constructor(props) {
        super(props);
        
        this.elem = React.createRef();
        if (this.props.setRef) {
            this.props.setRef(this.elem);
        }
    }

    render() {
        const {
            className,
            role,
            client,
            year,
            style
        } = this.props;

        const rootClasses = classnames('block--details block--content', className);

        return (
            <div
                className={rootClasses}
                ref={this.elem}
                style={style}
            >
                <div className="details-block__row details-block__role">
                    <span className="details-block__label title">{'ROLE'}</span>
                    <span className="details-block_value">{role}</span>
                </div>
                <div className="details-block__row block--details__client">
                    <span className="details-block__label title">{'CLIENT'}</span>
                    <span className="details-block_value">{client}</span>
                </div>
                <div className="details-block__row block--details__year">
                    <span className="details-block__label title">{'YEAR'}</span>
                    <span className="details-block_value">{year}</span>
                </div>
            </div>
        )
    }
}

export default DetailsBlock;