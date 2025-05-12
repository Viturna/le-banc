# Le Banc

Un site communautaire permettant aux créateurs et créatrices de se rencontrer autour de projets créatifs.  
Développé avec [SvelteKit](https://kit.svelte.dev/) et [Supabase](https://supabase.com/), avec une attention particulière à l’écoconception.

---

## 🌐 En ligne

**🔗 https://lebanc.fr**

Déployé via [Vercel](https://vercel.com/).

---

## 🧱 Stack technique

- **Frontend** : SvelteKit + TypeScript
- **Backend / Auth** : Supabase (email + Google OAuth)
- **ORM** : [Drizzle ORM](https://orm.drizzle.team/)
- **DB** : PostgreSQL (hébergée par Supabase)
- **Déploiement** : Vercel
- **Écoconception** :
  - Police auto-hébergée : [`Space Mono`](https://fonts.google.com/specimen/Space+Mono)
  - Variables CSS globales (`--primary-color`, etc.)

---

## 📁 Structure des routes

| Route                  | Description                         |
| ---------------------- | ----------------------------------- |
| `/`                    | Accueil                             |
| `/profiles`            | Liste des créateurs                 |
| `/profiles/[username]` | Page de profil individuel           |
| `/projects`            | Liste des projets                   |
| `/projects/[id]`       | Détail d’un projet                  |
| `/auth/login`          | Connexion                           |
| `/auth/register`       | Inscription                         |
| `/auth/logout`         | Déconnexion                         |
| `/auth/callback`       | Callback OAuth (Google)             |
| `/contact`             | Page de contact (non fonctionnelle) |

---

## 👥 Fonctionnalités

- Authentification :
  - Email + mot de passe
  - Connexion via Google (OAuth)
- Création automatique de profil utilisateur à la première connexion
- Header avec mise en surbrillance du lien actif (`active`)
- Composant bouton `<a>` stylé avec deux couleurs disponibles
- Upload d’image (actuellement en local uniquement)
- Variables CSS globales dans `:root`

---

## 🧬 Modèle de données (Drizzle ORM)

### Table `profile`

- `id` (uuid, PK)
- `firstName`, `lastName`, `username` (unique), `email`
- `password`, `quote`, `phone`, `coordinates`, `photoUrl`
- `locations[]`, `experiences[]`
- `createdAt`

### Table `domain`

- `id` (serial, PK), `name` (unique)

### Table `role`

- `id` (serial, PK), `name` (unique)

### Table `project`

- `id` (uuid, PK), `title`, `description`, `link`
- `images[]`, `isMembersFound`, `createdAt`

### Liens relationnels

- `profile_to_domain(profileId, domainId)`
- `profile_to_role(profileId, roleId)`
- `project_to_domain(projectId, domainId)`
- `project_to_role_needed(projectId, roleId, quantity)`
- `project_member(projectId, profileId, roleId, joinedAt)`

---

## 🛠️ Installation locale

```bash
git clone https://github.com/tonrepo/le-banc.git
cd le-banc
pnpm install # ou npm install
pnpm dev     # ou npm run dev
```
