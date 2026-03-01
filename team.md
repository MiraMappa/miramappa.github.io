---
layout: main
title: Team - MiraMappa
additional_css: team
---
<div class="header">
  <h1>our team</h1>
</div>
<section class="members-grid">
  {% assign members_list = site.members | sort: '_id' %}
  {% for member in members_list %}
    <div class="member">
        <div class="member-main">
            <img src="/assets/images{{member.id}}.png" alt="{{member.title}}">
            <div class="member-text">
                <h3>{{member.name}}</h3>
                <p>{{member.description}}</p>
            </div>
        </div>
            <div class="member-links">
                {% for link in member.links %}
                <a class="{{link.type}}" target="_blank" href="{{link.src}}"></a>
                {% endfor %}
            </div>
    </div>
  {% endfor %}
</section>
<section class="team-description">
  <h1>how does our team work</h1>
  <p>MiraMappa is a sort of decentralized creative union where anyone inside the team can collaborate or work by themselves and publish projects under our "brand" to help promote each other.</p>
  <h1>want to join us?</h1>
  <p>Are you an experienced Minecraft content creator? We welcome anyone with decent experience and high-quality works. Our main focus is vanilla mapmaking but other skills are welcome.</p>
  <h1>how to join</h1>
  <p>You can contact us by email. Describe what your skills are, how big is your experience, show us your portfolio.</p>
  <h3>our email:</h3>
  <div class="team-email">miramappa@proton.me</div>
</section>