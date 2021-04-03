import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";

const pp = (options) => {

    let ref;
    ref = useRef(null);
    const [inView, setInView] = useState(false)
    const {isLoading} = useSelector(state => state.videos)
    useEffect(() => {
        if(isLoading) return;
        const io = new IntersectionObserver((entries)=>{
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setInView(true)
                }else{
                    setInView(false)
                }
            })
        },options)

        if(ref.current){
            io.observe(ref.current)
        }
        return () => {
            if(ref.current){}
            io.unobserve(ref.current)
        }
    },[ref])

    return [ref, inView]
}

export default pp;