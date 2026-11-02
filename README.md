# Western Classic 2027

Event site for the Trelawny Gun Club Western Classic, Sunday, April 18, 2027.

Static site: `index.html`, `photos.js`, and the `assets` folder. No build step, no backend.

## Publish on GitHub Pages
1. Create a repo under the TrelawnyGunClub organisation (e.g. `western-classic`) and upload everything in this folder.
2. Repo Settings, Pages, Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site goes live at `https://trelawnygunclub.github.io/western-classic/`.

## Add the registration link
Open `index.html`, find the `SITE` block near the bottom, and paste the sign-up link into `registrationUrl`. The Register buttons (top bar, hero, and Register section) all switch to it.

## Add photos to the ticker
1. Upload the images to `assets/photos/` (JPG, about 1600 px wide, under 400 KB each).
2. Open `photos.js` and add one line per photo, for example:
   `{ src: "assets/photos/shoot-01.jpg", alt: "Shooters on the line" },`
3. Commit. Until photos are listed, the ticker shows "Photo coming soon" frames.

## Sponsor contact
`sponsorEmail` in the same `SITE` block drives every sponsor slot and the "Ask about sponsoring" button. Add `sponsorWhatsApp` (digits only, with country code) to use WhatsApp instead.
