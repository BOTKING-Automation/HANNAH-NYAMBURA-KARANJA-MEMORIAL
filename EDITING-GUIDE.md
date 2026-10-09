# Editing the Hannah Memorial Website

You can edit this website directly on GitHub; no coding software is required.

## The main pages

| What you want to change | File in GitHub |
|---|---|
| Home page and opening message | `public/index.html` |
| Biography / family story | `public/story.html` |
| Full eulogy | `public/eulogy.html` |
| Funeral date, time, venue, order of service | `public/service.html` |
| Photo gallery | `public/gallery.html` |
| Tribute form text | `public/tributes.html` |
| Colours, fonts, borders, spacing | `public/theme.css` |
| How the tribute form works | `public/app.js` |

## Edit a page using GitHub

1. Open the repository: https://github.com/BOTKING-Automation/HANNAH-NYAMBURA-KARANJA-MEMORIAL
2. Open the `public` folder, then select the page you want to change, for example `eulogy.html`.
3. Click the pencil icon (Edit this file).
4. Use Ctrl+F to find the sentence or placeholder you want to change. Edit only that text and keep the surrounding HTML tags intact.
5. Click **Commit changes** and save to the `main` branch.
6. If the site is deployed from this GitHub repository, the hosting service may redeploy automatically. The existing Hatchable-hosted site is separate unless GitHub deployment is configured for it.

## Replace placeholders
Search the relevant file for text in square brackets, such as `[Add confirmed date]`, and replace it with information the family has confirmed. Do not leave sample placeholders on a final public funeral notice.

## Add photographs
1. Open `public` and create an `images` folder (or upload an `images` folder with your photographs).
2. Upload family-approved photos with simple filenames, such as `hannah-portrait.jpg`.
3. In `public/gallery.html`, replace a placeholder card with:
   `<img src="images/hannah-portrait.jpg" alt="Hannah Nyambura Karanja (Wa Ruth)">`
4. You can add styling for images in `public/theme.css`. Only publish photos the family agrees to share.

## Printing the eulogy
Open `eulogy.html` in the deployed website and select **Print / Save as PDF**. In the print dialog, choose Save as PDF.

## Important notes
- The current eulogy is a draft based only on details supplied so far. Add true personal memories and confirm the final wording with the family.
- The tribute form does not create a public guestbook and does not save submissions on a server. It only prepares text for visitors to copy and send privately.
- Never publish private contact details, sensitive family information, or photographs without permission.
