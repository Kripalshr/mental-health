fetch("./component/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar__placeholder").innerHTML = data;
  });

fetch("./component/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer__container").innerHTML = data;
  });
