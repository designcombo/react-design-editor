// Artboard events
export const ARTBOARD_PREFIX = "artboard";
export const ARTBOARD_STATE = `${ARTBOARD_PREFIX}:state`;
export const ARTBOARD_SELECTION = `${ARTBOARD_PREFIX}:selection`;
export const ARTBOARD_IS_LOADING = `${ARTBOARD_PREFIX}:isLoading`;

export const ADD_SUFFIX = "add";

export const TRACK_PREFIX = "track";
export const TRACK_ITEMS_PREFIX = "items";
export const TRACKS_CHANGED = `${TRACK_PREFIX}:changed`;
export const TRACK_ITEMS_CHANGED = `${TRACK_ITEMS_PREFIX}:changed`;

export const STATE_PREFIX = "state";
export const STATE_CHANGED = `${STATE_PREFIX}:changed`;
// Add new element events
export const ADD_PREFIX = "add";
export const ADD_TEXT = `${ADD_PREFIX}:text`;
export const ADD_VIDEO = `${ADD_PREFIX}:video`;
export const ADD_AUDIO = `${ADD_PREFIX}:audio`;
export const ADD_MAGIC_VIDEO = `${ADD_PREFIX}:magic:video`;
export const ADD_PLACEHOLDER = `${ADD_PREFIX}:placeholder`;
export const ADD_IMAGE = `${ADD_PREFIX}:image`;
export const ADD_ILLUSTRATION = `${ADD_PREFIX}:illustration`;
export const ADD_BASIC_SHAPE = `${ADD_PREFIX}:basicShape`;
export const ADD_TEXTURE = `${ADD_PREFIX}:texture`;
export const ADD_TEMPLATE = `${ADD_PREFIX}:template`;
export const ADD_DESIGN = `${ADD_PREFIX}:design`;
export const ADD_PHOTO = `${ADD_PREFIX}:photo`;
export const ADD_MASK = `${ADD_PREFIX}:mask`;
export const ADD_MOCKUP_TEMPLATE = `${ADD_PREFIX}:mockupTemplate`;
export const ADD_TRANSITION = `${ADD_PREFIX}:transition`;
export const ADD_ANIMATION = `${ADD_PREFIX}:animation`;

// Edit artboard elements
export const EDIT_PREFIX = "edit";
export const EDIT_OBJECT = `${EDIT_PREFIX}:object`;
export const EDIT_TEXT = `${EDIT_PREFIX}:text`;
export const EDIT_SHAPE = `${EDIT_PREFIX}:shape`;
export const EDIT_TEXTURE = `${EDIT_PREFIX}:texture`;
export const EDIT_BACKGROUND_IMAGE = `${EDIT_PREFIX}:backgroundImage`;
export const EDIT_ANIMATION = `${EDIT_PREFIX}:animation`;

export const ENTER_EDIT_MODE = `enterEditMode`;

export const PLAYER_PREFIX = "player";
export const PLAYER_PLAY = `${PLAYER_PREFIX}:play`;
export const PLAYER_PAUSE = `${PLAYER_PREFIX}:pause`;
export const PLAYER_SEEK = `${PLAYER_PREFIX}:seek`;
export const PLAYER_SEEK_TO = `${PLAYER_PREFIX}:seekTo`;
export const PLAYER_SEEK_BY = `${PLAYER_PREFIX}:seekBy`;
export const PLAYER_TOGGLE_PLAY = `${PLAYER_PREFIX}:togglePlay`;

