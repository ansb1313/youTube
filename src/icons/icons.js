import React from "react";
import qs from "qs";
import {useSelector} from "react-redux";
import {videosActions} from "../redux/ActionCreators";
import VideoDetail from "../view/components/Videos/VideoDetail";

export const YoutubeLogo = () => (
    <svg className="style-scope yt-icon">
        <path fill="#FF0000"
              d="M28.4,5.12c-0.34-1.24-1.31-2.2-2.55-2.52C23.62,2,14.68,2,14.68,2S5.75,2,3.52,2.6 C2.29,2.93,1.33,3.89,1,5.12C0.59,7.39,0.39,9.69,0.4,12c-0.01,2.31,0.19,4.61,0.6,6.88c0.33,1.23,1.29,2.19,2.52,2.52 C5.75,22,14.68,22,14.68,22s8.93,0,11.16-0.6c1.24-0.32,2.22-1.28,2.56-2.52c0.41-2.27,0.61-4.57,0.6-6.88 C29.01,9.69,28.81,7.39,28.4,5.12z"
              className="style-scope yt-icon"></path>
        <polygon fill="#FFFFFF" points="11.83,16.29 19.25,12 11.83,7.71"
                 className="style-scope yt-icon"></polygon>
    </svg>
)

export const YoutubePremium = () => (
    <svg id="youtube-red-paths" className="logo" viewBox={'0 0 98 23'} >
        <path fill="#FF0000"
              d="M28.4,5.12c-0.34-1.24-1.31-2.2-2.55-2.52C23.62,2,14.68,2,14.68,2S5.75,2,3.52,2.6 C2.29,2.93,1.33,3.89,1,5.12C0.59,7.39,0.39,9.69,0.4,12c-0.01,2.31,0.19,4.61,0.6,6.88c0.33,1.23,1.29,2.19,2.52,2.52 C5.75,22,14.68,22,14.68,22s8.93,0,11.16-0.6c1.24-0.32,2.22-1.28,2.56-2.52c0.41-2.27,0.61-4.57,0.6-6.88 C29.01,9.69,28.81,7.39,28.4,5.12z"
              className="style-scope yt-icon"></path>
        <polygon fill="#FFFFFF" points="11.83,16.29 19.25,12 11.83,7.71"
                 className="style-scope yt-icon"></polygon>
        <path
            d="M41.67,8.35V9c0,3.45-1.53,5.48-4.88,5.48h-0.51v6h-2.74V3.42h3.49C40.22,3.42,41.67,4.77,41.67,8.35z M38.79,8.6c0-2.49-0.45-3.09-2-3.09h-0.51v7h0.47c1.47,0,2-1.06,2-3.37L38.79,8.6z"
            className="style-scope yt-icon"></path>
        <path
            d="M48.14,7.83L48,11.08c-1.17-0.24-2.13-0.08-2.6,0.69v8.78h-2.67V8h2.17l0.24,2.71h0.1c0.28-2,1.2-3,2.39-3 C47.8,7.73,47.98,7.77,48.14,7.83z"
            className="style-scope yt-icon"></path>
        <path
            d="M51.27,15.25v0.63c0,2.21,0.12,3,1.06,3s1.1-0.69,1.12-2.12l2.43,0.14c0.18,2.7-1.23,3.9-3.61,3.9 c-2.9,0-3.76-1.9-3.76-5.35v-2.23c0-3.64,1-5.41,3.84-5.41s3.64,1.51,3.64,5.29v2.15H51.27z M51.27,12.67v0.9h2.06v-0.89 c0-2.3-0.16-3-1-3s-1,0.67-1,3L51.27,12.67z"
            className="style-scope yt-icon"></path>
        <path
            d="M70.02,11.1v9.46H67.2v-9.25c0-1-0.27-1.53-0.88-1.53c-0.54,0.02-1.02,0.34-1.25,0.82 c0.01,0.17,0.01,0.34,0,0.51v9.46h-2.79v-9.26c0-1-0.27-1.53-0.88-1.53c-0.53,0.02-1,0.33-1.23,0.8v10H57.4V8h2.23l0.25,1.59l0,0 c0.51-1.12,1.63-1.85,2.86-1.86c1.05-0.07,1.98,0.67,2.16,1.7c0.55-1.01,1.61-1.65,2.76-1.66C69.4,7.78,70.02,9,70.02,11.1z"
            className="style-scope yt-icon"></path>
        <path
            d="M71.4,4.83c0-1.35,0.49-1.74,1.53-1.74s1.53,0.45,1.53,1.74s-0.47,1.74-1.53,1.74S71.4,6.22,71.4,4.83z M71.59,8h2.7v12.56h-2.7V8z"
            className="style-scope yt-icon"></path>
        <path
            d="M83.5,8v12.56h-2.2L81.05,19h-0.06c-0.46,1.08-1.53,1.77-2.7,1.74c-1.67,0-2.43-1.06-2.43-3.37V8h2.82 v9.19c0,1.1,0.23,1.55,0.8,1.55c0.52-0.02,0.98-0.33,1.2-0.8V8H83.5z"
            className="style-scope yt-icon"></path>
        <path
            d="M97.8,11.1v9.46h-2.82v-9.25c0-1-0.27-1.53-0.88-1.53c-0.54,0.02-1.02,0.34-1.25,0.82 c0.01,0.17,0.01,0.34,0,0.51v9.46h-2.79v-9.26c0-1-0.27-1.53-0.88-1.53c-0.53,0.02-1,0.33-1.23,0.8v10h-2.81V8h2.26l0.24,1.59l0,0 c0.51-1.12,1.63-1.85,2.86-1.86c1.04-0.07,1.97,0.64,2.17,1.66c0.55-0.99,1.6-1.61,2.73-1.62C97.15,7.78,97.8,9,97.8,11.1z"
            className="style-scope yt-icon"></path>
    </svg>
)

