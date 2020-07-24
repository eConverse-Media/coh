$(function () {
    handleSearch();
    handleAnnouncement();
    handleQuickLinks();
    handleTiles();
    handleDiscussions();
    handleEvents();
    handleNewsSection();
    handleMemberSpotlight();
});

function handleSearch() {
    $('<button type="button" class="search-btn-top" onclick="toggleSearch();" />').insertBefore('.HLWelcome');
    $('.search-bar-top').insertBefore('.search-btn-top');
    $('.search-bar-top .form-control').attr('placeholder', 'Type search terms here...');
    $('#searchColumn .form-control').attr('placeholder', 'Type search terms here...');
    $(document).click(function (e) {
        var searchBar = $('.search-bar-top'),
            searchButton = $('.search-btn-top'),
            target = e.target;

        if (!($(target).is(searchBar)) &&
            !($(target).is(searchButton)) &&
            !($(target).closest('.search-bar-top').html()) &&
            !($(target).closest('.search-btn-top').html())) {
                closeSearch();
        }
    });
}

function toggleSearch() {
    if ($('.search-bar-top').hasClass('open')) {
        closeSearch();
    } else {
        openSearch();
    }
}
    
function closeSearch() {
    $('.search-bar-top').removeClass('open');
    $('.search-btn-top').removeClass('open');
}

function openSearch() {
    $('.search-bar-top').addClass('open');
    $('.search-btn-top').addClass('open');
    $('.search-bar-top .form-control').focus();
}

function handleAnnouncement() {
    $('.announcement-bar').append('<button type="button" onclick="closeAnnouncement();"><i class="fal fa-times"></i></button>');
}
function closeAnnouncement() {
    $('.announcement-bar').hide();
}

function handleLink(self) {
    var link = $(self).find('h3 a'),
        href = $(link).attr('href'),
        isHtmlContent = !!($(self).find('.HtmlContent').html()) ? true : false,
        linkHtml;


    if ($(link).attr('target') == '_blank') {
        linkHtml = '<a href="' + href + '" target="_blank" rel="noopener" />';
        if (isHtmlContent) {
            $(self).find('.HtmlContent').wrap(linkHtml);
        }
        else {
            $(self).wrapInner(linkHtml);
        }
    } else {
        linkHtml = '<a href="' + href + '" />';
        if (isHtmlContent) {
            $(self).find('.HtmlContent').wrap(linkHtml);
        } else {
            $(self).wrapInner(linkHtml);
        }
    }

    $(link).contents().unwrap();
}

function handleQuickLinks() {
    $('.quick-link').each(function () {
        var self = $(this);
        handleLink(self);
    });
}

function handleTiles() {
    $('.tile').each(function () {
        var self = $(this);
        handleLink(self);
    });
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

function handleEvents() {
    $('.home .HLEventList ul li').each(function () {
        var self = $(this);
        handleLink(self);
        var hasImg = !!($(self).find('img').attr('src'));
        if (hasImg) {
            handleBgImage(self, $(self).find('a'));
        }
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