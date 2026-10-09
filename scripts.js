:root {
    --primary-color: #0f172a;
    --primary-dark: #1e293b;
    --accent-color: #d97706;
    --accent-light: #f59e0b;
    --bg-color: #f8fafc;
    --bg-light: #f1f5f9;
    --text-color: #334155;
    --text-light: #64748b;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
}

.skip-link {
    position: absolute; top: -40px; left: 0; background: var(--accent-color); color: white; padding: 8px; z-index: 100;
}
.skip-link:focus { top: 0; }

header {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%); color: white;
}
.nav-container {
    max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem;
}
.logo { font-size: 1.5rem; font-weight: 700; color: var(--accent-color); }
.nav-menu { display: flex; list-style: none; gap: 2rem; align-items: center; }
.nav-menu a { color: white; text-decoration: none; }
.btn-primary { background: var(--accent-color); padding: 0.5rem 1.25rem; border-radius: 6px; }
.hero { max-width: 900px; margin: 0 auto; text-align: center; padding: 5rem 1rem 4rem; }
.hero h2 { font-size: 2.5rem; margin-bottom: 0.5rem; }
.tagline { font-size: 1.25rem; color: #cbd5e1; }
.description { margin: 1rem 0 2rem; color: #94a3b8; }
.cta-button {
    background: var(--accent-color); color: white; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 8px; display: inline-block; font-weight: 600;
}
.container {
    max-width: 1000px; margin: 3rem auto; padding: 3rem 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.container.alt-bg { background: var(--bg-light); }
h2 { color: var(--primary-color); border-bottom: 3px solid var(--accent-color); padding-bottom: 1rem; margin-bottom: 2rem; }
.features-grid, .services-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; }
.feature-card, .service-item {
    background: white; padding: 2rem; border-radius: 8px; border-left: 4px solid var(--accent-color); box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.qa-box {
    background: white; border-left: 4px solid var(--accent-color); padding: 1.5rem; margin: 1.5rem 0; border-radius: 0 8px 8px 0;
}
.contact-info { background: white; padding: 2rem; text-align: center; }
footer {
    background: var(--primary-color); color: #94a3b8; text-align: center; padding: 2rem; margin-top: 3rem;
}
footer a { color: var(--accent-color); text-decoration: none; }
@media (max-width: 768px) {
    .nav-container { flex-wrap: wrap; justify-content: center; }
    .nav-menu { gap: 1rem; flex-wrap: wrap; justify-content: center; }
    .hero h2 { font-size: 1.75rem; }
    .container { margin: 2rem 1rem; padding: 1.5rem; }
}
