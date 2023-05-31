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

## Install vuex
1. npm install --save vuex@next
2. Initialize store in main.js
   ```
    ...
    import { createStore } from 'vuex'
    const store = createStore({
        state () {
            return {
                count: 0
            }
        },
        mutations: {
            increment (state) {
                state.count++
            }
        }
    })
    createApp(App).use(store).mount('#app')
   ```

## INSTALLING json-server
This is needed to create a fake backend for our app

1. *npm install json-server -g*
2. create a **db.json** file    &&   some data to it
3. *json-server db.json*  
4. *json-server --watch db.json*  => to watch for changes

<!-- 
Set-ExecutionPolicy Unrestricted
Set-ExecutionPolicy -Scope CurrentUser   
    =>  Unrestricted
 -->