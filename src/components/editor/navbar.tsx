import { Button } from "@/components/ui/button";
import {
  DESIGN_RESIZE,
  HISTORY_UNDO,
  HISTORY_REDO,
  dispatcher,
} from "@/global";
import logoDark from "@/assets/logo-dark.png";
import { Icons } from "../shared/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Download } from "lucide-react";

export default function Navbar() {
  const handleUndo = () => {
    dispatcher.dispatch(HISTORY_UNDO);
  };

  const handleRedo = () => {
    dispatcher.dispatch(HISTORY_REDO);
  };

  const handleExport = () => {};
  const openLink = (url: string) => {
    window.open(url, "_blank"); // '_blank' will open the link in a new tab
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr 320px",
      }}
      className="h-[72px] absolute top-0 left-0 right-0  px-2 z-[205] pointer-events-none flex items-center"
    >
      <div className="flex items-center gap-2 pointer-events-auto h-14">
        <div className="bg-zinc-950 h-12 w-12 flex items-center justify-center rounded-md">
          <img src={logoDark} alt="logo" className="h-5 w-5" />
        </div>
        <div className="bg-zinc-950 px-1.5 h-12 flex  items-center">
          <Button
            onClick={handleUndo}
            className="text-muted-foreground"
            variant="ghost"
            size="icon"
          >
            <Icons.undo width={20} />
          </Button>
          <Button
            onClick={handleRedo}
            className="text-muted-foreground"
            variant="ghost"
            size="icon"
          >
            <Icons.redo width={20} />
          </Button>
        </div>
      </div>

      <div className="pointer-events-auto  h-14 flex items-center gap-2 justify-center">
        <div className="bg-zinc-950 px-2.5 rounded-md h-12 gap-4 flex items-center">
          <div className="font-medium text-sm px-1">Untitled graphic</div>
          <ResizeVideo />
        </div>
      </div>

      <div className="flex items-center gap-2 pointer-events-auto h-14 justify-end">
        <div className="flex items-center gap-2 bg-zinc-950 px-2.5 rounded-md h-12">
          <Button
            className="border border-white/10 flex gap-2"
            onClick={() => openLink("https://discord.gg/jrZs3wZyM5")}
            size="xs"
            variant="secondary"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height={16}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
            </svg>
            Discord
          </Button>
          <Button
            className="flex gap-1 h-8 w-8"
            onClick={handleExport}
            size="icon"
            variant="default"
          >
            <Download width={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

interface ResizeOptionProps {
  label: string;
  icon: string;
  value: ResizeValue;
}
interface ResizeValue {
  width: number;
  height: number;
  name: string;
}
const RESIZE_OPTIONS: ResizeOptionProps[] = [
  {
    label: "16:9",
    icon: "landscape",
    value: {
      width: 1920,
      height: 1080,
      name: "16:9",
    },
  },
  {
    label: "9:16",
    icon: "portrait",
    value: {
      width: 1080,
      height: 1920,
      name: "9:16",
    },
  },
  {
    label: "1:1",
    icon: "square",
    value: {
      width: 1080,
      height: 1080,
      name: "1:1",
    },
  },
];

const ResizeVideo = () => {
  const handleResize = (payload: ResizeValue) => {
    dispatcher.dispatch(DESIGN_RESIZE, {
      payload,
    });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="border border-white/10"
          size="xs"
          variant="secondary"
        >
          Resize
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 z-[250]">
        <div className="grid gap-4 text-sm">
          {RESIZE_OPTIONS.map((option, index) => (
            <ResizeOption
              key={index}
              label={option.label}
              icon={option.icon}
              value={option.value}
              handleResize={handleResize}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const ResizeOption = ({
  label,
  icon,
  value,
  handleResize,
}: ResizeOptionProps & { handleResize: (payload: ResizeValue) => void }) => {
  const Icon = Icons[icon];
  return (
    <div
      onClick={() => handleResize(value)}
      className="flex items-center gap-4 hover:bg-zinc-50/10 cursor-pointer"
    >
      <div className="text-muted-foreground">
        <Icon />
      </div>
      <div>
        <div>{label}</div>
        <div className="text-muted-foreground">Tiktok, Instagram</div>
      </div>
    </div>
  );
};
