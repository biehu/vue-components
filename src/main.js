import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import App from './components/App';
import Modal from './components/ModalExample';
import Form from './components/FormExample';

Vue.use(Router);
Vue.use(VueResource);

var router = new Router();

router.map({
    '/modal': {
        component: Modal
    },
    '/form': {
        component: Form
    }
});

router.beforeEach(function () {
	window.scrollTo(0, 0);
});

router.start(App, '#app');
