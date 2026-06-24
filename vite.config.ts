import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import evlog from "evlog/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { jsxImagePlugin } from "./vite-plugins/vite-plugin-react-jsx-image";

export default defineConfig({
  plugins: [
    evlog({
      service: "awwweb",
    }),
    jsxImagePlugin(),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
