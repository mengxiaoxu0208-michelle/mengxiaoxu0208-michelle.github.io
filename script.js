(() => {
  "use strict";

  const data = window.PORTFOLIO || {};

  const setText = (selector, value) => {
    if (typeof value !== "string" || !value.trim()) return;
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  const externalUrl = (value) => {
    try {
      const url = new URL(value);
      return ["https:", "http:"].includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  };

  setText(".js-display-name", data.displayName);
  setText(".js-name", data.name);
  setText(".js-intro", data.intro);

  if (typeof data.name === "string" && data.name.trim()) {
    document.title = `${data.name} · 影像作品集`;
    document.querySelector(".wordmark").setAttribute("aria-label", `${data.name} · 回到首页`);
  }

  const githubUrl = externalUrl(data.githubUrl);
  if (githubUrl) {
    document.querySelectorAll(".js-github-link").forEach((link) => {
      link.href = githubUrl;
      link.setAttribute("aria-label", `在新标签页打开 ${data.name || "Michelle"} 的 GitHub 主页`);
    });
  }

  const projects = Array.isArray(data.projects)
    ? data.projects.filter((project) => project && typeof project.title === "string" && project.title.trim())
    : [];

  if (projects.length) {
    const list = document.getElementById("project-list");

    projects.forEach((project) => {
      const article = document.createElement("article");
      article.className = "project";

      if (typeof project.thumbnail === "string" && project.thumbnail.trim()) {
        const image = document.createElement("img");
        image.className = "project__image";
        image.src = project.thumbnail;
        image.alt = project.thumbnailAlt || `${project.title}作品封面`;
        image.width = 1280;
        image.height = 720;
        image.loading = "lazy";
        image.decoding = "async";
        article.append(image);
      } else {
        article.classList.add("project--text");
      }

      const body = document.createElement("div");
      const meta = [project.year, project.role].filter(Boolean).join(" · ");
      if (meta) {
        const paragraph = document.createElement("p");
        paragraph.className = "project__meta";
        paragraph.textContent = meta;
        body.append(paragraph);
      }

      const title = document.createElement("h3");
      title.textContent = project.title;
      body.append(title);

      if (project.description) {
        const description = document.createElement("p");
        description.className = "project__description";
        description.textContent = project.description;
        body.append(description);
      }

      const projectUrl = externalUrl(project.url);
      if (projectUrl) {
        const link = document.createElement("a");
        link.className = "project__link";
        link.href = projectUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "观看作品";
        link.setAttribute("aria-label", `观看《${project.title}》（在新标签页打开）`);
        body.append(link);
      }

      article.append(body);
      list.append(article);
    });

    document.getElementById("work-empty").hidden = true;
    list.hidden = false;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    document.documentElement.classList.add("motion-enabled");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  }
})();
