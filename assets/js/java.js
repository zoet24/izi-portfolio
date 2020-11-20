$(window).scroll(function() {
   var hTa = $('#text-1').offset().top,
       hHa = $('#text-1').outerHeight(),
       hTb = $('#text-2').offset().top,
       hHb = $('#text-2').outerHeight(),
       hTc = $('#text-3').offset().top,
       hHc = $('#text-3').outerHeight(),
       hTd = $('#text-4').offset().top,
       hHd = $('#text-4').outerHeight(),
       hTe = $('#text-5').offset().top,
       hHe = $('#text-5').outerHeight(),
       hTf = $('#text-6').offset().top,
       hHf = $('#text-6').outerHeight(),
       hTg = $('#text-7').offset().top,
       hHg = $('#text-7').outerHeight(),
       hTh = $('#text-8').offset().top,
       hHh = $('#text-8').outerHeight(),
       hTi = $('#text-9').offset().top,
       hHi = $('#text-9').outerHeight(),
       hTj = $('#text-10').offset().top,
       hHj = $('#text-10').outerHeight(),
       hTk = $('#text-11').offset().top,
       hHk = $('#text-11').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

   if ((wS > (hTa + (hHa/2) - ((1.05*wH)/2))) && (wS < (hTa + (hHa/2) - ((0.95*wH)/2)))){
       $("#text-1").addClass("highlight", "about.css");
   }
   else if ((wS > (hTb + (hHb/2) - ((1.05*wH)/2))) && (wS < (hTb + (hHb/2) - ((0.95*wH)/2)))){
       $("#text-2").addClass("highlight", "about.css");
   }
   else if ((wS > (hTc + (hHc/2) - ((1.05*wH)/2))) && (wS < (hTc + (hHc/2) - ((0.95*wH)/2)))){
       $("#text-3").addClass("highlight", "about.css");
   }
   else if ((wS > (hTd + (hHd/2) - ((1.05*wH)/2))) && (wS < (hTd + (hHd/2) - ((0.95*wH)/2)))){
       $("#text-4").addClass("highlight", "about.css");
   }
   else if ((wS > (hTe + (hHe/2) - ((1.05*wH)/2))) && (wS < (hTe + (hHe/2) - ((0.95*wH)/2)))){
       $("#text-5").addClass("highlight", "about.css");
   }
   else if ((wS > (hTf + (hHf/2) - ((1.05*wH)/2))) && (wS < (hTf + (hHf/2) - ((0.95*wH)/2)))){
       $("#text-6").addClass("highlight", "about.css");
   }
   else if ((wS > (hTg + (hHg/2) - ((1.05*wH)/2))) && (wS < (hTg + (hHg/2) - ((0.95*wH)/2)))){
       $("#text-7").addClass("highlight", "about.css");
   }
   else if ((wS > (hTh + (hHh/2) - ((1.05*wH)/2))) && (wS < (hTh + (hHh/2) - ((0.95*wH)/2)))){
       $("#text-8").addClass("highlight", "about.css");
   }
   else if ((wS > (hTi + (hHi/2) - ((1.05*wH)/2))) && (wS < (hTi + (hHi/2) - ((0.95*wH)/2)))){
       $("#text-9").addClass("highlight", "about.css");
   }
   else if ((wS > (hTj + (hHj/2) - ((1.05*wH)/2))) && (wS < (hTj + (hHj/2) - ((0.95*wH)/2)))){
       $("#text-10").addClass("highlight", "about.css");
   }
   else if ((wS > (hTk + (hHk/2) - ((0.85*wH)/1))) && (wS < (hTk + (hHk/2) - ((0.8*wH)/1)))){
       $("#text-11").addClass("highlight", "about.css");
   }
   else {
       $("#text-1").removeClass("highlight", "about.css");
       $("#text-2").removeClass("highlight", "about.css");
       $("#text-3").removeClass("highlight", "about.css");
       $("#text-4").removeClass("highlight", "about.css");
       $("#text-5").removeClass("highlight", "about.css");
       $("#text-6").removeClass("highlight", "about.css");
       $("#text-7").removeClass("highlight", "about.css");
       $("#text-8").removeClass("highlight", "about.css");
       $("#text-9").removeClass("highlight", "about.css");
       $("#text-10").removeClass("highlight", "about.css");
       $("#text-11").removeClass("highlight", "about.css");
   }
});