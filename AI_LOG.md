## AI Usage Log

**Tool used:** Grok Bot (Proggy)

### 18 November 2026

1. **Project planning**
   - **Purpose:** Suggest a folder and page structure for the site (home, auth, listing, profile and src) and a step-by-step order for building the features.
   - **Outcome:** I used the plan as a starting point and set up the project and Kanban tasks myself.
2. **Code review of the first login page**
   - **Purpose:** Review my first login and register code and explain errors. It used TypeScript syntax in a JS file, and the register link had an id that didn't match.
   - **Outcome:** I understood the problems and fixed them myself.
3. **Plan for authentication**
   - **Purpose:** Explain how login and register work with the Noroff API, including saving the access token in localStorage.
   - **Outcome:** Improved understanding of authentication and how to structure it in modules.

### 20 November 2026

4. **Vite and Netlify setup**
   - **Purpose:** Explain why the deployed pages gave a 404, and how to add each page to `vite.config.js` and set the Netlify build settings.
   - **Outcome:** I fixed the config and the site deployed correctly.
5. **Login and register code**
   - **Purpose:** Suggest simple code for `loginUser`, `registerUser`, `storage.js` and the page scripts.
   - **Outcome:** I added the code to my own structure, tested it, and can explain every line.
6. **Debugging login**
   - **Purpose:** Help me understand why localStorage looked empty and why the register page didn't work.
   - **Outcome:** I learned that Live Server and Vite use different addresses with separate storage, and fixed a wrong script path.
7. **Profile page and API key**
   - **Purpose:** Explain why the API key is needed for auction endpoints and how to create one, and suggest code for showing the profile.
   - **Outcome:** I created the key, added the profile page, and tested it.
8. **Listings on the home page**
   - **Purpose:** Suggest code to fetch and show active listings.
   - **Outcome:** I tested it and understand how the fetch and rendering work.

### 22 November 2026

9. **Single listing, bidding, create, edit and delete**
   - **Purpose:** Suggest simple code for viewing one listing with its bids, placing bids (logged in only), and creating, editing and deleting my own listings.
   - **Outcome:** I tested each feature after adding it, fixed problems with AI help, and can explain the code.
10. **Logout, header and credits**
    - **Purpose:** Suggest code for logging out, showing the right header links when logged in or out, and showing credits on every page.
    - **Outcome:** Tested and working, and I understand how it checks the logged-in user.
11. **Profile editing and search**
    - **Purpose:** Suggest code for editing the bio, avatar and banner with a toggle button, and for searching listings.
    - **Outcome:** Tested and working.
12. **Debugging deployment**
    - **Purpose:** Explain a Netlify build error.
    - **Outcome:** I learned that Netlify is case-sensitive, so the folder `Profile` had to be renamed to `profile`. I fixed it myself.
13. **Tailwind**
    - **Purpose:** Explain classes for text size, padding, margin, borders, and putting the avatar over the banner.
    - **Outcome:** I wrote all the styling myself.
14. **Testing plan**
    - **Purpose:** Give a step-by-step checklist for manually testing every user story.
    - **Outcome:** I tested everything and fixed the bugs I found.
15. **README and reflection**
    - **Purpose:** Suggest a README structure and help rephrase and expand my own notes for the reflection.
    - **Outcome:** The content is based on my own experience, and I edited the final text.
