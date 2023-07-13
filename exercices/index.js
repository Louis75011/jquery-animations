$(function() {
    // Animations basiques
    $(".bg-yellow").click(function() {
        $("#p5").toggle();
    });

    $("#p5").mouseenter(function() {
        $(".bg-yellow").hide("slow");
    });

    $("#p5").mouseleave(function() {
        $(".bg-yellow").show(300);
    });

    $("#p1").hover(function() {
        $("#p2").hide(2000, function() {
            $("#p3").fadeTo(4000, 0.5, function() {
                $("#p4").hide(1000);
            });
        });
    });

    // logique : $(selector).animate(arg1, arg2, arg3); // 1: objet, 2: function callback
    $("#start").click(function() {
        $(".division").animate({ left: "600px", opacity: "0.3", width: "+=200px" },
            2000,
            function() {
                $(".division").hide();
            },
        );
        console.log("width division : " + $(".division").width());
    });
    $("#stop").click(function() {
        $(".division").stop();
    });

    $("#starting").click(function() {
        $(".divisioning").animate({ left: "500px", opacity: "0.6", height: "+=200px" },
            2500,
            function() {
                $(".divisioning").fadeOut();
            },
        );
        console.log("height division : " + $(".division").height());
    });
    $("#stoping").click(function() {
        $(".divisioning").stop();
    });

    // Modifications d'élément & CSS
    let div = $(".division-last").text();
    let text = $("#paragraph").html();
    console.log("log", div, text);

    $("#start-last").click(function() {
        $("#paragraph").text("Mon paragraphe"); // .val .htlm .attr
        $("#paragraph").append(" en place"); // .val .htlm .attr .remove .empty
        console.log($("#paragraph").css("color")); // white
        $("#paragraph").toggleClass("purple italic");
        console.log($("#paragraph").css("color")); // purple-rose
        $("#paragraph").css({ background: "yellow" });
    });

    $("#stop-last").click(function() {
        $("#stop-last").hide();
        $(".division-last").hide();
    });

    $("#start-main").click(function() {
        $("#t1").parent().css("border-color", "green");
        $("#div2").children().css("border-color", "green");
        $("#div3").load('demo.txt');
    }); // .find .siblings .next .first

});

// $(function() {
//     let p5Visible = true;

//     $('.bg-yellow').click(function() {
//         if (p5Visible) {
//             $('#p5').hide();
//             p5Visible = false;
//         } else {
//             $('#p5').show();
//             p5Visible = true;
//         }
//     }).mouseleave(function() {
//         if (!p5Visible) {
//             $('#p5').show();
//             p5Visible = true;
//         }
//     });
// });