window.addEventListener('DOMContentLoaded', function() {
    var jquery = document.createElement("script");
    jquery.type = "text/javascript";
    jquery.id = 'data-tag-jquery'
    jquery.src = "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js";
    jquery.async = true;
    document.getElementsByTagName("head")[0].appendChild(jquery);
})
window.setInterval(function() {
    $(function() {
        $('span[data-tag=Feeling]').css('background', 'yellow')
    })
}, 500)
