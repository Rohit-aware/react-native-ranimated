import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const Orderbag = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.33337 7.99996C1.33337 5.4858 1.33337 4.22872 2.11442 3.44767C2.89547 2.66663 4.15255 2.66663 6.66671 2.66663H9.33337C11.8475 2.66663 13.1046 2.66663 13.8857 3.44767C14.6667 4.22872 14.6667 5.4858 14.6667 7.99996V9.33329C14.6667 11.8475 14.6667 13.1045 13.8857 13.8856C13.1046 14.6666 11.8475 14.6666 9.33337 14.6666H6.66671C4.15255 14.6666 2.89547 14.6666 2.11442 13.8856C1.33337 13.1045 1.33337 11.8475 1.33337 9.33329V7.99996Z"
      stroke="#272727"
    />
    <Path d="M4.66663 2.66663V1.66663" stroke="#272727" strokeLinecap="round" />
    <Path d="M11.3334 2.66663V1.66663" stroke="#272727" strokeLinecap="round" />
    <Circle cx={11} cy={11} r={1} stroke="#272727" />
    <Path d="M1.66663 6H14.3333" stroke="#272727" strokeLinecap="round" />
  </Svg>
);
export default Orderbag;
