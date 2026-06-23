import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts";
import {libInjectCss} from 'vite-plugin-lib-inject-css'

export default defineConfig({
    plugins: [
        libInjectCss(),
        dts({
            tsconfigPath: './tsconfig.app.json'
        }),
        vue()
    ],
    build: {
        lib: {
            entry: './src/index.ts',
            formats: ['es'],
            fileName: 'index',
            name: 'PhoneInput'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});

