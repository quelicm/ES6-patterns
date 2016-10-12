import Modal from './ModalContext';
import CanvasOffModal from './CanvasOffModal';
import PopupModal from './PopupModal';
import CookiesModal from './CookiesModal';


const canvasOffModal = new CanvasOffModal();
const popupModal = new PopupModal();
const cookiesModal = new CookiesModal();

const modal = new Modal('Contenido del modal');
modal.setStrategy(canvasOffModal);
console.log(modal.showModal());

modal.setStrategy(popupModal);
console.log(modal.showModal());

modal.setStrategy(cookiesModal);
console.log(modal.showModal());
