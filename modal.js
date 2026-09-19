const getElement = (...queries)=>document.querySelector(...queries);

const button = getElement('.open-modal-button');
console.log(button);

const container = getElement('.modal-container');

const modal = getElement('.modal');

const openModal = () => {
    container.classList.remove('opacity-0','pointer-events-none')
    container.classList.add('opacity-100','pointer-events-auto')
    modal.classList.remove('pointer-events-none')
    modal.classList.add('pointer-events-auto')
};

const closeModal = () =>{
    container.classList.remove('opacity-100','pointer-events-auto');
    container.classList.add('opacity-0','pointer-events-none');
    modal.classList.remove('pointer-events-auto')
    modal.classList.add('pointer-events-none')
    formulario.classList.remove("hidden")
    botaoSortear.classList.remove("hidden")
    botaoCripto.classList.remove("hidden")
};

button.addEventListener('click',()=>{
    openModal();
});

container.addEventListener('click',(event)=>{
    if(modal.contains(event.target))return;
    closeModal()
})