const decreaseOpacity = (color, opacity) => {
    const hexToRgb = hex => hex.match(/\w\w/g).map(v => parseInt(v, 16));
    const rgbToHex = rgb => rgb.map(v => Math.min(255, Math.max(0, Math.round(v)))).map(v => v.toString(16).padStart(2, '0')).join('');
    const applyOpacity = (rgb, opacity) => [...rgb, Math.round(opacity * 255)].slice(0, 4);

    return rgbToHex(applyOpacity(hexToRgb(color), opacity));
};

const colorArray = [
    '#FFE1E1',
    '#EAFFE1',
    '#FFF6E1',
    '#F0E1FF',
    '#E1FFF4',
    '#FFE0E0',
    '#FFE0F4',
    '#E0F0FF',
    '#E1E0FF',
];

export const colorsArray = colorArray.map(color =>'#'+ decreaseOpacity(color, 0.4));

console.log(colorsArray);
