jQuery(document).ready(function($) {

    var windowHeight = $(window).scrollTop();

    $(".appear-animation").each(function(){
        

        var contenido = $(this).offset();
        var obj = $(this);
        var time = $(this).attr('data-appear-animation-delay')
        contenido = contenido.top - ($(window).height());


        if(windowHeight >= contenido  ){
            setTimeout(function(){
                obj.attr('style', '');
                obj.removeClass(obj.attr('data-out-animation'));
                obj.addClass(obj.attr('data-appear-animation'));
            }, time);
        }else{
            $(this).removeClass($(this).attr('data-appear-animation'));
            $(this).addClass($(this).attr('data-out-animation'));
        }

    });

    $(window).scroll(function(){

        var windowHeight = $(window).scrollTop();

        $(".appear-animation").each(function(){
            

            var contenido = $(this).offset();
            var obj = $(this);
            var time = $(this).attr('data-appear-animation-delay')
            contenido = contenido.top - ($(window).height());


            if(windowHeight >= contenido  ){
                setTimeout(function(){
                    obj.removeClass(obj.attr('data-out-animation'));
                    obj.addClass(obj.attr('data-appear-animation'));
                }, time);
            }else{
                $(this).removeClass($(this).attr('data-appear-animation'));
                $(this).addClass($(this).attr('data-out-animation'));
            }

        });

    });

    $('.slick-arrow').text('');

    $('.slider-princ').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: 'ease'
    });


    $('.megaslider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'ease',
      centerMode: true,
      centerPadding: '10rem',
    });


    $('.slider-princ').on('afterChange', function(event, slick, currentSlide){
        var slickcount = (slick.$slides.length -1);

        $(slick.$slides[currentSlide]).attr('data-textmsn','left');

        console.log(currentSlide+1);

        if ((currentSlide+1)<=slickcount) {
            $(slick.$slides[currentSlide+1]).attr('data-textmsn','center');
        }else{
            $(slick.$slides[0]).attr('data-textmsn','center');
        }

        if ((currentSlide+2)<=slickcount) {
            $(slick.$slides[currentSlide+2]).attr('data-textmsn','right');
        }else{
            $(slick.$slides[0]).attr('data-textmsn','right');
        }
        
    });

    $('.slider-princ').on( "mouseenter mouseleave", '.focusin',function( event ) {

        if (event.type=='mouseenter') {

            var puttop = $(this).offset().top + $(this).height()+50;
            var aux = $(this).width() -500;

            switch($(this).attr('data-textmsn')) {
                case 'right':
                    var putleft = $(this).offset().left + $(this).width() - 500;
                    break;
                case 'left':
                    var putleft = $(this).offset().left;
                    break;
                default:
                    var putleft = $(this).offset().left - (Math.abs(aux)/2);
            }

            var htmltmpl = '';
            htmltmpl += '<div class="rainbowtooltip '+$(this).attr('data-textmsn')+'" style="top:'+puttop+'px; left:'+putleft+'px">';
            htmltmpl += '   <div><div class="bckr"></div><div class="bcwht"></div>';
            htmltmpl += '       <h6>'+$(this).attr('data-titleshow')+'</h6>';
            htmltmpl += '       <p>'+$(this).attr('data-msn')+'</p>';
            htmltmpl += '   </div>';
            htmltmpl += '</div>';
            $('body').append(htmltmpl);
            setTimeout(function(){
                $(document).find('.rainbowtooltip').addClass('transshow');
            },250);

        }

        if (event.type=='mouseleave'){
            $('body').find('.rainbowtooltip').remove();
        }
    });

    $('.cube').on('click', function(event) {
        event.preventDefault();

        if ($(this).hasClass('showback')) {
            $(this).removeClass('showback');
        }else{
            $(this).addClass('showback');
        }
    });

    $('.up-fixarrow').on('click', function(event) {
        event.preventDefault();

        $('body, html').animate({
            scrollTop: '0px'
        }, 2500);

    });


    $('.card-header>button').on('click', function () {
        
        $('#main > section.coolbanner > div > div > div:nth-child(2) > figure').removeClass($(this).attr('data-appear-animation'));
        $('#main > section.coolbanner > div > div > div:nth-child(2) > figure').addClass($(this).attr('data-out-animation'));

        var newimg = $(this).attr('data-bckimg');
        var newdisappear = $(this).attr('data-out-animation');
        var newappear = $(this).attr('data-appear-animation');

        setTimeout(function(){
            $('#main > section.coolbanner > div > div > div:nth-child(2) > figure').css({'background-image':'url('+newimg+')'});
            $('#main > section.coolbanner > div > div > div:nth-child(2) > figure').removeClass(newdisappear);
            $('#main > section.coolbanner > div > div > div:nth-child(2) > figure').addClass(newappear);
        },300);

    });


    $('.mainbanner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true
    });

    $('.brandbanner').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 3,
      autoplay: true,
      cssEase: 'ease',
      responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },        

      ]
    });

});