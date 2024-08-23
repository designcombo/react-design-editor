import {
  Canvas as BaseCanvas,
  FabricObject as BaseFabricObject,
  CanvasEvents as BaseCanvasEvents,
} from "fabric";

declare module "fabric" {
  export declare class Canvas extends BaseCanvas {
    __eventListeners: {};
    positionBeforeTransform?: {
      top: number;
      left: number;
    };
  }

  export declare class FabricObject extends BaseFabricObject {
    id: string;
    isAlignmentAuxiliary?: boolean;
    setSelected(selected: boolean): void;
    updateCoords(size?: number): void;
    timelineScale: number;
    accepts: ItemType[];
    itemType: string;
    items: string[];
    text: string;
    fontUrl: string;
    isMain?: boolean;
    display?: {
      from: number;
      to: number;
    };
  }
}
