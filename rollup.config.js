import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";
import typescript from "rollup-plugin-typescript2";
import packageJson from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs"
    },
    {
      file: "dist/index.mjs",
      format: "esm"
    }
  ],
  plugins: [
    del({ targets: "dist/*" }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.lib.json"
    })
  ],
  external: [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {})
  ]
};
