---
title: Schedule
---
{% for g in site.data.schedule %}
# {{ g.game }}
<div class="table-container">
    <table class="table is-fullwidth has-background-black-bis has-text-white is-narrow">
        <thead>
            <tr>
                <th class="has-text-white">Region</th>
                <th class="has-text-white">Local Pools Time</th>
                <th class="has-text-white">Stream</th>
                <th class="has-text-white">Matcherino</th>
            </tr>
        </thead>
        <tbody>
            {% for i in g.regions %}
            <tr>
                <td>{{ i.region }}</td>
                <td>{{ i.pools }}</td>
                <td><a href="https://twitch.tv/{{ i.stream }}">{{ i.stream }}</a></td>
                <td><a href="{{ i.matcherino }}">Click Here</a></td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</div>
{{ g.game }} Tournament registration closes on {{ g.close }} at 12:01 AM Pacific Time.
{% endfor %}
# Weekly Schedule
<a href="/img/schedule_ggst.png" data-lightbox="schedule_ggst.png" data-title="GGST Schedule">
    <img class="image" src="/img/schedule_ggst.png">
</a>

<a href="/img/schedule_mbtl.png" data-lightbox="schedule_mbtl.png" data-title="MBTL Schedule">
    <img class="image" src="/img/schedule_mbtl.png">
</a>
<a href="/img/schedule_kofxv.png" data-lightbox="schedule_kofxv.png" data-title="KOFXV Schedule">
    <img class="image" src="/img/schedule_kofxv.png">
</a>
# Event Calendar
All Times in this view are PST / GMT -8 (or PDT / GMT -7 if applicable).
<iframe class="airtable-embed" src="https://airtable.com/embed/shryJOw5l5nCI1gtS?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="600" style="background: transparent; border: 1px solid #ccc;"></iframe>