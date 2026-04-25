const THEME_KEY = "clean-code-theme";

function setTheme(theme) {
  if (theme === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
  localStorage.setItem(THEME_KEY, theme);
}

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function $(id) {
  return document.getElementById(id);
}

function setCopyHint(message, isError = false) {
  const hint = $("copyHint");
  if (!hint) return;
  hint.textContent = message;
  hint.style.color = isError ? "var(--danger)" : "";
}

function collectChecklistText() {
  const items = [
    "Naming: functions/variables say what they mean (no guessing).",
    "Size: functions are small, focused, and easy to test.",
    "Duplication: repeated logic is extracted or centralized.",
    "Flow: guard clauses reduce nesting; happy path is obvious.",
    "Boundaries: inputs are validated at the edges; errors are explicit.",
    "Tests: critical behavior is covered with readable tests.",
  ];

  return ["Clean Code Checklist", "", ...items.map((x) => `- ${x}`), ""].join("\n");
}

function wireThemeToggle() {
  const button = $("themeToggle");
  if (!button) return;

  const current = getInitialTheme();
  setTheme(current);

  const updateLabel = () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    button.textContent = isLight ? "Dark mode" : "Light mode";
    button.setAttribute("aria-pressed", String(isLight));
  };

  updateLabel();

  button.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
    updateLabel();
  });
}

function wireMobileNav() {
  const toggle = $("navToggle");
  const menu = $("navMenu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  menu.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement) setOpen(false);
  });

  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Node)) return;
    const clickInside = toggle.contains(e.target) || menu.contains(e.target);
    if (!clickInside) setOpen(false);
  });
}

function wireExampleToggles() {
  const buttons = document.querySelectorAll("button[data-example][data-view]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const example = btn.getAttribute("data-example");
      const view = btn.getAttribute("data-view");
      if (!example || !view) return;

      document
        .querySelectorAll(`button[data-example="${example}"][data-view]`)
        .forEach((b) => b.classList.toggle("is-active", b === btn));

      document
        .querySelectorAll(`.code[data-example="${example}"][data-view]`)
        .forEach((panel) => panel.classList.toggle("is-hidden", panel.getAttribute("data-view") !== view));
    });
  });
}

function wireCopyChecklist() {
  const button = $("copyChecklist");
  if (!button) return;

  button.addEventListener("click", async () => {
    const text = collectChecklistText();
    try {
      await navigator.clipboard.writeText(text);
      setCopyHint("Copied.");
      window.setTimeout(() => setCopyHint(""), 1400);
    } catch {
      // Clipboard can be blocked when opening as a file:// URL in some browsers.
      setCopyHint("Copy failed in this browser. Try running a local server.", true);
    }
  });
}

wireThemeToggle();
wireMobileNav();
wireExampleToggles();
wireCopyChecklist();

const THEME_KEY = "clean-code-theme";

function setTheme(theme) {
  if (theme === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
  localStorage.setItem(THEME_KEY, theme);
}

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function $(id) {
  return document.getElementById(id);
}

function setCopyHint(message, isError = false) {
  const hint = $("copyHint");
  if (!hint) return;
  hint.textContent = message;
  hint.style.color = isError ? "var(--danger)" : "";
}

function collectChecklistText() {
  const items = [
    "Naming: functions/variables say what they mean (no guessing).",
    "Size: functions are small, focused, and easy to test.",
    "Duplication: repeated logic is extracted or centralized.",
    "Flow: guard clauses reduce nesting; happy path is obvious.",
    "Boundaries: inputs are validated at the edges; errors are explicit.",
    "Tests: critical behavior is covered with readable tests.",
  ];

  return ["Clean Code Checklist", "", ...items.map((x) => `- ${x}`), ""].join("\n");
}

function wireThemeToggle() {
  const button = $("themeToggle");
  if (!button) return;

  const current = getInitialTheme();
  setTheme(current);

  const updateLabel = () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    button.textContent = isLight ? "Dark mode" : "Light mode";
    button.setAttribute("aria-pressed", String(isLight));
  };

  updateLabel();

  button.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
    updateLabel();
  });
}

function wireMobileNav() {
  const toggle = $("navToggle");
  const menu = $("navMenu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  menu.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement) setOpen(false);
  });

  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Node)) return;
    const clickInside = toggle.contains(e.target) || menu.contains(e.target);
    if (!clickInside) setOpen(false);
  });
}

function wireExampleToggles() {
  const buttons = document.querySelectorAll("button[data-example][data-view]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const example = btn.getAttribute("data-example");
      const view = btn.getAttribute("data-view");
      if (!example || !view) return;

      document
        .querySelectorAll(`button[data-example="${example}"][data-view]`)
        .forEach((b) => b.classList.toggle("is-active", b === btn));

      document
        .querySelectorAll(`.code[data-example="${example}"][data-view]`)
        .forEach((panel) => panel.classList.toggle("is-hidden", panel.getAttribute("data-view") !== view));
    });
  });
}

function wireCopyChecklist() {
  const button = $("copyChecklist");
  if (!button) return;

  button.addEventListener("click", async () => {
    const text = collectChecklistText();
    try {
      await navigator.clipboard.writeText(text);
      setCopyHint("Copied.");
      window.setTimeout(() => setCopyHint(""), 1400);
    } catch {
      // Clipboard can be blocked when opening as a file:// URL in some browsers.
      setCopyHint("Copy failed in this browser. Try running a local server.", true);
    }
  });
}

wireThemeToggle();
wireMobileNav();
wireExampleToggles();
wireCopyChecklist();

