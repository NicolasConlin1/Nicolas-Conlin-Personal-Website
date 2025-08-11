import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 55095,
        //Allows ngrok for testing.
        //ngrok http http://localhost:55095
        //allowedHosts: true,
        allowedHosts: false,
    }
})