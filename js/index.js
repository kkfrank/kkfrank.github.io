var reg_mail = /^(.+)@(.+){1,}\.(.+)$/;

function validateField($field){
    var isValid = true;
    if($field.hasClass('req')){
        if($field.val() === ''){
            isValid = false;
            $field.addClass('error');
            $field.closest('.form-item').find('.form-error-msg').removeClass('hide').text($field.attr('data-error'));
        }else{
            $field.removeClass('error');
            $field.closest('.form-item').find('.form-error-msg').addClass('hide').text('');
        }
    }
    if($field.hasClass('email')){
        if(!reg_mail.test($field.val())){
            isValid = false;
            $field.addClass('error');
            $field.closest('.form-item').find('.form-error-msg').removeClass('hide').text($field.attr('data-error'))
        }else{
            $field.removeClass('error');
            $field.closest('.form-item').find('.form-error-msg').addClass('hide').text('');
        }
    }
    return isValid;
}
function validateForm($form){
    var $fields = $form.find('.req');
    var isValid = true;

    $fields.each(function(){
        if(!validateField($(this))){
            isValid = false;
        }
    });
   return isValid;
}
function bindBlurEvent(form){
    var $fields = form.find('.req');
    $fields.each(function(){
        $(this).blur(function(){
            validateField($(this));
        })
    })
}

$(function(){
    /** left menu bar **/
   $('.mobile-menu-opener').click(function(){
       var left = $('#menu').css('left');
       if(left === '-230px'){//to open
           $('#menu').animate({left:'0'});
       }else if(left === '0px'){//to close
           $('#menu').animate({left:'-230px'});
       }
   });

   $('#main').click(function(){//hide left side menu
      if($('.mobile-menu-opener').is(':visible') &&  $('#menu').css('left') === '0px'){
          $('.mobile-menu-opener').trigger('click');
      }
   });
    /** left menu bar **/

    /** input animation **/
    function animateSkill(){
        $('.skills').animate({width:'2px'},1000,'linear',function(){
            var $nowEle = $('.skills').children('span:visible');
            var $nextPrev = null;
            if($nowEle.is(':last-child')){
                $nextPrev = $('.skills').children().first();
            }else{
                $nextPrev = $nowEle.next();
            }
            $nowEle.addClass('hide');
            $nextPrev.removeClass('hide');
            var width = $nextPrev.width();
            $('.skills').animate({width:width});
            setTimeout(function(){
                animateSkill()
            },1000);
        })
    }
    if($('.skills').length >0 ){
        animateSkill()
    }
    /** input animation **/

    /** skill progress bar animation **/
    if($('.progress-bar').length > 0){
        $('.progress-bar').each(function(){
            var width = $(this).attr('data-progress');
            $(this).animate({width:width})
        })
    }
    /** skill progress bar animation **/

    /** contact me **/
    if($('#contactForm').length>0){
        bindBlurEvent($('#contactForm'));
        $('#contactForm').submit(function(){
            var isValid = validateForm($(this));
            if(!isValid){
                return false;
            }
        });
        document.getElementById('contactForm').onreset=function(){
            //hide all error msg
            $('#contactForm').find('.error').removeClass('error');
            $('#contactForm').find('.form-error-msg').addClass('hide').text('');
        };
    }
    /** contact me **/


    /** education **/
    if($('#education').length>0){
        $.getJSON('./data/degrees.json',function(data){
            var html = '';
            for(var i=0; i<data.length; i++){
                if(i % 2 ===0 ){
                    html+='<li>'
                }else{
                    html+='<li class="timeline-inverted">'
                }
                html +=     '<div class="timeline-badge"></div>'+
                            '<div class="timeline-panel">'+
                                '<div class="timeline-heading">'+
                                    '<h2>'+ data[i].school +'</h2>'+
                                    '<h3>Type: ' + data[i].type +'</h3>'+
                                    '<span class="date">'+data[i].year+'</span>'+
                                '</div>'+
                                '<div class="timeline-body">'+
                                    '<p>'+data[i].program+'</p>'+
                                '</div>'+
                            '</div>'+
                        '</li>'
            }
            $('#education').append(html);
        });
    }
    /** education **/

    /** experience **/
    if($('#experience').length>0){
        $.getJSON('./data/experiences.json',function(data){
            var html = '';
            for(var i=0; i<data.length; i++){
                if(i % 2 ===0 ){
                    html+='<li>'
                }else{
                    html+='<li class="timeline-inverted">'
                }
                var duties = '';
                for(var j=0; j<data[i].duties.length;j++){
                    duties+='<p>'+data[i].duties[j]+'</p>';
                }
                html +=       '<div class="timeline-badge"></div>'+
                                '<div class="timeline-panel">'+
                                    '<div class="timeline-heading">'+
                                        '<h2>'+ data[i].position +'</h2>'+
                                        '<h3>'+data[i].company +'</h3>'+
                                        '<span class="date">'+data[i].time+'</span>'+
                                    '</div>'+
                                    '<div class="timeline-body">'+duties+'</div>'+
                                '</div>'+
                            '</li>'
            }
            $('#experience').append(html);
        });
    }
    /** experience **/

});