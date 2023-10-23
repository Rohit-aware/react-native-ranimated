import * as React from "react";
import Svg, { G, Path, Circle, Defs, ClipPath, Rect } from "react-native-svg";
const OnTheWay = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_792_12683)">
      <Path
        d="M1.33342 8.00004C1.33342 11.6819 4.31818 14.6667 8.00008 14.6667C11.682 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.682 1.33337 8.00008 1.33337"
        stroke="#F3A638"
        strokeLinecap="round"
      />
      <Path
        d="M8 6V8.66667H10.6667"
        stroke="#F3A638"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={7.99992}
        cy={8.00004}
        r={6.66667}
        stroke="#F3A638"
        strokeLinecap="round"
        strokeDasharray="0.5 3.5"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_792_12683">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default OnTheWay;
