import React from 'react';
import { IconType } from 'src/utils/types/icons';

export const DownloadIcon: React.FC<IconType> = ({ size, color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 24 24"
      className={className}
      height={size ? size : 24}
      fill={color}>
      <path
        d="M8.491.099a.67.67 0 0 0-.285.229c-.05.073-.997 1.045-2.104 2.16-1.777 1.79-2.02 2.046-2.08 2.19-.148.354-.057.687.278 1.022.243.243.454.345.71.343.343-.002.382-.034 1.762-1.405l1.237-1.23.008 4.979.008 4.978.064.137a.853.853 0 0 0 .372.388c.243.124.835.124 1.078 0a.853.853 0 0 0 .372-.388l.064-.137.008-4.978.008-4.979 1.237 1.23c1.38 1.371 1.419 1.403 1.762 1.405.256.002.467-.1.71-.343.335-.335.426-.668.278-1.022-.06-.144-.303-.4-2.08-2.19C10.791 1.373 9.844.401 9.794.328a.67.67 0 0 0-.285-.229C9.328.008 9.294.002 9 .002c-.294 0-.328.006-.509.097M.697 12.032c-.172.034-.418.17-.49.273a1.597 1.597 0 0 0-.125.226c-.06.132-.067.201-.077.831-.016 1.029.045 1.486.281 2.105.106.276.356.727.529.953.147.193.531.58.723.73a4.1 4.1 0 0 0 2.038.819c.401.043 10.447.043 10.848 0a3.992 3.992 0 0 0 1.593-.524 3.21 3.21 0 0 0 .763-.582 3.956 3.956 0 0 0 1.097-1.908c.096-.383.13-.845.118-1.591-.01-.632-.017-.701-.077-.833-.107-.234-.18-.313-.377-.409a1.286 1.286 0 0 0-.787-.094c-.254.044-.393.114-.532.268-.183.203-.205.33-.231 1.294-.02.759-.029.874-.085 1.028-.188.517-.552.939-.996 1.157-.475.232-.004.215-5.91.215-5.906 0-5.435.017-5.91-.215-.447-.22-.823-.659-1.007-1.18-.043-.123-.057-.304-.075-1.005-.024-.964-.047-1.091-.23-1.294a.947.947 0 0 0-.217-.175c-.208-.107-.581-.145-.864-.089"
        fillRule="evenodd"
      />
    </svg>
  );
};