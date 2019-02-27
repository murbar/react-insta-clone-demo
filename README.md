# I've been studying intermediate React this week 📚

This project isn't too interesting, functionality-wise. We were tasked with building an "Instagram clone" to practice some more advanced React concepts. While I'm excited to move on to something new, I've learned plenty about the library and some common patterns for building UIs in React.

[See it live here.](https://jb-insta-clone.netlify.com/)

## Concepts explored

- React tooling
  - Bootstrapping with `create-react-app`
  - Prop type checking with `prop-types`
- The component life cycle
  - Mounting, Updating, Unmounting
  - Where `contstructor` and `render` methods fit in
  - Using `componentDidMount` to set state post render
- Component composition patterns
  - Higher order components
  - State Driven Development
- CSS in JavaScript
  - Importing style sheets in JS
  - Reactstrap
  - `styled-components` for centralizing component state, logic, and view in one location

## Takeaways

- PropTypes allow us to type check the data we pass into our components. This is more and more important as our application and amount of data being passed between components grows. PropTypes are lightweight and we can drop them into any place in our app that makes sense. They prevent a whole category of bugs and make our app more reliable and easier to maintain.
- React provides a number of component methods that allow us to hook into different stages of a component's life cycle. The three main phases of a component's life cycle are mounting, updating, and unmounting. We can use componentDidMount, for example, to fetch app data from an API after a component is initially rendered on screen, providing a better experience for the user.
- Higher order components are a component composition pattern that allow us to share data and behavior between components without duplicating code. HOCs take in a component as an argument and return a new component with added state/functionality. We can use them as a container for other components that performs some logic to conditionally render those components. Authentication is one use case for this pattern where we render either the app view or a login view based on a check of the user's credentials.
- Styling in React can be accomplished in a few different ways. There are traditional style sheets and associated tooling (LESS, Sass, PostCSS), we can import a pre-built library of styled components (Reactstrap), or we can roll our own styled components with styled-components. There are pros and cons for each and what you'll use will be largely dependent on the nature of the project and the preferences of your team. Styled components allow us to write CSS inside of JS much like we approximate HTML with JSX. This potentially consolidates the state, logic and view of our components into one location or file. Some developers are comfortable with this mixing of technologies and some are not.
