// Position images
onload = function () {
    var hTa = $('#about-text-1').offset().top,
        hTb = $('#about-text-2').offset().top,
        hTc = $('#about-text-3').offset().top,
        hTd = $('#about-text-4').offset().top,
        hTe = $('#about-text-5').offset().top,
        hTf = $('#about-text-6').offset().top,
        hTg = $('#about-text-7').offset().top,
        hTh = $('#about-text-8').offset().top,
        hTi = $('#about-text-9').offset().top,
        hTj = $('#about-text-10').offset().top,
        hTk = $('#about-text-11').offset().top,

        hHa = $('#about-text-1').outerHeight(),
        hHb = $('#about-text-2').outerHeight(),
        hHc = $('#about-text-3').outerHeight(),
        hHd = $('#about-text-4').outerHeight(),
        hHe = $('#about-text-5').outerHeight(),
        hHf = $('#about-text-6').outerHeight(),
        hHg = $('#about-text-7').outerHeight(),
        hHh = $('#about-text-8').outerHeight(),
        hHi = $('#about-text-9').outerHeight(),
        hHj = $('#about-text-10').outerHeight(),
        hHk = $('#about-text-11').outerHeight(),

        hIa = $('#about-image-1').outerHeight(),
        hIb = $('#about-image-2').outerHeight(),
        hIc = $('#about-image-3').outerHeight()
        hId = $('#about-image-4').outerHeight(),
        hIe = $('#about-image-5').outerHeight(),
        hIf = $('#about-image-6').outerHeight(),
        hIg = $('#about-image-7').outerHeight(),
        hIh = $('#about-image-8').outerHeight(),
        hIi = $('#about-image-9').outerHeight(),
        hIj = $('#about-image-10').outerHeight(),
        hIk = $('#about-image-11').outerHeight()
        
        wH = $(window).height();

        $('#about-image-1').css({ top: (hTa - (hIa/2) + (hHa/2)) });
        $('#about-image-2').css({ top: (hTb - (hIb/2) + (hHb/2)) });
        $('#about-image-3').css({ top: (hTc - (hIc/2) + (hHc/2)) });
        $('#about-image-4').css({ top: (hTd - (hId/2) + (hHd/2)) });
        $('#about-image-5').css({ top: (hTe - (hIe/2) + (hHe/2)) });
        $('#about-image-6').css({ top: (hTf - (hIf/2) + (hHf/2)) });
        $('#about-image-7').css({ top: (hTg - (hIg/2) + (hHg/2)) });
        $('#about-image-8').css({ top: (hTh - (hIh/2) + (hHh/2)) });
        $('#about-image-9').css({ top: (hTi - (hIi/2) + (hHi/2)) });
        $('#about-image-10').css({ top: (hTj - (hIj/2) + (hHj/2)) });
        $('#about-image-11').css({ top: (hTk + (hHk/2) - (wH/2)) });
        console.log(hTa, hIa, hHa);
        console.log(hTb, hIb, hHb);
        console.log(hTk, hIk, hHk);
};

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
       $("#about-text-1").addClass("highlight", "about.css");
       $("#about-image-1").removeClass("hidden");
   }
   else if ((wS > (hTb + (hHb/2) - ((1.05*wH)/2))) && (wS < (hTb + (hHb/2) - ((0.95*wH)/2)))){
       $("#about-text-2").addClass("highlight", "about.css");
       $("#about-image-2").removeClass("hidden");
   }
   else if ((wS > (hTc + (hHc/2) - ((1.05*wH)/2))) && (wS < (hTc + (hHc/2) - ((0.95*wH)/2)))){
       $("#about-text-3").addClass("highlight", "about.css");
       $("#about-image-3").removeClass("hidden");
   }
   else if ((wS > (hTd + (hHd/2) - ((1.05*wH)/2))) && (wS < (hTd + (hHd/2) - ((0.95*wH)/2)))){
       $("#about-text-4").addClass("highlight", "about.css");
       $("#about-image-4").removeClass("hidden");
   }
   else if ((wS > (hTe + (hHe/2) - ((1.05*wH)/2))) && (wS < (hTe + (hHe/2) - ((0.95*wH)/2)))){
       $("#about-text-5").addClass("highlight", "about.css");
       $("#about-image-5").removeClass("hidden");
   }
   else if ((wS > (hTf + (hHf/2) - ((1.05*wH)/2))) && (wS < (hTf + (hHf/2) - ((0.95*wH)/2)))){
       $("#about-text-6").addClass("highlight", "about.css");
       $("#about-image-6").removeClass("hidden");
   }
   else if ((wS > (hTg + (hHg/2) - ((1.05*wH)/2))) && (wS < (hTg + (hHg/2) - ((0.95*wH)/2)))){
       $("#about-text-7").addClass("highlight", "about.css");
       $("#about-image-7").removeClass("hidden");
   }
   else if ((wS > (hTh + (hHh/2) - ((1.05*wH)/2))) && (wS < (hTh + (hHh/2) - ((0.95*wH)/2)))){
       $("#about-text-8").addClass("highlight", "about.css");
       $("#about-image-8").removeClass("hidden");
   }
   else if ((wS > (hTi + (hHi/2) - ((1.05*wH)/2))) && (wS < (hTi + (hHi/2) - ((0.95*wH)/2)))){
       $("#about-text-9").addClass("highlight", "about.css");
       $("#about-image-9").removeClass("hidden");
   }
   else if ((wS > (hTj + (hHj/2) - ((1.05*wH)/2))) && (wS < (hTj + (hHj/2) - ((0.95*wH)/2)))){
       $("#about-text-10").addClass("highlight", "about.css");
       $("#about-image-10").removeClass("hidden");
   }
   else if ((wS > (hTk + (hHk/2) - ((0.95*wH)/1))) && (wS < (hTk + (hHk/2) - ((0.8*wH)/1)))){
       $("#about-text-11").addClass("highlight", "about.css");
       $("#about-image-11").removeClass("hidden");
   }
   else {
       $("#about-text-1").removeClass("highlight", "about.css");
       $("#about-text-2").removeClass("highlight", "about.css");
       $("#about-text-3").removeClass("highlight", "about.css");
       $("#about-text-4").removeClass("highlight", "about.css");
       $("#about-text-5").removeClass("highlight", "about.css");
       $("#about-text-6").removeClass("highlight", "about.css");
       $("#about-text-7").removeClass("highlight", "about.css");
       $("#about-text-8").removeClass("highlight", "about.css");
       $("#about-text-9").removeClass("highlight", "about.css");
       $("#about-text-10").removeClass("highlight", "about.css");
       $("#about-text-11").removeClass("highlight", "about.css");
       $("#about-image-1").addClass("hidden");
       $("#about-image-2").addClass("hidden");
       $("#about-image-3").addClass("hidden");
       $("#about-image-4").addClass("hidden");
       $("#about-image-5").addClass("hidden");
       $("#about-image-6").addClass("hidden");
       $("#about-image-7").addClass("hidden");
       $("#about-image-8").addClass("hidden");
       $("#about-image-9").addClass("hidden");
       $("#about-image-10").addClass("hidden");
       $("#about-image-11").addClass("hidden");
   }
});