# Find-macdo — contexte pour Claude

## Qui je suis et comment m'aider

- Je suis Feker, développeur .NET/C# et SQL (11 ans d'expérience). J'apprends Angular dans le cadre d'une formation CPF.
- **Objectif : réaliser ce projet MOI-MÊME pour apprendre Angular.** Ce projet sera présenté en soutenance, avec des modifications de code demandées en direct.
- Réponds en français.

### Règles de coaching (à respecter strictement)

1. **N'écris pas le code à ma place.** Ne modifie pas mes fichiers sauf si je le demande explicitement.
2. Quand je bloque : d'abord un **indice** (notion à chercher, piste, doc à lire), puis une explication plus détaillée seulement si je la demande, après tout cela proposes moi du code sous ma demande seulement.
3. Quand je montre du code : **relis-le comme un évaluateur** (bonnes pratiques Angular, lisibilité, typage, cohérence des dépendances).
4. Explique le **pourquoi** des choix, et signale ce qui pourra être demandé en soutenance.
5. Les analogies avec .NET (C#, Blazor, Razor, DI .NET…) m'aident à comprendre.
6. Les tâches non techniques déjà faites (ex. backlog) ne sont pas à refaire.

## Le projet

Application Angular de recherche de restaurants McDonald's sur une carte interactive.

**Parcours utilisateur :**
1. Accueil : carte + champ de recherche + overlay « Aucun restaurant sélectionné ».
2. L'utilisateur saisit une ville et clique sur « Rechercher » (pas d'appel API à la frappe).
3. Une liste de villes correspondantes s'affiche sous le champ.
4. Il sélectionne une ville → la carte se centre dessus et affiche les McDonald's en marqueurs.
5. Clic sur un marqueur → popup avec l'adresse exacte + bouton « Sélectionner ».
6. Clic sur « Sélectionner » → l'overlay affiche le restaurant choisi + bouton « Continuer ».

**Bonus :** géolocalisation automatique, restaurants à proximité.

**Exigences :** architecture claire, composants et services documentés, variables d'environnement, test unitaire par composant, application déployée sur un serveur.

**Critères d'évaluation :** maîtrise d'Angular, compatibilité des versions, cohérence des dépendances, gestion des variables d'environnement, capacité à déboguer.

## Objectif de la formation

**Séquence 1 :**
Objectifs: 
1. Identifier et analyser les besoins du client.
2. Rédiger les spécifications fonctionnelles et techniques.
3. Organiser les fonctionnalités par priorité et faisabilité.
4. Créer le backlog du produit.

Activité pratique:

- [ ] Relisez attentivement les détails du challenge à réaliser. Ensuite, je vous invite à élaborer le tableau des spécifications fonctionnelles du projet (backlog) en vous basant sur le modèle suivant.
N'hésitez pas à consulter l'article sur Comment bien rédiger une spécification sous forme de User stories pour vous guider.
À la fin de cette séquence, n'oubliez pas de réaliser le petit quiz proposé.
Pour approfondir la rédaction des User Stories, vous pouvez consulter les ressources suivantes :
User Stories | Exemples et modèle Atlassian
User stories : comment bien les rédiger - Hubvisory
User story Agile : Définition et étapes (+Templates et vidéo)
Ces articles vous fourniront des conseils pratiques pour rédiger des User Stories efficaces et adaptées à votre projet.

**Séquence 2 :**
Objectifs: 
1. Structurer les composants et maîtriser le data binding dans Angular.
2. Gérer le passage de données entre composants avec les décorateurs @Input et @Output.
3. Créer des composants réutilisables pour des interfaces modulaires.
4. Gérer les événements utilisateur dans Angular.
Activité pratique:

- [ ] Créer un nouveau projet Angular nommé mac_donald.
- [ ] Intégrer une carte interactive en utilisant la bibliothèque ngx-leaflet. Vous pouvez vous baser sur le tutoriel ci-dessous pour réaliser cette intégration.
- [ ] Mettre en place la communication entre composants parents et enfants en utilisant les décorateurs @Input et @Output.

**Séquence 3 :**
Objectifs: 

1. Intégrer une carte interactive pour afficher les restaurants McDonald's.
2. Permettre la recherche de villes et le positionnement sur la carte.
3. Afficher les restaurants McDonald's à proximité de la ville sélectionnée.
4. Gérer les interactions utilisateur avec les marqueurs sur la carte.

Activité pratique:

