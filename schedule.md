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
{% endfor %}