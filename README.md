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

## How authentication works

There is no backend authentication service. `auth.js` validates the login form, looks up the email/password in the `users` localStorage array, writes the matching account to `currentUser`, and redirects students to `dashboard.html` or administrators to `admin.html`.

Registration validates required fields, email format, password length and matching passwords before creating a new student account in `users`.

## How localStorage is used

CampusConnect uses separate browser keys for:

- `users`
- `currentUser`
- `events`
- `registrations`
- `clubs`
- `joinedClubs`
- `announcements`
- `lostFound`
- `notifications`
- `theme`
- `savedEvents` (an extra key for the save-event feature)

The first page load seeds realistic sample data automatically when the keys do not exist. Updates made in the browser remain available after refreshing until the browser storage is cleared.

## How to run

1. Download or copy the `CampusConnect` folder.
2. Open `index.html` directly in a modern browser.
3. Use the demo student or admin credentials below, or register a new student account.

No npm, Node.js, server, database or installation step is required.

## Demo credentials

**Student**

- Email: `student@campusconnect.com`
- Password: `student123`

**Admin**

- Email: `admin@campusconnect.com`
- Password: `admin123`

Additional sample student accounts use `demo123` as their password.

## Limitations

This is a frontend-only educational project using HTML, CSS and JavaScript. `localStorage` is used instead of a real backend/database.

LocalStorage authentication is for educational/demo purposes and is **not secure enough for a production application**. Passwords are stored in browser storage as plain text in this demonstration. Data is also local to the browser/device and is not shared between users.

The demo event chart is an illustrative frontend visualization rather than a production analytics service. External Google Font loading also depends on network availability.

## Future improvements

- Replace localStorage with a real backend and secure password hashing
- Add role-based authorization on a server
- Add a real database, file uploads and cloud image storage
- Add email/push notifications
- Add event QR check-in and attendance tracking
- Add club discussion threads and moderation tools
- Add real analytics and server-side search
- Add accessibility audits and automated end-to-end testing

## Viva / project concepts

### 1. Why did you use localStorage?
`localStorage` gives the browser a simple persistent key-value store without needing a backend, which is suitable for this educational demo.

### 2. How does login work?
The JavaScript reads the login form, finds a matching account in the `users` array, stores that user in `currentUser`, then redirects based on the user's role.

### 3. How is event registration stored?
The `registrations` object stores an array of event IDs for each user ID. The selected event's `registered` count is also incremented in the `events` data.

### 4. How do you prevent duplicate registration?
Before adding an event ID, the code checks `isRegistered(eventId)` for the current user.

### 5. How do clubs work?
The `joinedClubs` object stores joined club IDs per user. Joining also increments the club's member count and creates a notification.

### 6. How does search work?
JavaScript listens to search inputs and filters arrays using string matching without reloading the page.

### 7. How does filtering work?
The events page combines search text, category, date and sorting rules before rendering the visible cards.

### 8. How does dark mode work?
The theme is stored as `light` or `dark` in the `theme` localStorage key, and CSS variables change the colors when the `data-theme="dark"` attribute is set.

### 9. What are CSS variables?
CSS variables store reusable design values such as colors, spacing, radius and shadows so the interface is easier to maintain.

### 10. What is event delegation or event handling here?
The project primarily uses `addEventListener` to attach click, input, submit and keyboard events to DOM elements.

### 11. Why are the JavaScript files separated?
Separate modules keep authentication, events, clubs, announcements, Lost & Found, dashboard logic and admin logic easier to understand and maintain.

### 12. How is data rendered dynamically?
JavaScript reads arrays from localStorage, creates HTML strings for cards/rows and assigns them to container elements such as `innerHTML`.

### 13. How does the countdown work?
The event detail page calculates the difference between the event date/time and the current time, then updates days, hours, minutes and seconds once per second.

### 14. How is the site responsive?
The layout uses CSS Grid, Flexbox, fluid typography and media queries so cards, navigation, sidebars and forms adapt to smaller screens.

### 15. What is the biggest production limitation?
The application has no secure backend. Client-side localStorage is not suitable for real authentication, authorization, sensitive data or multi-user synchronization.