- [ ] Intégrer la bibliothèque ngx-leaflet dans votre projet Angular pour afficher une carte interactive. Vous pouvez suivre le tutoriel officiel de Leaflet pour commencer.
- [ ] Configurer le service Angular pour interagir avec l'API Nominatim afin de rechercher des villes en fonction de la saisie utilisateur.
- [ ] Mettre à jour la carte pour centrer sur la ville sélectionnée et afficher les restaurants McDonald's à proximité en utilisant des marqueurs. Vous pouvez consulter le tutoriel sur l'utilisation d'HttpClient dans Angular pour consommer des API REST.
- [ ] Ajouter des popups aux marqueurs pour afficher des informations détaillées sur chaque restaurant, avec une option de sélection. Pour gérer les requêtes asynchrones, vous pouvez vous référer à l'introduction à RxJS dans Angular.

**Séquence 4 :**
Objectifs: 

1. Créer et gérer des formulaires dynamiques avec Reactive Forms et Template-Driven Forms.
2. Enrichir les interfaces utilisateur avec les directives et pipes Angular.
3. Optimiser les performances en utilisant le lazy loading et la modularisation des routes.
4. Gérer des observables complexes avec des opérateurs avancés (switchMap, debounceTime, etc.).

Activité pratique:
Affichage des restaurants correspondant à la ville sélectionnée
Reprenez votre projet mac_donald pour ajouter la fonctionnalité complète d’affichage des restaurants McDonald's correspondant à la ville sélectionnée.

Étape 1 : Optimisation du formulaire avec Reactive Forms
- [ ] Remplacez le formulaire simple par un Reactive Form.
- [ ] Ajoutez des validations dynamiques pour :
		Vérifier que le champ de saisie est valide (non vide, contenu significatif).
		Afficher des messages d’erreur clairs si la validation échoue.
- [ ] Intégrez les opérateurs debounceTime et switchMap pour optimiser les requêtes API.
Étape 2 : Affichage des restaurants sur la carte
- [ ] Implémentez la récupération des restaurants McDonald's correspondant à la ville sélectionnée.
- [ ] Reprenez la carte interactive intégrée dans le projet.
- [ ] Lorsque l’utilisateur sélectionne une ville :
		Recentrer la carte sur les coordonnées de la ville sélectionnée.
		Afficher les restaurants sous forme de marqueurs sur la carte interactive.
- [ ] Configurez chaque marqueur pour afficher une popup contenant :
		Le nom et l’adresse du restaurant.
		Un bouton "Sélectionner" pour valider le choix du restaurant.
Étape 3 : Modularisation et Lazy Loading (pour aller plus loin)
- [ ] Divisez le projet en modules dédiés :
- [ ] SearchModule pour la gestion de la recherche de villes.
- [ ] MapModule pour les fonctionnalités liées à la carte interactive.
- [ ] Configurez le lazy loading pour ne charger chaque module que lorsqu’il est nécessaire, afin d’optimiser les performances et réduire le temps de chargement initial. :contentReference[oaicite:0]{index=0}
Objectif final : À la fin de cette activité, vous devrez:
- [ ] Avoir optimisé la recherche de villes avec un formulaire dynamique et réactif.
- [ ] Afficher les restaurants sélectionnés directement sur la carte interactive.
- [ ] Avoir organisé le projet de manière modulaire pour améliorer la maintenabilité et les performances.

**Séquence 5 :**
Objectifs: 
1. Découvrir NgRx pour la gestion centralisée de l’état d’une application Angular.
2. Configurer et utiliser NgRx Store pour gérer l’état de manière prévisible.
3. Gérer des effets asynchrones avec NgRx Effects.
4. Structurer une application Angular en modules pour une architecture évolutive
Activité pratique:


Étape 1 : Gestion d’état avec un service Angular

- [ ] Créez un service Angular pour gérer l’état de l’application de manière centralisée :
Stockez:
	- Les informations de la ville sélectionnée.
	- La liste des restaurants associés à cette ville.
	- Les détails du restaurant sélectionné.
	
- [ ] Fournissez des méthodes pour mettre à jour et accéder à ces données.

Exemple d’utilisation : Stockez la ville sélectionnée dans une propriété BehaviorSubject pour permettre une mise à jour réactive dans l’application.

Étape 2 : Interactivité des marqueurs

- [ ] Ajoutez un événement click pour chaque marqueur : Lorsque l’utilisateur clique sur un marqueur:
		- Affichez une popup contenant: Le nom et l’adresse du restaurant Un bouton "Sélectionner".

- [ ] Mettez à jour les détails du restaurant sélectionné dans le service Angular.

Étape 3 : Validation via un overlay

