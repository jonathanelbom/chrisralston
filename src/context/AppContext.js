import React from 'react';
const AppContext = React.createContext({
    mode: 0,
    index: 0,
    changeMode: () => {},
    changeIndex: () => {},
    changeDirection: () => {}
});
export default AppContext;