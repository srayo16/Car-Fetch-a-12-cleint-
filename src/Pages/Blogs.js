import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto mb-40'>
            <h1 className='text-primary text-center text-4xl font-semibold my-10'>Blogs Question Answer</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title'>How will you improve the performance of a React Application?</h2>
                        <p>Before optimizing a React application, we must understand how React updates its UI and how to measure an app's performance. This makes it easy to solve any React performance problems.Re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code. we must only memoize a component when necessary.To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.</p>
                    </div>
                </div>

                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>One should never update the state directly because of the following reasons:If you update it directly, calling the setState() afterward may just replace the update you made.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.You will lose control of the state across all components.you shouldn’t mutate state, even if you immediately call setState. Optimized components might not re-render if you do, and the rendering bugs will be tricky to track down.</p>
                    </div>
                </div>

                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title'>What are the different ways to manage a state in a React application?</h2>
                        <p>There are some main types of state you need to properly manage in your React apps .useState is the first tool you should reach for to manage state in your components.It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots of props. you need to turn global state like the Context API .You can use react query .</p>
                    </div>
                </div>

                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title'>What is a unit test? Why should write unit tests?</h2>
                        <p>Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests. If the test relies on an external system, it is not a Unit Test. Unit Tests should be written during the design phase, prior to implementation to prevent defects from being deployed to production.They should be run every time the code is changed and provide a clear description of the feature being tested.Unit Testing can be done manually but it is usually automated. In terms of automated tests, there is a concept called the test pyramid that shows how to efficiently balance the automated tests.</p>
                    </div>
                </div>

                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title'>How does prototypical inheritance work?</h2>
                        <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;