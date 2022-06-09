$(document).ready(function(){
    $(".top").click(function(e){
        e.preventDefault();
        $("html,body").scrollTop(0);
    });

    $(".subscribe li a").click(function(e){
        e.preventDefault();
        if( $(this).text() ==="10000位" ){
            $(".user-number").text("10000");
            $(".basic p.exp").text("600");
            $(".standard p.exp").text("1600");
        } else if ( $(this).text() ==="15000位" ){
            $(".user-number").text("15000");
            $(".basic p.exp").text("500");
            $(".standard p.exp").text("1500");
        } else if ( $(this).text() ==="20000位" ){
            $(".user-number").text("20000");
            $(".basic p.exp").text("400");
            $(".standard p.exp").text("1400");
        }
        else if ( $(this).text() ==="25000位" ){
            $(".user-number").text("25000");
            $(".basic p.exp").text("300");
            $(".standard p.exp").text("1300");
        }
        else if ( $(this).text() ===">25000位" ){
            $(".user-number").text(">25000");
            $(".basic p.exp").text("200");
            $(".standard p.exp").text("1200");
        }
    })

    $(".QA ul li").click(function(){
        $(this).find(".qa-title p").toggleClass("active");
        $(this).find('.answer').slideToggle();
        $(this).find('.minus').toggle();
        $(this).find('.plus').toggle();
    })
    
})