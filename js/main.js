/* =====================================================================
   LÓGICA DEL SITIO — normalmente no necesitas editar este archivo.
   Lee los datos de contenido.js y los pinta en la página.
   ===================================================================== */
(function () {
  const C = window.CONTENIDO;
  if (!C) return;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const iniciales = (t) => String(t).split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join("");

  const p = C.perfil;

  // Encabezado y hero
  document.title = `${p.nombre} — ${p.titulo}`;
    $("heroUbicacion").textContent = p.ubicacion;
  $("heroNombre").textContent = p.nombre;
  $("heroTitulo").textContent = p.titulo;
  $("heroLema").textContent = p.lema;
  $("heroFoto").innerHTML = p.foto
    ? `<img class="avatar" src="${esc(p.foto)}" alt="Foto de ${esc(p.nombre)}">`
    : `<div class="avatar avatar--initials" aria-hidden="true">${esc(iniciales(p.nombre))}</div>`;
  $("heroCifras").innerHTML = (C.heroCifras || []).map((c) => `<div><strong>${esc(c.valor)}</strong><span>${esc(c.etiqueta)}</span></div>`).join("");
  const btnCv = $("btnCv");
  if (p.cv) btnCv.href = p.cv; else btnCv.remove();

  // Sobre mí
  $("sobreMiTexto").innerHTML = (C.sobreMi || []).map((t) => `<p>${esc(t)}</p>`).join("");
  $("cifras").innerHTML = (C.cifras || []).map((c) => `<div class="stat reveal"><strong>${esc(c.valor)}</strong><span>${esc(c.etiqueta)}</span></div>`).join("");

  // Experiencia
  $("timeline").innerHTML = (C.experiencia || []).map((e) => `
    <li class="reveal"><article class="job">
      <div class="job__head">
        <div><h4>${esc(e.puesto)}</h4><div class="job__company">${esc(e.empresa)}</div></div>
        <span class="job__period">${esc(e.periodo)}</span>
      </div>
      ${e.descripcion ? `<p>${esc(e.descripcion)}</p>` : ""}
      ${(e.logros || []).length ? `<ul>${e.logros.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>` : ""}
    </article></li>`).join("");

  $("habilidades").innerHTML = (C.habilidades || []).map((h) => `
    <div class="skill-group"><h5>${esc(h.categoria)}</h5>
      <div class="tags">${h.items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div>
    </div>`).join("");
  $("educacion").innerHTML = (C.educacion || []).map((e) => `<li><strong>${esc(e.titulo)}</strong><span>${esc(e.institucion)} · ${esc(e.periodo)}</span></li>`).join("");
  $("certificaciones").innerHTML = (C.certificaciones || []).map((c) => `<li>${esc(c)}</li>`).join("");

  // Portafolio con filtros
  const proyectos = C.proyectos || [];
  const categorias = ["Todos", ...new Set(proyectos.map((x) => x.categoria).filter(Boolean))];
  const pintarProyectos = (cat) => {
    const lista = cat === "Todos" ? proyectos : proyectos.filter((x) => x.categoria === cat);
    $("proyectos").innerHTML = lista.map((x) => `
      <article class="card${x.destacado ? " card--featured" : ""}">
        <div class="card__media">${x.imagen
          ? `<img src="${esc(x.imagen)}" alt="${esc(x.titulo)}"${x.destacado ? "" : ' loading="lazy"'}>`
          : `<div class="card__placeholder" aria-hidden="true"><span>${esc(x.categoria || iniciales(x.titulo))}</span></div>`}</div>
        <div class="card__body">
          <span class="card__cat">${x.destacado ? '<span class="badge">Destacado</span>' : ""}${esc(x.categoria)}</span>
          <h3>${esc(x.titulo)}</h3>
          <p>${esc(x.descripcion)}</p>
          ${(x.puntos || []).length ? `<ul class="card__points">${x.puntos.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
          <div class="tags">${(x.tecnologias || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          ${x.enlace ? `<a class="card__link" href="${esc(x.enlace)}" target="_blank" rel="noopener">Ver proyecto →</a>` : ""}
        </div>
      </article>`).join("");
  };
  $("filtros").innerHTML = categorias.length > 2
    ? categorias.map((c, i) => `<button class="filter${i === 0 ? " is-active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")
    : "";
  $("filtros").addEventListener("click", (ev) => {
    const b = ev.target.closest(".filter"); if (!b) return;
    document.querySelectorAll(".filter").forEach((f) => f.classList.toggle("is-active", f === b));
    pintarProyectos(b.dataset.cat);
  });
  pintarProyectos("Todos");

  // Certificados
  const certs = C.certificados || [];
  const sello = '<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="32" cy="26" r="14"/><path d="M26 26l4 4 8-8"/><path d="M24 38l-5 18 13-6 13 6-5-18"/></svg>';
  $("certificados-lista").innerHTML = certs.map((c, i) => {
    const anio = (String(c.fecha || "").match(/\d{4}/) || [""])[0];
    const pills = String(c.detalle || "").split("·").map((t) => t.trim()).filter(Boolean);
    return `
    <article class="cert reveal">
      <span class="cert__year">${esc(anio || c.estado || "Completado")}</span>
      <div class="cert__media${c.imagen ? " cert__media--img" : " cert__media--vacio"}"${c.imagen ? ` data-visor="${i}" tabindex="0" role="button" aria-label="Ampliar ${esc(c.titulo)}"` : ""}>
        ${c.imagen ? `<img src="${esc(c.imagen)}" alt="Certificado: ${esc(c.titulo)}" loading="lazy">` : `${sello}<span>${c.estado ? "Certificado disponible al concluir" : "Curso completado"}</span>`}
        ${c.estado && c.imagen ? `<span class="cert__estado">${esc(c.estado)}</span>` : ""}
      </div>
      <div class="cert__body">
        <h3>${esc(c.titulo)}</h3>
        <p class="cert__inst">${esc(c.institucion)}</p>
        <p class="cert__fecha">${esc(c.fecha)}</p>
        ${pills.length ? `<div class="cert__pills">${pills.map((t) => `<span class="cert__pill">${esc(t)}</span>`).join("")}</div>` : ""}
        <div class="cert__links">
          ${c.imagen ? `<button type="button" class="cert__link" data-visor="${i}">Ampliar</button>` : ""}
          ${c.archivo ? `<a class="cert__link" href="${esc(c.archivo)}" target="_blank" rel="noopener">Ver PDF</a>` : ""}
          ${c.credencial ? `<a class="cert__link" href="${esc(c.credencial)}" target="_blank" rel="noopener">Verificar</a>` : ""}
        </div>
      </div>
    </article>`;
  }).join("");
  const visor = $("visor");
  const abrirVisor = (i) => {
    const c = certs[i]; if (!c || !c.imagen) return;
    $("visorImg").src = c.imagen; $("visorImg").alt = `Certificado: ${c.titulo}`;
    $("visorCap").textContent = `${c.titulo} — ${c.institucion}`;
    if (visor.showModal) visor.showModal(); else visor.setAttribute("open", "");
  };
  $("certificados-lista").addEventListener("click", (ev) => { const t = ev.target.closest("[data-visor]"); if (t) abrirVisor(+t.dataset.visor); });
  $("certificados-lista").addEventListener("keydown", (ev) => { if (ev.key === "Enter") { const t = ev.target.closest("[data-visor]"); if (t) abrirVisor(+t.dataset.visor); } });
  const cerrarVisor = () => (visor.close ? visor.close() : visor.removeAttribute("open"));
  $("visorCerrar").addEventListener("click", cerrarVisor);
  visor.addEventListener("click", (ev) => { if (ev.target === visor) cerrarVisor(); });

  // Contacto
  const k = C.contacto || {};
  const items = [
    k.email && ["@", `<a href="mailto:${esc(k.email)}">${esc(k.email)}</a>`],
    k.telefono && ["Tel", `<a href="tel:${esc(k.telefono.replace(/\s/g, ""))}">${esc(k.telefono)}</a>`],
    k.linkedin && ["in", `<a href="${esc(k.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`],
    k.github && ["GH", `<a href="${esc(k.github)}" target="_blank" rel="noopener">GitHub</a>`],
    p.ubicacion && ["📍", `<span>${esc(p.ubicacion)}</span>`],
  ].filter(Boolean);
  $("contactoLista").innerHTML = items.map(([i, h]) => `<li><span class="ico">${i}</span>${h}</li>`).join("");

  $("formContacto").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const f = new FormData(ev.target);
    const asunto = encodeURIComponent(`Contacto desde el sitio web — ${f.get("nombre")}`);
    const cuerpo = encodeURIComponent(`${f.get("mensaje")}\n\n${f.get("nombre")}\n${f.get("correo")}`);
    window.location.href = `mailto:${k.email}?subject=${asunto}&body=${cuerpo}`;
  });

  $("footerTexto").textContent = `© ${new Date().getFullYear()} ${p.nombre}. Todos los derechos reservados.`;

  // Menú móvil
  const nav = $("nav"), menuBtn = $("menuBtn");
  menuBtn.addEventListener("click", () => {
    const abierto = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", abierto);
  });
  nav.addEventListener("click", (ev) => { if (ev.target.tagName === "A") nav.classList.remove("is-open"); });

  // Sombra en la barra + enlace activo
  const topbar = $("topbar");
  const enlaces = [...nav.querySelectorAll("a")];
  const secciones = enlaces.map((a) => document.querySelector(a.getAttribute("href")));
  const alHacerScroll = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 10);
    let actual = -1;
    secciones.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 120) actual = i; });
    enlaces.forEach((a, i) => a.classList.toggle("is-active", i === actual));
  };
  window.addEventListener("scroll", alHacerScroll, { passive: true });
  alHacerScroll();

  // Animación al aparecer
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entradas) => entradas.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }
})();
