import React, {Component, Fragment} from 'react';
import classnames from 'classnames';

import util from '../../utils/util';
import constants from '../../constants';
import ImageBlock from '../Blocks/ImageBlock';
import MultiImageBlock from '../Blocks/MultiImageBlock';
import HeroImageBlock from '../Blocks/HeroImageBlock';

// styles
import './Agro.css';
import '../Blocks/Block.css';

// images
import hero from '../../img/argo/agro-macbook-hero-2.png';
import wireframes from '../../img/argo/Agro-full-image-wireframes.jpg';
import desktop from '../../img/argo/Agro-desktop-full.png';
import handPhone from '../../img/argo/Agro-hand-phone.jpg';
import handWatch from '../../img/argo/Agro-hand-watch.jpg';
import watches from '../../img/argo/Agro-Watches.jpg';
import iphoneSingle from '../../img/argo/agro-iphone-single.png';
import iphone_1_3 from '../../img/argo/iphone-black-left.png';
import iphone_2_3 from '../../img/argo/iphone-black-center.png';
import iphone_3_3 from '../../img/argo/iphone-black-right.png';

const job = {
    title: 'Agro Energy',
    blocks: [
        {
            type: 'image-hero',
            className: 'block--hero block--content',
            src: hero,
            name: 'hero'
        },
        {
            type: 'title',
            className: 'block--title block--content',
            title: 'AGRO ENERGY',
            body: 'Agro Energy is a leader in energy systems in the agricultural sector in the Netherlands. Agro approached our team at TAM/TAM to update their platform, Energy Manager, to better accommodate greenhouse farmers\' ability to buy and sell energy in real-time.'
        },
        {
            type: 'image',
            className: 'block--image block--content',
            src: wireframes,
            name: 'wireframes' 
        },
        {
            type: 'image',
            className: 'block--image block--content',
            src: desktop,
            name: 'desktop',
            style: {'backgroundColor': '#171719', 'paddingTop': '100px'}
        },
        {
            type: 'image',
            className: 'block--image block--content',
            src: handPhone,
            name: 'handPhone'
        },
        {
            type: 'image-multi',
            className: 'block--image-multi block--content',
            name: 'iphone 1 of 3',
            style: {
                backgroundColor: '#171719'
            },
            images: [
                {
                    type: 'image',
                    className: 'block__image--multi',
                    src: iphone_1_3,
                    name: 'iphone 1 of 3'
                },
                {
                    type: 'image',
                    className: 'block__image--multi',
                    src: iphone_2_3,
                    name: 'iphone 3 of 3'
                },
                {
                    type: 'image',
                    className: 'block__image--multi',
                    src: iphone_3_3,
                    name: 'iphone 3 of 3'
                }
            ]
        },
        {
            type: 'image',
            className: 'block--image block--content',
            src: iphoneSingle,
            name: 'iphone single',
            style: {'backgroundColor': '#171719'}
        },
        {
            type: 'image',
            className: 'block--image block--content',
            src: handWatch,
            name: 'hand watch'
        },
        {
            type: 'image',
            className: 'block--image block--content',
            src: watches,
            name: 'watches'
        }
    ]
}


job.blocks = job.blocks.map((block, index) => {
    return {
        ...block,
        index: index,
        id: util.createId(),
        className: block.className || ''
    };
});

class Agro extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            windowWidth: 0,
            marginBottom: 80
            // windowHeight: 0,
            // elemWidth: 0,
            // elemHeight: 0
        };
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.onResize);
            this.onResize();
        }
    }

    onResize = () => {

        const windowWidth = util.getWidth(document.documentElement);
        // const elemWidth = util.getWidth(this.elem);
        // const windowHeight = util.getHeight(document.documentElement);
        // const elemHeight = util.getHeight(this.elem);

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

    onScroll = () => {
        // console.log('scroll');
    }

    setRef = (ref) => {
        this.elem = ref;
    }

    render() {
        const {
            windowWidth,
            marginBottom,
            // windowHeight,
            // elemWidth,
            // elemHeight
        } = this.state;

        return (
            <Fragment>
                <div className="CaseStudy__title-container">
                    <div className="CaseStudy__title-wrapper">
                        <div className="CaseStudy__title">
                            <span className="CaseStudy__title--prefix">{'Work · '}</span>
                            <span className="CaseStudy__title--job">{job.title}</span>  
                        </div>
                    </div>
                </div>
                <div className="CaseStudy-container" onScroll={this.onScroll}>
                    <div className="CaseStudy" ref={this.setRef}>
                        {job.blocks.map((block) => {
                            block.style = {...(block.style || {}), marginBottom: `${block.type === 'image-hero' ? this.state.marginBottom * 2 : this.state.marginBottom}px`}
                            switch (block.type) {
                                case 'title':
                                    return (
                                        <div className={classnames(block.className)} key={`title-block-${block.index}`}>
                                            <div className="block--title__title">{block.title}</div>
                                            <div className="block--title__body">{block.body}</div>
                                        </div>
                                    );
                                case 'image':
                                    return (
                                        <ImageBlock
                                            key={`image-block-${block.index}`}
                                            {...block}
                                        />
                                    );
                                case 'image-hero':
                                    return (
                                        <HeroImageBlock
                                            key={`image-block-${block.index}`}
                                            windowWidth={windowWidth}
                                            {...block}
                                        />
                                    );
                                case 'image-multi':
                                    return (
                                        <MultiImageBlock
                                            key={`multi-image-block-${block.index}`}
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

export default Agro;
