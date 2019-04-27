import './index.scss';
import './styles/accordion.scss';

import { accordion} from './scripts/accordion';

accordion(document.querySelector('#simpleAccordion'));

// function greeting() {
//    if(this !== undefined) {
//       console.log("Hallo ", this.name);
//    }
// }

// const user = {
//    name: 'Roman',
//    greet: greeting
// }

// const user2 = {
//    name: 'Ivan',
//    greet: greeting
// }

// greeting();
// user.greet();
// user2.greet();