import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Cancelled = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_792_12752)">
      <Path
        d="M1.33325 7.99998C1.33325 4.85728 1.33325 3.28593 2.30956 2.30962C3.28587 1.33331 4.85722 1.33331 7.99992 1.33331C11.1426 1.33331 12.714 1.33331 13.6903 2.30962C14.6666 3.28593 14.6666 4.85728 14.6666 7.99998C14.6666 11.1427 14.6666 12.714 13.6903 13.6903C12.714 14.6666 11.1426 14.6666 7.99992 14.6666C4.85722 14.6666 3.28587 14.6666 2.30956 13.6903C1.33325 12.714 1.33325 11.1427 1.33325 7.99998Z"
        stroke="#E3503E"
      />
      <Path
        d="M9.66657 6.33333L6.33325 9.66665M6.33324 6.33331L9.66656 9.66663"
        stroke="#E3503E"
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_792_12752">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Cancelled;
