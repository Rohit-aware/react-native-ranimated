import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const LastOfferIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={30} height={30} fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_7_131" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_7_131"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default LastOfferIcon;
