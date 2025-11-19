// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-mongoose'],
  mongoose: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/kostevi-reservation',
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/tailwind.css"],
})