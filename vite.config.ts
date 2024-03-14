/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
    test: {
        environment: "happy-dom",
    },
    server: {
        hmr: {
            overlay: false,
        },
    },
});
