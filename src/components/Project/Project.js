import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import throttle from 'lodash.throttle';

import util from '../../utils/util';
import constants from '../../constants';
import ImageBlock from '../Blocks/ImageBlock';
import MultiImageBlock from '../Blocks/MultiImageBlock';
import HeroImageBlock from '../Blocks/HeroImageBlock';
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
                className: block.className || ''
            };
        });
        // push navigation modu'e
        this.project.blocks.push({
            type: 'navigation',
            name: 'navigation',
            index: this.project.blocks.length,
            id: util.createId()
        });

        this.state = {
            windowWidth: 0,
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

    onResize = () => {
        const windowWidth = util.getWidth(document.documentElement);
        const changed = [
            windowWidth !== this.state.windowWidth
        ].some((condition) => (!!condition));

        if (changed) {
            const marginBottom = util.computeHeightFromWidth({
                width: windowWidth,
                minWidth: constants.HERO_BLOCK_MAX_WIDTH + constants.GUTTER * 2,
                maxWidth: constants.HERO_BLOCK_MAX_WIDTH + constants.BLOCK_MARGIN_MAX * 2,
                minHeight: constants.BLOCK_MARGIN_MIN,
                maxHeight: constants.BLOCK_MARGIN_MAX,
            });
            const changes = {windowWidth}
            if (marginBottom !==  this.state.marginBottom) {
                changes.marginBottom = marginBottom;
            }
            this.setState(changes);            
        }
    }
    onResizeThrottled = throttle(this.onResize, 100);

    onScroll = () => {
        const scrollTop = Math.round(this.scrollElem.current.scrollTop);
        if (this.state.scrollTop !== scrollTop) {
            this.setState({
                scrollTop
            });
        }
    }
    onScrollThrottled = throttle(this.onScroll, 200);
    
    getClassnameFromType(type) {
        switch (type) {
            case 'image':
                return 'block--image block--content';
            case 'image-hero':
                return 'block--hero block--content';
            case 'title':
                return 'block--title block--content';
            case 'image-multi':
                return 'block--image-multi block--content';
            case 'image-multi-in-series':
                return 'block__image--multi-in-series';
            case 'details':
                return 'block--details block--content';
        }
    }
    render() {
        const {
            windowWidth,
            marginBottom,
            scrollTop
            // windowHeight,
            // elemWidth,
            // elemHeight
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
                        {this.project.blocks.map((block) => {
                            block.style = {...(block.style || {}), marginBottom: `${block.type === 'image-hero' ? this.state.marginBottom * 2 : this.state.marginBottom}px`}
                            switch (block.type) {
                                case 'title':
                                    return (
                                        <div className={this.getClassnameFromType(block.type)} key={`title-block-${block.index}`}>
                                            <div className="block--title__title title">{block.title}</div>
                                            <div className="block--title__body">{block.body}</div>
                                        </div>
                                    );
                                case 'details':
                                    return (
                                        <div className={this.getClassnameFromType(block.type)} key={`details-block-${block.index}`}>
                                            <div className="details-block__row details-block__role">
                                                <span className="details-block__label title">{'ROLE'}</span>
                                                <span className="details-block_value">{block.role}</span>
                                            </div>
                                            <div className="details-block__row block--details__client">
                                                <span className="details-block__label title">{'CLIENT'}</span>
                                                <span className="details-block_value">{block.client}</span>
                                            </div>
                                            <div className="details-block__row block--details__year">
                                                <span className="details-block__label title">{'YEAR'}</span>
                                                <span className="details-block_value">{block.year}</span>
                                            </div>
                                        </div>
                                    );
                                case 'image':
                                    return (
                                        <ImageBlock
                                            key={`image-block-${block.index}`}
                                            {...block}
                                            className={this.getClassnameFromType(block.type)}
                                        />
                                    );
                                case 'image-hero':
                                    return (
                                        <HeroImageBlock
                                            key={`image-block-${block.index}`}
                                            windowWidth={windowWidth}
                                            {...block}
                                            className={this.getClassnameFromType(block.type)}
                                        />
                                    );
                                case 'image-multi':
                                    return (
                                        <MultiImageBlock
                                            key={`multi-image-block-${block.index}`}
                                            scrollTop={scrollTop}
                                            windowWidth={windowWidth}
                                            {...block}
                                            className={this.getClassnameFromType(block.type)}
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
