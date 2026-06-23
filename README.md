1. Go to vue-phone-input
2. npm install
3. npm run build


```
[vite:dts] Start generate declaration files...
src/PhoneInput.vue:166:1 - error TS2742: The inferred type of 'default' cannot be named without a reference to '../node_modules/@intl-tel-input/vue/dist/props'. This is likely not portable. A type annotation is necessary.

166 export default (await import('vue')).defineComponent({
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
167 setup() {
    ~~~~~~~~~
... 
173 __typeEl: {} as __VLS_TemplateResult['rootEl'],
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
174 });
    ~~~
```
