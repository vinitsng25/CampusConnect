# CampusConnect

CampusConnect is a polished, frontend-only college campus platform built for a first-year B.Tech CSE project demonstration. It brings college events, registrations, announcements, clubs, Lost & Found, notifications and student profiles into one responsive interface.

## Features

- Responsive landing page with animated counters and a dashboard mockup
- Student registration and simulated login
- Student dashboard with upcoming events, registrations, announcements, notifications and quick actions
- Event search, category/date filters and sorting
- Event registration with capacity checks, confirmation modal, duplicate prevention and notifications
- Event detail page with countdown, share and save actions
- Club directory with search/filtering, animated detail modal and join flow
- Announcements with search, category filtering and important badges
- Lost & Found tabs, search, location filtering, post forms, resolve and owner-delete actions
- Profile editing with localStorage persistence
- Dark mode persisted across pages
- Admin dashboard with statistics, CSS/JS chart, event CRUD, announcement CRUD, club management and student list
- Toasts, confirmation modals, empty states, validation and loading animations

## Technologies used

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`
- Google Fonts via CDN (optional enhancement; the site remains functional without the font request)

No React, Angular, Vue, Node.js, Express, MongoDB, Firebase, Bootstrap, Tailwind, jQuery, PHP or build tools are required.

## Folder structure

```text
CampusConnect/
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── events.html
├── event-details.html
├── announcements.html
├── clubs.html
├── lost-found.html
├── profile.html
├── admin.html
├── README.md
├── css/
│   ├── style.css
│   ├── dashboard.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── auth.js
│   ├── dashboard.js
│   ├── events.js
│   ├── clubs.js
│   ├── announcements.js
│   ├── lost-found.js
│   └── admin.js
└── assets/
    └── images/
        ├── event illustration SVGs
        └── Lost & Found illustration SVGs
```
