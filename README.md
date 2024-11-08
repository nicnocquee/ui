# nicnocquee/ui

Collection of my UI components, hooks, utilities for React projects using Tailwind CSS and optionally Shadcn UI.

### Center Animated Text

A React component that animates a text by flying in letters from the left and right sides to the center starting from the middle letters.

Install the `center-animated-text` component from this registry:

```bash
npx shadcn@latest add https://ui.nico.fyi/registry/center-animated-text.json
```

This command will add the `center-animated-text.tsx` file to your project and update your `package.json` file to include `framer-motion` as a dependency. You will then need to run `npm install` to install the dependency.

Then you can use it in your project by importing it:

```typescript
import { CenterAnimatedText } from "@/components/center-animated-text";

export function CenterAnimatedTextExample() {
  return (
    <div>
      <CenterAnimatedText text="Nico is @nico.fyi in Bluesky" />
    </div>
  );
}
```

Demo: [https://ui.nico.fyi/](https://ui.nico.fyi/)

### BlueskyFlutter

A React component that creates an animated butterfly effect based on the work of Phil Hawksworth: [https://flutterby.philhawksworth.dev](https://flutterby.philhawksworth.dev).

Install the `bluesky-flutter` component from this registry:

```bash
npx shadcn@latest add https://ui.nico.fyi/registry/bluesky-flutter.json
```

This command will add the `bluesky-flutter.tsx` file to your project and update your `tailwind.config.[js|ts]` file to include the necessary configuration for the component. If you encountered any issues with the updated tailwind configuration, you can manually add the following configuration to your `tailwind.config.[js|ts]` file:

```typescript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*"],
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
};
```

And then you can use it in your project by importing it:

```typescript
import { BlueSkyFlutter } from "@/components/ui/bluesky-flutter";

export function BlueSkyFlutterExample() {
  return (
    <div>
      <BlueSkyFlutter
        className="text-blue-700 [&>a]:hover:underline"
        href="https://bsky.app/profile/nico.fyi"
        text="@nico.fyi"
      />
    </div>
  );
}
```

Demo: [https://ui.nico.fyi/](https://ui.nico.fyi/)

## Development

### How to add a new component

1. Create a new file in `src/components/custom` with the name of your component. For example, if you want to create a component called `cool-text`, create a file called `cool-text.tsx` in the `src/components/custom` directory.
2. Create another file in `src/components/custom` called `cool-text-registry.ts`. This file will contain the registry entry details for your component. See the existing registry entries for examples.
3. Import the registry entry in `registry.ts` and add it to the `registry` array.
4. Run `npm run dev` to start the development server. This will automatically build the registry and update the `registry` directory with the new component.
5. You can then test your component by installing it from the local registry, importing it in your project and using it. For example, if you want to test the `cool-text` component, you can install it by running `npx shadcn@latest add http://localhost:8080/registry/cool-text.json` and then import it in your project like this:

```typescript
import { CoolText } from "@/components/custom/cool-text";

export function CoolTextExample() {
  return (
    <div>
      <CoolText>This is a cool text component!</CoolText>
    </div>
  );
}
```

5. Once you're happy with your component, you can commit your changes push to GitHub repository. This will trigger a GitHub Actions workflow that will build your component make it available so that users can install it by running `npx shadcn@latest add https://ui.nico.fyi/registry/cool-text.json`.

### Scripts

- `npm run dev`: Start the development server. This will simply start a vite server so you can develop your components locally.
- `npm run build`: Build the registry and the demo website.

## Acknowledgements

This project is forked from [shadcn-registry-template](https://github.com/vantezzen/shadcn-registry-template).
