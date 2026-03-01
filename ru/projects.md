---
layout: main_ru
title: Проекты - MiraMappa
additional_css: projects
---
<div class="header">
  <h1>наши проекты</h1>
</div>
<section class="projects-grid">
  {% assign projects_list = site.ru_projects | sort: 'update_date' | reverse %}
  {% for project in projects_list %}
    <a href="{{project.id}}">
    <div class="project">
      {% assign id_len = project.id | size %}
      <img src="/assets/images{{project.id | slice: 3, id_len}}/thumbnail.png" alt="{{project.title}}">
      <div class="project-text">
        <h3>{{project.title}}</h3>
        <div class="project-tags">
          <div>{{project.year}}</div> <div>{{project.mc_version}}</div>
        </div>
        <p>{{project.description}}</p>
      </div>
    </div>
    </a>
  {% endfor %}
</section>