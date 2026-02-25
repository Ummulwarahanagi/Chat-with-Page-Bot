export function extractPageContent() {
  const element = document.getElementById("mainContent");
  if (!element) return "";

  return element.innerText
    .replace(/\s+/g, " ")
    .trim();
}