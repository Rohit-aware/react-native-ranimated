import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const Menu = (props) => (
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
        <Use xlinkHref="#image0_7_97" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_7_97"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIElEQVR4nO3bQW7TYBSF0W/YCkbALjJkT5R9lYLYDHQ7LQNXkbyARvlRnqVzpLuAvGf9tuWbAgAAAAAAAABW+Fidqq/Se2Zw2me23JfqV/Wv2qRLZvBaPVWfVy3jvnq2hK69EP/us7zad8to1anwsGIhvy2kVQs5H/sW0pz73s8VC3FktWwh31Ys5H6/Id366toOnj/VXYucH9l+7I9wt/5h28HyUj1Wn/oPPngx7NIXw/PMAAAAAACA41CU6+LvIYpyzYqiXDOjKNe8KMo1K4pyzYqiXLOiKNecKMo1I4pyzfmHl6IcAAAAAAAcj6JcinLbwaMo18woyjUvinLNiqJcs6Io16woyjUninLNiKJcty/IKcoBAAAAAAAAQGu9AR+B/xLRPlnMAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default Menu;
