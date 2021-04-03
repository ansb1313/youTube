import React from 'react'
import styled from 'styled-components';
import cn from "classnames";
import {
    LikeIcon,
    LockerIcon, MenuBar,
    MoreGameIcon,
    MoreLearningIcon,
    MoreLiveIcon,
    MoreMovieIcon,
    MoreSportsIcon,
    MyVideo,
    ReportRecode, SendMessageIcon, ServiceCenter,
    SetUpIcon,
    SideMenuHomeIcon,
    SideMenuOriginal,
    SideMenuSubscription,
    SideMenuTendingIcon, TextSideMenuExpedition,
    Viewing,
    ViewMore,
    ViewMoreClose,
    WatchLater, YoutubePremium
} from "../../../icons/icons";
import RippleEffect from "../Effect/RippleEffect";
import {navigate} from "../../../lib/History";
import {appActions} from "../../../redux/ActionCreators";

const TextSideMenu = ({withSideMenuHeader, sidebar}) => {

    const onClickViewMore = (event) => {
        const targetEl = event.currentTarget.parentNode;
        targetEl.className += ' isActive';
    }

    const onClickMoreClose = (event) => {
        const targetEl = event.currentTarget.parentNode;
        targetEl.classList.remove('isActive')
    }

    const onClick = () => {
        appActions.updateState({
            sidebar:(!sidebar)
        })
    }
    
    return (
        <Container className={'SideMenu'}>
            <Guide className={"menuCategory"}>
                <MenuItem>
                    <SideMenuHomeIcon/>
                    <span>홈</span>
                </MenuItem>
                <MenuItem>
                    <TextSideMenuExpedition/>
                    <span>탐험</span>
                </MenuItem>
                <MenuItem>
                    <SideMenuTendingIcon/>
                    <span>인기</span>
                </MenuItem>
                <MenuItem>
                    <SideMenuSubscription/>
                    <span>구독</span>
                </MenuItem>
                <MenuItem>
                    <SideMenuOriginal/>
                    <span>Originals</span>
                </MenuItem>
            </Guide>
            <Library className={"menuCategory"}>
                <MenuItem>
                    <LockerIcon/>
                    <span>보관함</span>
                </MenuItem>
                <MenuItem>
                    <Viewing/>
                    <span>시청 기록</span>
                </MenuItem>
                <MenuItem>
                    <MyVideo/>
                    <span>내 동영상</span>
                </MenuItem>
                <MenuItem>
                    <WatchLater/>
                    <span>나중에 볼 동영상</span>
                </MenuItem>
                <MoreView>
                    <div className={'moreButton'} onClick={onClickViewMore}>
                        <ViewMore/>
                        <span>더보기</span>
                    </div>
                    <div className={'moreMenuItem'}>
                        <LikeIcon/>
                        <span>좋아요 표시한 동영상</span>
                    </div>
                    <div className={'moreMenuItem'} onClick={onClickMoreClose}>
                        <ViewMoreClose/>
                        <span>간략히 보기</span>
                    </div>
                </MoreView>
            </Library>
            <Subscription className={"menuCategory"}>
                <MenuTitle>
                        <span>
                            구독
                        </span>
                </MenuTitle>
                <MenuItem>
                    <img src="https://yt3.ggpht.com/Q3Zd5avmFu7WvZiEgWjjTt09r_Hfxp69EZXoEppkxEtSPdAUt6Q7IH7MpCESnf3wEtxhbUDOLg=s88-c-k-c0x00ffffff-no-rj" alt=""/>
                    <span>음악</span>
                </MenuItem>
                <MenuItem>
                    <img src="https://yt3.ggpht.com/4COrjVX-vfEEtwHjRVBCRiATnKbuOECSkhbOw59-GzA7tZuFQegPiFALwigxjw_ubUrli4eKoh0=s88-c-k-c0x00ffffff-no-rj" alt=""/>
                    <span>스포츠</span>
                </MenuItem>
                <MenuItem>
                    <img src="https://yt3.ggpht.com/sNf-nZpQ4-IkhvtaqPa_L1c7fZIh2nFS8Mb834FSUAN_dFvcVaUlIM8o4wXHMM2hsq1xUfTvRA=s88-c-k-c0x00ffffff-no-rj" alt=""/>
                    <span>게임</span>
                </MenuItem>
                <MenuItem>
                    <img src="https://yt3.ggpht.com/6lo97rUTO7xhIBXZqLiaW2kA_eMBIEmqc27EqlKLyE4nAY-yzcKBG0Hs0YdUka3gJ629HcwgyzQ=s88-c-k-c0x00ffffff-no-rj" alt=""/>
                    <span>영화</span>
                </MenuItem>
            </Subscription>
            <More className={"menuCategory"}>
                <div className={'title'}>
                    <span className={'eng'}>YOUTUBE</span>
                    <span className={'kor'}>더보기</span>
                </div>
                <MenuItem>
                    <MoreMovieIcon/>
                    <span>영화</span>
                </MenuItem>
                <MenuItem>
                    <MoreGameIcon/>
                    <span>게임</span>
                </MenuItem>
                <MenuItem>
                    <MoreLiveIcon/>
                    <span>실시간</span>
                </MenuItem>
                <MenuItem>
                    <MoreLearningIcon/>
                    <span>학습</span>
                </MenuItem>
                <MenuItem>
                    <MoreSportsIcon/>
                    <span>스포츠</span>
                </MenuItem>
            </More>
            <Contact className={"menuCategory"}>
                <MenuItem>
                    <SetUpIcon/>
                    <span>설정</span>
                </MenuItem>
                <MenuItem>
                    <ReportRecode/>
                    <span>신고 기록</span>
                </MenuItem>
                <MenuItem>
                    <ServiceCenter/>
                    <span>고객센터</span>
                </MenuItem>
                <MenuItem>
                    <SendMessageIcon/>
                    <span>의견 보내기</span>
                </MenuItem>
            </Contact>
            <Info className={"menuCategory"}>
                <ul>
                    <li><a href="#!">정보</a></li>
                    <li><a href="#!">보도자료</a></li>
                    <li><a href="#!">저작권</a></li>
                    <li><a href="#!">크리에이터</a></li>
                    <li><a href="#!">광고</a></li>
                    <li><a href="#!">개발자</a></li>
                </ul>
                <ul>
                    <li><a href="#!">약관</a></li>
                    <li><a href="#!">개인정보처리방침</a></li>
                    <li><a href="#!">정책 및 안전</a></li>
                    <li><a href="#!"><span>YouTube</span> 작동의원리</a></li>
                    <li><a href="#!">새로운 기능 테스트하기</a></li>
                </ul>
                {/*<div className={'contact'}>*/}
                {/*    <span>*/}
                {/*        © 2021 Google LLC*/}
                {/*    </span>*/}
                {/*    <span>*/}
                {/*        CEO: 선다 피차이*/}
                {/*    </span>*/}
                {/*    <span>*/}
                {/*        주소: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.*/}
                {/*    </span>*/}
                {/*    <span>*/}
                {/*         전화: 080-822-1450(무료)*/}
                {/*    </span>*/}
                {/*</div>*/}
            </Info>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 2px;
    position:relative;
    z-index: 300;
    width: 238px;
    min-height: 100%;
    background:#fff;
  
    .menuCategory {
    padding: 10px 0;
    border-bottom: solid 1px #eee;

    & > div {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        color: #303030;
        font-size: 14px;
        display: inline-block;
        margin: 14.4px 0;
        line-height: 0.8;
      }

      svg {
        width: 24px;
        height: 24px;
        fill: #606060;
        margin-right: 18px;
      }
      
      img{
        width: 24px;
        height: 24px;
        -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
        margin-right: 18px;
      }
      
      .moreViewButton{
        display: flex;
        align-items: center;
      }
    }
  }
  &.isActive{
    display: block;
  }
  
`

const SideMenuHeader = styled.div`
    display:flex;
    align-items: center;
    background:#bbb;
    height: 56px;
    box-sizing: border-box;
    padding: 0 20px;  
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

const MenuItem = styled.div`
  padding: 0 24px;
  &:hover {
    background: #f1f1f1;
  }
`
const Guide = styled.div`
`
const Library = styled.div`
`
const More = styled.div`
    .title{
      padding:0 24px;
      display: flex;
      align-items: center;
      font-size: 14px;
      .eng{
        color: #6d6d6d;
        font-size: 13px;
        font-weight: bold;
        margin-right:3px;
        padding-bottom: 1px;
      }
      .kor{;
        color: #6d6d6d;
      }
    }
`
const Subscription = styled.div`
`
const Contact = styled.div`
`
const Info = styled.div`
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0 24px;
    box-sizing: border-box;
    margin-bottom: 20px;

    li{
      margin-right: 6px;
      font-size: 12px;
      line-height: 1.4;
      a{
        color: #696969;
        text-decoration: none;
        span{
          font-weight: bold;
        }
      }
    }
  }

  .contact{
    box-sizing: border-box;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    span{
      margin: 0;
    }
  }
`

const MoreView = styled.div`
  display: flex;
  flex-direction: column;

  div{
    box-sizing: border-box;
    padding: 0px 24px;
    width: 100%;
    &:hover{
      background: #f1f1f1;
    }
    display: flex;
    align-items: center;
  }
  .moreMenuItem{
    display: none;
  }
  &.isActive{
    .moreButton{
      display: none;
    }
    .moreMenuItem{
      display: flex;
      align-items: center;
    }
  }
`

const MenuTitle = styled.div`
    padding: 0 24px;
`
export default TextSideMenu;