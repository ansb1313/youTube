import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const useOnViewport = (options) => {
    let ref;
    ref = useRef(null);
    const [inView, setInView] = useState(false);
    const { isLoading } = useSelector((state) => state.videos);
    useEffect(() => {
        if (isLoading) return;
        const io = new IntersectionObserver((entries) => {
            //   entry.boundingClientRect
            //   entry.intersectionRatio
            //   entry.intersectionRect
            //   entry.isIntersecting
            //   entry.rootBounds
            //   entry.target
            //   entry.time
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    console.log("inView");
                } else {
                    setInView(false);
                    console.log("outView");
                }
            });
        }, options);

        if (ref.current) {
            io.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                io.unobserve(ref.current);
            }
        };
    }, [ref]);

    return [ref, inView];
};
