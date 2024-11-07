import { RegistryEntry } from "./scripts/schema";

// when you add a new component, import the registry here
import { registry as blueskyFlutterRegistry } from "./src/components/custom/bluesky-flutter-registry";

const registry: RegistryEntry[] = [blueskyFlutterRegistry];
export default registry;