// Active object events
export const ACTIVE_PREFIX = "active";
export const ACTIVE_SET = `${ACTIVE_PREFIX}:set`;
export const STYLE_TAG = "style"; //Events that change styles should have this property
export const ACTIVE_DELETE = `${ACTIVE_PREFIX}:delete`;
export const ACTIVE_OPACITY = `${ACTIVE_PREFIX}:opacity`;
export const ACTIVE_MOVE = `${ACTIVE_PREFIX}:move`;
export const ACTIVE_MOVE_BY = `${ACTIVE_PREFIX}:moveBy`;
export const ACTIVE_MOVED = `${ACTIVE_PREFIX}:moved`;
export const ACTIVE_COPY = `${ACTIVE_PREFIX}:copy`;
export const ACTIVE_PASTE = `${ACTIVE_PREFIX}:paste`;
export const ACTIVE_CLONE = `${ACTIVE_PREFIX}:clone`;
export const ACTIVE_SPLIT = `${ACTIVE_PREFIX}:split`;
export const ACTIVE_CUT = `${ACTIVE_PREFIX}:cut`;
export const ACTIVE_REFLECT_HORIZONTAL = `${ACTIVE_PREFIX}:reflectHorizontal`;
export const ACTIVE_REFLECT_VERTICAL = `${ACTIVE_PREFIX}:reflectVertical`;
export const ACTIVE_GROUP = `${ACTIVE_PREFIX}:group`;
export const ACTIVE_LOCK = `${ACTIVE_PREFIX}:lock`;
export const ACTIVE_ALIGN = `${ACTIVE_PREFIX}:align`;
export const ACTIVE_GLYPH = `${ACTIVE_PREFIX}:glyph`;
export const ACTIVE_OVERLAY_MODE = `${ACTIVE_PREFIX}:overlayMode`;
export const ACTIVE_COLOR = `${ACTIVE_PREFIX}:${STYLE_TAG}:color`;
export const ACTIVE_STROKE_WIDTH = `${ACTIVE_PREFIX}:${STYLE_TAG}:strokeWidth`;
export const ACTIVE_FONTSIZE = `${ACTIVE_PREFIX}:${STYLE_TAG}:fontSize`;
export const ACTIVE_LETTERSPACING = `${ACTIVE_PREFIX}:${STYLE_TAG}:letterSpacing`;
export const ACTIVE_FONTFAMILY = `${ACTIVE_PREFIX}:${STYLE_TAG}:fontFamily`;
export const ACTIVE_TEXTALIGNMENT = `${ACTIVE_PREFIX}:${STYLE_TAG}:textAlignment`;
export const ACTIVE_UPPERCASE = `${ACTIVE_PREFIX}:${STYLE_TAG}:uppercase`;
export const ACTIVE_UNDERLINE = `${ACTIVE_PREFIX}:${STYLE_TAG}:underline`;
export const ACTIVE_LIGATURES = `${ACTIVE_PREFIX}:${STYLE_TAG}:ligatures`;
export const ACTIVE_LINEHEIGHT = `${ACTIVE_PREFIX}:${STYLE_TAG}:lineHeight`;
export const ACTIVE_VARIATION = `${ACTIVE_PREFIX}:${STYLE_TAG}:variation`;
export const ACTIVE_SHADOW = `${ACTIVE_PREFIX}:${STYLE_TAG}:shadow`;
export const ACTIVE_TRANSFORM = `${ACTIVE_PREFIX}:${STYLE_TAG}:transform`;
export const ACTIVE_TRANSFORM_CURVE = `${ACTIVE_PREFIX}:${STYLE_TAG}:transformCurve`;
export const ACTIVE_DECORATION = `${ACTIVE_PREFIX}:${STYLE_TAG}:decoration`;
export const ACTIVE_CLIPPING_MASK = `${ACTIVE_PREFIX}:clippingMask`;
export const ACTIVE_EDIT_MODE = `${ACTIVE_PREFIX}:editMode`;
export const ACTIVE_TIDY = `${ACTIVE_PREFIX}:tidy`;
export const ACTIVE_REMOVE_BG = `${ACTIVE_PREFIX}:removeBackground`;
export const ACTIVE_VECTORIZE = `${ACTIVE_PREFIX}:vectorize`;
export const ACTIVE_FILTER = `${ACTIVE_PREFIX}:filter`;
export const ACTIVE_FILTER_RESET = `${ACTIVE_PREFIX}:filterReset`;
export const ACTIVE_COLOR_PREVIEW = `${ACTIVE_PREFIX}:previewColor`;
export const ACTIVE_STOP_PREVIEW_COLOR = `${ACTIVE_PREFIX}:stopPreviewColor`;
export const ACTIVE_AS_BACKGROUND_IMAGE = `${ACTIVE_PREFIX}:asBackgroundImage`;

// Layer events
export const LAYER_PREFIX = "layer";
export const LAYER_LOCKED = `${LAYER_PREFIX}:locked`;
export const LAYER_HIDDEN = `${LAYER_PREFIX}:hidden`;
export const LAYER_MOVE = `${LAYER_PREFIX}:move`;
export const LAYER_SELECT = `${LAYER_PREFIX}:select`;
export const LAYER_SELECTION = `${LAYER_PREFIX}:selection`;
export const LAYER_SEND_TO = `${LAYER_PREFIX}:sendTo`;
export const LAYER_RENAME = `${LAYER_PREFIX}:rename`;
export const LAYER_EDITING_NAME = `${LAYER_PREFIX}:editingName`;

export const LAYER_COPY = `${LAYER_PREFIX}:copy`;
export const LAYER_PASTE = `${LAYER_PREFIX}:paste`;
export const LAYER_CLONE = `${LAYER_PREFIX}:clone`;
export const LAYER_SPLIT = `${LAYER_PREFIX}:split`;
export const LAYER_CUT = `${LAYER_PREFIX}:cut`;
export const LAYER_DELETE = `${LAYER_PREFIX}:delete`;

// History events
export const HISTORY_PREFIX = "history";
export const HISTORY_UNDO = `${HISTORY_PREFIX}:undo`;
export const HISTORY_REDO = `${HISTORY_PREFIX}:redo`;
export const HISTORY_RESET = `${HISTORY_PREFIX}:reset`;

// Design events
export const DESIGN_PREFIX = "design";
export const DESIGN_LOAD = `${DESIGN_PREFIX}:load`;
export const DESIGN_RENAME = `${DESIGN_PREFIX}:rename`;
export const DESIGN_SAVE = `${DESIGN_PREFIX}:save`;
export const DESIGN_NEW = `${DESIGN_PREFIX}:newDesign`;
export const DESIGN_DELETE = `${DESIGN_PREFIX}:deleteDesign`;
export const DESIGN_DUPLICATE = `${DESIGN_PREFIX}:duplicateDesign`;
export const DESIGN_SHARE = `${DESIGN_PREFIX}:share`;
export const DESIGN_RESIZE = `${DESIGN_PREFIX}:resize`;
// drag events
export const DRAG_PREFIX = "drag";
export const DRAG_START = `${DRAG_PREFIX}:start`;
export const DRAG_END = `${DRAG_PREFIX}:end`;

export const EDITOR_PREFIX = "editor";

export const SELECTION_PREFIX = "selection";
export const SELECTION_UPDATED = `${SELECTION_PREFIX}:updated`;
