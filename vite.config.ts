import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@/", replacement: "/src" },
        { find: "@/assets", replacement: "/src/assets" },
        { find: "@/components", replacement: "/src/components" },
      ],
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
