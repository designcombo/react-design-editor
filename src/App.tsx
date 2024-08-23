import { useEffect } from "react";
import useDataState from "./store/use-data-state";
import { getCompactFontData } from "./utils/fonts";
import { FONTS } from "./data/fonts";
import { Editor } from "./components/editor";

function App() {
  const { setCompactFonts, setFonts } = useDataState();

  useEffect(() => {
    setCompactFonts(getCompactFontData(FONTS));
    setFonts(FONTS);
  }, []);

  return <Editor />;
}

export default App;
