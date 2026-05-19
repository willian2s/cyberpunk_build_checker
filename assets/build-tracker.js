const STORAGE_KEY = "cyberpunk-netrunner-checklist-v1";
const categories = window.NETRUNNER_CATEGORIES;

let state = loadState();
let currentCategory = "all";
let onlyPending = false;

const allItems = () => categories.flatMap(category =>
  category.items.map(item => ({ ...item, categoryId: category.id, categoryTitle: category.title }))
);

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { checked: {}, updatedAt: null };
  } catch {
    return { checked: {}, updatedAt: null };
  }
}

function saveState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isDone(id) {
  return Boolean(state.checked[id]);
}

function setDone(id, done) {
  state.checked[id] = done;
  saveState();
  render();
}

function getVisibleItems(category) {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  return category.items.filter(item => {
    const text = [category.title, item.name, item.note || "", ...(item.tags || [])].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesPending = !onlyPending || !isDone(item.id);
    return matchesQuery && matchesPending;
  });
}

function categoryProgress(category) {
  const total = category.items.length;
  const done = category.items.filter(item => isDone(item.id)).length;
  return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
}

function renderTabs() {
  const tabs = document.getElementById("tabs");
  const total = allItems().length;
  const done = allItems().filter(item => isDone(item.id)).length;
  const rows = [{ id: "all", title: "Tudo", done, total }, ...categories.map(category => ({ id: category.id, title: category.title, ...categoryProgress(category) }))];

  tabs.innerHTML = rows.map(row => `
    <button class="tab ${currentCategory === row.id ? "active" : ""}" type="button" data-tab="${row.id}">
      <span>${escapeHtml(row.title)}</span>
      <small>${row.done}/${row.total}</small>
    </button>
  `).join("");

  tabs.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.tab;
      render();
    });
  });
}

function renderContent() {
  const content = document.getElementById("content");
  const visibleCategories = currentCategory === "all" ? categories : categories.filter(category => category.id === currentCategory);

  content.innerHTML = visibleCategories.map(category => {
    const items = getVisibleItems(category);
    const progress = categoryProgress(category);
    return `
      <article class="panel">
        <div class="panel-header">
          <div>
            <h2>${escapeHtml(category.title)}</h2>
            <p>${escapeHtml(category.description)}</p>
          </div>
          <div class="tag priority">${progress.done}/${progress.total} · ${progress.percent}%</div>
        </div>
        <div class="item-list">
          ${items.length ? items.map(itemTemplate).join("") : `<div class="empty">Nenhum item encontrado nesta categoria.</div>`}
        </div>
      </article>
    `;
  }).join("");

  content.querySelectorAll("input[type='checkbox']").forEach(input => {
    input.addEventListener("change", event => setDone(event.target.dataset.id, event.target.checked));
  });
}

function itemTemplate(item) {
  const done = isDone(item.id);
  return `
    <label class="item ${done ? "done" : ""}">
      <input type="checkbox" data-id="${item.id}" ${done ? "checked" : ""} />
      <span>
        <span class="item-title">${escapeHtml(item.name)}</span>
        <span class="item-meta">
          ${(item.tags || []).map(tag => `<span class="tag ${tag.toLowerCase().includes("prioridade") ? "priority" : tag.toLowerCase().includes("opcional") || tag.toLowerCase().includes("alternativa") ? "optional" : ""}">${escapeHtml(tag)}</span>`).join("")}
        </span>
        ${item.note ? `<span class="item-note">${escapeHtml(item.note)}</span>` : ""}
      </span>
      <span class="tag">${done ? "feito" : "pendente"}</span>
    </label>
  `;
}

function renderStats() {
  const items = allItems();
  const total = items.length;
  const done = items.filter(item => isDone(item.id)).length;
  const pending = total - done;
  const percent = total ? Math.round((done / total) * 100) : 0;

  document.getElementById("totalDone").textContent = `${done}/${total}`;
  document.getElementById("percentDone").textContent = `${percent}%`;
  document.getElementById("pendingCount").textContent = pending;
  document.getElementById("progressBar").style.width = `${percent}%`;
  document.getElementById("togglePendingBtn").textContent = onlyPending ? "Mostrar todos" : "Mostrar pendentes";
}

function render() {
  renderStats();
  renderTabs();
  renderContent();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;"
  }[char]));
}

function exportProgress() {
  const payload = {
    app: "cyberpunk-netrunner-checklist",
    version: 1,
    exportedAt: new Date().toISOString(),
    state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cyberpunk-netrunner-progress.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importProgress(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const importedState = payload.state || payload;
      if (!importedState.checked || typeof importedState.checked !== "object") {
        throw new Error("Arquivo inválido.");
      }
      state = { checked: importedState.checked, updatedAt: new Date().toISOString() };
      saveState();
      render();
      alert("Progresso importado com sucesso.");
    } catch {
      alert("Não foi possível importar este arquivo JSON.");
    }
  };
  reader.readAsText(file);
}

document.getElementById("searchInput").addEventListener("input", render);
document.getElementById("togglePendingBtn").addEventListener("click", () => {
  onlyPending = !onlyPending;
  render();
});
document.getElementById("exportBtn").addEventListener("click", exportProgress);
document.getElementById("importInput").addEventListener("change", event => {
  const file = event.target.files && event.target.files[0];
  if (file) importProgress(file);
  event.target.value = "";
});
document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("Resetar todo o progresso desta build?")) {
    state = { checked: {}, updatedAt: new Date().toISOString() };
    saveState();
    render();
  }
});

render();
