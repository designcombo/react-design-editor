import React, { useEffect } from "react";
import FabricCanvas from "./fabric/canvas";
import Artboard from "./fabric/artboard";
import { ADD_PREFIX, dispatcher, filter } from "@/global";
import { addEventListeners, removeEventListeners } from "./events";
import { createItem } from "./fabric/utils/create-item";
import { EventBusData } from "@/interfaces/rxjs";
import { FabricObject } from "fabric";

const Canvas = () => {
  const canvasElRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<FabricCanvas>(null);

  useEffect(() => {
    const canvasWrapper = containerRef.current as HTMLDivElement;

    const canvasWrapperWidth = canvasWrapper.offsetWidth;
    const canvasWrapperHeight = canvasWrapper.offsetHeight;

    FabricObject.ownDefaults.borderColor = "blue";
    FabricObject.ownDefaults.cornerColor = "white";
    FabricObject.ownDefaults.cornerStrokeColor = "#c0c0c0";
    FabricObject.ownDefaults.borderOpacityWhenMoving = 1;
    FabricObject.ownDefaults.borderScaleFactor = 1;
    FabricObject.ownDefaults.cornerSize = 8;
    FabricObject.ownDefaults.cornerStyle = "rect";
    FabricObject.ownDefaults.centeredScaling = false;
    FabricObject.ownDefaults.centeredRotation = true;
    FabricObject.ownDefaults.transparentCorners = false;

    const canvas = new FabricCanvas(canvasElRef.current, {
      width: canvasWrapperWidth,
      height: canvasWrapperHeight,
      preserveObjectStacking: true,
      selectionColor: "rgba(52, 152, 219,0.1)",
      selectionBorderColor: "rgba(52, 152, 219,1.0)",
    });

    addEventListeners(canvas);

    canvasRef.current = canvas;

    const size = {
      width: 600,
      height: 600,
    };

    const artboard = new Artboard({
      width: size.width,
      height: size.height,
    });

    canvas.add(artboard);

    canvas.centerArtboards();

    return () => {
      removeEventListeners(canvas);
      canvas.dispose();
    };
  }, []);

  const handleAddRemoveEvents = async (object: EventBusData) => {
    const item = await createItem(object);
    canvasRef.current?.add(item);
  };

  useEffect(() => {
    const stateEvents = dispatcher.bus.pipe(
      filter(({ key }) => key.startsWith(ADD_PREFIX))
    );
    const subscription = stateEvents.subscribe((object) => {
      handleAddRemoveEvents(object);
    });
    return () => subscription.unsubscribe();
  }, [canvasRef]);

  return (
    <div ref={containerRef} className="flex-1 bg-zinc-900">
      <canvas ref={canvasElRef} />
    </div>
  );
};

export default Canvas;
