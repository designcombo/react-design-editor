import { Rect, RectProps } from "fabric";

class Artboard extends Rect {
  static type = "Artboard";
  static ownDefaults = {
    lockMovementX: true,
    lockMovementY: true,
    hasControls: false,
    fill: "#ffffff",
    selectable: false,
    absolutePositioned: true,
    objectCaching: false,
    evented: false,
  };

  static getDefaults(): Record<string, any> {
    return {
      ...super.getDefaults(),
      ...Artboard.ownDefaults,
    };
  }

  constructor(options: Partial<RectProps>) {
    super({
      ...options,
      ...Artboard.ownDefaults,
    });
  }
}

export default Artboard;
