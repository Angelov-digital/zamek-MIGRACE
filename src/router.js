import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import FrontPage from './pages/FrontPage.vue';
import AccomodationPage from './pages/AccomodationPage.vue';
import RestaurantPage from './pages/RestaurantPage.vue';
import EventsPage from './pages/EventsPage.vue';
import CorpoEventsPage from './pages/CorpoEventsPage.vue';
import ReservationPage from './pages/ReservationPage.vue';
import ContactPage from './pages/ContactPage.vue';

const routes = [
  { path: '/', component: FrontPage, meta: { title: 'Front Page' } },
  { path: '/accomodation', component: AccomodationPage, meta: { title: 'Ubytování na Zámku' } },
  { path: '/restaurant', component: RestaurantPage, meta: { title: 'Zámecká restaurace' } },
  { path: '/events', component: EventsPage, meta: { title: 'Svatby a události' } },
  { path: '/corpoevents', component: CorpoEventsPage, meta: { title: 'Firemní akce' } },
  { path: '/reservation', component: ReservationPage, meta: { title: 'Rezervace' } },
  { path: '/contact', component: ContactPage, meta: { title: 'Kontakt' } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
