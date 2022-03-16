---
title: Slides
hidden: true
layout: slides
---
<div class="main-carousel">
{% for image in site.static_files %}
    {% if image.path contains 'img/slides' %}
    <div class="carousel-cell">
        <img src="{{ site.baseurl }}{{ image.path }}">
    </div>
    {% endif %}
{% endfor %}
</div>
<script>
var flkty = new Flickity( '.main-carousel', {
// options
autoPlay: 8000,
prevNextButtons: false,
pageDots: false,
contain: false,
adaptiveHeight: true,
pauseAutoPlayOnHover: false,
resize: false,
wrapAround: true,
setGallerySize: false
});
</script>
