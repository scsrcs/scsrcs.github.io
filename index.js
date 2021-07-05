document.addEventListener('DOMContentLoaded', () => {

  const registerButton = document.getElementById("Register");
  const modalBg = document.getElementById("mdback");
  const modalClose = document.getElementById("mdclose");
  const modalCancel = document.getElementById("mdcancel");
  const modal = document.getElementById("mds");

  registerButton.addEventListener('click', () => 
  {
    modal.classList.add("is-active");
  });
  modalBg.addEventListener('click', () => 
  {
    modal.classList.remove("is-active");
  });
  modalCancel.addEventListener('click', () => 
  {
    modal.classList.remove("is-active");
  });
  modalClose.addEventListener('click', () => 
  {
    modal.classList.remove("is-active");
  });

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});