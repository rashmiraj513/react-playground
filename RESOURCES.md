# Resources

## Library Documentation

- [React Documentation](https://react.dev/learn)
- [Create React App](https://create-react-app.dev/)
- [Vite: Getting Started](https://vitejs.dev/guide)
- [Vite](https://vitejs.dev/guide/why.html) (Why Vite is so fast)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React Router](https://reactrouter.com/en/main)
- [React Leaflet: Installation](https://react-leaflet.js.org/docs/start-installation/)
- [Redux: Style Guide](https://redux.js.org/style-guide) (A must-read for Redux users!)
- [Redux Toolkit](https://redux-toolkit.js.org/tutorials/overview)
- [React Redux](https://react-redux.js.org/api/hooks)

## React Basics
- [Theory Slides](https://drive.google.com/file/d/1RapgJeP5eGjciidYyvogy4_lhGQzH9MC/view?usp=sharing)
- [Adding React URL to an HTML Document](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html)
- [Resources to use](https://codingheroes.io/resources/)

## React Intermediate
- [Writing Resilient Components](https://overreacted.io/writing-resilient-components/) (By Dan Abramov from the React team)
- [Things I think about when I write React code](https://github.com/mithi/react-philosophies) (GitHub Repository)
- [A (Mostly) Complete Guide to React Rendering Behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/) (By Mark Erikson from the redux team)
- [A Visual Guide to React Rendering - It Always Re-renders](https://alexsidorenko.com/blog/react-render-always-rerenders) (A multi-part series, check out the other ones)
- [A Cartoon Intro to Fiber](https://www.youtube.com/watch?v=ZCuYPiUIONs) (YouTube Video)
- [What is React Fiber? React.js Deep Dive](https://www.youtube.com/watch?v=0ympFIwQFJw) (YouTube Video)
- [The React and React Native Event System Explained](https://levelup.gitconnected.com/how-exactly-does-react-handles-events-71e8b5e359f2)
- [Under the hood of event listeners in React](https://gist.github.com/romain-trotard/76313af8170809970daa7ff9d87b0dd5)
- [A DIY guide to build your own React](https://github.com/pomber/didact)
- [useSyncExternalStore First Look](https://julesblom.com/writing/usesyncexternalstore)
- [Under the hood of React's hooks system](https://gist.github.com/romain-trotard/76313af8170809970daa7ff9d87b0dd5)
- [Why do React Hooks rely on call order?](https://overreacted.io/why-do-hooks-rely-on-call-order) (By Dan Abramov)
- [So you thnk you know everything about React refs](https://thoughtspile.github.io/2021/05/17/everything-about-react-refs/)
- [react-use: Reusable React Hook Library](https://github.com/streamich/react-use) (GitHub Repository)
- [react-hookz: React hooks done right](https://github.com/react-hookz/web) (GitHub Repository)

## React Advance
- [Tao of React - Software Design, Architecture & Best Practices](https://alexkondov.com/tao-of-react/)
- [The new wave of React state management](https://frontendmastery.com/posts/the-new-wave-of-react-state-management/) (Excellent read!)
- [A Visual Guide to React Rendering - useMemo](https://alexsidorenko.com/blog/react-render-usememo/)
- [React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/) (By Dan Abramov from the React team)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) (Official React docs)
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) (By Dan Abramov)
- [useEffect sometimes fires before paint](https://thoughtspile.github.io/2021/11/15/unintentional-layout-effect/)
- [Making setInterval declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks) (By Dan Abramov)
- [Redux - Not Dead Yet!](https://blog.isquaredsoftware.com/2018/03/redux-not-dead-yet) (By Mark Erikson from the Redux Team)
- [Why React Context is not a 'State Management' Tool](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/) (By Mark Erikson)

## React Professionals
- [React Libraries for 2023](https://www.robinwieruch.de/react-libraries/)
- [Styled Components best practices](https://www.joshwcomeau.com/css/styled-components/)
- [A Through Analysis of CSS-in-JS](https://css-tricks.com/a-thorough-analysis-of-css-in-js)
- [Practical React Query](https://tkdodo.eu/blog/practical-react-query)
- [React Query meets React Router](https://tkdodo.eu/blog/react-query-meets-react-router)
- [Picking the right React component problem](https://www.benmvp.com/blog/picking-right-react-component-pattern/)
- [Bulletproof-react: A simple, scalable, and powerful architecture for building production-ready React applications](https://github.com/alan2207/bulletproof-react/)
- [Tailwind CSS: Installation with Vite](https://tailwindcss.com/docs/guides/vite)
- [styled-components](https://styled-components.com/docs)
- [Supabase JavaScript Client Library](https://supabase.com/docs/reference/javascript/installing)
- [TanStack (React) Query v4](https://tanstack.com/query/v4/docs/framework/react/overview)
- [Recharts](https://recharts.org/en-US/examples)
- [date-fns](https://date-fns.org/docs/Getting-Started/)

## Keep Reviewing - Easily Forgettable

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


## Credits
These resources are from the Udemy Course [**The Ultimate React Course 2024: React, Next.js, Redux & More**](https://www.udemy.com/course/the-ultimate-react-course/) by [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/).