export const SearchIcon = () => (
    <svg className="style-scope yt-icon" viewBox="0 0 26 26">
            <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                className="style-scope yt-icon"></path>
    </svg>
)

export const MenuBar = () => (
        <svg className="style-scope yt-icon" viewBox='0, 0, 26, 26'>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" className="style-scope yt-icon"></path>
        </svg>
)

export const Mike = () => (
        <svg className="mike" viewBox='0, 0, 26, 26'>
            <path
                d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
                className="style-scope yt-icon"></path>
        </svg>
)

export const Cam = () => (
        <svg className="cam" viewBox='0, 0, 26, 26'>
            <path
                d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
                className="style-scope yt-icon"></path>
        </svg>
)

export const AppMenu = () => (

            <svg className="appMenu" viewBox='0, 0, 26, 26'>
                <path
                    d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
                    className="style-scope yt-icon"></path>
            </svg>
)

export const Notice = () => (
            <svg viewBox='0, 0, 26, 26' className={'bell'}>
                <path
                    d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                    className="style-scope yt-icon"></path>
            </svg>
)

export const SideMenuHomeIcon = () => (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
            <svg className="style-scope yt-icon">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" ></path>
            </svg>
        </svg>
)

export const SideMenuTendingIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const SideMenuSubscription = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const SideMenuOriginal = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                  d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z"
                  className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const LockerIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path fill="none" d="M0 0h24v24H0z" className="style-scope yt-icon"></path>
            <path
                d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)
export const Viewing = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)
export const MyVideo = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z"
                className="style-scope yt-icon"></path>
            <path d="M10.2 9v6.5l5-3.2-5-3.2z" className="style-scope yt-icon"></path>
        </svg>
    </svg>
)
export const WatchLater = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)
export const ViewMore = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const ViewMoreClose = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const LikeIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)
export const MoreMovieIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
                className="style-scope yt-icon"></path>
            <path d="M0 0h24v24H0z" fill="none" className="style-scope yt-icon"></path>
        </svg>
    </svg>
)
export const MoreGameIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
       >
        <svg className="style-scope yt-icon">
            <path
                d="M22,13V8l-5-3l-5,3l0,0L7,5L2,8v5l10,6L22,13z M9,11H7v2H6v-2H4v-1h2V8h1v2h2V11z M15,13 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,13,15,13z M18,11c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S18.55,11,18,11z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)
