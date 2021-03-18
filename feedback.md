Good job, Princess! The create and delete functionality works really well. I have some overarching feedback about the flow of creating a new problem. Currently, when you create a new problem, it redirects to the /problems route where it shows you the problem that was most recently created. The way you might want this to flow is after creating a new problem, that problem is displayed on the list of problems in your App.js. I made some comments about this in the `SingleProblem.js` file and the `server/index.js` and `server/router.js` files.

Also both `public/bundle.js` and `dist/main.js` should be added to your `.gitignore`. if it isnt code you wrote, it shouldn't be in your repo.

