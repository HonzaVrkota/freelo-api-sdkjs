import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  dts: true,
  sourcemap: true,
  clean: true,
  format: ["cjs", "esm"],
  minify: true,
});
