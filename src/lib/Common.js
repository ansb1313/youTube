import moment from "moment";
import "moment/locale/ko";
import { FLEXIBLE_SIDE_MENU_PATHNAME, isFlexibleSideMenuPathname } from "../constants/Consts";

moment.locale("ko");

const THOUSAND_COMMA_REGEX = /(\d)(?=(\d{3})+\b)/g;

export const range = (a, b) => {
    let result = [];
    for (let i = a; i < b; i++) {
        result.push(i);
    }
    return result;
};

export const dateFromNow = (date) => {
    return moment(date).fromNow();
};

export const findKeys = (m, ...keys) => {
    let result = {};
    m.forEach((v, k) => keys.includes(k) && (result[k] = v));
    return result;
};

export const omit = (obj, ...keys) => {
    let result = Object.assign({}, obj);
    keys.forEach((key) => delete result[key]);
    return result;
};

export const urlHostname = (data) => {
    let a = document.createElement("a");
    a.href = data;
    return a.hostname;
};

export const yearRange = (from, to) => {
    let diff = to - from;
    let diffs = range(0, diff + 1);
    return diffs.map((d) => moment(from, "YYYY").add(d, "year").format("YYYY"));
};

export const thousandNumberFormat = (n) => {
    if (typeof n === "number") return n.toString().replace(THOUSAND_COMMA_REGEX, "$1,");

    if (typeof n === "string" || n instanceof String) return n.replace(THOUSAND_COMMA_REGEX, "$1,");
};

export const invertObject = (obj) => {
    let result = {};
    Object.entries(obj).forEach(([k, v]) => {
        result[v] = k;
    });

    return result;
};

export const chunk = (arr, chunkSize, cache = []) => {
    const tmp = [...arr];
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
};

export const timerFormat = (timer) => {
    let sec = timer % 60;
    let min = Math.floor(timer / 60);
    return `${min}:${sec}`;
};

export const tenThousandFormat = (n) => {
    return Math.floor(n / 10000);
};

export const scrollToContent = (el) => {
    const oft = el.offsetTop - 200;
    window.scrollTo(0, oft);
};

// watch container

export const videoDetailPublishedAt = (data) => {
    let publishedArr, publishedAt;

    if (data) {
        publishedArr = data.split("-");
        publishedAt = publishedArr && ` ${publishedArr[0]}. ${publishedArr[1]}. ${publishedArr[2].slice(0, publishedArr[2].indexOf("T"))}`;
    }
    return publishedAt;
};

export const viewCountCommaMark = (data) => {
    if (data) {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return "0";
    }
};

export const LikeDislikeCount = (data) => {
    let num;
    if (!data) return "0";
    if (data && 10000 > data && data / 1000 > 1) {
        num = (data / 1000).toFixed(1) + "천";
    } else if (data && data / 10000 > 1) {
        num = (data / 10000).toFixed(1) + "만";
    } else {
        num = data;
    }
    return num;
};

export const DetailRelatedViewCount = (data) => {
    let num;
    if (!data) return "0";
    if (data && 10000 > data && data / 1000 > 1) {
        num = (data / 1000).toFixed(1) + "천";
    } else if (data && data / 10000 > 1) {
        num = (data / 10000).toFixed(0) + "만";
    } else {
        num = data;
    }
    return num;
};

export const subscriberCount = (data) => {
    let num;
    if (!data) return "0";
    if (data && data / 10000 > 1) {
        num = (data / 10000).toFixed(0) + "만";
    } else {
        num = data;
    }
    return num;
};

export const LikeCountComma = (data) => {
    let num;
    if (!data) return "0";
    if (data < 10000 && data / 1000 > 1) {
        return (num = (data / 1000).toFixed(1) + "천");
    } else if (data / 10000 > 1) {
        return (num = (data / 10000).toFixed(1) + "만");
    } else {
        return (num = data);
    }
    return num;
};

export const isFlexibleSideMenu = (pathname) => {
    const r = FLEXIBLE_SIDE_MENU_PATHNAME.filter((item) => item === pathname);
    return r.length > 0;
};

export const setPlayTime = (data) => {
    if (!data) return null;
    let proData = data.replace("PT", "");
    let hour, minute, second;
    let playTime = [];

    if (proData.indexOf("H") !== -1) hour = proData.slice(0, proData.indexOf("H"));
    if (proData.indexOf("M") !== -1) minute = proData.slice(proData.indexOf("H") + 1, proData.indexOf("M"));
    if (proData.indexOf("S") !== -1) {
        if (minute) {
            second = proData.slice(proData.indexOf("M") + 1, proData.indexOf("S"));
        } else {
            second = proData.slice(proData.indexOf("H") + 1, proData.indexOf("S"));
        }
    }

    if (second?.length < 2) second = `0${second}`;
    if (second?.length == undefined) second = "00";
    let minuteLength = minute?.length < 2;
    if (hour && minuteLength) minute = `0${minute}`;

    if (hour) {
        if (minute && second) playTime = [hour, minute, second];
        if (minute == undefined) playTime = [hour, "00", second];
    }
    if (hour == undefined) playTime = [minute, second];
    if (hour == undefined && minute == undefined) playTime = ["0", second];

    let time = playTime.join(` : `);

    return time;
};

export const classification = (data) => {
    if (!data) return null;
    const dataArray = data?.split("\n");
    const text = dataArray.map((item, i) => {
        const itemWords = item.split(" ");
        const text = itemWords
            .map((item) => {
                if (item.indexOf("http") !== -1) {
                    return `<a href="${item}">${item}</a>`;
                }
                if (item.indexOf("#") !== -1) {
                    return `<a href="https://www.youtube.com/hashtag/${item}">${item}</a>`;
                }
                if (item.indexOf("www") !== -1) {
                    return `<a href="https://${item}" target="_blank">${item}</a>`;
                }
                return item;
            })
            .join(" ");

        return (
            <div className="wrap" key={i}>
                <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        );
    });

    return text;
};

export const videoDetailtags = (data) => {
    if (!data) return null;
    const dataArr = data.split(" ");
    const text = dataArr.filter((item) => item.indexOf("#") !== -1);
    const tags = text.map((item) => {
        return `<a href="https://www.youtube.com/hashtag/${item}">${item}</a>`;
    });

    return tags.join(" ");
};
