import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import tscAlias from "rollup-plugin-tsc-alias";
import bundleFonts from "rollup-plugin-bundle-fonts";

import pkg from "./package.json" assert { type: "json" };

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const config = {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    typescript({}),
    tscAlias(),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "bundled",
    }),
    url(),
    svgr(),
    bundleFonts({
      fontTargetDir: "dist/fonts",
      cssBundleDir: "dist",
    }),
  ],
  external: ["react", "react-dom", "react/jsx-runtime", "styled-components"],
};

export default config;
