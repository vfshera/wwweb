import { jsxImagePlugin } from "./vite-plugins/vite-plugin-react-jsx-image";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import evlog from "evlog/vite";

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