- [ ] Configurez un overlay pour afficher la confirmation de la sélection d’un restaurant :
		-Lorsque l’utilisateur clique sur "Sélectionner" dans une popup:
		Mettez à jour l’état dans le service pour enregistrer le restaurant sélectionné.
		Affichez un overlay avec :
		Les détails du restaurant sélectionné.
		Un bouton "Continuer" pour valider l’étape.

Étape 4 : Mise en place de NgRx Store

Aller plus loin : Introduction à NgRx
Pour les apprenants souhaitant découvrir NgRx, proposez ces étapes :

- [ ] Configurez NgRx Store dans le projet.
- [ ] Créez un store pour gérer: Les informations sur les villes, les restaurants et le restaurant sélectionné.
- [ ] Déplacez la logique actuellement dans le service Angular vers NgRx Store.

Étape 5 : Gestion des effets avec NgRx Effects

- [ ] Ajoutez NgRx Effects pour gérer les appels API :
- [ ] Requêtes pour les suggestions de villes via l’API Nominatim.
- [ ] Requêtes pour récupérer les restaurants associés à une ville.
- [ ] Configurez des actions pour initier et gérer les mises à jour de l’état dans le store.

À la fin de cette séquence :

- [ ] L’application devra permettre :
		- De cliquer sur un marqueur pour afficher les détails du restaurant dans une popup.
		- De sélectionner un restaurant et afficher un overlay de confirmation.
- [ ] Vous aurez le choix :

		- rester avec une gestion d’état via un service.
		- Ou d’explorer et implémenter NgRx pour une gestion d’état avancée.

**Séquence 6 :**
Objectifs: 
1. Préparer une application Angular pour le déploiement.
2. Configurer le fichier `angular.json` pour le build de production.
3. Déployer une application Angular sur un serveur ou une plateforme d’hébergement gratuit (Firebase, Netlify, Vercel).
4. Gérer les mises à jour et optimiser les performances en production.

Activité pratique:
- [ ] Configurer le fichier `angular.json`, effectuer un build de production, et déployer l’application Angular sur Firebase Hosting ou Netlify.


## Décisions techniques prises (et pourquoi)

| Choix | Raison |
|---|---|
| Angular 21 (standalone components) | Standard moderne, pas de NgModule |
| `@bluehalo/ngx-leaflet` 21.x | Imposé par l'énoncé. `@asymmetrik/ngx-leaflet` est l'ancien nom (déprécié). La version majeure doit correspondre à celle d'Angular (peerDependencies strictes) |
| `leaflet` 1.9.x | ngx-leaflet exige Leaflet 1.x. Leaflet 2.0 est en bêta et change l'API (ESM, classes) |
| `@types/leaflet` en devDependencies | Types utiles uniquement à la compilation |
| SCSS | Variables, imbrication, standard Angular, aucune dépendance en plus |
| Pas de SSR/SSG | Leaflet dépend de `window`/DOM, contenu 100 % dynamique, pas d'enjeu SEO → CSR, hébergement statique |
| Vitest (défaut Angular 21) | Attention : beaucoup de tutoriels sont encore en Karma/Jasmine |
| API Nominatim (OpenStreetMap) | Imposée. Politique d'usage : pas d'autocomplétion, max 1 requête/s, attribution OSM obligatoire |
| Page parente + 3 composants enfants (Search, Map, Overlay) | Démontre `@Input`/`@Output` (séquence 2). Pattern container / presentational : la page détient la logique, les enfants affichent et émettent |
| ⚠️ *À valider avec le mentor* — `debounceTime`/`switchMap` sur la **soumission** du formulaire, pas sur la frappe | La séquence 4 suppose une recherche à la frappe, interdite par l'énoncé et par la politique Nominatim. `switchMap` annule la requête précédente, `debounceTime` bloque les doubles clics |
| ⚠️ *À valider avec le mentor* — Lazy loading via routes (`loadComponent` / `loadChildren`) au lieu de `SearchModule` / `MapModule` | La séquence 4 parle de NgModules, le projet est en standalone. Les routes lazy sont l'équivalent moderne du même concept |
| ⚠️ *À valider avec le mentor* — `BehaviorSubject` (RxJS) pour l'état partagé, au lieu des signals | La séquence 5 demande un `BehaviorSubject` (objectif RxJS). Savoir comparer avec les signals en soutenance |

## Avancement

### Phase 1 : Cadrage (séquence 1)
- [x] Backlog et user stories (US-01 à US-13, TECH-01 à TECH-07)

