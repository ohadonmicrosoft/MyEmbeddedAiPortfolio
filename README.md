# MyEmbeddedAiPortfolio

A multi-page, futuristic-themed portfolio showcasing Embedded, AI, and Software Development projects, along with a dedicated Resume page.

## Table of Contents

1. [Structure](#structure)
2. [Pages](#pages)
3. [Usage](#usage)
4. [Navigation](#navigation)
5. [Deploy on GitHub Pages](#deploy-on-github-pages)
6. [Custom Domain](#custom-domain)
7. [Further Customization](#further-customization)
8. [License](#license)

## Structure

MyEmbeddedAiPortfolio/
├─ index.html
├─ about.html
├─ resume.html
├─ projects.html
├─ ai-bots.html
├─ contact.html
├─ css/
│  └─ style.css
├─ js/
│  └─ script.js
├─ assets/
│  ├─ images/
│  └─ video/
├─ README.md
└─ .gitignore (optional)

Each HTML page references a **slide-out sidebar** for navigation (triggered by a hamburger icon in the fixed header). Global styling is in **`css/style.css`**, and all JavaScript logic is in **`js/script.js`**.

## Pages

- **Home** (`index.html`): Fullscreen hero section with background video, linking to the Projects page.
- **About** (`about.html`): Personal introduction and brief stats.
- **Resume** (`resume.html`): Detailed curriculum vitae with professional experiences, education, and technical expertise.
- **Projects** (`projects.html`): Cards showing various embedded/AI projects with GitHub links.
- **AI Bots** (`ai-bots.html`): A mock AI chatbot interface with multiple “modes” (Friendly, Professional, Funny).
- **Contact** (`contact.html`): A simple form to collect visitor inquiries.

## Usage

1. **Local Viewing**  
   Open `index.html` directly in your browser, or run a local server:
   ```bash
   python -m http.server
   ```

   Then visit http://localhost:8000.

## Navigation

The hamburger icon at the top left toggles the sidebar. Click away (on the overlay) to close it.

## Deploy on GitHub Pages

1. Ensure `index.html` is at the root.
2. Commit & push to GitHub.
3. Go to your repo’s Settings → Pages.
4. Select the correct branch (e.g., main) and root folder.
5. Save and let GitHub Pages provide your website URL.

## Custom Domain

1. Configure a CNAME record in your DNS pointing to `<username>.github.io`.
2. Set the custom domain in Settings → Pages.

## Further Customization

- **Images/Video**: Place your own media in the images or assets/video/ folders; update HTML src accordingly.
- **Form Handling**: Integrate a backend or a third-party service like Netlify Forms or Formspree for real message handling.
- **AI Bot**: Connect the chatbot to a live NLP backend or custom server for dynamic responses.

## License

MIT License

Copyright (c) [YEAR] [YOUR_NAME]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.