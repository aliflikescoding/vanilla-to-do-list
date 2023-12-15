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

  return {
    showForm: showForm,
    cancel: cancel
  }
})();

export default Dom;