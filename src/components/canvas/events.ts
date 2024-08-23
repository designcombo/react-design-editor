import {
  ActiveSelection,
  BasicTransformEvent,
  FabricObject,
  FabricObjectProps,
  ObjectEvents,
  SerializedObjectProps,
  TPointerEvent,
} from "fabric";
import FabricCanvas from "./fabric/canvas";
import { createTextControls } from "./fabric/utils/controls";
import { getObjectsDetail } from "./fabric/utils/get-object-details";
import { SELECTION_UPDATED, dispatcher } from "@/global";

type FabricMovingEvent = BasicTransformEvent<TPointerEvent> & {
  target: FabricObject<
    Partial<FabricObjectProps>,
    SerializedObjectProps,
    ObjectEvents
  >;
};

function onObjectMoving(this: FabricCanvas, e: FabricMovingEvent) {}

function onSelectionCreated(this: FabricCanvas) {
  const objects = this.getActiveObjects();
  const selection = this.getActiveObject();

  const layers = getObjectsDetail(objects);

  if (objects.length > 1 && selection instanceof ActiveSelection) {
    selection.setControlsVisibility({
      mt: false,
      mb: false,
      mr: false,
      ml: false,
    });
    selection.set({
      cornerColor: "#FFFFFF",
      cornerStyle: "circle",
      borderColor: "rgba(60, 64, 198,1.0)",
      cornerStrokeColor: "rgba(60, 64, 198,1.0)",
      transparentCorners: false,
      borderScaleFactor: 1,
      touchCornerSize: 40,
      cornerSize: 10,
    });
  }

  if (objects.length === 1) {
    const object = objects[0];

    object.controls = createTextControls();
    object.setCoords();
  }

  dispatcher.dispatch(SELECTION_UPDATED, {
    payload: {
      layers,
    },
  });
}

export function addEventListeners(canvas: FabricCanvas) {
  canvas.on("object:moving", onObjectMoving);
  canvas.on("selection:created", onSelectionCreated);
  canvas.on("selection:updated", onSelectionCreated);
}

export function removeEventListeners(canvas: FabricCanvas) {
  canvas.off("object:moving", onObjectMoving);
  canvas.off("selection:created", onSelectionCreated);
  canvas.off("selection:updated", onSelectionCreated);
}
