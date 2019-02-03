# SwissQuant Tech Assessment

Find the code here: https://github.com/Furizaa/tech-assessment-swissquant

### Notes about the solution:

The assessment was quite extensive. So the solution, while having an aceptable code quality, doesn't have the usual polish I invest in the UX/UI.

- I've used the foundation of a recent assessment I made. Thats why the solution uses Next.js
- The data transformation heavylifting is offloaded in a web worker thread to keep the UI responsive. Another solution would be to preprocess the data; but that would be impractical if the data is dynamically provided by an API.
- There are no Tests as they were not requested. But it would be wise to test the more complex logic if only for documentation reasons.
- The solution is optimized for desktop viewports. Mobile devices were not considered.
- Invalid dates in the filter should be handled graceful but there is no error message implemented.
- A11y was not considered.

### Running

- Remove the option `target: 'serverless'` in `next.config.json`
- `npm install`
- `npm run build`
- `npm run start`
