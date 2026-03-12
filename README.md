# Pramod Pandit — Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**, showcasing my projects, skills, education, achievements, and certifications.

## Live Demo

> _Deploy on Vercel/Netlify and add your link here._

## Features

- **Responsive Design** — Fully mobile-friendly with clean layouts across all devices
- **Dark / Light Theme** — Toggle between dark (green/gray accent) and light (indigo accent) modes, saved in localStorage
- **Scroll Animations** — Intersection Observer-powered fade/slide animations on every section
- **EmailJS Contact Form** — Sends messages directly to my inbox without a backend
- **Glass-morphism UI** — Frosted-glass card effects with smooth hover transitions
- **Smooth Navigation** — react-scroll based section navigation with active link highlighting
- **Profile Picture** — Circular profile image with glowing border on the Hero section

## Tech Stack

| Layer      | Technologies                             |
| ---------- | ---------------------------------------- |
| Framework  | React 19, Vite 7                         |
| Styling    | Tailwind CSS 4, CSS custom properties    |
| Icons      | react-icons (Feather, Font Awesome, Simple Icons) |
| Email      | @emailjs/browser                         |
| Navigation | react-scroll                             |

## Project Structure

```
React/
├── public/
├── src/
│   ├── assets/          # Profile picture
│   ├── components/      # Navbar, Hero, About, Skills, Projects,
│   │                    # Education, Certifications, Achievements,
│   │                    # Contact, Footer
│   ├── context/         # ThemeContext (dark/light toggle)
│   ├── data/            # portfolioData.js (all content data)
│   ├── hooks/           # useScrollAnimation
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/pramodpandit72/Portfolio.git
cd Portfolio/React

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add a Gmail Email Service and note the **Service ID**
3. Create an Email Template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_email}}`
4. Copy your **Public Key** from Account → API Keys
5. Update the constants in `src/components/Contact.jsx`

## Sections

| Section        | Description                                       |
| -------------- | ------------------------------------------------- |
| Hero           | Introduction with profile pic, CTA, social links  |
| About          | Bio and key stats (LeetCode, HackerRank, projects)|
| Skills         | Languages, frameworks, tools, core & soft skills   |
| Projects       | Featured projects with GitHub + live demo links    |
| Education      | Academic timeline                                  |
| Certifications | Professional certificates (NPTEL, Coursera, etc.) |
| Achievements   | Coding platform milestones with profile links      |
| Contact        | EmailJS-powered contact form + social links        |

## Connect

- **LinkedIn:** [pramodpandit](https://www.linkedin.com/in/pramodpandit/)
- **GitHub:** [pramodpandit72](https://github.com/pramodpandit72)
- **LeetCode:** [PramodPandit](https://leetcode.com/u/PramodPandit/)
- **GeeksforGeeks:** [pramodpandit](https://www.geeksforgeeks.org/profile/pramodpandit)
- **HackerRank:** [nwdpramod1230591](https://www.hackerrank.com/profile/nwdpramod1230591)

## License

This project is open source and available under the [MIT License](LICENSE).