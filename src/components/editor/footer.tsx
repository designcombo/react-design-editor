import { Button } from "@/components/ui/button";

import { Command, Info, MinusCircle, PlusCircle } from "lucide-react";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

export default function Footer() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr 320px",
      }}
      className="h-[72px] absolute bottom-0 left-0 right-0  px-2 z-[205] pointer-events-none flex items-center"
    >
      <div className="flex items-center gap-2 pointer-events-auto h-14">
        <div className="bg-zinc-950 px-1.5 h-12 flex  items-center">
          <Button className="text-muted-foreground" variant="ghost" size="icon">
            <Command width={20} />
          </Button>
        </div>
      </div>

      <div className="pointer-events-auto  h-14 flex items-center gap-2 justify-center">
        <div className="bg-zinc-950 px-2.5 rounded-md h-12 gap-4 flex items-center">
          <Button className="text-zinc-500" variant="ghost" size="icon">
            <MinusCircle width={20} />
          </Button>
          <Slider className="w-40" min={10} max={500} defaultValue={[60]} />
          <Button className="text-zinc-500" variant="ghost" size="icon">
            <PlusCircle width={20} />
          </Button>
          <Input className="w-10 h-8 px-2 text-center" defaultValue={"10%"} />
        </div>
      </div>

      <div className="flex items-center gap-2 pointer-events-auto h-14 justify-end">
        <div className="flex items-center gap-2 bg-zinc-950 px-2.5 rounded-md h-12">
          <Button className="text-zinc-100" variant="ghost" size="icon">
            <Info width={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
