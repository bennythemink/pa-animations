# Astro Starter Kit: Basics

## Integrations

This project includes the following dependencies as NPM packages:

- [GSAP](https://www.npmjs.com/package/gsap) (GreenSock Animation Platform)
- [Lenis](https://www.npmjs.com/package/@studio-freight/lenis) (Smooth scrolling)
- [Tailwindcss](https://www.npmjs.com/package/tailwindcss) (Utility-first CSS framework, integrated with Astro)

All are installed locally and not via CDN.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Project Specific Information

| Weight | Name             |
| :----- | :--------------- |
| 100    | Thin             |
| 200    | Extralight       |
| 300    | Light            |
| 400    | Regular (normal) |
| 500    | Medium           |
| 600    | Semibold         |
| 700    | Bold             |
| 800    | Extrabold        |
| 900    | Black            |

Tailwind utility classes follow the same naming: font-thin, font-extralight, font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold, font-black.

## Case Study Images

The individual case study pages have a number of images. Each image type has its own aspect ratio, as shown in the table below. When creating images for these, ensure that you crop them using the below ratios for best results.

| Prop           | Container aspect | Crop to  |
| -------------- | ---------------- | -------- |
| `heroImage`    | `aspect-video`   | **16:9** |
| `squareImages` | `aspect-square`  | **1:1**  |
| `wideImages`   | `aspect-16/7`    | **16:7** |
