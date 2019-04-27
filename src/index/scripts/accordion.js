const TITLE_CLASS_NAME = 'accordion__title';
const EXPAND_CLASS_NAME = 'accordion__panel_expand';

export function accordion(targetElement) {
   const controls = targetElement.querySelectorAll(`.${TITLE_CLASS_NAME}`);
   let expandedElement;

   function expand(panel) {
      if (expandedElement) {
         expandedElement.classList.remove(EXPAND_CLASS_NAME);
      }
      panel.classList.add(EXPAND_CLASS_NAME);
      expandedElement = panel;
   }

   function collapse() {
      expandedElement.classList.remove(EXPAND_CLASS_NAME);
      expandedElement = undefined;

   }

   function toggle() {
      console.log(this);
      const panel = this.parentElement;
      if(panel.classList.contains(EXPAND_CLASS_NAME)) {
         collapse();
      } else {
         expand(panel);
      }
   }

   function handleEvents() {
      for(const control of controls) {
         control.addEventListener('click', toggle);
      }
   }

   handleEvents();
}