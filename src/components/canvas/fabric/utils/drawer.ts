import * as fabric from "fabric";
const horizontalIcon = document.createElement("img");
const verticalIcon = document.createElement("img");
horizontalIcon.src =
  "https://ik.imagekit.io/uonadbo34e6/icons/horizontal_7M4-rXo2E.svg";
verticalIcon.src =
  "https://ik.imagekit.io/uonadbo34e6/icons/vertical_hEUb9e0-3.svg";

const largeSide = 45;
const smallSide = 10;

export function drawVerticalIcon(
  ctx: CanvasRenderingContext2D,
  left: number,
  top: number,
  styleOverride: any,
  fabricObject: any
) {
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(90 + fabricObject.angle));
  ctx.restore();
}

export function drawHorizontalIcon(
  ctx: CanvasRenderingContext2D,
  left: number,
  top: number,
  styleOverride: any,
  fabricObject: any
) {
  // @ts-ignore
  const size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  // icon, x, y, width, height

  ctx.drawImage(
    horizontalIcon,
    false ? -smallSide / 2 : -size / 2, //x
    false ? -size / 2 : -smallSide / 2, //y
    false ? smallSide : size, // width
    false ? size : smallSide // height
  );
  ctx.restore();
}

const rotateControlSize = 26;
const img = document.createElement("img");
img.src = "https://ik.imagekit.io/uonadbo34e6/icons/Rotate_qCgLn7Jao.svg";

export function drawRotateIcon(
  ctx: CanvasRenderingContext2D,
  left: number,
  top: number,
  styleOverride: any,
  fabricObject: any
) {
  ctx.save();
  ctx.translate(left, top);
  ctx.shadowBlur = 15;
  ctx.shadowOffsetY = 8;
  ctx.shadowColor = "rgba(0,0,0,0.08)";
  ctx.drawImage(
    img,
    -rotateControlSize / 2,
    -rotateControlSize / 2,
    rotateControlSize,
    rotateControlSize
  );
  ctx.restore();
}

export function drawCircleIcon(
  ctx: CanvasRenderingContext2D,
  left: number,
  top: number,
  styleOverride: any,
  fabricObject: any
) {
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.lineWidth = 3;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "black";
  ctx.arc(0, 0, 5.5, 0, 2 * Math.PI);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.restore();
}
