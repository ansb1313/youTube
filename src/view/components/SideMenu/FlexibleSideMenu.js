import React,{useEffect} from 'react'
import styled from 'styled-components';
import TextSideMenu from "./TextSideMenu";
import IconSideMenu from "./IconSideMenu";
import {useSelector} from "react-redux";
import {appActions} from "../../../redux/ActionCreators";

const FlexibleSideMenu = () => {

    const {sidebar} = useSelector(state => state.app)

    useEffect(()=>{
        return ()=>{
            appActions.updateState({
                sidebar:false
            })
        }
    },[])

    return (
        <Container className={'sideMenuContainer'}>
            {
                sidebar
                    ?
                    <IconSideMenu/>
                    :
                    <TextSideMenu/>
            }
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    width: 238px;
    top: 56px;
    bottom: 0;
    left: 0;
    z-index: 1100;
    overflow-y: auto;
    overflow-x: hidden;
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
`;

export default FlexibleSideMenu;