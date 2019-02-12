import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// styles
import './Block.css';

class TitleBlock extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        index: PropTypes.number,
        name: PropTypes.string,
        className: PropTypes.string,
        role: PropTypes.string,
        client: PropTypes.string,
        year: PropTypes.string,
        style: PropTypes.object
    }

    static defaultProps = {
        className: '',
        role: '[role]',
        client: '[client]',
        year: '[year]',
        style: {}
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
            title,
            body,
            style
        } = this.props;

        const rootClasses = classnames('block--title block--content', className);

        return (
            <div
                className={rootClasses}
                ref={this.elem}
                style={style}
            >
                <div className="block--title__title title">{title}</div>
                <div className="block--title__body">{body}</div>
            </div>
        )
    }
}

export default TitleBlock;