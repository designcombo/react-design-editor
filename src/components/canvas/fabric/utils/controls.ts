import { Control, controlsUtils } from "fabric";
import { drawCircleIcon, drawRotateIcon, drawVerticalIcon } from "./drawer";
const scaleSkewCursorStyleHandler = controlsUtils.scaleSkewCursorStyleHandler;
const scaleCursorStyleHandler = controlsUtils.scaleCursorStyleHandler;
const scalingEqually = controlsUtils.scalingEqually;
const rotationWithSnapping = controlsUtils.rotationWithSnapping;
const rotationStyleHandler = controlsUtils.rotationStyleHandler;
const changeWidth = controlsUtils.changeWidth;

interface ObjectControls {
  ml: Control;
  mr: Control;
  mb: Control;
  mt: Control;
  tl: Control;
  tr: Control;
  bl: Control;
  br: Control;
  trr: Control;
  brr: Control;
  blr: Control;
  tlr: Control;
  mtr: Control;
}

export const rotateControl = new Control({
  x: 0,
  y: 0.5,
  actionHandler: rotationWithSnapping,
  cursorStyleHandler: rotationStyleHandler,
  offsetY: 25,
  withConnection: false,
  actionName: "rotate",
  render: drawRotateIcon,
});

const rotateIcon = (angle: number) => {
  return `url("data:image/svg+xml,<svg height='20' width='20' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><g fill='none' transform='rotate(${angle} 16 16)'><path fill='white' d='M18.24 5.37C11.41 6.04 5.98 11.46 5.32 18.26L0 18.26L7.8 26L15.61 18.27L10.6 18.27C11.21 14.35 14.31 11.25 18.24 10.64L18.24 15.55L26 7.78L18.24 0L18.24 5.37Z'></path><path fill='black' d='M19.5463 6.61441C12.4063 6.68441 6.61632 12.4444 6.56632 19.5644L3.17632 19.5644L7.80632 24.1444L12.4363 19.5644L9.18632 19.5644C9.24632 13.8844 13.8563 9.28441 19.5463 9.22441L19.5463 12.3844L24.1463 7.78441L19.5463 3.16441L19.5463 6.61441Z'></path></g></svg>") 12 12,auto`;
};

function noop<T>(...args: T[]): void {
  // This function does nothing with the arguments
}

const getRotateControl = (angle: number): Partial<Control> => ({
  sizeX: 16,
  sizeY: 16,
  actionHandler: (eventData, transformData, x, y) => {
    transformData.target.canvas?.setCursor(
      rotateIcon(transformData.target.angle + angle)
    );
    return rotationWithSnapping(eventData, transformData, x, y);
  },
  cursorStyleHandler: (eventData, control, fabricObject) => {
    return rotateIcon(fabricObject.angle + angle);
  },
  render: noop,
  actionName: "rotate",
});
export const createTextControls = (): Partial<ObjectControls> => {
  return {
    tlr: new Control({
      x: -0.5,
      y: -0.5,
      offsetX: -4,
      offsetY: -4,
      ...getRotateControl(0),
    }),

    trr: new Control({
      x: 0.5,
      y: -0.5,
      offsetX: 4,
      offsetY: -4,
      ...getRotateControl(90),
    }),

    brr: new Control({
      x: 0.5,
      y: 0.5,
      offsetX: 4,
      offsetY: 4,
      ...getRotateControl(180),
    }),

    blr: new Control({
      x: -0.5,
      y: 0.5,
      offsetX: -4,
      offsetY: 4,
      ...getRotateControl(270),
    }),

    mr: new Control({
      x: 0.5,
      y: 0,
      actionHandler: changeWidth,
      cursorStyleHandler: scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: drawVerticalIcon,
    }),
    ml: new Control({
      x: -0.5,
      y: 0,
      actionHandler: changeWidth,
      cursorStyleHandler: scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: drawVerticalIcon,
    }),

    tl: new Control({
      x: -0.5,
      y: -0.5,
      cursorStyleHandler: scaleCursorStyleHandler,
      actionHandler: scalingEqually,
      render: drawCircleIcon,
    }),

    tr: new Control({
      x: 0.5,
      y: -0.5,
      cursorStyleHandler: scaleCursorStyleHandler,
      actionHandler: scalingEqually,
      render: drawCircleIcon,
    }),

    bl: new Control({
      x: -0.5,
      y: 0.5,
      cursorStyleHandler: scaleCursorStyleHandler,
      actionHandler: scalingEqually,
      render: drawCircleIcon,
    }),

    br: new Control({
      x: 0.5,
      y: 0.5,
      cursorStyleHandler: scaleCursorStyleHandler,
      actionHandler: scalingEqually,
      render: drawCircleIcon,
    }),
  };
};
