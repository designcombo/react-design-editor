import React from "react";
import useLayoutStore from "@/store/use-layout-store";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Presets from "./presets";
import Smart from "./smart";
import BasicText from "./basic-text";
import BasicImage from "./basic-image";
import { ILayer } from "@/interfaces/editor";
import {
  SELECTION_PREFIX,
  SELECTION_UPDATED,
  dispatcher,
  filter,
} from "@/global";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { activeToolboxItem } = useLayoutStore();
  const [item, setItem] = useState<ILayer | null>(null);
  const [displayToolbox, setDisplayToolbox] = useState<boolean>(false);

  useEffect(() => {
    const stateEvents = dispatcher.bus.pipe(
      filter(({ key }) => key.startsWith(SELECTION_PREFIX))
    );
    const subscription = stateEvents.subscribe((obj) => {
      if (obj.key === SELECTION_UPDATED) {
        const layers = obj.val.payload.layers;
        if (layers.length === 1) {
          const [layer] = layers;
          setItem(layer);
        } else {
          setItem(null);
          setDisplayToolbox(false);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (activeToolboxItem) {
      setDisplayToolbox(true);
    } else {
      setDisplayToolbox(false);
    }
  }, [activeToolboxItem]);

  if (!item) {
    return null;
  }

  return (
    <div
      style={{
        right: activeToolboxItem && displayToolbox ? "0" : "-100%",
        transition: "right 0.25s ease-in-out",
        zIndex: 200,
      }}
      className="w-[340px] h-[calc(100%-32px-64px)] mt-6 absolute top-1/2 -translate-y-1/2 rounded-lg shadow-lg flex"
    >
      <div className="w-[266px] h-full relative bg-zinc-950 flex">
        <Button
          variant="ghost"
          className="absolute top-2 right-2 w-8 h-8 text-muted-foreground"
          size="icon"
        >
          <X width={16} onClick={() => setDisplayToolbox(false)} />
        </Button>
        {React.cloneElement(children as React.ReactElement<any>, {
          item,
          activeToolboxItem,
        })}
      </div>
      <div className="w-[74px]"></div>
    </div>
  );
};

const ActiveControlItem = ({
  item,
  activeToolboxItem,
}: {
  item?: ILayer;
  activeToolboxItem?: string;
}) => {
  if (!item || !activeToolboxItem) {
    return null;
  }
  return (
    <>
      {
        {
          "basic-textbox": <BasicText item={item} />,
          "basic-image": <BasicImage />,
          "preset-textbox": <Presets />,
          smart: <Smart />,
        }[activeToolboxItem]
      }
    </>
  );
};

export const ControlItem = () => {
  return (
    <Container>
      <ActiveControlItem />
    </Container>
  );
};
