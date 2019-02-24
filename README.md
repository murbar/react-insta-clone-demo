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

What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes allow us to type check the data we pass into our components. This is more and more important as our application and amount of data being passed between components grows. PropTypes are lightweight and we can drop them into any place in our app that makes sense. They prevent a whole category of bugs and make our app more reliable and easier to maintain.
