import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import util, {READY_STATE} from '../../utils/util';

// styles
import './Block.css';

class ImageBlock extends Component {
    static propTypes = {
        index: PropTypes.number,
        src: PropTypes.string,
        name: PropTypes.string,
        className: PropTypes.string,
        containerWidth: PropTypes.number,
        onImageLoad: PropTypes.func,
        onImageError: PropTypes.func,
        isMultiImage: PropTypes.bool,
        isHeroImage: PropTypes.bool
    }

    static defaultProps = {
        isMultiImage: false,
        isHeroImage: false,
        onImageLoad: () => {},
        onImageError: () => {}
    }

    constructor(props) {
        super(props);
        
        this.img = React.createRef();
        this.state = {
            readyState: READY_STATE.NOT_STARTED,
            naturalHeight: 0,
            naturalWidth: 0,
            aspectRatio: 0,
            width: 0,
            height: 0
        };
    }
    
    onImageLoad = (e) => {
        const {
            naturalWidth,
            naturalHeight
        } =  e.target;
        const aspectRatio = naturalWidth / naturalHeight;
        this.setState({
            naturalWidth,
            naturalHeight,
            aspectRatio,
            readyState: READY_STATE.COMPLETE
        });
        this.props.onImageLoad({
            index: this.props.index,
            naturalWidth,
            naturalHeight,
            aspectRatio,
            img: this.img
        });
    }

    onImageError = (e) => {
        this.setState({
            readyState: READY_STATE.ERROR
        });
        this.props.onImageError({
            index: this.props.index,
            img: this.img
        });
    }

    render() {
        const {
            src,
            className,
            isMultiImage,
            isHeroImage,
            index
        } = this.props;

        const {
            readyState
        } = this.state;
        // if (isMultiImage) {
        //     console.log()
        // }
        const imgClassName = classnames('block__image', {
            'block__image--not-loaded': readyState === READY_STATE.NOT_STARTED,
            'block__image--loaded': readyState === READY_STATE.COMPLETE,
            [`block__image--multi block__image--multi-${index}`]: isMultiImage,
            [className]: isMultiImage,
            [`block__image--hero`]: isHeroImage

        });

        const style = this.props.style || {};
        if (!isMultiImage && !isHeroImage) {
            return (
                <div
                    className={className}
                    style={style}
                >
                    <img
                        ref={this.img}
                        className={imgClassName}
                        src={src}
                        onLoad={this.onImageLoad}
                        onError={this.onImageError}
                        alt=""
                    />
                </div>
            );
        }
        return (
            <img
                ref={this.img}
                className={imgClassName}
                src={src}
                onLoad={this.onImageLoad}
                onError={this.onImageError}
                alt=""
            />
        );
    }
}

export default ImageBlock;
