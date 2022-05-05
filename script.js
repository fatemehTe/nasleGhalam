$(document).ready(function () {
    $(".inner-lesson").click(function () {
        let text = $(this).text();
        $(".search").attr("placeholder", text)
    })
    //_________________________________________________side bar slides
    $(".detail").hide();
    if ($(".side-bar-scroolable").prop('scrollHeight') > $(".side-bar-scroolable").height()) {
        $(".scrool-btn").css("display", "block"),
            $(".scrool-btn-top").css("display", "block")
        $(".side-bar-scroolable").css("margin-top", "67px")
    }
    $("#f-img").click(function () {
        $("#side-bar").animate({
            width: "103px"
        }, 500);
        if ($(".scrool-btn").css("display") === "block") {
            $(".scrool-btn").animate({
                width: "103px"
            }, 500);
        }
        if ($(".scrool-btn-top").css("display") === "block") {
            $(".scrool-btn-top").animate({
                width: "103px"
            }, 500);
        }
        $(".detail").show();
        $(".side-bar-tooltip").hide();
        $('#side-sort').css('transform', 'rotate(270deg)')
    })
    $("#side-bar").on({
        mouseleave: function () {
            $(this).animate({
                width: "60px"
            }, 500);
            $(".detail").hide();
            if ($(".scrool-btn").css("display") === "block") {
                $(".scrool-btn").animate({
                    width: "60px"
                }, 500);
            }
            if ($(".scrool-btn-top").css("display") === "block") {
                $(".scrool-btn-top").animate({
                    width: "60px"
                }, 500);
            }
            $(".side-bar-tooltip").show();
            $('#side-sort').css('transform', 'rotate(90deg)')
        },
    })
    $("#scrool-btn").click(function () {
        $(".side-bar-scroolable").animate({
            scrollTop: $(".scrool-btn").offset().top,
        })
    })
    $("#scrool-btn-top").click(function () {
        $(".side-bar-scroolable").animate({
            scrollTop: $(".scrool-btn-top").offset().top - 67,
        })
    })
    //______________________________________________________________________question send popUp
    $("#question-button").click(function () {
        $("main").css("filter", "blur(4px)"),
            $("#popUp-page").css("display", "block")
    })
    $(".popUp-img").click(function () {
        $("main").css("filter", "none"),
            $("#popUp-page").css("display", "none")
    })
    //_______________________________________________________________________header left in mobile mode
    $(".header-left-mobile-img").click(function () {
        $(this).css("display", "none"),
            $(".header-left-mobile-img-close").css("display", "block"),
            $(".header-left-mobile-details").css("display", "block")
    })
    $(".header-left-mobile-details div").click(function () {
        $(".header-left-mobile-details").css("display", "none"),
            $(".header-left-mobile-img-close").css("display", "none"),
            $(".header-left-mobile-img").css("display", "block")
    })
    $(".header-left-mobile-img-close").click(function () {
        $(".header-left-mobile-details").css("display", "none"),
            $(".header-left-mobile-img-close").css("display", "none"),
            $(".header-left-mobile-img").css("display", "block")
    })

    let header = document.getElementById('header')
    let img = document.getElementById("guid-img");
    let first = "./assets/images/guid.png";
    let second = "./assets/images/guid-green.png";
    header.onmouseover = () => { img.src = second }
    header.onmouseout = () => { img.src = first }


    //________________________________________________________________profile box open and close
    $(".profile-box").mouseleave(function () {
        $(".profile-box-open").css("display", "none"),
            $(this).css("border-radius", "30px")
    })
    $(".profile-box-open").mouseleave(function () {
        $(this).css("display", "none"),
            $(".profile-box").css("border-radius", "30px")
    })
    $(".profile-box-open div").mousedown(function () {
        $(".profile-box-open").css("display", "none"),
            $(".profile-box").css("border-radius", "30px")
    })
    $(".profile-box-open").css({
        'width': ($(".profile-box").innerWidth() + 'px')
    });

    ///
    $(".profile-box-mobile").click(function () {
        $(".profile-box-open").css("display", "block"),
            $(".profile-box-mobile").css("border-radius", "10px 10px 0px 0px")
    })
    $(".profile-box-open").mouseleave(function () {
        $(this).css("display", "none"),
            $(".profile-box-mobile").css("border-radius", "30px")
    })
    $(".profile-box-open div").mousedown(function () {
        $(".profile-box-open").css("display", "none"),
            $(".profile-box-mobile").css("border-radius", "30px")
    })
    $(".profile-box-open").css({
        'width': ($(".profile-box-mobile").innerWidth() + 'px')
    });
    //__________________________________________________________________lessons drop down
    $(".title-dars").click(function () {
        $(".title-tooltip").toggle("slow", function () {
        });
    })
    $(".inner-lesson").mousedown(function () {
        $(".title-tooltip").css("display", "none")
        let text = $(this).text();
        $(".search").attr("placeholder", text)
    })
    
    $(".title-tooltip-tooltip").css({
        'height': ($(".title-tooltip").innerHeight() + 'px')
    });
    $(".title-tooltip").css({
        'width': (($(".lessons-box").width() / 2) - 5 + 'px')
    });
    $(".title-tooltip-tooltip").css({
        'width': ($(".title-tooltip").width() + 'px'),
        'right': ($(".title-tooltip").width() + 'px')
    });
    // _____________________________________________________________________mobile lesson box and profile box
    $(".exit-profile").click(function () {
        $(".profile-box-mobile").hide(),
            $(".profile-box-mobile-img").css("display", "inline-block"),
            $(".lessons-box-mobile-img").css("display", "inline-block"),
            $(this).hide()
    });
    $(".exit-lesson").click(function () {
        $(".lessons-box-mobile").hide(),
            $(".lessons-box-mobile-img").css("display", "inline-block"),
            $(".profile-box-mobile-img").css("display", "inline-block"),
            $(this).hide()
    });
    $(".profile-box-mobile-img").click(function () {
        $(".profile-box-mobile").css("display", "flex"),
            $(".exit-profile").css("display", "block"),
            $(".lessons-box-mobile-img").hide(),
            $(this).hide()
    })
    $(".lessons-box-mobile-img").click(function () {
        $(".lessons-box-mobile").css("display", "block"),
            $(".exit-lesson").css("display", "block"),
            $(".profile-box-mobile-img").hide(),
            $(this).hide()
    })
    $("#search-button").css("background-color", "#3d3d3d")
    //_____________________________________________________________left menue open and close in mobile mode
    $(".left-menue").click(function () {
        $(".left-menue-open").animate({
            height: "200px",
            width: "50px"
        }, 500)
    });
    $(".left-menue-mobile").mousedown(function () {
        $(".side-bar-mobile").css("display", "block"),
            $(this).hide()
    });
    $(".exit-side-bar-m").click(function () {
        $(".side-bar-mobile").css("display", "none"),
            $(".left-menue-mobile").css("display", "block")
    })
    $(".side-bar-item-m").click(function () {
        $(".side-bar-mobile").css("display", "none"),
            $(".left-menue-mobile").css("display", "block")
    })
    //______________________________________________________________left menue open and close
    $("#div2").click(function () {
        $("#div1").slideToggle("slow", function () {
            $(".collaps").css("opacity", "1")
        });
    });
    $("#div1").click(function () {
        $("#div1").slideToggle("slow", function () {
        });
    });
})

