// para esconder os links e aparecer quando o botao de hamburguer for clicado e reaparecer pelo lado esquerdo //
 function menuHamburguer(){
     const menuList = 
     document.querySelector(".menu-list");
     
     const menuLeft = window.getComputedStyle(menuList).left;
     menuList.style.left = (menuLeft === "0px") ? "-300px" : "0px";
     menuList.style.display = 
     (menuList.style.display === "block") ? "none" : "block";
 } 
 
