import { useCallback, useEffect, useState } from "react";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import useLayoutStore from "@/store/use-layout-store";
import {
  SELECTION_PREFIX,
  SELECTION_UPDATED,
  dispatcher,
  filter,
} from "@/global";

type ItemType = any;
export default function ControlList() {
  const [controlType, setControlType] = useState<ItemType | null>(null);

  // useEffect(() => {
  //   if (activeIds.length === 1) {
  //     const [id] = activeIds;
  //     const item = itemsMap[id];
  //     setControlType(item.type);
  //   } else {
  //     setControlType(null);
  //   }
  // }, [activeIds, itemsMap]);

  useEffect(() => {
    const stateEvents = dispatcher.bus.pipe(
      filter(({ key }) => key.startsWith(SELECTION_PREFIX))
    );
    const subscription = stateEvents.subscribe((obj) => {
      if (obj.key === SELECTION_UPDATED) {
        const layers = obj.val.payload.layers;
        if (layers.length === 1) {
          const [layer] = layers;
          setControlType(layer.type);
        } else {
          setControlType(null);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  return <>{controlType && <ControlMenu controlType={controlType} />}</>;
}

function ControlMenu({ controlType }: { controlType: ItemType }) {
  const { setShowToolboxItem, setActiveToolboxItem, activeToolboxItem } =
    useLayoutStore();

  const openToolboxItem = useCallback(
    (type: string) => {
      if (type === activeToolboxItem) {
        setShowToolboxItem(false);
        setActiveToolboxItem(null);
      } else {
        setShowToolboxItem(true);
        setActiveToolboxItem(type);
      }
    },
    [activeToolboxItem]
  );

  return (
    <div
      style={{ zIndex: 201 }}
      className="w-14 py-2 absolute top-1/2 -translate-y-1/2 right-2.5 bg-zinc-950 rounded-lg shadow-lg flex flex-col   items-center"
    >
      {
        {
          image: (
            <ImageMenuList
              type={controlType}
              openToolboxItem={openToolboxItem}
            />
          ),
          textbox: (
            <TextMenuList
              type={controlType}
              openToolboxItem={openToolboxItem}
            />
          ),
        }[controlType]
      }
    </div>
  );
}

const ImageMenuList = ({
  openToolboxItem,
  type,
}: {
  openToolboxItem: (type: string) => void;
  type: ItemType;
}) => {
  return (
    <div className="flex flex-col items-center">
      <BasicMenuListItem openToolboxItem={openToolboxItem} type={type} />
      <SmartMenuListItem openToolboxItem={openToolboxItem} />
    </div>
  );
};

const TextMenuList = ({
  openToolboxItem,
  type,
}: {
  openToolboxItem: (type: string) => void;
  type: ItemType;
}) => {
  return (
    <div className="flex flex-col items-center">
      <PresetsMenuListItem type={type} openToolboxItem={openToolboxItem} />
      <BasicMenuListItem openToolboxItem={openToolboxItem} type={type} />
      <SmartMenuListItem openToolboxItem={openToolboxItem} />
    </div>
  );
};

const PresetsMenuListItem = ({
  openToolboxItem,
  type,
}: {
  openToolboxItem: (type: string) => void;
  type: ItemType;
}) => {
  return (
    <Button
      size="icon"
      onClick={() => openToolboxItem(`preset-${type}`)}
      variant="ghost"
    >
      <Icons.preset size={20} className="text-white" />
    </Button>
  );
};

const BasicMenuListItem = ({
  openToolboxItem,
  type,
}: {
  openToolboxItem: (type: string) => void;
  type: string;
}) => {
  const Icon = Icons[type];
  return (
    <Button
      size="icon"
      onClick={() => openToolboxItem(`basic-${type}`)}
      variant="ghost"
    >
      <Icon size={20} className="text-white" />
    </Button>
  );
};

const SmartMenuListItem = ({
  openToolboxItem,
}: {
  openToolboxItem: (type: string) => void;
}) => {
  return (
    <Button
      size="icon"
      onClick={() => openToolboxItem("smart")}
      variant="ghost"
    >
      <Icons.smart size={20} className="text-white" />
    </Button>
  );
};
