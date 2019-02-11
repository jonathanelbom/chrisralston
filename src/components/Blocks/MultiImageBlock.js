import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ImageBlock from './ImageBlock';
import constants from '../../constants';
import util, {READY_STATE} from '../../utils/util';

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
            images: [...this.props.images],
            aspectRatio: 0
        };
    }
    
    componentDidMount() {
        console.log('MultiImageBlock > componentDidMount');
    }

    onImageLoad = (imageData) => {
        const images = [...this.state.images];
        const firstLoad = this.state.aspectRatio === 0;
        imageData.readyState = READY_STATE.COMPLETE;
        images[imageData.index] = imageData;
        this.setState({
            images,
            aspectRatio: imageData.aspectRatio
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
            blockHeight,
            windowWidth
        } = this.props;

        const {
            readyState
        } = this.state;

        // const imgClassName = classnames('block__image block__image--multi', {
        //     'block__image--not-loaded': readyState === READY_STATE.NOT_STARTED,
        //     'block__image--loaded': readyState === READY_STATE.COMPLETE,
        // });
        // const imgStyles = {
        //     width: `${windowWidth}`
        // }
        let style = this.props.style || {};
        
        return (
            <div
                className={className}
                style={style}
            >
                {images.map((image, index) => {
                    console.log('image.className:', image.className);
                    // image.className = classnames(image.className, {
                    //     'block__image--multi': image.className.indexOf
                    // });
                    return (
                        <ImageBlock
                            key={`image-in-multi-image-${index}`}
                            {...image}
                            isMultiImage
                            index={index}
                            onImageLoad={this.onImageLoad}
                            onImageError={this.onImageError}
                        />
                    );
                })}
            </div>
        )
    }
}

export default MultiImageBlock;