### Phase 2 : Structure et communication entre composants (séquence 2)
- [x] Projet Angular 21, SCSS, sans SSR, dépendances Leaflet (`@types/leaflet` en devDependencies, `leaflet.css` dans `angular.json`)
- [x] Carte OSM affichée (US-01)
- [ ] Corriger `app.html` (classes Tailwind sans Tailwind installé, faute de frappe `p-4>`)
- [ ] Créer la page parente `HomePage`, routée
- [ ] Déplacer la carte dans un composant enfant `MapComponent`
- [ ] Brancher `SearchComponent` et `OverlayComponent` dans la page, selon la maquette Figma
- [ ] `@Output` dans Search : une ville est sélectionnée
- [ ] `@Input` dans Map : la ville à afficher
- [ ] `@Output` dans Map / `@Input` dans Overlay : le restaurant sélectionné
- [ ] `@Output` dans Overlay : clic sur « Continuer »
- [ ] Un test unitaire par composant (création, entrées, émission des sorties)

### Phase 3 : API et carte dynamique (séquence 3)
- [ ] Fichiers d'environnement avec l'URL de Nominatim
- [ ] Modèles typés (`City`, `Restaurant`)
- [ ] `GeocodingService` (HttpClient) : recherche de villes
- [ ] Liste des villes trouvées et sélection
- [ ] Recentrer la carte sur la ville sélectionnée
- [ ] Rechercher les McDonald's dans la zone de la ville et les afficher en marqueurs
- [ ] Corriger les icônes de marqueurs
- [ ] Popup (nom, adresse) et bouton « Sélectionner »
- [ ] Tests du service avec HttpClient simulé

### Phase 4 : Formulaires, pipes et lazy loading (séquence 4)
- [ ] Formulaire de recherche en Reactive Form, avec validations (champ non vide, au moins 2 caractères) et messages d'erreur
- [ ] `switchMap` sur la soumission du formulaire (pas sur la frappe) ⚠️ contradiction 1
- [ ] `debounceTime` pour bloquer les doubles clics, sans autocomplétion ⚠️ contradiction 1
- [ ] Control flow (`@if`, `@for`) et au moins un pipe (par exemple un pipe personnalisé pour formater l'adresse)
- [ ] Lazy loading avec `loadComponent` / `loadChildren` (équivalent standalone des « modules » de l'énoncé) ⚠️ contradiction 2
- [ ] Cas d'erreur : aucune ville, aucun restaurant, API indisponible

### Phase 5 : État centralisé (séquence 5)
- [ ] `StateService` avec des `BehaviorSubject` pour la ville, les restaurants et le restaurant sélectionné ⚠️ contradiction 3
- [ ] Le bouton « Sélectionner » de la popup met à jour le service (la popup Leaflet vit hors d'Angular)
- [ ] L'overlay lit le restaurant sélectionné depuis le service
- [ ] Garder `@Input`/`@Output` pour la relation page/enfants, et le service pour l'état partagé
- [ ] *(Optionnel)* NgRx Store et Effects

### Phase 6 : Production (séquence 6)
- [ ] Configuration de production dans `angular.json` (budgets, remplacement des fichiers d'environnement)
- [ ] `ng build` et déploiement sur Netlify ou Firebase, avec la règle de redirection pour une SPA
- [ ] README et documentation des composants et services
- [ ] *(Bonus)* Géolocalisation et restaurants à proximité

### ⚠️ Contradictions entre la formation et le projet (à voir avec le mentor)
1. **Recherche à la frappe** : la séquence 4 demande `debounceTime`/`switchMap`, ce qui suppose une recherche pendant la frappe. Or l'énoncé (« pas d'appel API à la frappe ») et la politique Nominatim (pas d'autocomplétion) l'interdisent. → Proposition : appliquer ces opérateurs au flux de soumission du formulaire.
2. **NgModules** : la séquence 4 demande `SearchModule` / `MapModule`, alors que le projet est en standalone (Angular 21). → Proposition : utiliser des routes lazy (`loadComponent` / `loadChildren`), la version moderne du même concept.
3. **Signals ou `BehaviorSubject`** : le plan initial prévoyait des signals, la séquence 5 demande un `BehaviorSubject`. → Proposition : suivre la formation (objectif RxJS) et savoir comparer avec les signals en soutenance.

## Pièges déjà identifiés

- Les tutoriels `@bluehalo/ngx-leaflet-draw` concernent une extension de dessin : inutile ici.
- Ne pas contourner les erreurs `ERESOLVE` avec `--force` ou `--legacy-peer-deps` : vérifier `npm view <paquet> peerDependencies`.
- Les icônes de marqueurs Leaflet s'affichent mal par défaut dans un build Angular : c'est à diagnostiquer soi-même.
- Une carte invisible signifie généralement que la div n'a pas de hauteur.
