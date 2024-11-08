import { readFile, writeFile } from "fs/promises";
import { RegistryEntry } from "./schema";
import registryConfig from "../registry.ts";
import { getGitHubBaseUrl, getHomepageUrl } from "./utils.ts";
import chalk from "chalk";

console.log("Building registry...");

const baseUrl = await getGitHubBaseUrl();
const homepageUrl = await getHomepageUrl();
const componentsDirectory = `./src/components/custom`;

for (const registryData of registryConfig) {
  const registry = registryData as RegistryEntry;

  registry.files = registry.files || [];

  for (const file of registry.files) {
    if (typeof file === "string") {
      const content = await readFile(`${componentsDirectory}/${file}`, "utf-8");
      registry.files = registry.files.filter((f) => f !== file);
      registry.files.push({
        path: file,
        content,
        type: "registry:ui",
      });
    } else if (typeof file === "object") {
      const content = await readFile(
        `${componentsDirectory}/${file.path}`,
        "utf-8"
      );
      registry.files = registry.files.filter((f) => f !== file);
      registry.files.push({
        path: file.path,
        content,
        type: file.type,
      });
    }
  }

  await writeFile(
    `./registry/${registry.name}.json`,
    JSON.stringify(registry, null, 2)
  );

  const gitHub = `${baseUrl}/${registry.name}.json`;
  const remote = `${homepageUrl}/registry/${registry.name}.json`;
  const local = `http://localhost:8080/${registry.name}.json`;

  console.log(
    `Registry built for ${chalk.green.bold(registry.name)}:
  - ${chalk.bold("Remote")}: ${chalk.blue(remote)}
  - ${chalk.bold("GitHub")}: ${chalk.blue(gitHub)}
  - ${chalk.bold("Local")}: ${chalk.blue(local)}
    
After pushing the changes to GitHub, users can install it by running:
${chalk.green("npx shadcn@latest add " + remote)}
  `
  );
}
