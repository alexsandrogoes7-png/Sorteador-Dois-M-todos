const getElement = (...queries)=>document.querySelector(...queries);

const button = getElement('.open-modal-button');

const container = getElement('.modal-container');

const modal = getElement('.modal');

const activeModalClass = '.modal-show';

const openModal = () => container.classList.add('activeModalClass');

const closeModal = () =>{};