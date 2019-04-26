const TITLE_CLASS_NAME = 'accordion__title';
const EXPAND_CLASS_NAME = 'accordion__panel_expand';

export function accordion(targetElement) {
   const controls = targetElement.querySelectorAll(`.${TITLE_CLASS_NAME}`);

   function expend() {

   }

   function collapse() {

   }

   function toggle() {

   }

   function handleEvents() {
      for(const control of controls) {
         control.addEventListener('click', function(){
            control.parentElement.classList.toggle(EXPAND_CLASS_NAME);
         })
      }
   }

   handleEvents();
}