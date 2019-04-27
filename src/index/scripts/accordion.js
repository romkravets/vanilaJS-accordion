const ROOT_CLASS_NAMES = 'accordion';
const TITLE_CLASS_NAME =  `${ROOT_CLASS_NAMES}__title`;
const PANEL_CLASS_NAME = `${ROOT_CLASS_NAMES}__panel`;
const CONTENT_CLASS_NAME = `${ROOT_CLASS_NAMES}__content`;
const EXPAND_CLASS_NAME = `${PANEL_CLASS_NAME}_expand`;

export function accordion(targetElement, accordionSections) {
   let controls;
   let expandedElement;

   function render() {
      targetElement.classList.add(ROOT_CLASS_NAMES);
      renderPanels()
   }

   function renderPanels() {
      for (let section of accordionSections) {
         let panel = document.createElement('div');
         let control = document.createElement('button');
         let content = document.createElement('div');

         control.classList.add(TITLE_CLASS_NAME);
         panel.classList.add(PANEL_CLASS_NAME);
         content.classList.add(CONTENT_CLASS_NAME);

         control.textContent = section.title;
         content.innerHTML = section.content;

         control.addEventListener('click', toggle);
         panel.appendChild(control);
         panel.appendChild(content);
         targetElement.appendChild(panel);
      }
   }

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


   render();
}