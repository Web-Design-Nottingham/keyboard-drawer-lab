export function setupDrawer({trigger,dialog,log}){
 if(!trigger||!dialog||typeof dialog.showModal!=='function')return null;
 const fallback=document.querySelector('[data-fallback]');let scrollY=0,previous=null,style=null;
 const record=value=>{if(!log)return;const li=document.createElement('li');li.textContent=value;log.prepend(li);while(log.children.length>8)log.lastElementChild.remove();};
 const restore=()=>{if(!style)return;Object.assign(document.body.style,style);window.scrollTo({top:scrollY,behavior:'instant'});style=null;trigger.setAttribute('aria-expanded','false');previous?.focus({preventScroll:true});record('Closed; focus returned to menu trigger');};
 const close=()=>{dialog.close();restore();};
 const open=()=>{if(dialog.open)return;previous=document.activeElement;scrollY=window.scrollY;style={position:document.body.style.position,top:document.body.style.top,width:document.body.style.width,overflow:document.body.style.overflow};Object.assign(document.body.style,{position:'fixed',top:-scrollY+'px',width:'100%',overflow:'hidden'});dialog.showModal();trigger.setAttribute('aria-expanded','true');dialog.querySelector('[data-close]').focus();record('Opened; focus moved to close button');};
 trigger.hidden=false;fallback.hidden=true;document.documentElement.dataset.drawerReady='true';
 trigger.addEventListener('click',open);
 dialog.querySelector('[data-close]').addEventListener('click',close);
 dialog.addEventListener('close',restore);
 dialog.addEventListener('cancel',event=>{event.preventDefault();record('Escape requested close');close();});
 dialog.addEventListener('keydown',event=>{if(event.key!=='Tab'||event.altKey||event.ctrlKey||event.metaKey)return;const controls=[...dialog.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]')].filter(el=>el.getClientRects().length&&!el.hidden);if(!controls.length)return;event.preventDefault();const index=controls.indexOf(document.activeElement),next=(index+(event.shiftKey?-1:1)+controls.length)%controls.length;controls[next].focus();});
 dialog.addEventListener('click',event=>{if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)close();}});
 dialog.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{close();queueMicrotask(()=>{const target=document.getElementById(a.hash.slice(1));target?.focus({preventScroll:true});target?.scrollIntoView({behavior:'instant'});});}));
 dialog.addEventListener('focusin',event=>record('Focus: '+(event.target.id||event.target.tagName.toLowerCase())));
 return {open,close};
}
