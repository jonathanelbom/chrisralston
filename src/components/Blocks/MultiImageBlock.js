import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ImageBlock from './ImageBlock';
import {READY_STATE} from '../../utils/util';

// styles
import './Block.css';

class MultiImageBlock extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        index: PropTypes.number,
        images: PropTypes.array,
        name: PropTypes.string,
        className: PropTypes.string,
        containerWidth: PropTypes.number
    }

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        
        this.state = {
            images: [...this.props.images]
        };

        // console.log('MultiImageBlock\nthis.props:', this.props, '\n\n');
    }
    
    onImageLoad = (imageData) => {
        imageData.readyState = READY_STATE.COMPLETE;
        const images = [...this.state.images];
        images[imageData.index] = imageData;
        this.setState({
            images
        });
    }

    onImageError = (imageData) => {
        imageData.readyState = READY_STATE.ERROR;
        const images = [...this.state.images];
        images[imageData.index] = imageData;
        this.setState({
            images
        });
    }

    render() {
        const {
            src,
            className,
            images,
            containerWidth
        } = this.props;

        const {
            readyState
        } = this.state;

        const imgClassName = classnames('block__image', {
            'block__image--not-loaded': readyState === READY_STATE.NOT_STARTED,
            'block__image--loaded': readyState === READY_STATE.COMPLETE,
        });

        const style = this.props.style || {};
        return (
            <div
                className={className}
                style={style}
            >
                {images.map((image, index) => (
                    <ImageBlock
                        key={`image-in-multi-image-${index}`}
                        {...image}
                        isMultiImage
                        index={index}
                        containerWidth={containerWidth}
                        onImageLoad={this.onImageLoad}
                        onImageError={this.onImageError}
                    />
                ))}
            </div>
        )
    }
}

export default MultiImageBlock;
