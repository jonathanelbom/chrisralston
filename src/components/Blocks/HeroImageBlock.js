import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ImageBlock from './ImageBlock';
import util, {READY_STATE} from '../../utils/util';
import constants from '../../constants';

// styles
import './Block.css';

class HeroImageBlock extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        index: PropTypes.number,
        images: PropTypes.array,
        name: PropTypes.string,
        className: PropTypes.string,
        windowWidth: PropTypes.number,
        elemWidth: PropTypes.number
    }

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        
        this.state = {
            blockHeight: constants.HERO_BLOCK_MAX_HEIGHT,
            image: {
                index: 0,
                naturalHeight: 0,
                naturalWidth: 0,
                aspectRatio: 0,
                img: undefined
            }
        };
    }
    
    componentWillReceiveProps(nextProps) {
        const {windowWidth, elemWidth} = this.props;
        this.updateBlockHeight(nextProps.windowWidth);
    }

    updateBlockHeight(windowWidth) {
        let blockHeight = util.computeHeightFromWidth({
            width: windowWidth,
            minWidth: constants.HERO_BLOCK_MIN_WIDTH,
            maxWidth: constants.HERO_BLOCK_MAX_WIDTH,
            minHeight: constants.HERO_BLOCK_MIN_HEIGHT,
            maxHeight: constants.HERO_BLOCK_MAX_HEIGHT,
        });
        blockHeight = Math.round(blockHeight);
        if (blockHeight !== this.state.blockHeight) {
            this.setState({
                blockHeight
            });
        }
    }

    onImageLoad = (imageData) => {
        imageData.readyState = READY_STATE.COMPLETE;
        this.setState({
            image: imageData
        });
    }

    onImageError = (imageData) => {
        imageData.readyState = READY_STATE.ERROR;
        this.setState({
            image: imageData
        });
    }

    render() {
        const {
            src,
            className,
            image,
            containerWidth
        } = this.props;

        const {
            readyState,
            blockHeight
        } = this.state;

        const imgClassName = classnames('block__image', {
            'block__image--not-loaded': readyState === READY_STATE.NOT_STARTED,
            'block__image--loaded': readyState === READY_STATE.COMPLETE,
        });

        let style = this.props.style || {};
        style = {...style, height: `${blockHeight}px`}
        return (
            <div
                className={className}
                style={style}
            >
                <ImageBlock
                    index={0}
                    src={src}
                    containerWidth={containerWidth}
                    onImageLoad={this.onImageLoad}
                    onImageError={this.onImageError}
                    isHeroImage
                />
            </div>
        )
    }
}

export default HeroImageBlock;
