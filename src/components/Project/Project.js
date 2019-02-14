import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import throttle from 'lodash.throttle';

import util from '../../utils/util';
import constants from '../../constants';
import ImageBlock from '../Blocks/ImageBlock';
import MultiImageBlock from '../Blocks/MultiImageBlock';
import HeroImageBlock from '../Blocks/HeroImageBlock';
import DetailsBlock from '../Blocks/DetailsBlock';
import TitleBlock from '../Blocks/TitleBlock';
import VideoBlock from '../Blocks/VideoBlock';
import Navigation from '../Navigation/Navigation';

// styles
import '../Blocks/Block.css';

class Project extends Component {
    constructor(props) {
        super(props);
        
        this.scrollElem = React.createRef();
        this.project = this.props.project;
        this.project.blocks = this.project.blocks.map((block, index) => {
            return {
                ...block,
                index: index,
                id: util.createId(),
                className: block.className || '',
                inView: true,
                domRef: undefined
            };
        });

        // push navigation module
        this.project.blocks.push({
            type: 'navigation',
            name: 'navigation',
            index: this.project.blocks.length,
            id: util.createId()
        });

        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            marginBottom: 80,
            scrollTop: 0 
        };
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.onResizeThrottled);
            this.onResize();
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResizeThrottled);
        }
    }

    componentDidUpdate() {
        // this.childRefs.forEach((ref, index) => {
        //     console.log('index:', index, ', ref:', ref);
        // });

        // this.project.blocks.forEach((block, index) => {
        //     console.log('name:', block.name, ', block.domRef:', block.domRef);
        // });
    }

    onResize = () => {
        const windowWidth = util.getWidth(document.documentElement);
        const windowHeight = util.getHeight(document.documentElement);
        const changed = [
            windowWidth !== this.state.windowWidth,
            windowHeight !== this.state.windowHeight
        ].some((condition) => (!!condition));

        if (changed) {
            const marginBottom = util.computeHeightFromWidth({
                width: windowWidth,
                minWidth: constants.HERO_BLOCK_MAX_WIDTH + constants.GUTTER * 2,
                maxWidth: constants.HERO_BLOCK_MAX_WIDTH + constants.BLOCK_MARGIN_MAX * 2,
                minHeight: constants.BLOCK_MARGIN_MIN,
                maxHeight: constants.BLOCK_MARGIN_MAX,
            });
            const changes = {windowWidth, windowHeight};
            if (marginBottom !==  this.state.marginBottom) {
                changes.marginBottom = marginBottom;
            }
            // this.updateInView(windowHeight, true);
            this.updateBlockProperties({
                updateSize: true,
                windowHeight,
                scrollTop: this.state.scrollTop
            });
            this.setState(changes);            
        }
    }
    onResizeThrottled = throttle(this.onResize, 100);

    onScroll = () => {
        const scrollTop = Math.round(this.scrollElem.current.scrollTop);
        if (this.state.scrollTop !== scrollTop) {
            this.updateBlockProperties({
                scrollTop: scrollTop,
                windowHeight: this.state.windowHeight
            });
            this.setState({
                scrollTop,
            });
        }
    }
    onScrollThrottled = throttle(this.onScroll, 40);

    onImageLoadUnthrottled = (imageData) => {
        this.updateBlockProperties({
            updateSize: true,
            windowHeight: this.state.windowHeight,
            scrollTop: this.state.scrollTop
        })
    }
    onImageLoad = throttle(this.onImageLoadUnthrottled, 500);

    updateBlockProperties({updateSize = false, windowHeight, scrollTop}) {
        this.project.blocks = this.project.blocks.map((block, index) => {
            if (block.domRef && block.domRef.current) {
                let blockTop = block.blockTop;
                let blockHeight = block.blockHeight;
                if (updateSize || !blockTop || !blockHeight) {
                    blockTop = block.domRef.current.offsetTop || 0;
                    blockHeight = block.domRef.current.offsetHeight || 0;
                }
                const {inView, percentageScrolled} = util.isInView({blockTop, blockHeight, scrollTop, windowHeight});
                return {...block, inView, percentageScrolled, blockTop, blockHeight};
            }
            return block;
        });
    }

    getSetRef = (index) => ((ref) => {
        this.project.blocks[index].domRef = ref;
    });

    render() {
        const {
            windowWidth,
            windowHeight,
            marginBottom,
            scrollTop
        } = this.state;

        return (
            <Fragment>
                <div className="Project__title-container">
                    <div className="Project__title-wrapper">
                        <div className="Project__title">
                            <span className="Project__title--prefix">{'Work · '}</span>
                            <span className="Project__title--job">{this.project.title}</span>  
                        </div>
                    </div>
                </div>
                <div className="Project-container" onScroll={this.onScrollThrottled} ref={this.scrollElem}>
                    <div className="Project">
                        {this.project.blocks.map((block, index) => {
                            block.style = {...(block.style || {}), marginBottom: `${block.type === 'image-hero' ? marginBottom * 2 : marginBottom}px`}
                            block.windowWidth = windowWidth;
                            block.windowHeight = windowHeight;
                            block.scrollTop = scrollTop;
                            switch (block.type) {
                                case 'title':
                                    return (
                                        <TitleBlock
                                            setRef={this.getSetRef(block.index)}
                                            key={`title-block-${block.index}`}
                                            {...block}
                                        />
                                    )
                                case 'details':
                                    return (
                                        <DetailsBlock
                                            setRef={this.getSetRef(block.index)}
                                            key={`details-block-${block.index}`}
                                            {...block}
                                        />
                                    )
                                case 'image':
                                    return (
                                        <ImageBlock
                                            setRef={this.getSetRef(block.index)}
                                            key={`image-block-${block.index}`}
                                            onImageLoad={this.onImageLoad}
                                            {...block}
                                        />
                                    );
                                case 'video':
                                    return (
                                        <VideoBlock
                                            setRef={this.getSetRef(block.index)}
                                            key={`video-block-${block.index}`}
                                            {...block}
                                        />
                                    );
                                case 'image-hero':
                                    return (
                                        <HeroImageBlock
                                            setRef={this.getSetRef(block.index)}
                                            key={`image-block-${block.index}`}
                                            onImageLoad={this.onImageLoad}
                                            {...block}
                                        />
                                    );
                                case 'image-multi':
                                    return (
                                        <MultiImageBlock
                                            setRef={this.getSetRef(block.index)}    
                                            key={`multi-image-block-${block.index}`}
                                            onImageLoad={this.onImageLoad}
                                            {...block}
                                        />
                                    );
                                case 'navigation':
                                    return (
                                        <Navigation
                                            key={`navigation-${block.index}`}
                                            {...block}
                                        />
                                    );
                                default:
                                    return (<div>{`Block type: ${block.type} unknown`}</div>);
                            }
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Project;
