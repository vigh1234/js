$(document).ready(function(){
  $("#b1").click(function(){
    $("p").hide(1000);
  });
  $("#b2").click(function(){
    $("p").show("slow");
  });
});

$(document).ready(function(){
  $("#btn1").dblclick(function(){
    $("#p1").toggle(1200);
  });
});

$(document).ready(function(){
  $("#btn2").mouseenter(function(){
    $("#p2").fadeOut("slow");
  });
  $("#btn2").click(function(){
    $("#p2").fadeIn("slow");
  });
});
$(document).ready(function(){
  $("#btn3").click(function(){
    $("#pp").html("hello!!");
})
$("#btn3").dblclick(function(){
  $("#btn3").html("hii");
})
});

// hide show using single button//
$(document). ready(function(){
  $('#button'). click(function () {
    if($("#button").html()=='hide'){
      $(".text").hide();
      $("#button").html('show');
    }
  
else{
  $(".text").show();
  $("button").html('hide');
  
  }
  });
});


// $(document). ready(function(){
//   $('#bb'). click(function () {
//     if($("#bb").html()=='swap'){
//       $("#img1").attr('src','js/img/bayern.png');
//       $("#bb").html('reset');
//     }
  
// else{
//   $("#img2").attr('src','js/img/inter.png');
//   $("bb").html('swap');
  
//   }
//   });
// });
$(document).ready(function(){
 $("#bb").click(function(){
  var src1=$("#img1").attr("src");
  var src2=$("#img2").attr("src");

  $("#img1").attr('src',src2)
  $("#img2").attr('src',src1)

 });
});

$(document).ready(function(){
  $("#clk").click(function(){
    $("#s1").fadeToggle("slow");
    $("#s2").fadeToggle(3000);

  });
});

$(document).ready(function(){
  $("#cli").click(function(){
    $("#s3").fadeIn("slow");
    $("#s4").fadeIn(3000);

  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#flippara").slideDown("slow");
  });
});
  

$(document).ready(function(){
  $("#fli").click(function(){
    $("#flippa").slideUp("slow");
  });
});

$(document).ready(function(){
  $("#nm").click(function(){
    var div = $("div");
    div.animate({left: '350px'}, "slow");
  $("#nm").click(function(){
   div.animate({down: '350px'}, "slow");
  });
  $("#nm").click(function(){
    div.animate({right: '350px'}, "slow");
   });
   $("#nm").click(function(){
    div.animate({up: '350px'}, "slow");
   });
  });  

});
$(document).ready(function(){
  $("#left").click(function(){
    var div=$("#ig");
    div.animate({left:'10000px'},"fast");
  })
})

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(3000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
  