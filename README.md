# Laya Khathoon | Portfolio

My personal portfolio as a Computer Science student, sharing the machine learning and AI projects I am building, my technical interests and my internships.

**[View portfolio](https://laya-khathoon.github.io/portfolio/)**

## Overview

The current portfolio is a single scrolling page with a cream-and-dark colour palette, large typography and navigation links to Work, Hackathons, Learning, Expertise, About and Connect.

### Features

- Project cards with descriptions, real live-app screenshots where available, and links to source code.
- A near-top Download Resume button with a current one-page PDF. The website copy omits phone number and location.
- Skills, dated internships, hackathon participation and learning milestones.
- Responsive layouts for smaller screens.
- Staged intro animations, scroll-reveal effects, a scrolling skills strip and hover effects.
- Reduced-motion support and visible keyboard-focus styles.
- Direct links to GitHub and LinkedIn.

## Projects and milestones

The homepage separates deployed apps from in-progress builds:

- FirstJob Agent, PageSage, Customer Churn Prediction and Neural Network Studio have app and code links.
- Layalabs Forge Agent is an in-progress Forge-a-thon entry, not a completed submission.
- AgentForge is a separate local Python/Ollama prototype.
- Student Performance Analysis, MindScribe, the planned deepfake-audio work and Pharmacy Management System are listed under More Projects.

Hackathons have their own section: Code for a Billion (submitted), Forge-a-thon (in progress), and KANZ AI Training Hackathon II (upcoming, seat confirmed for January 2027).

Learning separates the completed One Million Prompters course from enrollment in YUVA AI for All and the Walmart Advanced Software Engineering simulation on Forage. A simulation is not employment.

FirstJob Agent, PageSage and Customer Churn Prediction use cropped screenshots of their live app interfaces, captured without personal data. The two local agent projects use clearly labelled text panels rather than simulated screenshots. The portrait area is reserved for a personal photo. Free-hosted demos may sleep between visits.

## Built with

- HTML
- CSS
- Vanilla JavaScript

The current page keeps its styles and scripts inside `index.html`. It does not require a framework, package installation, build step or backend.

## Run locally

Clone the repository:

```bash
git clone https://github.com/laya-khathoon/portfolio.git
cd portfolio
```

Open `index.html` in a browser, or open the folder in VS Code and use Live Server.

## Repository structure

```text
portfolio/
├── index.html          # Current single-page portfolio, styles and scripts
├── README.md
├── about.html          # Earlier multi-page version
├── achievements.html   # Earlier multi-page version
├── gallery.html        # Earlier multi-page version
├── contact.html        # Earlier multi-page version
├── css/style.css       # Styles used by the earlier pages
├── js/script.js        # Scripts used by the earlier pages
└── assets/images/      # SVG assets used by the earlier pages
```

The earlier pages remain in the repository, but the current homepage navigates between sections of `index.html`.

## Customize

Edit `index.html` to update:

- Project names, descriptions, status labels and repository links.
- Skills, internships and About text.
- GitHub and LinkedIn links in the Connect section.
- Colours and layout in the inline `<style>` block.
- Animations in the CSS and the inline script near the end of the file.

The current Connect section links to social profiles; it does not contain a contact form. The older `contact.html` form has no message-delivery backend.
