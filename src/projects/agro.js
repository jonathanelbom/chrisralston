// images
import hero from '../img/argo/agro-macbook-hero-2.png';
import wireframes from '../img/argo/Agro-full-image-wireframes.jpg';
import desktop from '../img/argo/Agro-desktop-full.png';
import handPhone from '../img/argo/Agro-hand-phone.jpg';
import handWatch from '../img/argo/Agro-hand-watch.jpg';
import watches from '../img/argo/Agro-Watches.jpg';
import iphoneSingle from '../img/argo/agro-iphone-single.png';
import iphone_1_3 from '../img/argo/iphone-black-left.png';
import iphone_2_3 from '../img/argo/iphone-black-center.png';
import iphone_3_3 from '../img/argo/iphone-black-right.png';
import video_loop from '../img/argo/agro-loop-cut.mp4';

import util from '../utils/util';

const agro = {
    id: 'agro',
    title: 'Agro Energy',
    blocks: [
        {
            type: 'image-hero',
            class: '',
            src: hero,
            name: 'hero',
        },
        {
            type: 'title',
            class: '',
            title: 'AGRO ENERGY',
            body: 'Agro Energy is a leader in energy systems in the agricultural sector in the Netherlands. Agro approached our team at TAM/TAM to update their platform, Energy Manager, to better accommodate greenhouse farmers\' ability to buy and sell energy in real-time.',
            name: 'title'
        },
        {
            type: 'image',
            class: 'agro__wireframes',
            src: wireframes,
            name: 'wireframes'
            // imageScrollStyle: (pct) => {
            //     return {
            //         transform: `translateY(${40 + util.getScrollPctCWN(pct) * 140}px)`       
            //     };
            // }
        },
        {
            type: 'video',
            class: '',
            name: 'grid',
            // videoId: 'dlaDXbDyuys',
            src: video_loop,
            aspectRatio: 1.778
        }
        // {
        //     type: 'image',
        //     class: 'agro__desktop',
        //     src: desktop,
        //     name: 'desktop',
        //     style: {'backgroundColor': '#171719', 'paddingTop': '100px'},
        //     // imageScrollStyle: (pct) => {
        //     //     const pctCWN = 1 - util.getScrollPctCWN(pct);
        //     //     return {
        //     //         transform: `translateY(${10 + (60 * pctCWN)}px)`
        //     //     };
        //     // }
        // },
        // {
        //     type: 'image',
        //     class: 'agro__handphone',
        //     src: handPhone,
        //     name: 'handPhone',
        //     // imageScrollStyle: (pct) => {
        //     //     const pctCWN = 1 - util.getScrollPctCWN(pct);
        //     //     return {
        //     //         transform: `translateY(${10 + (60 * pctCWN)}px)`
        //     //     };
        //     // }
        // },
        // {
        //     type: 'image-multi',
        //     class: '',
        //     name: 'iphone-multi',
        //     style: {
        //         backgroundColor: '#171719'
        //     },
        //     images: [
        //         {
        //             type: 'image',
        //             className: 'agro__iphone_1_3',
        //             src: iphone_1_3,
        //             name: 'iphone-1-of-3'
        //         },
        //         {
        //             type: 'image',
        //             className: 'agro__iphone_2_3',
        //             src: iphone_2_3,
        //             name: 'iphone-2-of-3'
        //         },
        //         {
        //             type: 'image',
        //             className: 'agro__iphone_3_3',
        //             src: iphone_3_3,
        //             name: 'iphone-3-of-3'
        //         }
        //     ]
        // },
        // {
        //     type: 'image',
        //     class: '',
        //     src: iphoneSingle,
        //     name: 'iphone-single',
        //     style: {'backgroundColor': '#171719'}
        // },
        // {
        //     type: 'image',
        //     class: '',
        //     src: handWatch,
        //     name: 'hand-watch'
        // },
        // {
        //     type: 'image',
        //     class: '',
        //     src: watches,
        //     name: 'watches'
        // },
        // {
        //     type: 'video',
        //     class: '',
        //     name: 'grid',
        //     videoId: 'dlaDXbDyuys',
        //     aspectRatio: 1.778
        // },
        // {
        //     type: 'details',
        //     class: '',
        //     name: 'details',
        //     role: 'Sr. Interaction Designer',
        //     client: 'Agro Energy',
        //     year: '2016',
        // }
    ]
}

export default agro;
