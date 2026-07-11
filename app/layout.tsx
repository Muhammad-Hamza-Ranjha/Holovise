import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Holovise",
  description: "Comprehensive software solutions for modern companies.",
};

const hydrationFallbackScript = `
(function () {
  function setTheme(nextTheme) {
    var root = document.documentElement;
    root.classList.toggle('dark', nextTheme === 'dark');
    root.classList.toggle('light', nextTheme === 'light');
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (_) {}
  }

  function currentTheme() {
    return document.documentElement.classList.contains('light') ? 'light' : 'dark';
  }

  var tabMotion = {
    dark: {
      development: { left: 18.5, width: 195 },
      product: { left: 192.5, width: 195 },
      collaborative: { left: 414, width: 221 }
    },
    light: {
      development: { left: 10.5, width: 195 },
      product: { left: 192.5, width: 195 },
      collaborative: { left: 419, width: 221 }
    }
  };

  document.addEventListener('click', function (event) {
    var tab = event.target && event.target.closest && event.target.closest('[data-service-tab]');
    if (!tab) return;

    var root = tab.closest('[data-home-services-tabs]');
    if (!root) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    var key = tab.getAttribute('data-service-tab');
    var theme = root.getAttribute('data-services-theme') || 'dark';
    root.setAttribute('data-active-tab', key);

    root.querySelectorAll('[data-service-panel]').forEach(function (panel) {
      var isActive = panel.getAttribute('data-service-panel') === key;
      panel.classList.toggle('hidden', !isActive);
      panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    root.querySelectorAll('[data-service-tab]').forEach(function (button) {
      var isActive = button.getAttribute('data-service-tab') === key;
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
      button.style.color = isActive ? '#fff' : (theme === 'light' ? '#222' : '#949494');
      button.style.fontWeight = isActive ? '700' : '500';
    });

    var pill = root.querySelector('[data-service-pill]');
    var position = tabMotion[theme] && tabMotion[theme][key];
    if (pill && position) {
      pill.style.left = position.left + 'px';
      pill.style.width = position.width + 'px';
    }
  }, true);
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: hydrationFallbackScript }} />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
