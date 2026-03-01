---
layout: main_ru
title: Команда - MiraMappa
description: Команда, стоящая за проектами MiraMappa
additional_css: team
---
<div class="header">
  <h1>наша команда</h1>
</div>
<section class="members-grid">
  {% assign members_list = site.members | sort: '_id' %}
  {% for member in members_list %}
    <div class="member">
        <div class="member-main">
            <img src="/assets/images{{member.id}}.png" alt="{{member.title}}">
            <div class="member-text">
                <h3>{{member.name}}</h3>
                <p>{{member.description_ru}}</p>
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
  <h1>как устроена наша команда</h1>
  <p>MiraMappa — это своего рода децентрализованный творческий союз, где каждый участник команды может работать совместно с другими или самостоятельно, публикуя проекты под нашим «брендом» для взаимного продвижения.</p>
  <h1>хотите к нам присоединиться?</h1>
  <p>Вы опытный мейкер контента в Minecraft? Мы рады всем, кто обладает достойным опытом и создает качественные работы. Наше основное направление — ванильные карты, но мы приветствуем и другие скиллы.</p>
  <h1>как присоединиться</h1>
  <p>Вы можете связаться с нами по электронной почте. Опишите свои навыки, расскажите о своем опыте и покажите ваше портфолио.</p>
  <h3>наш email:</h3>
  <div class="team-email">miramappa@proton.me</div>
  <p style="color: #ff8080;">Внимание: письма на Proton Mail с российских почтовых сервисов (Mail.ru, Yandex и т.д.) не доставляются</p>
</section>