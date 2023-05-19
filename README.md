# FullStack2 Vue-project

1. git clone "https..."
2. cd  firstapp
3. npm install
4. npm run format
4. npm run dev
  

## Installing SASS
1. npm install -D sass-loader@^10 sass 
2. USE ->  **<style lang='scss' coped>**
3.  module.exports = {
        css: {
            loaderOptions: {
            sass: { data: `@import "@/styles/_variables.scss";` }
            }
        }
    };
    **Use this inside vue.config.js file**

<!-- 
FOR vite.config.js

    export default defineConfig({
        ...
            css: {
                preprocessorOptions: {
                scss: {
                    additionalData: `
                    @import "./src/styles/_variables.scss";
                    `
                }
            }
        }
    }) 
-->