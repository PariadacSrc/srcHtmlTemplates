var prevfocuselement;

jQuery(document).ready(function($){

	$('.carrousel-aboutus').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true
    });

	$('.figurerow>div>div>figure').tooltipster({
	    animation: 'fade',
		delay: 200,
		theme: 'tooltipster-borderless',
		trigger: 'custom',
		contentAsHTML :true,
		side:'bottom',
		functionInit: function(instance, helper){
	        var content = $(helper.origin);

	        var html ='';
	        html+='<div class="tooltipcontainer-esp">';
			html+='	<h4>'+content.attr('data-title')+'<span>'+content.attr('data-subtitle')+'</span></h4>';
			html+='	<p>'+content.attr('data-textcontent')+'</p>';
			html+='	<div class="toolcross"><i class="tecbound-cross"></i></div>';
			html+='</div>';

	        instance.content(html);
	    }
	});

	$('.figurerow>div>div>figure').on('click',function(e){

		if (!$(this).hasClass('focusitem')) {
			if (prevfocuselement!=undefined) {
		      	prevfocuselement.tooltipster('close');
		      	prevfocuselement.removeClass('focusitem');
		    }
			$(this).tooltipster('open');
			$(this).addClass('focusitem');
			prevfocuselement = $(this);
		}

	});

	$(document).on('click','.toolcross',function(e){
		if (prevfocuselement!=undefined) {
	      	prevfocuselement.tooltipster('close');
	      	prevfocuselement.removeClass('focusitem');
	      	prevfocuselement=undefined;
	    }
	});

});