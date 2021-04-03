import styled from "styled-components";
import { pxToRem } from "../../../styled/Util.Styled";
import { breakPoint, media } from "../../../styled/Responsive.Styled";

export const SectionContainer = styled.div`
    padding: 100px 0;
`;

export const PageContainer = styled.div`
    flex: 1;
    background-color: ${(props) => props.dark && "#151a1d"};
    min-height: ${pxToRem(690)};
`;

export const ContentContainer = styled.div`
    position: relative;
    max-width: ${pxToRem(1500)};
    margin: 0 auto;
    padding: 0 ${pxToRem(15)};
    ${(props) =>
        props.full &&
        `
        max-width: 100%;    
    `};
  
    ${media.lessThan('md')`
        max-width: ${pxToRem(breakPoint.SM)}
    `}
    
    ${media.lessThan('xs')`
        max-width: 336px
        padding:0
    `}
  
`;

export const Full = styled.div`
    flex: 1;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, ${(props) => props.alpha || 0.6});
`;

// export const ContentContainer = styled.div`
//     position: relative;
//     max-width: ${pxToRem(1500)};
//     margin: 0 auto;
//     padding: 0 ${pxToRem(15)};
//     ${(props) =>
//     props.full &&
//     `
//         max-width: 100%;
//     `};
//
//     ${media.lessThan("md")`
//         max-width:${pxToRem(breakPoint.SM)}
//     `}
//
//     ${media.lessThan("lg")`
//         max-width: ${pxToRem(breakPoint.MD)};
//     `};
//
//     ${media.lessThan("md")`
//         max-width: ${pxToRem(breakPoint.SM)};
//     `};
//
//     ${media.lessThan("sm")`
//         max-width: ${pxToRem(breakPoint.XS)};
//     `};
//
//     ${media.lessThan("xs")`
//         max-width: 100%;
//     `};
// `;