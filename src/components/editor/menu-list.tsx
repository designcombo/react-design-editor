import useLayoutStore from "@/store/use-layout-store";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MenuList() {
  const { setActiveMenuItem, setShowMenuItem, activeMenuItem, showMenuItem } =
    useLayoutStore();
  return (
    <div
      style={{ zIndex: 201 }}
      className="w-14 py-2 absolute top-1/2 -translate-y-1/2 mt-6 left-2.5 bg-zinc-950 rounded-lg shadow-lg flex flex-col   items-center"
    >
      <Button
        onClick={() => {
          setActiveMenuItem("uploads");
          setShowMenuItem(true);
        }}
        className={cn(
          showMenuItem && activeMenuItem === "uploads"
            ? "bg-grey-900"
            : "text-muted-foreground"
        )}
        variant={"ghost"}
        size={"icon"}
      >
        <Icons.upload width={20} />
      </Button>
      <Button
        onClick={() => {
          setActiveMenuItem("texts");
          setShowMenuItem(true);
        }}
        className={cn(
          showMenuItem && activeMenuItem === "texts"
            ? "bg-grey-900"
            : "text-muted-foreground"
        )}
        variant={"ghost"}
        size={"icon"}
      >
        <Icons.type width={20} />
      </Button>

      <Button
        onClick={() => {
          setActiveMenuItem("images");
          setShowMenuItem(true);
        }}
        className={cn(
          showMenuItem && activeMenuItem === "images"
            ? "bg-grey-900"
            : "text-muted-foreground"
        )}
        variant={"ghost"}
        size={"icon"}
      >
        <Icons.image width={20} />
      </Button>
      <Button
        onClick={() => {
          setActiveMenuItem("shapes");
          setShowMenuItem(true);
        }}
        className={cn(
          showMenuItem && activeMenuItem === "shapes"
            ? "bg-grey-900"
            : "text-muted-foreground"
        )}
        variant={"ghost"}
        size={"icon"}
      >
        <Icons.shapes width={20} />
      </Button>
    </div>
  );
}
