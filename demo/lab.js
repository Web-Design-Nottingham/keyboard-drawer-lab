import {setupDrawer} from '../src/drawer.js';
setupDrawer({trigger:document.getElementById('open-menu'),dialog:document.getElementById('workshop-menu'),log:document.getElementById('event-log')});
document.getElementById('reduce-motion')?.addEventListener('change',event=>document.documentElement.classList.toggle('force-reduced',event.target.checked));
