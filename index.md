---
layout: default
title:MUPPO Blog
---

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-item">
      <span class="post-item-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <a class="post-item-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
