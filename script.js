window.onload = () => {
  document.body.classList.remove("container");
  setTimeout(() => {
      document.getElementById("popupModal").classList.add("open"); // Add the "open" class
  }, 3000); // 4000 milliseconds = 4 seconds
};
