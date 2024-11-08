import { RegistryEntry } from "./scripts/schema";

// when you add a new component, import the registry here
import { registry as blueskyFlutterRegistry } from "./src/components/custom/bluesky-flutter-registry";
import { registry as centerAnimatedTextRegistry } from "./src/components/custom/center-animated-text-registry";

const registry: RegistryEntry[] = [
  blueskyFlutterRegistry,
  centerAnimatedTextRegistry,
];
export default registry;
