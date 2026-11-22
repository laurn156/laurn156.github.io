---
permalink: /
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home-intro" aria-labelledby="home-intro-title">
  <div class="home-intro__copy">
    <h1 id="home-intro-title" class="home-intro__eyebrow">Hi, I'm Lauren!</h1>
    <p class="home-intro__lede">I'm an undergraduate student at Kennesaw State University studying Mechatronics Engineering, graduating in May 2027.</p>
    <div class="home-intro__links">
      {% if site.author.email %}
      <a href="mailto:{{ site.author.email }}"><i class="fas fa-envelope" aria-hidden="true"></i>{{ site.data.ui-text[site.locale].email_label | default: "Email" }}</a>
      {% endif %}
      {% if site.author.linkedin %}
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}"><i class="fab fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
      {% endif %}
    </div>
  </div>
  <figure class="home-profile">
    {% assign portrait = site.author.avatar %}
    {% unless portrait contains "://" %}
      {% assign portrait = portrait | prepend: "/images/" | relative_url %}
    {% endunless %}
    <img src="{{ portrait | escape }}" alt="{{ site.author.name | escape }}" fetchpriority="high">
    <figcaption>
      <strong>{{ site.author.name }}</strong>
      <span>{{ site.author.pronouns }} · <span class="home-profile__location"><i class="fas fa-location-dot" aria-hidden="true"></i> Marietta, GA</span></span>
    </figcaption>
  </figure>
</section>

<section class="research-interests" aria-labelledby="research-interests-title">
  <h2 id="research-interests-title">Research Interests</h2>
  <div class="interest-grid">
    <article class="interest-card">
      <span class="interest-card__icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" focusable="false">
          <rect x="11" y="27" width="42" height="18" rx="4"></rect>
          <circle cx="21" cy="49" r="4"></circle><circle cx="43" cy="49" r="4"></circle>
          <circle cx="22" cy="36" r="2"></circle><circle cx="32" cy="36" r="2"></circle><circle cx="42" cy="36" r="2"></circle>
          <path d="M32 27V18"></path><circle cx="32" cy="15" r="2"></circle>
          <path d="M25 13c4-5 10-5 14 0M20 9c7-8 17-8 24 0"></path>
        </svg>
      </span>
      <h3>Autonomous Systems</h3>
    </article>
    <article class="interest-card">
      <span class="interest-card__icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" focusable="false">
          <path d="M8 51v-7c0-5 4-9 9-9h3c5 0 9 4 9 9v7z"></path>
          <circle cx="18.5" cy="25" r="7"></circle>
          <rect x="36" y="20" width="22" height="21" rx="5"></rect>
          <path d="M47 20v-5M33 28v6M61 28v6M40 47h14l4 4H36zM43 35h8"></path>
          <circle cx="42" cy="28" r="1" fill="currentColor"></circle>
          <circle cx="52" cy="28" r="1" fill="currentColor"></circle>
        </svg>
      </span>
      <h3>Human–Robot Interaction</h3>
    </article>
    <article class="interest-card">
      <span class="interest-card__icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" focusable="false">
          <path d="M31 14c-6-6-14-2-14 5-6 0-8 8-3 12-5 4-1 12 5 12 0 7 8 10 12 6M33 14c6-6 14-2 14 5 6 0 8 8 3 12 5 4 1 12-5 12 0 7-8 10-12 6M32 12v40"></path>
          <path d="M19 24c4 0 6 3 6 6m-9 8c4-1 8 1 9 5M45 24c-4 0-6 3-6 6m9 8c-4-1-8 1-9 5"></path>
        </svg>
      </span>
      <h3>Robot Learning</h3>
    </article>
  </div>
</section>
