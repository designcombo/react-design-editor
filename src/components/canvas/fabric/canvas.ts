import { Canvas as FabricCanvas } from "fabric";

class Canvas extends FabricCanvas {
  public isFlipCanvas: boolean;
  constructor(canvasEl: HTMLCanvasElement, options: any) {
    super(canvasEl, options);
  }

  public centerArtboards() {
    const canvasWidth = this.width;
    const canvasHeight = this.height;
    const vt = this.viewportTransform;
    const requestedSize = this.getRequestedSize();
    vt[4] = (canvasWidth - requestedSize.width) / 2;
    vt[5] = (canvasHeight - requestedSize.height) / 2;
    this.requestRenderAll();
  }

  public getRequestedSize() {
    const artboards = this.getObjects("Artboard");
    const artboardsWidth = artboards[0].width;
    let artboardsHeight = 0;
    artboards.forEach((artboard) => {
      artboardsHeight += artboard.height;
    });
    return {
      width: artboardsWidth,
      height: artboardsHeight,
    };
  }
}

export default Canvas;
