try {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.dataset.theme = "dark";
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = "#0b1018";
  }
} catch {
  // O tema claro é o padrão quando o armazenamento está indisponível.
}
