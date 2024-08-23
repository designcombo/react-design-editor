import { FabricObject } from "fabric";

export const getObjectsDetail = (objects: FabricObject[]) => {
  const objectsDetails = [];
  objects.forEach((object) => {
    objectsDetails.push(getObjectDetails(object));
  });
  return objectsDetails;
};

const getObjectDetails = (object: FabricObject) => {
  const commonProps = {
    type: object.type,
    left: object.left,
    top: object.top,
    width: object.width,
    height: object.height,
  };
  if (object.type === "textbox") {
    return {
      id: object.id,
      type: object.type,
      details: {
        ...commonProps,
        text: object.text,
        fontUrl: object.fontUrl,
      },
    };
  }
  return {
    id: object.id,
    type: object.type,
    details: {
      ...commonProps,
    },
  };
};
