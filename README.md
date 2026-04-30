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

| Prop           | Container aspect | Crop to  | Use.         |
| -------------- | ---------------- | -------- | ------------ |
| `heroImage`    | `aspect-video`   | **16:9** | 1st row      |
| `squareImages` | `aspect-square`  | **1:1**  | 2nd row      |
| `wideImages`   | `aspect-16/7`    | **16:7** | Other rows   |
| `tile`         | `aspect-square`  | **1:1**  | Listing page |

## Publishing Case Studies

For SEO purposes not all case studies are published on site launch. It is better to keep an active site so it is planned on launching one case study per month. These are the steps you must take to do so:

1. Move the case study to publish from the 'pages/case-studies/private' folder into its parent folder.
2. Open the case study page and remove the 'published={false}' from the Layout component.
3. Open the 'caseStudies.ts' file, find the case study in the caseStudies array, change its 'published' property to true.
4. Push to main + remote

## Moving To Production

Make sure you update the robots.txt file! In the public directory, open the robots.txt file and change the line `Disallow: /` to `Allow: /`
