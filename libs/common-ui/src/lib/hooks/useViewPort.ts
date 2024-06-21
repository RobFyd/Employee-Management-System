import { useState, useEffect } from "react";

export const useViewPort = () => {
    const [viewPort, setViewPort] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    return viewPort;
};
    