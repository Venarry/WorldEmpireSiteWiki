import { articles, articleById, balance, sections, unitFactions, searchIndex, normalize } from './content.js';

const $ = selector => document.querySelector(selector);
const content = $('#content');
const search = $('#search');
const esc = text => String(text).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const paths = {
  home: '<path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7"/>',
  book: '<path d="M12 5v16M3 3c4-1 7 0 9 2 2-2 5-3 9-2v16c-4-1-7 0-9 2-2-2-5-3-9-2z"/>',
  swords: '<path d="m4 3 13 13m0-13L4 16M3 13l7 7m4-7 7 7M3 3l1 5 4-4zm18 0-1 5-4-4zM3 21l4-4m14 4-4-4"/>',
  coin: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 9v6"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zm6-3v15m6-12v15"/>',
  people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-4a6 6 0 0 1 12 0v4M16 4a3 3 0 0 1 0 6m2 3c3 0 4 2 4 4v4"/>',
  flag: '<path d="M5 21V3m0 1c5-4 9 4 15 0v10c-6 4-10-4-15 0"/>',
  ship: '<path d="M12 3v12m-1-11L5 13h6m3-6 5 6h-5M3 16h18l-4 5H7z"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
};
function icon(name, className = '') { return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.book}</svg>`; }
function image(name, className = '', alt = '') { return `<img class="pixel ${className}" src="./assets/${esc(name)}.png" alt="${esc(alt)}" loading="lazy" decoding="async">`; }
const articleLink = (id, label) => `<a href="#/article/${esc(id)}">${esc(label || articleById.get(id)?.title || id)}</a>`;
function setMenu(open, returnFocus = false) {
  const wasOpen = document.body.classList.contains('menu-open');
  document.body.classList.toggle('menu-open', open);
  $('#sidebar').inert = !open && matchMedia('(max-width: 760px)').matches;
  $('#menu-toggle').setAttribute('aria-expanded', String(open));
  $('#scrim').hidden = !open;
  if (open) $('#menu-close').focus();
  else if (returnFocus && wasOpen) $('#menu-toggle').focus();
}
function renderNav(active) {
  $('#navigation').innerHTML = [{ id: '', title: 'Главная', icon: 'home' }, ...sections].map(s => `<a href="#/${s.id}" ${active === s.id ? 'aria-current="page"' : ''}>${icon(s.icon)}<span>${s.title}</span></a>`).join('');
}
function heading(title, description, parent = '') {
  return `<div class="breadcrumbs"><a href="#/">Энциклопедия</a><span>/</span>${esc(parent || title)}</div><header class="page-heading"><h1>${esc(title)}</h1><p>${esc(description)}</p></header>`;
}
function home() {
  content.innerHTML = `<section class="hero">
    <div class="hero-copy"><h1>Атлас вашей<br> <em>империи</em></h1><p>Всё о развитии поселения, сухопутных сражениях и морских переправах.</p><a class="primary-button" href="#/article/first-steps">С чего начать ${icon('arrow')}</a></div>
    <figure class="hero-art">${image('settlement', '', 'Поселение WorldEmpire: главное здание, дома, фермы и транспорт у берега')}<figcaption><span class="coordinate">МИР WORLDEMPIRE</span><span>Каждая империя начинается с поселения</span></figcaption></figure>
  </section>
  <section class="explore" aria-labelledby="explore-heading"><div class="section-heading"><h2 id="explore-heading">Изучайте WorldEmpire</h2><span>Ваш путеводитель по игре</span></div><div class="chapter-grid">${sections.slice(0, 6).map((s, i) => `<a class="chapter" href="#/${s.id}"><span class="chapter-number">0${i + 1}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.subtitle)}</p></div>${icon('arrow')}</a>`).join('')}</div></section>
  <section class="faction-section"><div class="section-heading"><h2>Выберите свой путь</h2><a href="#/factions">Все фракции ${icon('arrow')}</a></div><div class="faction-strip">${Object.entries(balance.factions).map(([id, f]) => `<a href="#/article/faction-${id}"><span class="faction-mark ${id}" aria-hidden="true">${icon(({human:'people',commune:'flag',league:'coin',order:'swords',waterman:'ship'})[id])}</span><span>${esc(f.short)}<small>${({human:'Универсальная армия',commune:'Сила численности',league:'Сила торговли',order:'Сила стали',waterman:'Сила моря'})[id]}</small></span></a>`).join('')}</div></section>
  <a class="tutorial-banner" href="#/article/tutorial">${image('unit-swordsman')}<div><span>Первые шаги вместе с Мироном</span><h2>Первая переправа</h2><p>Освойте основы в короткой учебной миссии.</p></div><span class="tutorial-action">О миссии ${icon('arrow')}</span></a>`;
}
function preview(article) {
  return `<a class="entry-row" href="#/article/${esc(article.id)}">${article.image ? image(article.image, article.section === 'maps' ? 'map-thumb' : 'entry-art') : `<span class="entry-symbol">${icon(sections.find(s => s.id === article.section).icon)}</span>`}<div><h2>${esc(article.title)}</h2><p>${esc(article.description)}</p></div>${icon('arrow', 'entry-arrow')}</a>`;
}
function catalog(sectionId) {
  const section = sections.find(s => s.id === sectionId);
  content.innerHTML = heading(section.title, section.subtitle) + (sectionId === 'units' ? `<div class="filters"><label>Фракция<select id="faction-filter"><option value="all">Все фракции</option>${Object.entries(balance.factions).map(([id, f]) => `<option value="${id}">${esc(f.short)}</option>`).join('')}</select></label><label>Тип юнита<select id="type-filter"><option value="all">Суша и флот</option><option value="land">Сухопутные</option><option value="sea">Флот</option></select></label><p class="result-count" id="filter-count" role="status"></p></div>` : '') + '<div class="entry-list" id="entries"></div>';
  const update = () => {
    const faction = $('#faction-filter')?.value || 'all';
    const type = $('#type-filter')?.value || 'all';
    const filtered = articles.filter(a => a.section === sectionId && (sectionId !== 'units' || (a.kind ? (faction === 'all' || unitFactions(a.kind).includes(faction)) && (type === 'all' || Boolean(balance.units[a.kind].naval) === (type === 'sea')) : faction === 'all' && type === 'all')));
    $('#entries').innerHTML = filtered.length ? filtered.map(preview).join('') : '<p class="empty">Ничего не найдено. Попробуйте другие фильтры.</p>';
    if ($('#filter-count')) $('#filter-count').textContent = `Материалов: ${filtered.length}`;
  };
  $('#faction-filter')?.addEventListener('change', update);
  $('#type-filter')?.addEventListener('change', update);
  update();
}
function renderBlock(b, index) {
  return `<section class="article-section" id="part-${index}"><h2>${esc(b.title)}</h2>${(b.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join('')}${b.list ? `<ul>${b.list.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}${b.table ? `<div class="table-scroll" role="region" aria-label="${esc(b.title)}" tabindex="0"><table><thead><tr>${b.table.headings.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(row => `<tr>${row.map((cell, i) => i === 0 ? `<th scope="row">${esc(cell)}</th>` : `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}</section>`;
}
function articlePage(article) {
  const section = sections.find(s => s.id === article.section);
  content.innerHTML = `<div class="breadcrumbs"><a href="#/">Энциклопедия</a><span>/</span><a href="#/${section.id}">${esc(section.title)}</a></div><div class="article-layout"><article><header class="page-heading article-heading">${article.image ? image(article.image, article.section === 'maps' ? 'article-map' : 'article-portrait') : ''}<h1>${esc(article.title)}</h1><p>${esc(article.description)}</p></header>${article.blocks.map(renderBlock).join('')}<section class="related"><h2>Читайте также</h2><div>${(article.related || []).filter(id => articleById.has(id)).map(id => articleLink(id)).join('')}</div></section></article><aside class="article-aside" aria-label="В этой статье"><span>В ЭТОЙ СТАТЬЕ</span>${article.blocks.map((b, i) => `<a href="#/article/${esc(article.id)}?part=${i}">${esc(b.title)}</a>`).join('')}<a class="back-to-section" href="#/${section.id}">${icon('arrow')} ${esc(section.title)}</a></aside></div>`;
}
function results(query) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const found = terms.length ? searchIndex.filter(item => terms.every(term => item.text.includes(term))).sort((a, b) => Number(normalize(b.article.title).includes(normalize(query))) - Number(normalize(a.article.title).includes(normalize(query)))) : [];
  content.innerHTML = heading('Поиск по энциклопедии', query ? `Результаты для «${query}»` : 'Введите название юнита, здания или игровой механики.') + (query ? `<p class="search-count" role="status">Найдено материалов: ${found.length}</p>${found.length ? `<div class="entry-list">${found.map(({article}) => preview(article)).join('')}</div>` : `<div class="empty">${icon('search')}<h2>Ничего не найдено</h2><p>Попробуйте другое слово: например, «порт», «еда» или «корабль».</p></div>`}` : '');
}
function route({ focus = true } = {}) {
  const raw = location.hash.slice(1) || '/';
  const [pathname, params] = raw.split('?');
  const query = new URLSearchParams(params);
  const parts = pathname.split('/').filter(Boolean);
  const article = parts[0] === 'article' ? articleById.get(parts[1]) : undefined;
  const active = article ? article.section : parts[0] || '';
  renderNav(active);
  setMenu(false);
  if (!parts.length) home();
  else if (parts[0] === 'search') results(query.get('q') || '');
  else if (article) articlePage(article);
  else if (sections.some(s => s.id === parts[0])) catalog(parts[0]);
  else content.innerHTML = heading('Страница не найдена', 'Возможно, адрес изменился.') + '<a class="primary-button" href="#/">На главную</a>';
  if (parts[0] === 'search') search.value = query.get('q') || '';
  else search.value = '';
  document.title = `${article?.title || sections.find(s => s.id === active)?.title || (active === 'search' ? 'Поиск' : 'Атлас вашей империи')} — WorldEmpire Wiki`;
  const part = query.get('part');
  const target = article && part !== null && /^\d+$/.test(part) ? document.getElementById(`part-${part}`) : null;
  if (focus) {
    content.focus({ preventScroll: true });
    if (!target) window.scrollTo({ top: 0, behavior: 'instant' });
  }
  if (target) target.scrollIntoView({ block: 'start' });
}
$('#search-icon').innerHTML = icon('search');
$('.skip-link').addEventListener('click', event => { event.preventDefault(); content.focus(); });
$('#menu-toggle').innerHTML = icon('menu');
$('#menu-toggle').addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
$('#menu-close').addEventListener('click', () => setMenu(false, true));
$('#scrim').addEventListener('click', () => setMenu(false, true));
$('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  const hash = '#/search?q=' + encodeURIComponent(search.value.trim());
  if (location.hash === hash) route(); else location.hash = hash;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenu(false, true);
  if (document.body.classList.contains('menu-open') && event.key === 'Tab' && matchMedia('(max-width: 760px)').matches) {
    const controls = [...$('#sidebar').querySelectorAll('a, button')];
    const first = controls[0], last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); }
});
matchMedia('(max-width: 760px)').addEventListener('change', () => setMenu(false));
window.addEventListener('hashchange', () => route());
route({ focus: false });
