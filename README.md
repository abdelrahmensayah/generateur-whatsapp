# 🚀 WaLink Maker — Mini-projet SAB X

Bienvenue sur le dépôt de **WaLink Maker**, un mini-projet web développé dans le cadre de notre stage pour la plateforme SAB X.

## 👥 Binôme
* Abdelhakim SAYAH
* Abdelrahmen SAYAH

---

## 📝 Présentation du projet

### 1. Le problème résolu
Pour les freelances ou petits commerçants, créer manuellement un lien WhatsApp avec un message pré-rempli nécessite de connaître la syntaxe officielle (`wa.me`). C'est une manipulation fastidieuse et sujette à de nombreuses erreurs de saisie : oubli de l'indicatif international, conservation du "0" initial (ex: 06), ou mauvaise gestion des espaces dans le texte. 

**WaLink Maker** résout ce problème en automatisant le nettoyage des données et le formatage de l'URL pour obtenir un lien valide en un clic.

### 2. Les fonctionnalités principales
* **Saisie simplifiée :** Un champ dédié au numéro de téléphone et une zone de texte pour le message optionnel.
* **Nettoyage automatique :** Le script JavaScript filtre les caractères non numériques et supprime intelligemment le "0" en trop si on tape un numéro français classique (ex: correction automatique de `3306...` en `336...`).
* **Encodage URL :** Conversion transparente du message au format URL (`%20` pour les espaces).
* **Copie instantanée :** Un bouton de copie en un clic avec retour visuel dynamique pour confirmer la mise en presse-papiers.

### 3. Design et interface
L'interface adopte une approche *Single Page Application* très minimaliste et centrée à l'écran. Le design utilise la charte couleur de WhatsApp (touches de vert sur fond gris clair/blanc) pour une reconnaissance immédiate de la fonction de l'outil. La zone contenant le résultat reste invisible tant que le bouton n'a pas été cliqué pour garder une interface épurée.

---

## 🛠️ Stack Technique
* **HTML5** / **Vanilla JavaScript**
* **Tailwind CSS** (via CDN)
* Hébérgement : **Vercel**
