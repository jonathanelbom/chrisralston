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

const agro = {
    title: 'Agro Energy',
    blocks: [
        {
            type: 'image-hero',
            className: '',
            src: hero,
            name: 'hero'
        },
        {
            type: 'title',
            className: '',
            title: 'AGRO ENERGY',
            body: 'Agro Energy is a leader in energy systems in the agricultural sector in the Netherlands. Agro approached our team at TAM/TAM to update their platform, Energy Manager, to better accommodate greenhouse farmers\' ability to buy and sell energy in real-time.',
            name: 'title'
        },
        {
            type: 'image',
            className: '',
            src: wireframes,
            name: 'wireframes' 
        },
        {
            type: 'video',
            className: '',
            name: 'grid',
            videoId: 'dlaDXbDyuys',
            aspectRatio: 1.778
        },
        {
            type: 'image',
            className: '',
            src: desktop,
            name: 'desktop',
            style: {'backgroundColor': '#171719', 'paddingTop': '100px'}
        },
        {
            type: 'image',
            className: '',
            src: handPhone,
            name: 'handPhone'
        },
        {
            type: 'image-multi',
            className: '',
            name: 'iphone-multi',
            style: {
                backgroundColor: '#171719'
            },
            images: [
                {
                    type: 'image',
                    className: 'agro__iphone_1_3',
                    src: iphone_1_3,
                    name: 'iphone-1-of-3'
                },
                {
                    type: 'image',
                    className: 'agro__iphone_2_3',
                    src: iphone_2_3,
                    name: 'iphone-2-of-3'
                },
                {
                    type: 'image',
                    className: 'agro__iphone_3_3',
                    src: iphone_3_3,
                    name: 'iphone-3-of-3'
                }
            ]
        },
        {
            type: 'image',
            className: '',
            src: iphoneSingle,
            name: 'iphone-single',
            style: {'backgroundColor': '#171719'}
        },
        {
            type: 'image',
            className: '',
            src: handWatch,
            name: 'hand-watch'
        },
        {
            type: 'image',
            className: '',
            src: watches,
            name: 'watches'
        },
        {
            type: 'details',
            className: '',
            name: 'details',
            role: 'Sr. Interaction Designer',
            client: 'Agro Energy',
            year: '2016',
        }
    ]
}

export default agro;
