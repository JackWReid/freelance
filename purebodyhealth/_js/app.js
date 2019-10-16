/* Hold and fade the page for 500ms
*  before proceeding to the clicked
*  link. */
$('#main a').click(function(event) {
    event.preventDefault();
    var href = this.href;

    $('body').animate({
        opacity: '0'
    }, 500,
    function() {
        window.location = href;
    });
});
