import iconSun from './images/icon-sun.svg';
import iconMoon from './images/icon-moon.svg';
import lightBg from './images/bg-desktop-light.jpg';
import lightBgMobile from './images/bg-mobile-light.jpg';
import darkBg from './images/bg-desktop-dark.jpg';
import darkBgMobile from './images/bg-mobile-dark.jpg';

const initialTheme = {
    themeIcon: iconSun,
    changed: false,
    bodyBg: 'hsl(235, 21%, 11%)',
    sectionBg: 'hsl(235, 24%, 19%)',
    textColor: 'hsl(0,0%,98%)',
    bgImg: `url(${darkBg})`,
    bgImgMobile: `url(${darkBgMobile})`,
  };

const updatedTheme = {
    themeIcon: iconMoon,
    changed: true,
    bodyBg: 'hsl(0, 0%, 98%)',
    sectionBg: 'hsl(0, 0%, 98%)',
    textColor: 'hsl(235, 21%, 11%)',
    bgImg: `url(${lightBg})`,
    bgImgMobile: `url(${lightBgMobile})`,
}

export { initialTheme, updatedTheme };