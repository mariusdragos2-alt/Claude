# Timișoara — site cu efect parallax și blog

Site static (fără server) despre Timișoara, găzduit gratuit pe GitHub Pages.

| Pagină | Ce face |
|---|---|
| `index.html` | Pagina principală cu efect parallax + ultimele 3 articole |
| `blog.html` | Lista de articole (filtrare pe etichete) și pagina fiecărui articol (`blog.html?p=slug`) |
| `admin.html` | Panoul de control: scrii, editezi, ștergi articole și încarci imagini |
| `posts.json` | Toate articolele (scrise de panou, nu e nevoie să-l editezi de mână) |

## Publicare gratuită cu GitHub Pages
1. Settings → Pages
2. Source: **Deploy from a branch**, Branch: `master`, folder `/ (root)` → Save
3. După ~1 minut site-ul e live la: https://mariusdragos2-alt.github.io/Claude/

## Cum folosești panoul (`/admin.html`)
Panoul salvează articolele direct în acest repo prin API-ul GitHub, așa că ai nevoie de un token:

1. https://github.com/settings/personal-access-tokens/new
2. **Repository access** → *Only select repositories* → acest repo
3. **Permissions → Contents** → *Read and write*
4. Generează tokenul, deschide `admin.html` → **Setări** → lipește tokenul → *Testează și salvează*

Tokenul rămâne doar în browserul tău (localStorage). Pe un calculator public apasă **Deconectează** după ce termini.
După fiecare salvare, GitHub Pages republică site-ul în aproximativ un minut.

Notă: ciornele sunt ascunse pe blog, dar se văd în `posts.json`, care e public.
