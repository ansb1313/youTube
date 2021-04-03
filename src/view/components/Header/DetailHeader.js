import React from 'react';
import styled from 'styled-components';
import {AppMenu, Cam, MenuBar, Mike, Notice, YoutubePremium} from "../../../icons/icons";
import SearchBox from "../SearchBox";
import RippleEffect from "../Effect/RippleEffect";
import {useHistory} from "react-router-dom";

const DetailHeader = (props) => {

    const {detailSidebarLocation} = props
    const history = useHistory()
    const onClickHome = () => {
        history.push('/')
    }

    return (
        <Container className={'header'}>
            <MenuBars onClick={detailSidebarLocation}>
                <RippleEffect>
                    <ItemWrap>
                        <MenuBar/>
                    </ItemWrap>
                </RippleEffect>
            </MenuBars>
            <Logo onClick={onClickHome}>
                <YoutubePremium/>
            </Logo>
            <SearchBox width={34} />
            <HeaderItem>
                <div className="mike">
                    <RippleEffect>
                        <Icon>
                            <Mike/>
                        </Icon>
                    </RippleEffect>
                </div>
                <div className="menus">
                    <RippleEffect>
                        <Icon>
                            <Cam/>
                        </Icon>
                    </RippleEffect>
                    <RippleEffect>
                        <Icon>
                            <AppMenu/>
                        </Icon>
                    </RippleEffect>
                    <RippleEffect>
                        <Icon>
                            <Notice/>
                        </Icon>
                    </RippleEffect>
                </div>
            </HeaderItem>
            <UserId>
                <span>
                    User
                </span>
            </UserId>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items: center;
  padding: 11px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
`;

const MenuBars = styled.div`
    box-sizing: border-box;
    svg{
      padding-left: 1px;
      width: 27px;
      height: 28px;
      fill: #555;
    }
`
const Logo = styled.div`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  position: relative;
  margin-right: 23.5%;
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

const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  margin-left: 0.4%;
  align-items: center;
  justify-content: space-between;
  svg{
    width: 28px;
    height: 28px;
    padding-top: 2px;
    padding-left: 2px;
    fill: #606060;
  }
  .menus{
    display: flex;
    align-items: center;
    margin-right: 12%;
    div{
      margin-right: 18%;
    }
  }
 
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  position: relative;
  cursor: pointer;
`

const UserId = styled.div`
  margin-right: 1.3%;
  width: 30px;
  height: 30px;
  -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    display: block;
    font-size: 10px;
  }
`

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: 0.5px;
`


export default DetailHeader;