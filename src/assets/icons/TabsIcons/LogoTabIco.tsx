import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

const LogoTabIco = (props: SvgProps) => (
  <Svg width={92} height={92} fill="none" {...props}>
    <Circle cx={46} cy={46} r={40} fill="#BECFDA" />
    <Path
      fill="#000"
      d="M70.098 29.6c0 .31-.106.586-.318.83-.195.229-.44.367-.732.416-.781.179-1.563.325-2.344.44-.765.113-1.554.186-2.368.219a240.248 240.248 0 0 1-1.367 9.009 128.05 128.05 0 0 1-1.367 7.055 75.954 75.954 0 0 1-1.465 5.542 56.194 56.194 0 0 1-1.612 4.541 53.704 53.704 0 0 1-1.782 4.029 129.38 129.38 0 0 1-2.002 3.93 1.14 1.14 0 0 1-.44.44c-.178.13-.382.195-.61.195-.504 0-.887-.179-1.147-.537a53.885 53.885 0 0 1-2.734-4.395 82.251 82.251 0 0 1-2.198-4.223 85.363 85.363 0 0 1-1.684-3.858 92.04 92.04 0 0 1-1.245-3.271 122.885 122.885 0 0 1-3.052 7.983 75.727 75.727 0 0 1-3.54 7.202 1.209 1.209 0 0 1-.464.489c-.195.146-.407.22-.635.22-.472 0-.838-.22-1.098-.66a62.981 62.981 0 0 1-3.736-6.982 87.715 87.715 0 0 1-2.807-6.958 96.017 96.017 0 0 1-2.002-6.494 107.634 107.634 0 0 1-1.368-5.713c-.341-1.725-.61-3.231-.805-4.517a141.53 141.53 0 0 1-.39-2.978 362.275 362.275 0 0 1-2.345-.196 1.388 1.388 0 0 1-.83-.44 1.357 1.357 0 0 1-.317-.878c.049-.39.195-.692.44-.903.243-.228.528-.342.854-.342h.098c1.855.195 3.76.293 5.712.293 1.563 0 3.117-.057 4.664-.171a55.83 55.83 0 0 0 4.54-.562h.196c.374 0 .683.13.928.391.244.244.366.53.366.855 0 .325-.106.61-.318.854-.195.244-.455.39-.78.44l-2.222.293c-.733.097-1.49.187-2.271.268.065.602.163 1.4.293 2.393.146.976.334 2.091.562 3.344.227 1.237.504 2.588.83 4.053.341 1.449.74 2.954 1.196 4.517a95.145 95.145 0 0 0 1.587 4.736 57.009 57.009 0 0 0 2.026 4.712 106.735 106.735 0 0 0 2.149-5.493 73.143 73.143 0 0 0 1.806-5.64c.521-1.888.96-3.776 1.319-5.664.358-1.904.602-3.809.732-5.713a1.28 1.28 0 0 1 .366-.806c.228-.227.505-.358.83-.39.326 0 .61.098.855.293.244.195.407.447.488.757a78.39 78.39 0 0 0 1.245 5.664 86.323 86.323 0 0 0 1.71 5.713 102.13 102.13 0 0 0 2.245 5.859c.83 1.986 1.75 4.02 2.759 6.104a49.394 49.394 0 0 0 1.392-4.15 69.69 69.69 0 0 0 1.318-5.177c.423-1.936.846-4.134 1.27-6.591.423-2.458.846-5.266 1.269-8.423a49.698 49.698 0 0 1-2.197-.147 40.443 40.443 0 0 1-2.222-.317 1.302 1.302 0 0 1-.757-.415 1.293 1.293 0 0 1-.293-.83c0-.423.139-.74.415-.952.293-.228.578-.342.855-.342h.244c1.628.293 3.263.44 4.907.44.977 0 1.945-.05 2.906-.147.96-.098 1.92-.26 2.88-.489h.293c.358 0 .668.13.928.391.26.244.39.53.39.855Z"
    />
    <Circle cx={46} cy={46} r={45.25} stroke="#46545D" strokeWidth={1.5} />
  </Svg>
);
export default LogoTabIco;
