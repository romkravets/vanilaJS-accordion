import './index.scss';
import './styles/accordion.scss';

import { accordion} from './scripts/accordion';

const accordionSection = [
   {
      title: 'Section 1',
      content: `<ul>
                  <li>Test 1</li>
                  <li>Test 2</li>
                  <li>Test 3</li>
                  <li>Test 4</li>
                  <li>Test 5</li>
                  <li>Test 6</li>
                  <li>Test 7</li>
               </ul>
      `
   },
   {
      title: 'Section 2',
      content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Tempore animi omnis debitis ad inventore accusantium vero itaque eligendi, 
      cumque ullam quibusdam aut, laboriosam dolore culpa similique quae dolor alias et?`
   },
   {
      title: 'Section 3',
      content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. `
   },
];

accordion(document.querySelector('#simpleAccordion'), accordionSection);