export const MoreLiveIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
      >
        <svg className="style-scope yt-icon">
            <path
                d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"
                className="style-scope yt-icon"></path>
            <circle cx="12" cy="12" r="3" className="style-scope yt-icon"></circle>
        </svg>
    </svg>
)
export const MoreLearningIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
         >
        <svg className="style-scope yt-icon">
            <path
                d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const MoreSportsIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M6.85 7.76V6.18H1v2.88c0 2.35 1.9 4.26 4.26 4.26h1.59v-1.59H5.4a2.81 2.81 0 01-2.81-2.8V7.75h4.26zM17.15 7.76V6.18H23v2.88c0 2.35-1.9 4.26-4.26 4.26h-1.59v-1.59h1.45a2.81 2.81 0 002.81-2.8V7.75h-4.26z"
                className="style-scope yt-icon"></path>
            <path d="M12 17.29a6.87 6.87 0 01-6.87-6.87V3h13.74v7.42c0 3.8-3.07 6.87-6.87 6.87z"
                  className="style-scope yt-icon"></path>
            <path
                d="M12 17.29V3h6.87v7.42c0 3.8-3.07 6.87-6.87 6.87zM12 17.29l4.13 2.38H7.88L12 17.3zM16.13 19.67H7.88v2.38h8.25v-2.38z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)


export const ReportRecode = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" className="style-scope yt-icon"></path>
        </svg>
    </svg>
)
export const ServiceCenter = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)
export const SendMessageIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path d="M0 0h24v24H0z" fill="none" className="style-scope yt-icon"></path>
            <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const SetUpIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const Like = () => (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
            <svg className="style-scope yt-icon">
                <path
                    d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
                    className="style-scope yt-icon"></path>
            </svg>
        </svg>
)

export const DisLike = () => (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
            <svg className="style-scope yt-icon">
                <path
                    d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
                    className="style-scope yt-icon"></path>
            </svg>
        </svg>
)

export const ShareIcon = () => (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
            <svg mirror-in-rtl="" className="style-scope yt-icon">
                <path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z"
                      className="style-scope yt-icon"></path>
            </svg>
        </svg>
)

export const StorageIcon = () => (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
            <svg className="style-scope yt-icon">
                <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"
                      className="style-scope yt-icon"></path>
            </svg>
        </svg>
)

export const MoreDotIcon = () => (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
            <svg className="style-scope yt-icon">
                <circle cx="5" cy="12" r="2" className="style-scope yt-icon"></circle>
                <circle cx="12" cy="12" r="2" className="style-scope yt-icon"></circle>
                <circle cx="19" cy="12" r="2" className="style-scope yt-icon"></circle>
            </svg>
        </svg>
)

export const CertifiedIcon = () => (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
            <svg>
                <path
                      d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"
                      className="style-scope yt-icon"></path>
            </svg>
        </svg>
)

export const SearchFilterICon = () => (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
            <svg className="style-scope yt-icon">
                <path d="M0 0h24v24H0z" fill="none" className="style-scope yt-icon"></path>
                <path
                    d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
                    className="style-scope yt-icon"></path>
            </svg>
        </svg>
)

export const InvertedTriangle = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path d="M7 10l5 5 5-5z" className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const VideoThumbnailClockIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
         className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const VideoThumbnailStorageIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
         className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const VerticalThreeDot = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const TextSideMenuExpedition = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
        <svg className="style-scope yt-icon">
            <path
                d="M11.23 13.08c-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.71-.23.99a1.327 1.327 0 01-1.08.56c-.28 0-.55-.08-.77-.25zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-3.97-6.03L9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23z"
                className="style-scope yt-icon"></path>
        </svg>
    </svg>
)

export const ArrowLeft = () => (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon">
            <svg mirror-in-rtl="" className="style-scope yt-icon">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                      className="style-scope yt-icon"></path>
            </svg>
        </svg>
)