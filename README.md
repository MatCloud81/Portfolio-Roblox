# Portfolio Roblox — Pepito

Site statique ultra simple (HTML/CSS/JS, aucun framework, aucune build step)
prêt à déployer sur Vercel.

## Structure

```
index.html        → page d'accueil (vidéo de fond, bio, contact)
builder.html       → page talent Builder
scripter.html      → page talent Scripter
ui-designer.html  → page talent UI Designer
style.css          → tout le style (thème sombre, axes X/Y/Z colorés)
script.js          → menu mobile + gestion prefers-reduced-motion
assets/hero.mp4    → à ajouter toi-même (voir assets/README.md)
```

## À personnaliser avant de publier

Cherche ces éléments dans les fichiers .html et remplace-les :

1. **Vidéo de fond** : dépose ton fichier dans `assets/hero.mp4`
   (voir `assets/README.md`).
2. **Liens Discord / Roblox** : remplace toutes les occurrences de
   `https://discord.gg/TON-INVITE` et `https://www.roblox.com/users/TON-ID/profile`
   dans les 4 pages (nav + boutons de contact).
3. **Bio** : dans `index.html`, section `#bio`, remplace le paragraphe
   d'exemple par ton vrai texte.
4. **Projets** : dans `builder.html`, `scripter.html`, `ui-designer.html`,
   chaque `.project-card` contient un titre `[...]` et une description
   `[...]` à remplacer par tes vrais projets. Tu peux dupliquer une carte
   `<article class="project-card">...</article>` pour en ajouter, ou en
   supprimer une si tu en as moins.
5. **Nom** : remplace `Pepito` par ton pseudo/nom si besoin (nav, footer,
   titre `<title>`, bio).

## Déployer sur Vercel

### Option 1 — via l'interface Vercel (le plus simple)
1. Mets ce dossier dans un repo GitHub (public ou privé).
2. Va sur https://vercel.com/new, importe le repo.
3. Vercel détecte automatiquement un site statique — aucune configuration
   nécessaire (pas de "build command", pas de "output directory" à changer).
4. Clique sur "Deploy".

### Option 2 — via la CLI Vercel
```bash
npm install -g vercel
cd roblox-portfolio
vercel
```
Suis les instructions à l'écran. `vercel --prod` pour la mise en ligne finale.

## Notes techniques

- Polices chargées depuis Google Fonts (Space Grotesk, Inter, JetBrains Mono).
- Le thème utilise trois couleurs d'axe inspirées du gizmo de déplacement de
  Roblox Studio : rouge (X) = Builder, vert (Y) = Scripter, bleu (Z) = UI Designer.
- Responsive jusqu'au mobile, menu hamburger en dessous de 760px.
- `prefers-reduced-motion` coupe la vidéo de fond automatiquement.
