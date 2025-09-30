export function scrollToSection(target) {
  if (typeof window === "undefined" || !target) return;

  const normalizedId = target.replace(/^#/, "");
  const element = document.getElementById(normalizedId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  window.location.hash = normalizedId;
}
