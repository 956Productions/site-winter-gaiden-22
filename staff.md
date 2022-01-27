---
title: Staff
---
<div class="columns is-multiline">
{% for s in site.data.staff %}
<div class="column is-one-fifth">
    <div class="card">
        <div class="card-image">
            <figure class="image is-square" style="margin: 0px !important">
                {% if s['Pic'] %}
                <img src="{{ s['Pic'] }}">
                {% else %}
                <img src="{{ '/img/unknown.png' | relative_url }}">
                {% endif %}
            </figure>
        </div>
        <div class="card-content">
            <div class="media mb-1">
                <div class="media-content">
                    <p class="title is-4">{{ s['Tag'] }}</p>
                    <p class="subtitle is-6">Pronouns: {{ s['Pronouns'] }}</p>
                </div>
            </div>
            {% if s['Staff Page Blurb'] %}
            <div class="content">
                {{ s['Staff Page Blurb'] }}
            </div>
            {% endif %}
        </div>
        {% if s['Twitter'] %}
        <footer class="card-footer">
            <a class="card-footer-item" href="{{ s['Staff Page Profile Link'] }}">{{ s['Twitter'] }}</a>
        </footer>
        {% endif %}
    </div>
</div>
{% endfor %}
</div>