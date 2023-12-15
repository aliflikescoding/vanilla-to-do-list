const Dom = (() => {
  const showForm = (form) => {
    if (form.classList.contains("show")) {
      form.classList.remove("show");
    }
  };

  const cancel = (form, input) => {
    form.classList.add("show");
    input.value = "";
  };

  const resetContainer = (container) => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };

  return {
    showForm: showForm,
    cancel: cancel,
    resetContainer: resetContainer
  }
})();

export default Dom;