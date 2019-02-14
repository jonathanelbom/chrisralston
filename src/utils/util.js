const READY_STATE = {
    NOT_STARTED: 'NOT_STARTED',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETE: 'COMPLETE',
    ERROR: 'ERROR'
};

const util = {
    createId() {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        return [...Array(19)].map((value, index) => {
            if (index === 0) {
                return chars[Math.floor(Math.random() * (chars.length - 10))];
            }
            return (index + 1) % 5 === 0
                ? '-'
                : chars[Math.floor(Math.random() * chars.length)]
        }).join('');
    },

    normalize(value, min = -1, max = 1) {
        return Math.max(Math.min(value, max), min);
    },

    toggleWindowHandler(type, func, add) {
        if (typeof window !== 'undefined') {
            window.removeEventListener(type, func);
            if (add) {
                window.addEventListener(type, func);
            }
        }
    },

    getWidth(elem, width) {
        return (typeof width !== 'undefined') 
            ? width
            : elem.clientWidth || 0;
    },

    getHeight(elem, height) {
        return (typeof height !== 'undefined') 
        ? height
        : elem.clientHeight || 0;
    },

    computeHeightFromWidth({width, minWidth, maxWidth, minHeight, maxHeight}) {
        if (width >= maxWidth) {
            return maxHeight;
        }
        if (width <= minWidth) {
            return minHeight
        }
        return minHeight + (maxHeight - minHeight) * ((width - minWidth) / (maxWidth - minWidth));
    },

    // isInView({domRef, windowHeight, rect, threshold = 0}) {
    //     rect = rect || domRef.current.getBoundingClientRect();
    //     const {top, height, bottom} = rect;
    //     const inView = (top < windowHeight + threshold && top + height + threshold > 0);
    //     let percentageScrolled = 0;
    //     if (inView) {
    //         percentageScrolled = 1 - (bottom / (windowHeight + height))
    //     }
    //     return {
    //         rect,
    //         inView,
    //         percentageScrolled
    //     };
    // },

    isInView({blockTop, blockHeight, scrollTop, windowHeight, rect, threshold = 0}) {
        const top = blockTop - scrollTop;
        const bottom = top + blockHeight;
        // console.log('isInView'
        //     , '\n\tblockTop:', blockTop, ', blockHeight:', blockHeight, ', scrollTop:', scrollTop, ', windowHeight:', windowHeight
        //     , '\n\ttop:', top, ', bottom:', bottom
        // );
        const inView = (top < windowHeight + threshold && top + blockHeight + threshold > 0);
        let percentageScrolled = 0;
        if (inView) {
            percentageScrolled = 1 - (bottom / (windowHeight + blockHeight))
        }
        return {
            inView,
            percentageScrolled
        };
    },

    percentInView({domRef, scrollTop, windowHeight, threshold = 0}) {
        const rect = domRef.current.getBoundingClientRect();
        const {top, left, height, width} = rect;
        return {
            rect: rect,
            inView: (top < windowHeight + threshold && top + height + threshold > 0)
        }
    },

    getScrollPctC(pct) {
        if (pct < .5) {
            return 1 - (pct / .5);
        } else {
            return 1 - ((1 - pct) / .5);
        }
    },

    getScrollPctCWN(pct) {
        return (pct - .5) * 2;
        if (pct < .5) {
            return 1 - (pct / .5);
        } else {
            return 1 - ((1 - pct) / .5);
        }
    }
};

export {
    util,
    READY_STATE
};

export default util;