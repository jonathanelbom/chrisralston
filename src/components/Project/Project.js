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
            this.updateInView(windowHeight);
            this.setState(changes);            
        }
    }
    onResizeThrottled = throttle(this.onResize, 100);

    onScroll = () => {
        const scrollTop = Math.round(this.scrollElem.current.scrollTop);
        if (this.state.scrollTop !== scrollTop) {
            this.updateInView();
            this.setState({
                scrollTop
            });
        }
    }
    onScrollThrottled = throttle(this.onScroll, 100);

    updateInView(windowHeight) {
        // console.log('\n\nupdateInView');
        this.project.blocks = this.project.blocks.map((block, index) => {
            if (block.domRef) {
                const {rect, inView, percentageScrolled} = util.isInView({
                    domRef: block.domRef,
                    windowHeight: windowHeight || this.state.windowHeight
                });
                if (block.name === 'hero') {
                    // console.log(block.name, '> rect.bottom:', rect.bottom, ', inView: ', inView, ', percentageScrolled:', percentageScrolled);
                    //console.log(block.name, '> pctScrolled:', percentageScrolled, ' rect.bottom:', rect.bottom, ', rect.height:', rect.height);
                }
                return {...block, inView, rect, percentageScrolled};
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
                                            {...block}
                                        />
                                    );
                                case 'image-hero':
                                    return (
                                        <HeroImageBlock
                                            setRef={this.getSetRef(block.index)}
                                            key={`image-block-${block.index}`}
                                            {...block}
                                        />
                                    );
                                case 'image-multi':
                                    return (
                                        <MultiImageBlock
                                            setRef={this.getSetRef(block.index)}    
                                            key={`multi-image-block-${block.index}`}
                                            scrollTop={scrollTop}
                                            windowWidth={windowWidth}
                                            {...block}
                                        />
                                    );
                                case 'navigation':
                                    return (
                                        <Navigation
                                            key={`navigation-${block.index}`}
                                            scrollTop={scrollTop}
                                            windowWidth={windowWidth}
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
