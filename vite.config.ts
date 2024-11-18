import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseUrl = mode === "production" ? "/react-pwa-test/" : "/";
  return {
    base: baseUrl,
    server: {
      port: 5654,
    },
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        scope: baseUrl,
        manifest: {
          name: "React PWA Test",
          short_name: "ReactPWATest",
          description: "A React app to test PWA behaviors",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          orientation: "portrait",
          start_url: "/",
          icons: [
            {
              src: "./icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "./icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  };
});
