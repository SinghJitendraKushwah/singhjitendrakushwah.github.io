(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // Track state: 'all' | 'backend' | 'mobile' | 'mern'
  let currentTrack = getInitialTrack();
  let currentProjectFilter = currentTrack;

  // Initialize UI
  initNav();
  initResumeDropdown();
  initTrackSwitcher();
  initProjectFilters();
  initDomainCardClickers();
  applyTrack(currentTrack, false);

  function getInitialTrack() {
    const params = new URLSearchParams(window.location.search);
    const trackParam = (params.get("track") || "").toLowerCase();
    if (trackParam === "backend" || trackParam === "mobile" || trackParam === "react-native") {
      return trackParam === "react-native" ? "mobile" : trackParam;
    }
    if (trackParam === "mern" || trackParam === "fullstack") {
      return "mern";
    }
    return "all";
  }

  function applyTrack(trackId, updateUrl = true) {
    if (!data.tracks[trackId]) trackId = "all";
    currentTrack = trackId;
    currentProjectFilter = trackId;

    const trackData = data.tracks[trackId];

    // 1. Update Title and Meta
    if (trackId === "all") {
      document.title = data.meta.title;
    } else {
      document.title = `${data.site.title} — ${trackData.title} | Portfolio`;
    }

    // 2. Update Hero Elements
    setText("[data-hero-badge]", trackData.badge);
    setText("[data-hero-subtitle]", trackData.subtitle);
    setText("[data-hero-tagline]", trackData.tagline);
    setText("[data-hero-highlight]", trackData.highlight);

    const resumeBtn = document.getElementById("heroResumeBtn");
    const resumeLabel = document.getElementById("heroResumeLabel");
    if (resumeBtn && resumeLabel) {
      resumeBtn.href = trackData.resumePdf;
      resumeLabel.textContent = trackData.resumeLabel;
    }

    // 3. Update Track Switcher Active Pill
    document.querySelectorAll(".track-pill").forEach((pill) => {
      const pTrack = pill.getAttribute("data-track");
      const isActive = pTrack === trackId;
      pill.classList.toggle("active", isActive);
      pill.setAttribute("aria-selected", String(isActive));
    });

    // 4. Update Domain Cards Active Highlight
    document.querySelectorAll(".spec-card").forEach((card) => {
      const spec = card.getAttribute("data-spec");
      card.classList.toggle("active-spec", spec === trackId);
    });

    // 5. Render Skills for Current Track
    renderSkills(trackData.skillsCategory);

    // 6. Update Project Filter Bar & Render Projects
    updateProjectFilterPills(trackId);
    renderProjects(trackId);

    // 7. Render Experience Timeline
    renderExperience(trackId);

    // 8. Update URL Query Param (cleanly without page reload)
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (trackId === "all") {
        url.searchParams.delete("track");
      } else {
        url.searchParams.set("track", trackId);
      }
      window.history.replaceState({ track: trackId }, "", url.toString());
    }
  }

  function renderSkills(categories) {
    const container = document.getElementById("skillsContainer");
    if (!container) return;

    if (!categories || categories.length === 0) {
      container.innerHTML = "";
      return;
    }

    container.innerHTML = categories
      .map(
        (cat) => `
        <div class="skill-category-card">
          <h3 class="skill-category-title">${escapeHtml(cat.name)}</h3>
          <ul class="skill-tag-list">
            ${cat.skills.map((s) => `<li class="skill-tag">${escapeHtml(s)}</li>`).join("")}
          </ul>
        </div>
      `
      )
      .join("");
  }

  function renderProjects(filter) {
    const container = document.getElementById("projectsGrid");
    if (!container) return;

    let list = data.projects;
    if (filter && filter !== "all") {
      list = data.projects.filter((p) => p.category.includes(filter));
    }

    if (list.length === 0) {
      container.innerHTML = `<p class="no-projects">No projects found for this category.</p>`;
      return;
    }

    container.innerHTML = list
      .map((p) => {
        const isFeatured = p.featured;
        const highlightsHtml = (p.highlights || [])
          .map((h) => `<li>${escapeHtml(h)}</li>`)
          .join("");
        const tagsHtml = (p.tags || [])
          .map((t) => `<span class="proj-badge">${escapeHtml(t)}</span>`)
          .join("");

        return `
          <article class="project-card ${isFeatured ? "featured-card" : ""}" data-category="${p.category.join(" ")}">
            <div class="project-card-header">
              ${isFeatured ? `<span class="featured-badge">Key Production Project</span>` : ""}
              <h3 class="project-title">${escapeHtml(p.title)}</h3>
              <p class="project-tagline">${escapeHtml(p.tagline)}</p>
            </div>
            <p class="project-desc">${escapeHtml(p.description)}</p>
            ${highlightsHtml ? `<ul class="project-highlights">${highlightsHtml}</ul>` : ""}
            <div class="project-tags-wrap">${tagsHtml}</div>
          </article>
        `;
      })
      .join("");
  }

  function renderExperience(trackId) {
    const container = document.getElementById("experienceTimeline");
    if (!container || !data.experience) return;

    const exp = data.experience[0];
    if (!exp) return;

    container.innerHTML = `
      <div class="company-card">
        <div class="company-header">
          <div>
            <h3 class="company-name">${escapeHtml(exp.company)}</h3>
            <p class="company-meta">${escapeHtml(exp.location)} • <span class="tenure-badge">${escapeHtml(exp.period)}</span></p>
          </div>
          <span class="company-growth-tag">5 Years Continuous Progression</span>
        </div>
        <p class="company-overview">${escapeHtml(exp.overview)}</p>

        <div class="roles-flow">
          ${exp.roles
            .map(
              (r) => `
            <div class="role-node">
              <div class="role-marker"></div>
              <div class="role-content">
                <div class="role-header-line">
                  <h4 class="role-title">${escapeHtml(r.title)}</h4>
                  <span class="role-period">${escapeHtml(r.period)}</span>
                </div>
                <p class="role-focus">${escapeHtml(r.focus)}</p>
                <ul class="role-bullets">
                  ${r.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
                </ul>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function initTrackSwitcher() {
    document.querySelectorAll(".track-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const track = pill.getAttribute("data-track");
        applyTrack(track, true);
      });
    });
  }

  function initDomainCardClickers() {
    document.querySelectorAll("[data-switch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const track = btn.getAttribute("data-switch");
        applyTrack(track, true);
        const topEl = document.getElementById("top");
        if (topEl) topEl.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  function initProjectFilters() {
    const pills = document.querySelectorAll("#projectFilterPills .filter-pill");
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const filter = pill.getAttribute("data-filter");
        currentProjectFilter = filter;
        updateProjectFilterPills(filter);
        renderProjects(filter);
      });
    });
  }

  function updateProjectFilterPills(activeFilter) {
    document.querySelectorAll("#projectFilterPills .filter-pill").forEach((p) => {
      const f = p.getAttribute("data-filter");
      p.classList.toggle("active", f === activeFilter);
    });
  }

  function initResumeDropdown() {
    const btn = document.getElementById("resumeDropdownBtn");
    const menu = document.getElementById("resumeDropdownMenu");
    if (!btn || !menu) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains("show");
      menu.classList.toggle("show", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = !nav.classList.contains("is-open");
        nav.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
      });

      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // ScrollSpy
    const sections = ["top", "specializations", "skills", "projects", "experience", "education", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY + 140;
        let current = "top";
        for (const sec of sections) {
          if (sec && sec.offsetTop <= y) current = sec.id;
        }
        document.querySelectorAll(".site-nav a").forEach((a) => {
          const match = a.getAttribute("href") === `#${current}`;
          if (match) a.setAttribute("aria-current", "page");
          else a.removeAttribute("aria-current");
        });
      },
      { passive: true }
    );
  }

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
})();
