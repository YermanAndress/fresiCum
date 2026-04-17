import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"; // Si usas tailwind
import icon from "astro-icon";

export default defineConfig({
  // ¡Esta es la parte clave!
  integrations: [
    tailwind(),
    icon(), // Añade esto aquí
  ],
});
