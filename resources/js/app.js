import AppComponent from "./components/AppComponent";


require('./bootstrap');

window.Vue = require('vue');
// import veutify
import vuetify from "./vuetify";
// import router
import router from "./router";


const app = new Vue({
    el: '#app',
    vuetify,
    router,
    components:{
        "app" : AppComponent
    }
});
