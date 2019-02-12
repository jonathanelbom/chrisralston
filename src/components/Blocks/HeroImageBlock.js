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
        name: PropTypes.string,
        className: PropTypes.string,
        src: PropTypes.string,
        style: PropTypes.object,
        windowWidth: PropTypes.number,
        inView: PropTypes.bool
    }

    static defaultProps = {
        className: '',
        style: {},
        src: '',
        windowWidth: 0,
        inView: true
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

        this.elem = React.createRef();
        if (this.props.setRef) {
            this.props.setRef(this.elem);
        }
    }
    
    componentWillReceiveProps(nextProps) {
        const {windowWidth} = nextProps;
        if (this.props.windowWidth !== windowWidth) {
            this.updateBlockHeight(windowWidth);
        }
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
            style,
            name,
            inView
        } = this.props;

        const {
            blockHeight
        } = this.state;

        const rootClasses = classnames('block--hero block--content', className);

        return (
            <div
                className={rootClasses}
                style={{
                    ...style, height: `${blockHeight}px`
                }}
                ref={this.elem}
            >
                <ImageBlock
                    index={0}
                    src={src}
                    // style={{
                    //     transform: `translateX(${(1 - this.props.percentInView) * 200}px)`
                    // }}
                    onImageLoad={this.onImageLoad}
                    onImageError={this.onImageError}
                    isHeroImage
                />
            </div>
        )
    }
}

export default HeroImageBlock;
// export default React.forwardRef((props, ref) => <HeroImageBlock forwardedRef={ref} {...props}/>);
