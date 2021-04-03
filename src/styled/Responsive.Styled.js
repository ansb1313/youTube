import {generateMedia} from "styled-media-query";

export const breakPoint = {
    LG: 1135,
    MD: 880,
    SM: 672,
    XS: 500,
    MB: 845
}

export const media = generateMedia({
    lg: breakPoint.LG + 'px',
    md: breakPoint.MD + 'px',
    sm: breakPoint.SM + 'px',
    xs: breakPoint.XS + 'px',
    mb: breakPoint.MB + 'px',
});
