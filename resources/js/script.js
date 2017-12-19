import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

window.cosmicJsConfig = {
  	bucket: {
    	slug: 'c4ce2db0-e2f9-11e7-b8ae-3589834ee233'
  	}
}

import App from './components/App.vue'
import Home from './components/Home.vue'
import Technologies from './components/Technologies.vue'
import Projects from './components/Projects.vue'
import OpenSources from './components/OpenSources.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/technologies', component: Technologies },
	{ path: '/projects', component: Projects },
	{ path: '/open-sources', component: OpenSources }
]

const router = new VueRouter({
  	routes
})

new Vue({
    router,
  	render: h => h(App)
}).$mount('#app')
