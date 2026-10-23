import {escape,list} from './util.js';
export const guide='The complete example uses a native modal dialog enhanced by a small module. Navigation remains visible when JavaScript is unavailable. The event log records control IDs, not entered text.';
export function analyse(input){return {title:'Keyboard Drawer Lab',summary:guide,issues:[],checks:input.checks||['Open with Enter or Space','Tab and Shift+Tab remain in the modal','Escape closes the drawer','Focus returns to the menu trigger','Scroll position is restored'],markdown:'## Keyboard checks\n\n'+(input.checks||[]).map(c=>'- '+c).join('\n')};}
export const render=r=>'<h2>'+escape(r.title)+'</h2><p>'+escape(r.summary)+'</p>'+list(r.checks);
