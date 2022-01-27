---
title: Games
layout: sidebar
toc: true
---
For general rules and regulations applicable to 956 Productions events, refer to our [Player's Guide.]({{ '/guide' | relative_url}})
# Guilty Gear Strive
---
{% for r in site.data.rules %}
{% if r["Game Name (from Game)"] == "Guilty Gear -STRIVE-" %}
## {{ r["Name (from Regions)"] }}
* Registration ends on {{ r["Reg Ends"] }} at 11:59 PM Pacific Time.
* Pools begin at  {{ r["Start Time (Local)"] }} {{ r["Local Timezone"] }} (Official region timezone)
* Platform: {{ r["Platform"] }}
* Entry Fee: {{ r["Entry $"] }}
* Registration Cap: {{ r["Cap"] }} Entrants
* Prize pot split: {{ r["Pot Split"] }}
* Region Includes: {{ r["Region Includes"] | normalize_whitespace }}

#### Format
* Bracket type: {{ r["Pools-Bracket Type"] }}
* Bracket seeding terms: {{ r["Seeding?"] }}
* Games per Set in Pools: {{ r["Pools-Games per Set"] }}
* Games per Set in Finals: {{ r["Finals-Games per Set"] }}

#### Game Rules
* Game settings: {{ r["Rules-Game Settings"] }}
* Character change rules: {{ r["Rules-Chara Change"] }}
* Glitch rules: {{ r["Rules-Glitches"] }}
* Online connectivity rules: {{ r["Rules-Disconnect"] }}
{% endif %}
{% endfor %}

# Melty Blood: Type Lumina
---
{% for r in site.data.rules %}
{% if r["Game Name (from Game)"] == "Melty Blood: Type Lumina" %}
## {{ r["Name (from Regions)"] }}
* Registration ends on {{ r["Reg Ends"] }} at 11:59 PM Pacific Time.
* Pools begin at  {{ r["Start Time (Local)"] }} {{ r["Local Timezone"] }} (Official region timezone)
* Platform: {{ r["Platform"] }}
* Entry Fee: {{ r["Entry $"] }}
* Registration Cap: {{ r["Cap"] }} Entrants
* Prize pot split: {{ r["Pot Split"] }}
* Region Includes: {{ r["Region Includes"] | normalize_whitespace }}

#### Format
* Bracket type: {{ r["Pools-Bracket Type"] }}
* Bracket seeding terms: {{ r["Seeding?"] }}
* Games per Set in Pools: {{ r["Pools-Games per Set"] }}
* Games per Set in Finals: {{ r["Finals-Games per Set"] }}

#### Game Rules
* Game settings: {{ r["Rules-Game Settings"] }}
* Character change rules: {{ r["Rules-Chara Change"] }}
* Glitch rules: {{ r["Rules-Glitches"] }}
* Online connectivity rules: {{ r["Rules-Disconnect"] }}
{% endif %}
{% endfor %}

# The King of Fighters XV
---
{% for r in site.data.rules %}
{% if r["Game Name (from Game)"] == "King of Fighters XV" %}
## {{ r["Name (from Regions)"] }}
* Registration ends on {{ r["Reg Ends"] }} at 11:59 PM Pacific Time.
* Pools begin at  {{ r["Start Time (Local)"] }} {{ r["Local Timezone"] }} (Official region timezone)
* Platform: {{ r["Platform"] }}
* Entry Fee: {{ r["Entry $"] }}
* Registration Cap: {{ r["Cap"] }} Entrants
* Prize pot split: {{ r["Pot Split"] }}
* Region Includes: {{ r["Region Includes"] | normalize_whitespace }}

#### Format
* Bracket type: {{ r["Pools-Bracket Type"] }}
* Bracket seeding terms: {{ r["Seeding?"] }}
* Games per Set in Pools: {{ r["Pools-Games per Set"] }}
* Games per Set in Finals: {{ r["Finals-Games per Set"] }}

#### Game Rules
* Game settings: {{ r["Rules-Game Settings"] }}
* Character change rules: {{ r["Rules-Chara Change"] }}
* Glitch rules: {{ r["Rules-Glitches"] }}
* Online connectivity rules: {{ r["Rules-Disconnect"] }}
{% endif %}
{% endfor %}