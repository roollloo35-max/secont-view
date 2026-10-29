import React from 'react';

export type IconName =
  | 'alert-triangle'
  | 'book'
  | 'calendar'
  | 'bar-chart'
  | 'clock'
  | 'download'
  | 'play'
  | 'scales'
  | 'shield-check'
  | 'users'
  | 'lock'
  | 'file-text'
  | 'upload'
  | 'eye'
  | 'user'
  | 'crosshair'
  | 'check'
  | 'search';

export type IconColor = '#ffffff' | '#2A5C9A' | '#C29A4B' | '#0B1F3A';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  color?: IconColor;
  size?: number | string;
}

type IconData = {
  viewBox: string;
  content: React.ReactNode;
};

const iconsMap: Record<IconName, IconData> = {
  'alert-triangle': {
    viewBox: '0 0 22 22',
    content: (
      <>
        <path d="M19.9192 16.5L12.5859 3.66671C12.426 3.38456 12.1941 3.14988 11.9139 2.98661C11.6337 2.82333 11.3152 2.7373 10.9909 2.7373C10.6666 2.7373 10.3481 2.82333 10.0679 2.98661C9.78767 3.14988 9.55579 3.38456 9.39589 3.66671L2.06256 16.5C1.90093 16.78 1.81618 17.0976 1.8169 17.4208C1.81761 17.7441 1.90377 18.0614 2.06663 18.3406C2.2295 18.6197 2.46328 18.8509 2.74428 19.0106C3.02528 19.1704 3.34351 19.253 3.66672 19.25H18.3334C18.655 19.2497 18.971 19.1648 19.2494 19.0037C19.5278 18.8427 19.759 18.6112 19.9197 18.3326C20.0804 18.0539 20.1649 17.7379 20.1648 17.4162C20.1648 17.0946 20.0801 16.7786 19.9192 16.5Z" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 8.25V11.9167" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 15.5834H11.01" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'book': {
    viewBox: '0 0 24 24',
    content: (
      <path d="M4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2H20V17M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V17M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    ),
  },
  'calendar': {
    viewBox: '0 0 22 22',
    content: (
      <>
        <path d="M4.58333 3.66669H17.4167C18.4292 3.66669 19.25 4.4875 19.25 5.50002V18.3334C19.25 19.3459 18.4292 20.1667 17.4167 20.1667H4.58333C3.57081 20.1667 2.75 19.3459 2.75 18.3334V5.50002C2.75 4.4875 3.57081 3.66669 4.58333 3.66669Z" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.6667 1.83331V5.49998M7.33333 1.83331V5.49998M2.75 9.16665H19.25" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'bar-chart': {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path d="M12 20V10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 20V4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 20V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'clock': {
    viewBox: '0 0 22 22',
    content: (
      <>
        <path d="M20.1666 11C20.1666 16.0626 16.0625 20.1666 10.9999 20.1666C5.93731 20.1666 1.83325 16.0626 1.83325 11C1.83325 5.93737 5.93731 1.83331 10.9999 1.83331C16.0625 1.83331 20.1666 5.93737 20.1666 11Z" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 5.5V11L14.6667 12.8333" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'download': {
    viewBox: '0 0 18 18',
    content: (
      <>
        <path d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.25 7.5L9 11.25L12.75 7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11.25V2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'play': {
    viewBox: '0 0 18 18',
    content: (
      <path d="M4.5 2.25L15 9L4.5 15.75V2.25Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
  },
  'scales': {
    viewBox: '0 0 26 26',
    content: (
      <>
        <path d="M17.3333 17.3333L20.5833 8.66663L23.8333 17.3333C22.8908 18.0375 21.7533 18.4166 20.5833 18.4166C19.4133 18.4166 18.2758 18.0375 17.3333 17.3333Z" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.16675 17.3333L5.41675 8.66663L8.66675 17.3333C7.72425 18.0375 6.58675 18.4166 5.41675 18.4166C4.24675 18.4166 3.10925 18.0375 2.16675 17.3333Z" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.58325 22.75H18.4166" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 3.25V22.75" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.25 7.58329H5.41667C7.58333 7.58329 10.8333 6.49996 13 5.41663C15.1667 6.49996 18.4167 7.58329 20.5833 7.58329H22.75" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'shield-check': {
    viewBox: '0 0 22 22',
    content: (
      <>
        <path d="M18.3334 11.9166C18.3334 16.5 15.1251 18.7916 11.3117 20.1208C11.1121 20.1885 10.8952 20.1852 10.6976 20.1116C6.87508 18.7916 3.66675 16.5 3.66675 11.9166V5.49996C3.66675 5.25685 3.76333 5.02369 3.93523 4.85178C4.10714 4.67988 4.3403 4.5833 4.58341 4.5833C6.41675 4.5833 8.70841 3.4833 10.3034 2.08996C10.4976 1.92405 10.7447 1.83289 11.0001 1.83289C11.2555 1.83289 11.5025 1.92405 11.6967 2.08996C13.3009 3.49246 15.5834 4.5833 17.4167 4.5833C17.6599 4.5833 17.893 4.67988 18.0649 4.85178C18.2368 5.02369 18.3334 5.25685 18.3334 5.49996V11.9166Z" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.25 11L10.0833 12.8333L13.75 9.16663" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'users': {
    viewBox: '0 0 22 22',
    content: (
      <>
        <path d="M14.6666 19.25V17.4167C14.6666 16.4442 14.2803 15.5116 13.5926 14.8239C12.905 14.1363 11.9724 13.75 10.9999 13.75H5.49992C4.52746 13.75 3.59483 14.1363 2.90719 14.8239C2.21956 15.5116 1.83325 16.4442 1.83325 17.4167V19.25" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.9166 6.41667C11.9166 8.44171 10.275 10.0833 8.24992 10.0833C6.22487 10.0833 4.58325 8.44171 4.58325 6.41667C4.58325 4.39162 6.22487 2.75 8.24992 2.75C10.275 2.75 11.9166 4.39162 11.9166 6.41667Z" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.1667 19.25V17.4166C20.1661 16.6042 19.8957 15.815 19.398 15.1729C18.9003 14.5308 18.2034 14.0722 17.4167 13.8691M14.6667 2.86914C15.4555 3.07108 16.1545 3.52978 16.6538 4.17293C17.153 4.81607 17.4239 5.60707 17.4239 6.42122C17.4239 7.23538 17.153 8.02638 16.6538 8.66952C16.1545 9.31266 15.4555 9.77136 14.6667 9.97331" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'lock': {
    viewBox: '0 0 20 20',
    content: (
      <>
        <path d="M4.16667 9.16675H15.8333C16.7538 9.16675 17.5 9.91294 17.5 10.8334V16.6667C17.5 17.5872 16.7538 18.3334 15.8333 18.3334H4.16667C3.24619 18.3334 2.5 17.5872 2.5 16.6667V10.8334C2.5 9.91294 3.24619 9.16675 4.16667 9.16675Z" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.83325 9.16675V5.83341C5.83325 4.72835 6.27224 3.66854 7.05364 2.88714C7.83504 2.10573 8.89485 1.66675 9.99992 1.66675C11.105 1.66675 12.1648 2.10573 12.9462 2.88714C13.7276 3.66854 14.1666 4.72835 14.1666 5.83341V9.16675" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'file-text': {
    viewBox: '0 0 26 26',
    content: (
      <>
        <path d="M15.7083 2.16663H6.49992C5.92528 2.16663 5.37418 2.3949 4.96785 2.80123C4.56153 3.20756 4.33325 3.75866 4.33325 4.33329V21.6666C4.33325 22.2413 4.56153 22.7924 4.96785 23.1987C5.37418 23.605 5.92528 23.8333 6.49992 23.8333H19.4999C20.0746 23.8333 20.6257 23.605 21.032 23.1987C21.4383 22.7924 21.6666 22.2413 21.6666 21.6666V8.12496L15.7083 2.16663Z" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.1667 2.16663V8.66663H21.6667" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.3334 14.0834H8.66675" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.3334 18.4166H8.66675" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.8334 9.75H8.66675" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'upload': {
    viewBox: '0 0 26 26',
    content: (
      <>
        <path d="M22.75 16.25V20.5833C22.75 21.158 22.5217 21.7091 22.1154 22.1154C21.7091 22.5217 21.158 22.75 20.5833 22.75H5.41667C4.84203 22.75 4.29093 22.5217 3.8846 22.1154C3.47827 21.7091 3.25 21.158 3.25 20.5833V16.25" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.4166 8.66667L12.9999 3.25L7.58325 8.66667" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 3.25V16.25" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'eye': {
    viewBox: '0 0 22 22',
    content: (
      <>
        <path d="M1.83325 11C1.83325 11 4.58325 4.58337 10.9999 4.58337C17.4166 4.58337 20.1666 11 20.1666 11C20.1666 11 17.4166 17.4167 10.9999 17.4167C4.58325 17.4167 1.83325 11 1.83325 11Z" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.75 11C13.75 12.5188 12.5188 13.75 11 13.75C9.48122 13.75 8.25 12.5188 8.25 11C8.25 9.48122 9.48122 8.25 11 8.25C12.5188 8.25 13.75 9.48122 13.75 11Z" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'user': {
    viewBox: '0 0 22 22',
    content: (
      <>
        <path d="M17.4166 19.25V17.4167C17.4166 16.4442 17.0303 15.5116 16.3426 14.8239C15.655 14.1363 14.7224 13.75 13.7499 13.75H8.24992C7.27746 13.75 6.34483 14.1363 5.65719 14.8239C4.96956 15.5116 4.58325 16.4442 4.58325 17.4167V19.25" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.6666 6.41667C14.6666 8.44171 13.025 10.0833 10.9999 10.0833C8.97487 10.0833 7.33325 8.44171 7.33325 6.41667C7.33325 4.39162 8.97487 2.75 10.9999 2.75C13.025 2.75 14.6666 4.39162 14.6666 6.41667Z" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'crosshair': {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9H15V15H9V9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 2V4M15 20V22M2 15H4M2 9H4M20 15H22M20 9H22M9 2V4M9 20V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  'check':{
    viewBox: '0 0 16 16',
    content: (
        <>
        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" stroke="#C29A4B"/>
        </>
    ),
  },
  'search': {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21L16.7 16.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
};

export const Icon: React.FC<IconProps> = ({
  name,
  color = '#2A5C9A', // Дефолтный синий
  size = 24,
  ...props
}) => {
  const icon = iconsMap[name];

  if (!icon) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      stroke={color} // Цвет применяется ко всем элементам
      {...props}
    >
      {icon.content}
    </svg>
  );
};