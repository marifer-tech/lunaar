document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');

  if (mobileMenu && navList) {
      // Abrir e fechar o menu ao clicar no ícone hambúrguer
      mobileMenu.addEventListener('click', function () {
          navList.classList.toggle('active');
          mobileMenu.classList.toggle('active');
      });

      // Fechar o menu ao clicar em um link
      document.querySelectorAll('.nav-list li a').forEach(item => {
          item.addEventListener('click', () => {
              navList.classList.remove('active');
              mobileMenu.classList.remove('active');
          });
      });
  }
});
