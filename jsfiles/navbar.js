window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('solid-background');
    } else {
      navbar.classList.remove('solid-background');
    }
  });

  document.getElementById("tab1").addEventListener("click", function () {
    document.getElementById("features").scrollIntoView({
      behavior: "smooth",
      easing: "ease-out",
    });
  });

  document.getElementById("tab3").addEventListener("click", function () {
    document.getElementById("container3").scrollIntoView({
      behavior: "smooth",
      easing: "ease-out",
    });
  });