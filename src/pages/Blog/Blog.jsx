import React from 'react';
import blogOne from '../../assets/blog-1.jpg'
import blogTwo from '../../assets/blog-22.png'
import blogThree from '../../assets/blog-3.jpg'
import blogFour from '../../assets/blog-4.png'
const Blog = () => {
    return (
        <div className='my-10 p-5'>
            <h1 className='text-center text-2xl font-bold text-green-500 my-4' data-aos='fade-down'>Our Blogs</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                <div className="card card-compact bg-base-100 shadow-xl" data-aos='fade-right'>
                    <figure><img src={blogOne} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h3 className='text-xl font-bold text-green-600'>What are the different ways to manage a state in a React application?</h3>
                        <p>
                            The Four Kinds of React State to Manage.
                            1.Local state :  Local state is data we manage in one or another component.
                            2.Global state : Global state is data we manage across multiple components.
                            3.Server state :  Data that comes from an external server that must be integrated with our UI state.
                            4.URL state : Data that exists on our URLs, including the pathname and query parameters.
                        </p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl" data-aos='fade-left'>
                    <figure><img src={blogTwo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h3 className='text-xl font-bold text-green-600'>How does prototypical inheritance work?</h3>
                        <p>
                            There's arguably no simpler way to create an object than an object literal or "engulfing" an existing object.
                            Prototypal OO can express everything good class-based OO can (up to and including traits and talents), but by using fewer main concepts (AbstractBaseClassFactoryInterfaceFactory, anyone?). This means in the beginning you don't need to worry your head with these things, but later there might be some code overhead to make, say, private variables or all these other things (for example for private you use closures and a special pattern, for traits you have to have the code to support them somewhere in your program, etc.).
                        </p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl" data-aos='fade-right'>
                    <figure><img src={blogThree} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h3 className='text-xl font-bold text-green-600'>What is a unit test?Why should we write unit tests?</h3>
                        <p>
                            A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                            Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently
                        </p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl" data-aos='fade-left'>
                    <figure><img src={blogFour} alt="Shoes"/></figure>
                    <div className="card-body">
                        <h3 className='text-xl font-bold text-green-600'> React vs. Angular vs. Vue?</h3>
                        <p>
                            There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.
                            React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.
                            They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.
                            Each framework is component-based and allows the rapid creation of UI features.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;