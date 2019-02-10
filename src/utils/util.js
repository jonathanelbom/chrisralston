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
    }
};

export {
    util,
    READY_STATE
};

export default util;