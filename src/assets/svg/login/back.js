import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Back = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 12H4M4 12L10 6M4 12L10 18"
      stroke="#272727"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Back;
