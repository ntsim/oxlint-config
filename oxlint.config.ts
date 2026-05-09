import { defineConfig } from "oxlint";
import {
  baseConfig,
  reactConfig,
  testingLibraryConfig,
  typescriptConfig,
  vitestConfig,
} from "./src/index.ts";

export default defineConfig({
  options: {
    typeAware: true,
  },
  extends: [baseConfig, typescriptConfig, reactConfig, vitestConfig, testingLibraryConfig],
});
