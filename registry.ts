import { RegistryEntry } from "./scripts/schema";

const registry: RegistryEntry[] = [
  {
    name: "bluesky-flutter",
    type: "registry:ui",

    // shadcn-ui components that this component depends on
    registryDependencies: [],

    // npm dependencies that this component depends on
    dependencies: [],
    devDependencies: [],

    // Tailwind CSS config
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              "flutter-left": {
                "10%": { transform: "scale(1, 0.9)" },
                "20%": { transform: "scale(0.5, 1)" },
                "40%": { transform: "scale(0.9, 0.95)" },
                "60%": { transform: "scale(0.3, 1)" },
                "80%": { transform: "scale(0.9, 0.95)" },
                "100%": { transform: "scale(1, 1)" },
              },
              "flutter-right": {
                "10%": { transform: "scale(-1, 0.9)" },
                "20%": { transform: "scale(-0.5, 1)" },
                "40%": { transform: "scale(-0.9, 0.95)" },
                "60%": { transform: "scale(-0.3, 1)" },
                "80%": { transform: "scale(-0.9, 0.95)" },
                "100%": { transform: "scale(-1, 1)" },
              },
            },
            animation: {
              "flutter-left": "flutter-left 430ms ease-in-out",
              "flutter-right": "flutter-right 500ms ease-in-out",
            },
          },
        },
      },
    },

    // CSS variables
    cssVars: {},

    // Files that make up this component in your src/components/ui folder
    files: ["bluesky-flutter.tsx"],
  },
];
export default registry;
