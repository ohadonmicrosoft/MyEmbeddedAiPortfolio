# MyEmbeddedAiPortfolio

A multi-page static website showcasing Real-Time Embedded, C++, and AI projects.

## Table of Contents
1. [File Structure](#file-structure)
2. [Pages](#pages)
3. [Usage](#usage)
4. [Deploy on GitHub Pages](#deploy-on-github-pages)
5. [Custom Domain](#custom-domain)
6. [Further Customization](#further-customization)
7. [License](#license)

## File Structure

MyEmbeddedAiPortfolio/
│
├─ README.md
├─ home.html
├─ projects.html
├─ ai-bots.html
├─ about.html
├─ contact.html
└─ .gitignore        (optional, if you want to ignore certain files)

## Pages

1. **Home**  
   - `home.html`: Hero section with a typing effect, introducing the portfolio.
2. **Projects**  
   - `projects.html`: Displays various embedded and AI projects with GitHub links.
3. **AI Bots**  
   - `ai-bots.html`: Showcases AI-powered bots and their functionalities.
4. **About**  
   - `about.html`: A page describing the developer's background and expertise.
5. **Contact**  
   - `contact.html`: A simple form to collect user feedback or inquiries.

## Usage

To view locally, you can simply open these `.html` files in your web browser, or run a local server (like `python -m http.server`) and navigate to [http://localhost:8000](http://localhost:8000).

## Deploy on GitHub Pages

1. **Rename** `home.html` to `index.html` (optional if you want it to load automatically at the root).
2. Commit and push your changes to the `main` (or `master`) branch of GitHub.
3. Go to your **repo settings** → **Pages** (on the sidebar).
4. Under "Source," select `main` branch, and the root folder.
5. Save. GitHub Pages will provide a URL such as `https://your-username.github.io/MyEmbeddedAiPortfolio/`.
6. **If you didn't rename `home.html` to `index.html`,** you'd access your home page via `https://your-username.github.io/MyEmbeddedAiPortfolio/home.html`.

## Custom Domain

If you have a custom domain, you can set it up under the same **GitHub Pages** settings. Add a `CNAME` record in your DNS pointing to `your-username.github.io`.

## Further Customization

- **Change images**: The images are pulled from `source.unsplash.com` with keywords. Feel free to replace with your own assets or direct links.
- **Styling**: The CSS is inline in each file for simplicity. You could refactor into an external `.css` if you prefer.
- **Form Handling**: The contact form uses a simple JS alert (demo mode). Integrate with a serverless function or third-party service (Netlify forms, Formspree, etc.) for real submissions.

## License

MIT License

Copyright (c) [YEAR] [YOUR_NAME]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---
