import { BlueSkyFlutterExample } from "@/examples/bluesky-flutter";
import { CenterAnimatedTextExample } from "./examples/center-animated-text";

function App() {
  return (
    <div className="max-w-7xl mx-auto my-12 p-8 grid grid-cols-2 gap-8">
      <BlueSkyFlutterExample />
      <CenterAnimatedTextExample />
    </div>
  );
}

export default App;
