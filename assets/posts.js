// Shared helpers for reading blog posts (used by index.html and blog.html)
window.Blog = (() => {
  const palettes = [
    ['#6a3a7a', '#e07a5f'],
    ['#2e6b5e', '#7fb69e'],
    ['#c8553d', '#e9b44c'],
    ['#2b2058', '#6a3a7a'],
    ['#1c4a42', '#e9b44c'],
  ];

  function hash(str) {
    let h = 0;
    for (const c of str) h = (h * 31 + c.charCodeAt(0)) | 0;
    return Math.abs(h);
  }

  function escapeHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // Only allow http(s) and relative URLs for cover images
  function safeUrl(u) {
    u = String(u || '').trim();
    if (!u) return '';
    if (/^(https?:)?\/\//i.test(u) || /^[\w./-]+$/.test(u)) return u;
    return '';
  }

  function coverStyle(post) {
    const url = safeUrl(post.cover);
    if (url) return `background-image:url("${url.replace(/"/g, '%22')}");background-size:cover;background-position:center`;
    const [a, b] = palettes[hash(post.slug || post.title || '') % palettes.length];
    return `background:linear-gradient(135deg, ${a}, ${b})`;
  }

  function formatDate(d) {
    const date = new Date(d + 'T12:00:00');
    if (isNaN(date)) return d || '';
    return date.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function readingTime(md) {
    const words = String(md || '').trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200)) + ' min de citit';
  }

  async function loadPosts() {
    const res = await fetch('posts.json?v=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('Nu am putut încărca articolele (' + res.status + ')');
    const posts = await res.json();
    return posts
      .filter(p => p.published !== false)
      .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  }

  return { escapeHtml, safeUrl, coverStyle, formatDate, readingTime, loadPosts };
})();
