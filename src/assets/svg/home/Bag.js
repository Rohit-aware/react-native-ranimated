import * as React from "react";
import Svg, { Ellipse } from "react-native-svg";
const Bag = (props) => (
  <Svg
    width={70}
    height={69}
    viewBox="0 0 70 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse cx={35} cy={34.5} rx={35} ry={34.5} fill="white" />
  </Svg>
);
export default Bag;
