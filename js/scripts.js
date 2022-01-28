window.onload = function()
{
    if(!window.jQuery)
    {
        alert('jQuery not loaded');
    }
    else
    {
        jQuery(document).ready(function(){
            jQuery.get('js/quotes.txt', function(txt) {
                var quotes = txt.split("\n");
                var randLineNum = Math.floor(Math.random()*(quotes.length));
                jQuery('#quote').append(quotes[randLineNum]);
            });
        });
    }
}