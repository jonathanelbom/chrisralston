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
        isHeroImage: PropTypes.bool,
        style: PropTypes.object
    }

    static defaultProps = {
        isMultiImage: false,
        isHeroImage: false,
        onImageLoad: () => {},
        onImageError: () => {},
        className: '',
        style: {},
        src: ''
    }

    constructor(props) {
        super(props);

        this.state = {
            readyState: READY_STATE.NOT_STARTED,
            naturalHeight: 0,
            naturalWidth: 0,
            aspectRatio: 0,
            width: 0,
            height: 0,
            rect: {top: 0, left: 0, width: 0, height: 0}
        };

        this.img = React.createRef();
        this.elem = React.createRef();
        if (this.props.setRef) {
            this.props.setRef(this.elem);
        }

        // console.log('this.props.scrollFunc:', this.props.scrollFunc);
    }
    
    componentDidMount() {
        // if (this.elem.current) {
        //     const rect = this.elem.current.getBoundingClientRect();
        //     this.setState({rect});
        // }
    }

    componentWillReceiveProps(nextProps) {
        // const changed = [
        //     this.props.windowHeight !== nextProps.windowHeight,
        //     this.props.windowWidth !== nextProps.windowWidth,
        //     this.props.scrollTop !== nextProps.scrollTop
        // ].some((condition) => (!!condition))
        
        // const changes = {}
        // let rect = this.state.rect;
        // if (this.props.windowHeight !== nextProps.windowHeight || this.props.windowWidth !== nextProps.windowWidth) {
        //     rect = this.elem.current.getBoundingClientRect();
        //     changes.rect = rect;
        // }
        // if (this.props.scrollTop !== nextProps.scrollTop) {
        //     const {top, left, height, width} = rect;
        //     const inView = (top < 0 && height + top > 0) || 
        // }
        // if (Object.keys(changes).length > 0) {
        //     this.setState(changes);
        // }
    }

    // componentDidUpdate(prevProps) {
    //     console.log('componentDidUpdate');
    //     const {scrollTop, windowWidth, windowHeight} = this.props;
    //     const changes = {}
    //     let rect = this.state.rect;
    //     const changed = [
    //         windowHeight !== prevProps.windowHeight,
    //         windowWidth !== prevProps.windowWidth,
    //         scrollTop !== prevProps.scrollTop
    //     ].some((condition) => (!!condition));
    //     if (changed) {
    //         rect = this.elem.current.getBoundingClientRect();
    //     }
    //     if (scrollTop !== prevProps.scrollTop) {
    //         const {top, left, height, width} = rect;
    //         const topAdj = top - scrollTop;
    //         const thresh = -200;
    //         console.log('\twindowHeight:', windowHeight, '\n\tscrollTop:', scrollTop, '\n\trect:', rect);
    //         const inView = (top < windowHeight + thresh && top + height + thresh > 0)
    //         console.log('top:', top, ', height:', height, 'inView:', inView);
    //         if (inView !== this.state.inView) {
    //             this.setState({
    //                 inView
    //             });
    //         }
    //     }
    //     if (Object.keys(changes).length > 0) {
    //         this.setState(changes);
    //     }
    // }

    // componentDidUpdate() {
    //     console.log('ImageBlock > this.elem:', this.elem);
    // }

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
            name: this.props.name
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
            inView,
            name,
            style,
            rect,
            percentageScrolled,
            imageScrollStyle
        } = this.props;

        // if (name === 'desktop') {
        //     console.log('this.props:', this.props);
        // }

        const {
            readyState,
            aspectRatio
        } = this.state;
        
        const imgClassName = classnames('block__image', {
            'block__image--not-loaded': readyState === READY_STATE.NOT_STARTED,
            'block__image--loaded': readyState === READY_STATE.COMPLETE,
            [className]: isMultiImage
        });

        const rootClasses = classnames('block--image block--content', {
            [className]: !isMultiImage,
            'block--in-view': inView
        });

        let imgStyle = {};
        if (imageScrollStyle && inView) {
            imgStyle = imageScrollStyle(percentageScrolled)
            // console.log('percentageScrolled:', percentageScrolled, ',imgStyle:', imgStyle);
        }

        let updatedStyle = {...style};
        if (aspectRatio > 0 && rect) {
            updatedStyle.height = `${rect.width / aspectRatio}px`;
        }
        if (!isMultiImage && !isHeroImage) {
            return (
                <div
                    className={rootClasses}
                    style={updatedStyle}
                    ref={this.elem}
                >
                    <img
                        style={imgStyle}
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
                style={style}
            />
        );
    }
}

export default ImageBlock;
