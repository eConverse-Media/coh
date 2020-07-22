$(function () {
    handleSearch();
    handleAnnouncement();
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