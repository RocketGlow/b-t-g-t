/**
 * Main JS file for Casper behaviours
 */

 /*globals jQuery, document */
 (function ($) {
    "use strict";

    $(document).ready(function () {

        // Home page slideshow
        $(".banner-home").backstretch([
            "http://24.media.tumblr.com/0d55a854fcfbd56602d093df7b40f729/tumblr_myebsj2lWI1st5lhmo1_1280.jpg",
            "http://24.media.tumblr.com/517307e7e38640827087e5d71b6f4694/tumblr_mzgz2dmpvq1st5lhmo1_1280.jpg",
            "http://25.media.tumblr.com/d43bd873fd5c0b05c48b68ba0a0b2c37/tumblr_mwhd396nl71st5lhmo1_1280.jpg",
            "http://24.media.tumblr.com/e100564a3e73c9456acddb9f62f96c79/tumblr_mufs8mix841st5lhmo1_1280.jpg",
            "http://25.media.tumblr.com/b03e53931e2264f97a3e93beae6d3053/tumblr_mtw7hple1a1st5lhmo1_1280.jpg",
            "http://25.media.tumblr.com/c1d74ad7c1050fe85a47d97b01a0a396/tumblr_mtw7o8m4MK1st5lhmo1_1280.jpg"  
            ], {duration: 6000, fade: 750});       

        // Posts featured image, determine if post has an image with the alt tag of "big-post-image"
        // If it does, use that image in the banner, if not, then add the class "no-big-post-image"
        var src = "";
        src = $('img[alt="big-post-image"]').attr('src');

        if (typeof src != 'undefined') {
            var url = $('.big-post-image').css('background-image', 'url('+src+')');
            $(".big-post-image").backstretch(src);
        } else
        {
            $(".banner-post").addClass("no-big-post-image");
        }

        // Scroll To Top
        // Show or hide scroll to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 625) {
                $('.go-to-top').fadeIn(500);
            } else {
                $('.go-to-top').fadeOut(500);
            }
        })

        // Animate the scroll to top
        $('.go-to-top').click(function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 800);
        })

        // Scroll to a hash on the page from link on another page with link and # or when refreshing page
        if (window.location.hash != null && window.location.hash != '')
            $('html,body').animate({
                scrollTop: $(window.location.hash).offset().top
                }, 1500).delay(550); // delay is needed so the scroll action shows on mobile devices


        $(window).load(function() {  // this will fire after the entire page is loaded, including images
            // Scroll to a hash on the page from link on another page with link and # or when refreshing page
            // This is needed again in case images or whatever are taking a long time to load
            //if (window.location.hash != null && window.location.hash != '')
                //$('html,body').animate({
                    //scrollTop: $(window.location.hash).offset().top
                //}, 1500);

            // Scroll To blog section
            $(".scroll-to-blog").click(function() {
                $('html, body').animate({
                    scrollTop: $("#blog").offset().top
                }, 800);
            });
        });

        // this will cancel the animated scroll if the user starts to scroll with the mouse wheel
        $(window).on("mousewheel DOMMouseScroll", function(e){
            $('html,body').stop(e);
        });

        $(".top-nav-wrapper").hover(function(){
            $("#header").toggleClass("header-hover");
        })      
        
    });

}(jQuery));