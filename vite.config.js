import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'script-defer',
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'Kittys portfolio with PWA',
      short_name: 'Kittys portfolio',
      description: 'Kittys first vite react portfolio with PWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,jpg,pdf,jsx}'],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/src/assets");
          },
          handler: "CacheFirst",
          options: {
            cacheName: "assets-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  })
  ],
  server: {
    port: 3000,
    open: true,
    // host: true
  }
})
