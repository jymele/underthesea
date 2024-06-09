import "./App.css";
import Experience from "./game/Experience";
import { KeyboardControls } from "@react-three/drei";
import keyboardMap from "./game/utils/keyboardMap";

function App() {
  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Experience />
      </KeyboardControls>
    </>
  );
}

export default App;
