document.onscroll = function () {
    var topOfTheAboutMe = document.getElementById('aboutme').offsetTop;
    if ($(window).scrollTop() > topOfTheAboutMe) {
        document.getElementById('nav').style.display = 'none';
    }
    if ($(window).scrollTop() <= topOfTheAboutMe) {
        document.getElementById('nav').style.display = '';
    }
}