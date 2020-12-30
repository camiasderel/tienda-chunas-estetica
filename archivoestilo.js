$(".submenu").click(function(){
    $(this).children("ul").slideToggle();
  })
  
  $("ul").click(function(ev){
    ev.stopPropagation();
  })

  //BTN CON JQUERY//

  $(function(){
    init();
  })

  function init(){

    let btn = $('.btnMayorista');    
      btn.click(porMayor());
      console.log("CLICK")//nofunciona 
  }

  function porMayor(){
     let precio = $('.precio-producto');
     precio.text('$1500')
      }

  //OTRA PENDIENTE A SOLUCIONAR.  //BTN CON JQUERY//FIN  //