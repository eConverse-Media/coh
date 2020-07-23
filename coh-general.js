$(function () {
    handleSearch();
    handleAnnouncement();
    handleDiscussions();
    handleNewsSection();
    handleMemberSpotlight();
});

function handleSearch() {
    $('<button type="button" class="search-btn-top" />').insertBefore('.HLWelcome');
}

function handleAnnouncement() {
    $('.announcement-bar').append('<button type="button" onclick="closeAnnouncement();"><i class="fal fa-times"></i></button>');
}
function closeAnnouncement() {
    $('.announcement-bar').hide();
}

function handleMemberSpotlight() {
    $('.member-spotlight img').wrap('<div class="spotlight-info" />');
    $('.spotlight-info img').wrap('<strong />');
    $('.member-spotlight h5, .member-spotlight h5 + p').appendTo('.spotlight-info');
}

function handleNewsSection() {
    $('.home .HLRecentBlogs ul li').each(function () {
        var self = $(this);
        handleAjaxCall(self);

        $(self).find('.title-row').wrap('<div class="text-container" />');
        $(self).find('.content-row').insertAfter($(self).find('.title-row'));
    });
}

function handleDiscussions() {
    $('.home .HLDiscussions ul li').each(function () {
        var self = $(this);
        handleByLineAndPostedIn(self);
    });
}

function handleByLineAndPostedIn(self) {
    var ByLine = $(self).find('.ByLine'),
        postedIn = $(self).find('h5');

    $(ByLine).appendTo(self);
    if (!!($(postedIn).html())) {
        $(postedIn).insertAfter(ByLine);
    }
}

function handleAjaxCall(self) {
    var href = $(self).find('h3 a').attr('href');

    // handle image 

    var imgContainer = '<div class="img-container loading" />';
    $(self).append(imgContainer);
    $.ajax({
        url: href,
        dataType: 'html',
        success: success
    });
    
    function success(resp) {
        var img = $(resp).find('.blogs-block > div[id*="UpdatePanel"] > .row:not(.margin-bottom-medium) > .col-md-12 img:first-of-type'),
            src = $(img).attr('src');

        if (!!src) {
            var url = "url('" + src + "')";
            $(self).find('.img-container').css('background-image', url);
            $(self).find('.img-container').removeClass('loading');
        }
            
    }
}