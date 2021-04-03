import React, {useState} from 'react';
import styled from 'styled-components';
import cn from "classnames";
import {VerticalThreeDot, VideoThumbnailClockIcon, VideoThumbnailStorageIcon} from "../../../icons/icons";

const VideoItemThumbnailMenu = ({children, isActive}) => {

    const [mouseOver, setMouseOver] = useState(false)
    const [mouseOverClass, setMouseOverClass] = useState(false)

    const onMouseOver = () => {
        setMouseOverClass(true)
    }
    const onMouseOut = () => {
        setMouseOverClass(false)
    }
    const onMouse = () => {
        setMouseOver(true)
    }
    const onMouseLeave = () => {
        setMouseOver(false)
    }

    return(

        <Container>
            {children}
            <ThumbnailMenu>
                <div className={cn('laterIcon',{isActive:isActive})}>
                    <div className={cn("text",{isActive:mouseOverClass})}
                         onMouseOver={onMouseOver}
                         onMouseLeave={onMouseOut}
                         onClick={(e)=>{e.stopPropagation()}}>
                        <span>나중에 볼 동영상</span>
                    </div>
                    <div className={ cn("icon",{isActive:mouseOverClass})}
                         onMouseOver={onMouseOver}
                         onMouseLeave={onMouseOut}
                         onClick={(e)=>{e.stopPropagation()}}>
                        <VideoThumbnailClockIcon/>
                    </div>
                </div>
                <div className={cn('listIcon',{isActive:isActive})} >
                    <div className="text" className={cn("text",{isActive:mouseOver})}
                         onMouseOver={onMouse}
                         onMouseLeave={onMouseLeave}
                         onClick={(e)=>{e.stopPropagation()}}>
                        <span >목록에 추가</span>
                    </div>
                    <div className={cn("icon",{isActive:mouseOver}) }
                         onMouseOver={onMouse}
                         onMouseLeave={onMouseLeave}
                         onClick={(e)=>{e.stopPropagation()}}>
                        <VideoThumbnailStorageIcon/>
                    </div>
                </div>
            </ThumbnailMenu>
        </Container>

    )

}

const Container = styled.div`
  position: relative;
  overflow: hidden;
`
const ThumbnailMenu = styled.div`
  box-sizing: border-box;
  padding-right: 16px;
  position: absolute;
  width: 100%;
  left: -4px;
  top: 4px;
  
  &>div{
    position: relative;
    display: none;
    overflow: hidden;
    flex-direction:column;
    align-items: center;
    height: 29px;
    margin-bottom: 4px;
    &.isActive{
      display: block;
    }
  }
  .icon{
    cursor: pointer;
    position: absolute;
    display: block;
    right: 0;
    top: 0;
    width: 29px;
    height: 29px;
    padding: 1.5px;
    margin-bottom: 4px;
    background: rgba(0,0,0,0.75);
    z-index: 700;
    transition: all 0.3s;
    &.isActive{
      background: #111;
    }
    svg{
      width: 26px;
      fill: #fff;
    }
  }
  .text{
    cursor: pointer;
    z-index: 500;
    display: flex;
    right: 0px;
    top: 0px;
    height: 29px;
    padding: 0 5px;
    align-items: center;
    background: #111;
    color: #fff;
    position: absolute;
    font-size: 12px;
    transform: translateX(100%);
    transition: transform 0.3s;
    &.isActive{
      right: 29px;
      transform: none;
    }
  }
`

export default VideoItemThumbnailMenu;