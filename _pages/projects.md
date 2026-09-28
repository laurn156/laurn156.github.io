---
title: "Projects"
permalink: /projects/
author_profile: false
layout: archive
---

<div class="project-grid">
{% for post in site.portfolio %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>
