(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  document.title = data.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && data.meta.description) {
    metaDesc.setAttribute("content", data.meta.description);
  }

  const titleEl = document.querySelector("[data-site-title]");
  if (titleEl) titleEl.textContent = data.site.title;

  const nav = document.querySelector(".nav-list");
  if (nav && data.nav) {
    nav.innerHTML = data.nav
      .map(
        (item) =>
          `<li><a href="${item.href}">${escapeHtml(item.label)}</a></li>`
      )
      .join("");
  }

  setText("[data-hero-eyebrow]", data.hero.eyebrow);
  setText("[data-hero-title]", data.hero.title);
  setText("[data-hero-tagline]", data.hero.tagline);
  setText("[data-hero-highlight]", data.hero.highlight);

  const primary = document.querySelector("[data-hero-primary]");
  const secondary = document.querySelector("[data-hero-secondary]");
  if (primary && data.hero.primaryCta) {
    primary.textContent = data.hero.primaryCta.label;
    primary.href = data.hero.primaryCta.href;
  }
  if (secondary && data.hero.secondaryCta) {
    secondary.textContent = data.hero.secondaryCta.label;
    secondary.href = data.hero.secondaryCta.href;
  }

  setText("[data-about-heading]", data.about.heading);
  const aboutBody = document.querySelector("[data-about-body]");
  if (aboutBody && data.about.paragraphs) {
    aboutBody.innerHTML = data.about.paragraphs
      .map((p) => `<p>${escapeHtml(p)}</p>`)
      .join("");
  }

  setText("[data-skills-heading]", data.skills.heading);
  const skillsList = document.querySelector("[data-skills-list]");
  if (skillsList && data.skills.items) {
    skillsList.innerHTML = data.skills.items
      .map((s) => `<li>${escapeHtml(s)}</li>`)
      .join("");
  }

  setText("[data-projects-heading]", data.projects.heading);
  const projectsEl = document.querySelector("[data-projects]");
  if (projectsEl && data.projects.items) {
    projectsEl.innerHTML = data.projects.items.map(renderProject).join("");
  }

  setText("[data-experience-heading]", data.experience.heading);
  const expEl = document.querySelector("[data-experience]");
  if (expEl && data.experience.items) {
    expEl.innerHTML = data.experience.items.map(renderExperience).join("");
  }

  setText("[data-education-heading]", data.education.heading);
  const eduEl = document.querySelector("[data-education]");
  if (eduEl && data.education.items) {
    eduEl.innerHTML = data.education.items.map(renderEducation).join("");
  }

  setText("[data-contact-heading]", data.contact.heading);
  setText("[data-contact-lead]", data.contact.lead);
  const contactLinks = document.querySelector("[data-contact-links]");
  if (contactLinks && data.contact.links) {
    contactLinks.innerHTML = data.contact.links
      .map(
        (l) =>
          `<li><a href="${escapeAttr(l.href)}" ${
            l.external ? 'rel="noopener noreferrer"' : ""
          }>${escapeHtml(l.label)}</a></li>`
      )
      .join("");
  }

  setText("[data-footer-copy]", data.footer.copy);

  initNav(data.nav);
  initScrollSpy();
})();

function setText(sel, text) {
  const el = document.querySelector(sel);
  if (el && text != null) el.textContent = text;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

function renderProject(p) {
  const tags = (p.tags || [])
    .map((t) => `<span>${escapeHtml(t)}</span>`)
    .join("");
  const links = (p.links || [])
    .map(
      (l) =>
        `<a href="${escapeAttr(l.href)}" rel="noopener noreferrer">${escapeHtml(
          l.label
        )}</a>`
    )
    .join("");
  return `
    <article class="project-card">
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.description)}</p>
      ${tags ? `<div class="project-tags">${tags}</div>` : ""}
      ${links ? `<div class="project-links">${links}</div>` : ""}
    </article>
  `;
}

function renderExperience(item) {
  const bullets = (item.highlights || [])
    .map((b) => `<li>${escapeHtml(b)}</li>`)
    .join("");
  return `
    <li class="timeline-item">
      <div class="timeline-meta">${escapeHtml(item.dates)}</div>
      <div class="timeline-body">
        <h3>${escapeHtml(item.company)}</h3>
        <p class="role">${escapeHtml(item.role)}</p>
        ${bullets ? `<ul>${bullets}</ul>` : ""}
      </div>
    </li>
  `;
}

function renderEducation(item) {
  return `
    <li>
      <strong>${escapeHtml(item.school)}</strong>
      <span>${escapeHtml(item.detail)}</span>
    </li>
  `;
}

function initNav(navItems) {
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.getElementById("site-nav");
  if (toggle && panel) {
    toggle.addEventListener("click", () => {
      const open = !panel.classList.contains("is-open");
      panel.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    panel.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        panel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const ids = (navItems || []).map((n) => n.href.replace("#", "")).filter(Boolean);
  const sections = ids
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function updateCurrent() {
    const y = window.scrollY + 120;
    let current = ids[0];
    for (const sec of sections) {
      if (sec && sec.offsetTop <= y) current = sec.id;
    }
    document.querySelectorAll(".site-nav a").forEach((a) => {
      const match = a.getAttribute("href") === `#${current}`;
      if (match) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  window.addEventListener("scroll", updateCurrent, { passive: true });
  updateCurrent();
}

function initScrollSpy() {
  /* scroll-margin on .section handles offset; nav current set in initNav */
}
