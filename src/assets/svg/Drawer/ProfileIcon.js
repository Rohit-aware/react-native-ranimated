import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const ProfileIcon = (props) => (
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
        <Use xlinkHref="#image0_7_128" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_7_128"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAESElEQVR4nO2dXahVRRTHf5rZzT7sU3swKQgS8iECywR7yYxQKXwpIgkx8smUsrBAyBchS4K+EDQrfKvUJwmiIssMyjIyQiUkKHq4XoS6Sn6kK4ZWYIcztPc+e/Ze+876wR8u3MO+M+u/Z/bcPWvWAcdxHMdxHMdxHMdxnCpMBOYAq4FtwB7gF+AYcAoYBY4AXwAvAvcCF3io6+cOYIsGXkrqJ2AZMM6NGZxZwKcVTOinD4Gr3JTqU9PLwNmazPhX3wNXuCnluBbYW7MR5+t9N6Q41+hdLIl1Qp8t7wDz3KD+XAh81oAZ/bQLuNKN+S8bWjJDVIeBG9yUf7gVONOyIQJ8DVzkpsAHBswQ1Qu5G3KbAROk54E/lYx5zYAJ0qP1ZMp4YNiAAdKj8D4sS243EHyJ6BYy5CkDgZeIniBDthkIvES0iQz53EDgJaLdZMgBA4GXiLJ8sP9mIPAS0VEy5E8DgZeITpIhfxgIvEQU2pYdBw0EXiI6RIZ8bCDwElHYy8+O9QYCLxFtJEPuMRB4iWghGTJUMddKGnigX0qmWHz9vomMWWfAAOnR82TKfOCcAQOkR6FNd5MhOw0EXyLKMqFuv4HAS0T7yJAvDQReIgpty443DQReItpMhjxsIPAS0UNkyCXAiIHgS5+9kElkyiMJzoHIADqrIzdrFiY+EyIFFdqwoO1gWGGKAUOmth0Ea/zYohk/tN15izzdoiEhac/pYXJLq66wqrrc3ejPky0YstLNiDNB3yM1eWrKqz38DzfqNJLajLBbeZOPjuL77WcSmvEXcJ+bUY5liUwJ11zqZlRjXgJDvFjAgEjNctyQsYX4CLGFuCG2EDfEFuKG2GFaAkPCNZ2KbElgSJYZJXUwXUu/1m3IqF7bqcDNNZf9C7uSM92JwZikWfLHBxwVIav9Yjej2B5IEa7T8yS/lzAifPbVEgkMRdsy5pgBPKPlwsO27eySCXaLgTc0B3dYz5Wf1J/36u8Wl0x4m6Nt2aNtC20cs4Rdubu0JvvhyJSyoMX2LYpMiYe0zXPHys7inXq3jhTMGlzTcJ328LeeLZg9eVSnzFCLvlNcDTwXGQlF9BFwfQPtnD7AWfmDevOYricfihG/NOBqSM57GK/Rk7p1M6Sjoo7SHqNac9hcTflHE+VU/axpOnXkTYVrrNJr1t3OMJ0twQDhPPf2BB2UPiNmK3B/yf8lwirrAeCtksvlqnpXV4GtENb23zTQSenRaT2f+DawFlihd+cS/XmtFtr/Tj/bdPu+0m95aJTLgG9b6Kx0RPuargaxw0Cnxbjea8oMy2cDxZgeTG3GkPFaiWJMv6b+xoXlBjopHdNjKQ3xBzmVMuyTvWqwWCxGjOtcqldBjxvonHRUSaat1w10TDqqV1IYsttAx6Sj+iSFIUcMdEw6qvC9ibVjsS6JdERha7l2ThnomHRUWdaSdxzHcRzHcRzHcRw6z9/RpP31I1D9NgAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default ProfileIcon;
