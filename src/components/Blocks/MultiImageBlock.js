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
        style: PropTypes.object
    }

    static defaultProps = {
        className: '',
        style: {},
        images: []
    }

    constructor(props) {
        super(props);
        
        this.state = {
            images: [...this.props.images],
            aspectRatio: 0
        };

        this.elem = React.createRef();
        if (this.props.setRef) {
            this.props.setRef(this.elem);
        }
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
            className,
            images,
            style
        } = this.props;

        const rootClasses = classnames('block--image-multi block--content', className);
        
        return (
            <div
                className={rootClasses}
                style={style}
                ref={this.elem}
            >
                {images.map((image, index) => {
                    const imgClasses = classnames(`block__image--multi block__image--multi-${index}`, image.className);
                    return (
                        <ImageBlock
                            key={`image-in-multi-image-${index}`}
                            {...image}
                            className={imgClasses}
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
// export default React.forwardRef((props, ref) => <MultiImageBlock forwardedRef={ref} {...props}/>);
