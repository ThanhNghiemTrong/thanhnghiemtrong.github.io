/**
 * Created by Nguyen Phuong Thanh on 11/25/2015.
 */
$(document).ready(function(){
    if($(window).width() > 1200){
        $('.dropdown-toggle', $(".navbar")).removeAttr('data-toggle');
    }
    $('#chairman-message .more').on('click', function(){
        $("#chairman-message .part-content").toggleClass('hidden-content');
    })
    $("#home-banner .list-media .item").hover(function(){
        var index = $( "#home-banner .list-media .item" ).index( this );
        if (index== 0 || index==2 || index==4){
            $( "#home-banner .list-media .item:nth-child(odd)" ).toggleClass('appear');
        }
        else{
            $( "#home-banner .list-media .item:nth-child(even)" ).toggleClass('appear');
        }
    });
    $('#timeline-history').changeActive($('#timeline-history'));
    $('#timeline-history .item').hover( function(){
        $('#timeline-history .item').removeClass('active');
        $(this).toggleClass('active');
    })
    $('.tdkt .activity a.title').on('click', function(){
        $('.tdkt .activity').removeClass('active');
        $('.tdkt .map-activity').removeClass('active');
        $(this).parent('.activity').addClass('active');
        var mapActivity = $(this).attr('href');
        $(mapActivity).addClass('active');

        $('.tdkt .activity.active li a').hover(function(){
            var mapActive = $(this).attr('data-target');
            console.log(mapActive);
            $('.tdkt .map-activity .map-part').removeClass('active');
            $(mapActive).addClass('active');
        })
    })
    $('.tdkt .activity.active li a').hover(function(){
        var mapActive = $(this).attr('data-target');
        console.log(mapActive);
        $('.tdkt .map-activity .map-part').removeClass('active');
        $(mapActive).addClass('active');
    })
    /*collapse tab*/
    $('.collapse-tab').changeActive($('.collapse-tab'));
})
$.fn.changeActive = function(id) {
    id.find('.item').on('click', function(){
        id.find('.item').removeClass('active');
        $(this).toggleClass('active');
    })
};
