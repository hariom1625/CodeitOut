import React, { useEffect } from 'react';

const ScrollToTop = (Component) => {
    const NewComponent = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
        return(
            <div>
            <Component />
            </div>
        );
    }

    return NewComponent;
}

export default ScrollToTop;
