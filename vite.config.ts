// // vite.config.js
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

// // Vite config
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     esbuildOptions: {
//       // Enable esbuild polyfill plugins
//       plugins: [
//         NodeGlobalsPolyfillPlugin({
//           buffer: true
//         })
//       ]
//     }
//   },
//   define: {
//     global: "globalThis"
//   }
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    global: "globalThis",
  },
  server: {
    proxy: {
      "/api": {
        target:
          "https://ton.access.orbs.network/55013c0ff5Bd3F8B62C092Ab4D238bEE463E5501/1/testnet/toncenter-api-v2/jsonRPC",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
