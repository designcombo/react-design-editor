export interface IFont {
  id: string;
  family: string;
  fullName: string;
  postScriptName: string;
  preview: string;
  style: string;
  url: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  userId: string | null;
}

export interface ICompactFont {
  family: string;
  styles: IFont[];
  default: IFont;
  name?: string;
}

export interface IDataState {
  fonts: IFont[];
  compactFonts: ICompactFont[];
  setFonts: (fonts: IFont[]) => void;
  setCompactFonts: (compactFonts: ICompactFont[]) => void;
}

export type IPropertyType = "textContent" | "fontSize" | "color";

export type ItemType = "textbox" | "element" | "image";

export interface IPosition {
  top: number;
  left: number;
  transform: string;
}

export interface ILayerBase {
  id: string;
  name: string;
  type: ItemType;
  preview?: string;
  position?: IPosition | null;
  details: Record<string, any>;
  metadata: Record<string, any>;
  isMain?: boolean;
  animation?: any;
}

export interface IText extends ILayerBase {
  type: ItemType;
  details: {
    text: string;
    fontSize: number;
    fontFamily: string;
    fontUrl: string;
    color: string;
    align: string;
    lineHeight: number;
    letterSpacing: number;
  };
}

export interface IImage extends ILayerBase {
  type: "image";
  details: {
    src: string;
    width: number;
    height: number;
    background?: string;
  };
}

export interface IMetadata {
  resourceId: string;
  order: number;
}

type TextAlign = "left" | "right" | "center" | "justify";
type FontWeight = "normal" | "bold" | "bolder" | "lighter" | number; // number for values like 100, 200, etc.
type TextDecoration = "none" | "underline" | "overline" | "line-through";
type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";
type FontStyle = "normal" | "italic" | "oblique";
type Display = "block" | "inline" | "inline-block" | "flex" | "grid";
type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";

interface ICommonDetails {
  width?: number;
  height?: number;
  transform?: string;
  opacity?: number;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  top?: number | string;
  left?: number | string;
}

interface ITextDetails extends ICommonDetails {
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fontUrl?: string;
  color?: string;
  align?: string;
  textAlign?: TextAlign;
  lineHeight?: number;
  letterSpacing?: number;
  textDecoration?: TextDecoration;
  fontWeight?: FontWeight;
  wordSpacing?: number;
  textShadow?: string;
  backgroundColor?: string;
}

interface IImageDetails extends ICommonDetails {
  src: string;
}

export type ILayer =
  | (ILayerBase & { type: "textbox"; details: ITextDetails })
  | (ILayerBase & { type: "image"; details: IImageDetails });

export interface ILayersMap {
  [id: string]: ILayer;
}

export interface IDesign {
  id: string | number;
  size: {
    width: number;
    height: number;
    type?: string; // landscape | portrait | square | custom
  };
  duration: number; // in miliseconds
  itemIds: string[];
  itemsMap: ILayersMap;
}
