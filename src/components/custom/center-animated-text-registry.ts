import { RegistryEntry } from "@/../scripts/schema";

export const registry: RegistryEntry = {
  name: "center-animated-text",
  type: "registry:component",

  // shadcn-ui components that this component depends on
  registryDependencies: [],

  // npm dependencies that this component depends on
  dependencies: ["framer-motion", "react"],
  devDependencies: [],

  // CSS variables
  cssVars: {},

  // Files that make up this component in your relative to src/components/custom folder
  files: [
    {
      path: "center-animated-text.tsx",
      type: "registry:component",
    },
  ],
};
