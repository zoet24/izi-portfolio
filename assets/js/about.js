$(window).scroll(function() {
   var hTa = $('#about-text-1').offset().top,
       hHa = $('#about-text-1').outerHeight(),
       hTb = $('#about-text-2').offset().top,
       hHb = $('#about-text-2').outerHeight(),
       hTc = $('#about-text-3').offset().top,
       hHc = $('#about-text-3').outerHeight(),
       hTd = $('#about-text-4').offset().top,
       hHd = $('#about-text-4').outerHeight(),
       hTe = $('#about-text-5').offset().top,
       hHe = $('#about-text-5').outerHeight(),
       hTf = $('#about-text-6').offset().top,
       hHf = $('#about-text-6').outerHeight(),
       hTg = $('#about-text-7').offset().top,
       hHg = $('#about-text-7').outerHeight(),
       hTh = $('#about-text-8').offset().top,
       hHh = $('#about-text-8').outerHeight(),
       hTi = $('#about-text-9').offset().top,
       hHi = $('#about-text-9').outerHeight(),
       hTj = $('#about-text-10').offset().top,
       hHj = $('#about-text-10').outerHeight(),
       hTk = $('#about-text-11').offset().top,
       hHk = $('#about-text-11').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

   if ((wS > (hTa + (hHa/2) - ((1.05*wH)/2))) && (wS < (hTa + (hHa/2) - ((0.95*wH)/2)))){
    //    $("#about-text-1").addClass("highlight", "about.css");
       $("#about-text-1").addClass("img-1", "about.css");
   }
   else if ((wS > (hTb + (hHb/2) - ((1.05*wH)/2))) && (wS < (hTb + (hHb/2) - ((0.95*wH)/2)))){
    //    $("#about-text-2").addClass("highlight", "about.css");
       $("#about-text-2").addClass("img-2", "about.css");
   }
   else if ((wS > (hTc + (hHc/2) - ((1.05*wH)/2))) && (wS < (hTc + (hHc/2) - ((0.95*wH)/2)))){
    //    $("#about-text-3").addClass("highlight", "about.css");
       $("#about-text-3").addClass("img-3", "about.css");
   }
   else if ((wS > (hTd + (hHd/2) - ((1.05*wH)/2))) && (wS < (hTd + (hHd/2) - ((0.95*wH)/2)))){
    //    $("#about-text-4").addClass("highlight", "about.css");
       $("#about-text-4").addClass("img-4", "about.css");
   }
   else if ((wS > (hTe + (hHe/2) - ((1.05*wH)/2))) && (wS < (hTe + (hHe/2) - ((0.95*wH)/2)))){
    //    $("#about-text-5").addClass("highlight", "about.css");
       $("#about-text-5").addClass("img-5", "about.css");
   }
//    else if ((wS > (hTf + (hHf/2) - ((1.05*wH)/2))) && (wS < (hTf + (hHf/2) - ((0.95*wH)/2)))){
//        $("#about-text-6").addClass("highlight", "about.css");
//        $("main").addClass("img-6", "about.css");
//    }
//    else if ((wS > (hTg + (hHg/2) - ((1.05*wH)/2))) && (wS < (hTg + (hHg/2) - ((0.95*wH)/2)))){
//        $("#about-text-7").addClass("highlight", "about.css");
//        $("main").addClass("about-bg-img-7", "about.css");
//    }
//    else if ((wS > (hTh + (hHh/2) - ((1.05*wH)/2))) && (wS < (hTh + (hHh/2) - ((0.95*wH)/2)))){
//        $("#about-text-8").addClass("highlight", "about.css");
//        $("main").addClass("about-bg-img-8", "about.css");
//    }
//    else if ((wS > (hTi + (hHi/2) - ((1.05*wH)/2))) && (wS < (hTi + (hHi/2) - ((0.95*wH)/2)))){
//        $("#about-text-9").addClass("highlight", "about.css");
//        $("main").addClass("about-bg-img-9", "about.css");
//    }
//    else if ((wS > (hTj + (hHj/2) - ((1.05*wH)/2))) && (wS < (hTj + (hHj/2) - ((0.95*wH)/2)))){
//        $("#about-text-10").addClass("highlight", "about.css");
//        $("main").addClass("about-bg-img-10", "about.css");
//    }
//    else if ((wS > (hTk + (hHk/2) - ((0.95*wH)/1))) && (wS < (hTk + (hHk/2) - ((0.8*wH)/1)))){
//        $("#about-text-11").addClass("highlight", "about.css");
//        $("main").addClass("about-bg-img-11", "about.css");
//    }
   else {
    //    $("#about-text-1").removeClass("highlight", "about.css");
    //    $("#about-text-2").removeClass("highlight", "about.css");
    //    $("#about-text-3").removeClass("highlight", "about.css");
    //    $("#about-text-4").removeClass("highlight", "about.css");
    //    $("#about-text-5").removeClass("highlight", "about.css");
    //    $("#about-text-6").removeClass("highlight", "about.css");
    //    $("#about-text-7").removeClass("highlight", "about.css");
    //    $("#about-text-8").removeClass("highlight", "about.css");
    //    $("#about-text-9").removeClass("highlight", "about.css");
    //    $("#about-text-10").removeClass("highlight", "about.css");
    //    $("#about-text-11").removeClass("highlight", "about.css");
       $("#about-text-1").removeClass("img-1", "about.css");
       $("#about-text-2").removeClass("img-2", "about.css");
       $("#about-text-3").removeClass("img-3", "about.css");
       $("#about-text-4").removeClass("img-4", "about.css");
       $("#about-text-5").removeClass("img-5", "about.css");
       $("#about-text-6").removeClass("img-6", "about.css");
    //    $("main").removeClass("about-bg-img-7", "about.css");
    //    $("main").removeClass("about-bg-img-8", "about.css");
    //    $("main").removeClass("about-bg-img-9", "about.css");
    //    $("main").removeClass("about-bg-img-10", "about.css");
    //    $("main").removeClass("about-bg-img-11", "about.css");
   }
});