// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from '@nuxt/bridge'
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Kost Evi Singkawang',
      htmlAttrs: {
        lang: 'id',
      },
      meta: [ 
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kost Evi Singkawang' } 
    ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logoKost.png' }],
    },
  },
  bridge: {
    meta: true,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxthub/core'],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/tailwind.css"],
})