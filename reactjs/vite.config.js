import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: '/Nicolas-Conlin-Personal-Website/',
    //server: {
    //    port: 55095,
    //    //Allows ngrok for testing.
    //    //ngrok http http://localhost:55095
    //    //npm run deploy after push to main
    //    //allowedHosts: true,
    //    allowedHosts: false,
    //}
})