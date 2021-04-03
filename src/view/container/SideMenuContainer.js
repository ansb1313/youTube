import React, {useState} from 'react';
import styled from 'styled-components';
import SideMenuBox from "../components/SideMenuBox";
import {useSelector} from "react-redux";
import cn from "classnames";
import {Route, Switch} from "react-router-dom";
import DetailSideMenu from "../components/SideMenuBox/DetailSideMenu";
import {appActions} from "../../redux/ActionCreators";
import RippleEffect from "../components/Effect/RippleEffect";
import {MenuBar, YoutubePremium} from "../../icons/icons";
import {navigate} from "../../lib/History";

const SideMenuContainer = () => {

    const {sidebar, detailSidebar} = useSelector(state => state.app)

    const onClickDetailSideMenuOff = () => {
        appActions.updateState({
            detailSidebar:!detailSidebar
        })
    }

    return(
        <>
            <Switch>
                <Route path={['/','/results']} exact={true}>
                    <SideMenuBlock className={cn({isActive:sidebar})} />
                    <ShadowBox className={cn('shadow',{isActive:sidebar})} />
                    <Container className={cn({isActive:sidebar})}>
                        <SideMenuBox sidebar={sidebar} />
                    </Container>
                </Route>
                <Route path={'/watch'}>
                    <DetailSideMenuBackground
                        className={cn({isActive: detailSidebar})}
                        onClick={onClickDetailSideMenuOff}
                    />
                    <DetailSideMenuWarp>
                        <HomeButton className={cn({isActive:detailSidebar})}>
                            <div className="ripple" onClick={onClickDetailSideMenuOff}>
                                <RippleEffect>
                                    <MenuBar />
                                </RippleEffect>
                            </div>
                            <Logo onClick={() => {navigate('/'); onClickDetailSideMenuOff()}}>
                                <YoutubePremium/>
                            </Logo>
                        </HomeButton>
                        <DetailMenuContainer className={cn('detailSideMenu' ,{isActive:detailSidebar})}>
                            <DetailSideMenu detailSidebar={detailSidebar}/>
                        </DetailMenuContainer>
                    </DetailSideMenuWarp>
                </Route>
            </Switch>
        </>
    )

}

const Container = styled.div`
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 56px;
  width: 238px;
  bottom: 0;
  background: #fff;
  box-shadow: 1px 1px 10px rgba(87, 87, 87, 0.15);
  &.isActive {
    width: 72px;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #d4d4d4;
    }
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
  }
`

const SideMenuBlock = styled.div`
  width:238px;
  position: relative;
  height: 100%;
  &.isActive{
    width: 72px;
  }
`

const ShadowBox = styled.div`
  position: fixed;  
  left: 77.5px;
  top: 0;
  height: 54px;
  width: 100%;
  box-shadow: 1px 1px 10px rgba(87, 87, 87, 0.18);
  &.isActive{
    left: 237px;
  }
`

const DetailSideMenuBackground = styled.div`
  position: fixed; 
  z-index: 1000;
  left: 0px;
  bottom: 0;
  right: 0;
  top: 0;
  background: #111;
  opacity: 0.6;
  display: none;
  &.isActive{
    display: block;
  }
`

const HomeButton = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: solid 1px #eee;
  left: 0;
  top: 0;
  height: 57px;
  z-index: 1200;
  background: #fff;
  width: 238px;
  transition: all 0.2s;
  transform: translateX(-100%);
  &.isActive{
    transform: translateX(0%);
  }
  svg{
    padding-left: 1px;
    width: 27px;
    height: 28px;
  }  
  .ripple{
    cursor: pointer;
  }
`

const Logo = styled.div`
  margin-left: 22px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  position: relative;
  box-sizing: border-box;
  svg{
    padding-bottom: 1px;
    width: 97px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }
  ::after{
   content: "KR";
    color: #222;
    display: block;
    position: absolute;
    right: -13.5px;
    top: 0;
    font-weight: 500;
    font-size: 8px;
  }
`

const DetailSideMenuWarp = styled.div`
`

const DetailMenuContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1200;
  top: 57px;
  background: #fff;
  transition: transform 0.2s;
  transform: translateX(-100%);
  overflow-y: auto;
  width: 238px;
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #d4d4d4;
    }
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
  }
  &.isActive{
    transform: translateX(0%);
  }
`

export default SideMenuContainer;