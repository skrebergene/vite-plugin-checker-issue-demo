import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import { glob } from "glob"

export default defineConfig({
  plugins: [
    checker({
      stylelint: {
        lintCommand: "stylelint ./src/**/*.scss"
      }
    })
  ],
  build: {
    rollupOptions: {
      input: [...glob.sync("src/**/*.tsx")]
    }
  },
  server: {
    host: "127.0.0.1",
    port: 5175,
    strictPort: true,
    origin: "http://127.0.0.1:5175"
  },
})
