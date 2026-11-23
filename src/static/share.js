// Social sharing buttons for activity cards.
// To add or remove a sharing site, edit the SHARE_SITES list below.

const SHARE_SITES = [
  {
    label: "Facebook",
    icon: "f",
    makeUrl: (text, link) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
  },
  {
    label: "X (Twitter)",
    icon: "𝕏",
    makeUrl: (text, link) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(link)}`,
  },
  {
    label: "WhatsApp",
    icon: "💬",
    makeUrl: (text, link) =>
      `https://wa.me/?text=${encodeURIComponent(text + " " + link)}`,
  },
  {
    label: "Email",
    icon: "✉",
    makeUrl: (text, link, activityName) =>
      `mailto:?subject=${encodeURIComponent(
        activityName + " at Mergington High School"
      )}&body=${encodeURIComponent(text + "\n\n" + link)}`,
  },
];

// Builds the row of share buttons for one activity.
function createShareButtons(activityName, details) {
  const link = window.location.origin + window.location.pathname;
  const text = `Check out ${activityName} at Mergington High School! ${details.description}`;

  const container = document.createElement("div");
  container.className = "share-buttons";

  const title = document.createElement("span");
  title.className = "share-title";
  title.textContent = "Share:";
  container.appendChild(title);

  SHARE_SITES.forEach((site) => {
    const button = document.createElement("a");
    button.className = "share-button";
    button.href = site.makeUrl(text, link, activityName);
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.title = `Share on ${site.label}`;
    button.setAttribute("aria-label", `Share ${activityName} on ${site.label}`);
    button.textContent = site.icon;
    container.appendChild(button);
  });

  // "Copy link" button for sharing anywhere else
  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "share-button";
  copyButton.title = "Copy link";
  copyButton.setAttribute("aria-label", `Copy link to ${activityName}`);
  copyButton.textContent = "🔗";
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(`${text} ${link}`);
      copyButton.textContent = "✔";
    } catch (error) {
      copyButton.textContent = "✖";
    }
    setTimeout(() => {
      copyButton.textContent = "🔗";
    }, 1500);
  });
  container.appendChild(copyButton);

  return container;
}
