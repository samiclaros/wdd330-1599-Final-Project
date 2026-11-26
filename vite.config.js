import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "src/index.html"),
        store: resolve(import.meta.dirname, "src/store/index.html"),
        about: resolve(import.meta.dirname, "src/about/index.html"),
        product: resolve(import.meta.dirname, "src/product_pages/index.html"),
        cart: resolve(import.meta.dirname, "src/cart/index.html"),
        confirmation: resolve(
          import.meta.dirname,
          "src/confirmation/index.html",
        ),
      },
    },
  },
});
