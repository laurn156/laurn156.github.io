---
title: "Projects"
permalink: /projects/
author_profile: false
layout: archive
---

<header class="projects-intro">
  <p class="projects-intro__lede">A collection of my work in robotics projects and engineering work</p>
</header>

<div class="project-grid">
{% for post in site.portfolio %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>
