import { Button } from "@/components/ui/button";
import { DEFAULT_FONT } from "@/data/fonts";
import { ADD_TEXT, dispatcher } from "@/global";
import { nanoid } from "nanoid";

export const Texts = () => {
  const handleAddText = () => {
    dispatcher?.dispatch(ADD_TEXT, {
      payload: {
        id: nanoid(),
        details: {
          text: "Add text",
          fontSize: 32,
          fontFamily: DEFAULT_FONT.postScriptName,
          fontUrl: DEFAULT_FONT.url,
          width: 180,
          textAlign: "center",
          fill: "#111111",
        },
      },
      options: {},
    });
  };

  return (
    <div className="flex-1">
      <div className="text-md text-text-primary font-medium h-12  flex items-center px-4">
        Text
      </div>
      <div className="px-4">
        <Button
          onClick={handleAddText}
          size="sm"
          variant="secondary"
          className="w-full"
        >
          Add text
        </Button>
      </div>
    </div>
  );
};
