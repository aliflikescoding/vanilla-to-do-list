const Dom = (() => {
  const showForm = (form) => {
    if (form.classList.contains("show")) {
      form.classList.remove("show");
    }
  };

  return {
    showForm: showForm,
  }
})();

export default Dom;