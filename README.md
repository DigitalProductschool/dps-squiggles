# Funky squiggly lines for the DPS Website

Here we have a little script that uses animated SVG graphics with a mix of hardcoded paths and programmatically generated attributes to create these fun decorations for the website of the Digital Product School.



## Usage

Any HTML element with the class `.dps-squiggle` and a few required data-attributes will get an animated SVG injected.

Attributes for all squiggles

- data-type: can be any of `underlined`, `circled`, `shine`, `wave`, `sadface`, `90days`, ...(tbd)
- data-color: set the stroke color as a hex code, i.e. `#FF00A1`
- data-stroke: thickness of the stroke, i.e. `8`
- data-duration: set the duration of the animation, i.e. `2s`
- data-delay: (optional) if the animation should begin playing with a delay of, i.e. `1s`
- data-rotate: (optional) rotate the SVG, i.e. `30deg`

For an example, open the developer tools of your browser and take a look at the HTML source code of this page.

Careful: When you want a squiggle relative to several words, please make sure to use a non-breaking space `&nbsp;` in between them, otherwise the position will be messed up when the texts get's broken into several lines.


## Keep in mind

The SVG animations are only injected after the page has loaded. If that takes a lof of time, the graphics might appear with a delay although other content is already rendered. Also if the page content changes dynamically, you probably won't get animations injected.


## For developers

I'm deeply sorry, but there's no automatic deployment pipeline for this yet. In order to create/release a new version, you need to:

- Develop as usual with `npm start` and if you did fancy new stuff, don't forget to document it here
- When done, update the version number in `package.json`
- Run `npm run build` to package the Javascript
- Move `build/static/js/main.something.js` into `dist/` and rename it to index.js
- Remove the last line referencing the source map from the index.js file
- Commit and push the changes to the repo (will deploy to Vercel)
- Run `npm publish --access public` to publish the library to NPM and UNPKG
- Embed the script into the website of your choice with `<script type="text/javascript" src="https://unpkg.com/@dpschool/squiggles@0.6.0/dist/index.js"></script>`

## Whoaaa...?

Something is broken or missing? Don't be sad, let us know!