# React Playground Repository

Welcome to my React Learning repository! This repository is dedicated to helping me learn and practice React. It contains a variety of exercises, tutorial codes, and mini-projects designed to enhance my
understanding of React.

## Topics

## Projects

## Resources

- [Theory Slides](https://drive.google.com/file/d/1RapgJeP5eGjciidYyvogy4_lhGQzH9MC/view?usp=sharing)
- [React Documentation](https://react.dev/learn)
- [Create React App](https://create-react-app.dev/)
- [Vite: Getting Started](https://vitejs.dev/guide)
- [Adding React URL to an HTML Document](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html)
- [Resources to use](https://codingheroes.io/resources/)

## Forgettable

### Truthy and Falsy

- In JavaScript, there are two types of values: `truthy` and `falsy`.
- Truthy values are values that evaluate to true when used in boolean context while falsy values evalute to false.
- The following values are falsy in JavaScript: `false, 0, -0, NaN, null, undefined, and "" (Empty String)`.

- All other values are truthy.

### Short Circuiting

- Short Circuiting is a feature of the logical operators (&&, ||) in JavaScript that allows them to return a value without evaluating the whole expression.
- It works by evaluating an expression from left to right and returning the value of the first operand that determines the final result.
- For example, in the expression `false && true`, the `&&` operator will return `false` as soon as it evaluates the first operand, `false`. This is because the `&&` operator returns `true` if both the operands are `true`.

### Logical AND (&&)

- In a logical operation involving `&& (AND)`, if the first operand is falsy, JavaScript will short-circuit and return the first operand without evaluating the second operand. If the first operand is truthy, JavaScript will return the second operand.

### Logical OR (||)

- In a logical operation involving `|| (OR)`, if the first operand is truthy, JavaScript will short-circuit and return the first operand. If the first operand is falsy, JavaScript will return the second operand.

### NULLISH COALESCING Operator (??)

- The NULLISH COALESCING Operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or, `undefined` otherwise returns its left-hand side operand.

## Some Important Points about React

- React uses JSX and JSX is **Declarative** (Focuses on the program's goal or end result, without specifying how to get there.) whereas Manual DOM element selections and DOM traversing is **Imperative** (Focuses on how the program should achieve its goal, by explicitly specifying each step, or instruction, that changes the program's state. Imperative programming is similar to pseudocode).

## Self Scaffolded React Directory

The folder `00_introduction/react` is created with minimal requirements of React.

## Scaffolded using `create-react-app` command

In this repository, multiple projects (From the folder `03\_pizza-menu` onwards) was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Credits

This repository follows the Udemy Course [**The Ultimate React Course 2024: React, Next.js, Redux & More**](https://www.udemy.com/course/the-ultimate-react-course/) by [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/).
