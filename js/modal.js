export const handleModal = () => {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.classList.toggle('modal-container--hidden');

  resetModal();
};
export const resetModal = () => {
  const nodeListInputs = document
    .getElementById('form-book-info')
    .querySelectorAll('input');

  nodeListInputs[0].value = '';
  nodeListInputs[1].value = '';
  nodeListInputs[2].value = '';
  nodeListInputs[3].checked = false;
};
