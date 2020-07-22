$(function () {
    handleSearch();
    handleAnnouncement();
    handleMemberSpotlight();
    handleNewsSection();
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
    });
}