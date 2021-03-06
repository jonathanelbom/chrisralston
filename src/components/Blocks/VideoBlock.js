import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import YouTube2 from '@u-wave/react-youtube';
import YouTube from 'react-youtube';

import util, {READY_STATE} from '../../utils/util';

// styles
import './Block.css';

// const READY_STATE = {
//     UNSTARTED: -1,
//     ENDED: 0,
//     PLAYING: 1,
//     PAUSED: 2,
//     BUFFERING: 3,
//     CUED: 5
// };

// const READY_STATE = {
//     UNSTARTED: -1,
//     ENDED: 0,
//     PLAYING: 1,
//     PAUSED: 2,
//     BUFFERING: 3,
//     CUED: 5
// };

class VideoBlock extends Component {
    static propTypes = {
        index: PropTypes.number,
        url: PropTypes.string,
        name: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        scrollTop: PropTypes.number,
        windowWidth: PropTypes.number,
        windowHeight: PropTypes.number,
        windowHeight: PropTypes.number,
        aspectRatio: PropTypes.number,
        rect: PropTypes.object
    }

    static defaultProps = {
        className: '',
        style: {},
        url: '',
        scrollTop: 0,
        windowWidth: 0,
        windowHeight: 0,
        aspectRatio: 1.778,
        rect: {width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0, x: 0, y: 0}
    }

    constructor(props) {
        super(props);

        this.state = {
            iframeLoaded: false,
            videoPlaying: false,
            playerState: -2
        }

        this.video = React.createRef();
        this.elem = React.createRef();
        if (this.props.setRef) {
            this.props.setRef(this.elem);
        }
    }
    
    componentDidUpdate(prevProps) {
        if (this.video.current) {
            if (prevProps.inView !== this.props.inView) {
                if (this.props.inView) {
                    this.playVideo();
                } else {
                    this.pauseVideo();
                }
            } else if (this.props.inView && this.video.current.paused) {
                this.playVideo();
            } else if (!this.props.inView && !this.video.current.paused) {
                this.pauseVideo();
            }
        }
    }

    playVideo() {
        // console.log('this.videoPlayer:', this.videoPlayer, ', this.video:', this.video);
        if (this.video.current) {
            try {
                this.video.current.play();
                console.log('play');
            } catch (e) {
                console.error('ERROR > playVideo\ne:', e);
            }
        }
    }

    pauseVideo() {
        if (this.video.current) {
            try {
                this.video.current.pause();
                console.log('pause');
            } catch (e) {
                console.error('ERROR > pauseVideo\ne:', e);
            }
        }
    }

    // onIframeLoad = (e) => {
    //     if (e && e.target) {
    //         this.videoPlayer = e.target;
    //         console.log('onIframeLoad, this.state.videoPlaying:', this.state.videoPlaying, ', this.props.inView:', this.props.inView);
    //         if (!this.state.iframeLoaded) {
    //             const triggerPlay = this.props.inView && (this.state.playerState !== 1 || this.state.playerState !== 3);
    //             this.setState({
    //                 iframeLoaded: true
    //             }, () => {
    //                 console.log('===== play, triggerPlay:', triggerPlay)
    //                 if (triggerPlay) {
    //                     const intervalId = setInterval(() => {
    //                         if (this.state.playerState === 1 || this.state.playerState === 3) {
    //                             clearInterval(intervalId);
    //                         } else {
    //                             this.videoPlayer.playVideo();
    //                             console.log('===== play timeout');
    //                         }
    //                     }, 200);
    //                 }
    //             });
    //         }
    //     }
    // }

    // onStateChange = (e) => {
    //     console.log('onStateChange, e.data:', e.data);
    //     if (e) {
    //         if (e.hasOwnProperty('data') && e.data !== this.state.playerState) {
    //             this.setState({
    //                 playerState: e.data
    //             })
    //         }
    //         // if (!this.state.videoPlaying && e.data === 1) {
    //         //     this.setState({
    //         //         videoPlaying: true
    //         //     })
    //         // } else  if (this.state.videoPlaying && e.data !== 1) {
    //         //     this.setState({
    //         //         videoPlaying: false
    //         //     })
    //         // }
    //     }
    // }

    // onLoadedMetadata = (e) => {
    //     console.log('onLoadedMetadata, e.target.width:', e.target.width, ', e.target.height:', e.target.height);
    // }

    // onLoadedData = (e) => {
    //     console.log('onLoadedData, e.target.width:', e.target.width, ', e.target.height:', e.target.height);
    // }

    // onEnded = (e) => {
    //     console.log('onEnded, e.target.readyState:', e.target.readyState);
    // }

    onWaiting = (e) => {
        console.log('onWaiting, e.target:', e.target);
    }

    render() {
        const {
            videoId,
            className,
            inView,
            name,
            style,
            src,
            aspectRatio,
            blockWidth
            // rect,
        } = this.props;

        const {
            iframeLoaded,
            videoPlaying,
            playerState
        } = this.state;

        const rootClasses = classnames('block--video block--content');

        const height = blockWidth / aspectRatio;
        // const height = rect.width / aspectRatio;
        
        const opts = {
            height: `${height}px`,
            width: `${blockWidth}px`,
            playerVars: {
                controls: 0,
                fs: 0,
                loop: 1,
                modestbranding: 1,
                showinfo: 0,
                playlist: videoId
            }
        };

        if (true) {
            const imgClasses = classnames('block__image--video-overlay', {
                'out' : inView && [1, 3].indexOf(playerState) > -1
            });
            return (
                <div
                    className={rootClasses}
                    ref={this.elem}
                    style={{...style, height: `${height}px`}}
                >
                    {inView && 
                        <video
                            ref={this.video}
                            controls
                            // loop
                            preload="none"
                            // poster="poster.png"
                        >
                            <source
                                src={src} 
                                type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                            />
                        </video>
                    }
                </div>
            );
        }

        return (
            <div
                className={rootClasses}
                style={style}
                ref={this.elem}
            >
                <YouTube2
                    className={''}
                    video={videoId}
                    height={`${height}px`}
                    width={`${blockWidth}px`}
                    loop={true}
                    playlist={videoId}
                    autoplay={true}
                    controls={false}
                    modestBranding={false}
                    showInfo={false}
                    onReady={this.onIframeLoad}
                    onStateChange={this.onStateChange}
                />
            </div>
        );
    }
    
}

export default VideoBlock;
