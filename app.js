const content = document.getElementById("content");

function loadPage() {
  const route = location.hash.slice(1) || "/getStart/introduction";
  const url = `/pages${route}.html`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("404");
      return res.text();
    })
    .then(html => {
      content.innerHTML = html;
      handleAnchor();
      setActiveLink(route);
      window.scrollTo(0, 0);
    })
    .catch(() => {
      content.innerHTML = "<h2>Page not found</h2>";
    });
}

function handleAnchor() {
  const parts = location.hash.split("#");
  if (parts.length > 2) {
    const id = parts[2];
    document.getElementById(id)?.scrollIntoView();
  }
}

function setActiveLink(route) {
  document.querySelectorAll(".sidebar a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${route}`);
  });
}

window.addEventListener("load", loadPage);
window.addEventListener("hashchange", loadPage);
