---
slug: "theonlynextpost"
title: "The ONLY NextJS Post New Devs Should Read"
date: "September 9, 2025"
description: "The NextJS documentation is amazing BUT ONLY EXPLAINS 1/5th of what is happening under the hood."
heroImage: "https://www.sawyersweet.net/images/og/nextjs.jpeg"
---

I’m going to give you all the links you’ll ever need to write NEXT.JS.

Then I will explain what you need to know BEFORE YOU READ ANY of them

https://www.typescriptlang.org/

https://nextjs.org/

https://tailwindcss.com/

https://developer.mozilla.org/en-US/

https://react.dev/learn

https://ui.shadcn.com/

https://getnextjsthemes.com/free-nextjs-templates

https://motion.dev/

https://gsap.com/

https://threejs.org/

By the time you’re done with this tutorial you’ll understand what each link is, why it matters, and when to read it.

NEXT.JS is my favorite frontend stack. It’s very popular.

It is very simple on the surface, but it is doing a lot of complex things underneath. You won’t use most of its features on your first project.

Next makes development extremely fast because it’s easy to create and reuse components. It deploys to Vercel in one click and their webhosting is free for low usage. Its very good for prototyping new sites and deploying small projects.

Next is a language, like Django, built for scalability. If your site grows with NEXT you’ll be able to serve a lot of users.

The biggest downside to Next is that it’s 10 frameworks in a trench coat. That is just what happens as complexity scales without extremely deep reworks of the entire underlying system.

So what is NEXT? Why haven’t we touched code yet? Like I said next is 10 frameworks in a trench coat. Let’s take a look at those frameworks:

## HTML/CSS/Javascript

HTML is the cuneiform of web development. Web devs used to carve sites out of stone in HTML and individually set the styles of each line of text by hand.

CSS allowed them to batch apply style to an entire website with stylesheets.

Javascript allowed them to code logic inside of a website.

HTML/CSS/Javascript are at the bottom of this stack. They function as intended and are very performant, but due to their age, they’re unwieldy to code scalable, responsive web apps in.

In NEXT, you won’t be doing a ton in raw HTML/CSS/JS but you will constantly be switching between frameworks that use them within the same document.

In NEXT you’ll write in multiple frameworks that use all three within the same file.

Read the MDN docs for more: https://developer.mozilla.org/en-US/

The most important thing you should learn from MDN is how the DOM works.

## Tailwind

Tailwind is the simplest, of the larger frameworks. CSS is very powerful, but it gets very confusing when you have to jump back and forth between in your IDE your .css styles file (globally, for individulat pages, and for the current subfolder) and your individual files that the style applies to.

Tailwind’s biggest win is that you can toss CSS classes into the middle of your NEXT file and it will handle them the same way a .css styles file would. You can technically do that in raw HTML, but Tailwind provides a lot of quality of life changes that makes it faster and easier to manage.

Read the Tailwind docs for more: https://tailwindcss.com/

The two paradigms that make tailwind easier are understanding flexbox/alignment inheritance and imports.

Tailwind also uses the class variable in an HTML tag to determine what to do with your code. NextJS with Tailwind uses the className variable. If you are copying and pasting tutorial code from the Tailwind docs, change class to className in Nextjs.

## React

React is basically Javascript+. Javascript gets the job done, but it is not so great at being a robust programming language with reusable, scalable features. If you read a lot of old documentation, dealing with await calls, extending or copying features, and a lot more gets really verbose. For new devs this means that you’re just writing a LOT of code to do things that other languages like python can do in one line.

The biggest thing React does better than Javascript is managing the state of your application. If you have a component on your frontend that is storing a variable, and you need the rest of the site to interact with it, React has a bunch of features that make it a lot easier than Javascript.

Javascript is a frontend language. Because of this does a lot of work asynchronously. It expects to wait for user input, reload and rerender the page with new information, and communicate between the client and server.

NEXT streamlines most of this. React excels at managing the state of your application. When you start to write stateful components you will find yourself dipping into React.

Read the React docs for more: https://react.dev/learn

Read about useState and useEffect to learn about variable updates and page refreshing within React.

## Typescript

Typescript layers OOP on top of Javascript. The biggest benefit is that it gives better error messages. Javascript is notoriously bad at giving errors. You will get things like “error object undefined.” It’s very hard to debug that as your application increases in scale.

Typescript will say “Object User is missing ‘name’ variable”. And you can very quickly realize that you just forgot to add the username to the function call. Problem solved. It will even highlight it in red in Visual Studio Code so you can fix it before you deploy.

Typescript also makes OOP concepts like interfaces, prototypes, parent-child relationships, and object extension super easy.

Typescript will let you do the final step of creating reusable site components with regards to creating and extending prototypes, other OOP features, and better debugging.

Read the Typescript docs for more: https://www.typescriptlang.org/

## Next.js

NextJS is where most people start, but it’s actually the finishing piece of this entire tech stack. Next wraps all of these frameworks into a final, bigger framework.

The first thing you should learn about NextJS is file structure. It’s going to structure your site in either page or app router formats. The way you handle creating pages will be heavily based on what you choose.

NextJS handles a lot of things like lazy loading, optimizing image loading, efficient content delivery, and more.

It also can serve as a very small backend. The easiest way for it to act as a backend is to have it handle 3rd party API queries. Let’s say you are fetching weather data but you don’t want to expose your API key publicly. You can make server side API calls that use your key, request data from the weather site, and then serve them to the client page. You can also in some cases have some very light json databases that store data, provided the act of searching through them for that data isn’t too difficult. The bonus is that you don’t really have to do a lot of web admin or branch out into another language.

With NEXT, you can create a file that uses styles, OOP, stateful and restful paradigms, and put it all in one .tsx file.

Read the NextJS docs for more: https://www.typescriptlang.org/

## Shadcn/MaterialUI/Tailwind+ and other

Realistically, you shouldn’t have any UI elements. The web is old and there are tons of free, open source UI kits out there.

A UI kit is a bunch of elements prebuilt for you to create a site.

If you use shadcn, you just declare a new menu bar with items, icons and any other components you need, instead of building the concept and design of a menu from scratch.

If you’re building a quick website you can also alter a prebuilt template instead of building everything from scratch. A month of development can be shortened into a day of template editing.

Other UI kits that are well known are MaterialUI and Tailwind+ (paid).

Read more about shadcn here: https://ui.shadcn.com/

Browse prebuilt next templates here: https://getnextjsthemes.com/free-nextjs-templates

## Motion, GSAP, & Three.js

Motion and GSAP are the animation libraries. They are beautiful and relatively easy to use.

Motion is very easy to implement and does quite a lot, but once you get beyond that, you are pretty limited and end up recreating code that GSAP already does.

Most devs won’t even need these libraries as there’s already a ton of very basic animation in Tailwind for mouse hovering, clicking, scrolling, etc. But if you need more power these are the two I recommend.

Three.js is 3D animation. It’s closer to Unity in spirit. It uses OpenGL to render 3D images on the client side. It’s a completely different language and coding paradigm than all of these other tools.

With these three, if you’re an artist, animator itching to do very, very cool things these are the way to go.

Read more about these languages here:

https://motion.dev/

https://gsap.com/

https://threejs.org/

## Conclusion

If you’ve gotten this far congrats. Reading this at the start would have saved me a year of learning. Most devs I talk to don’t structure their knowledge of NextJS in this way nor explain it this way.

If you are overwhelmed, that’s normal. I just dumped a ton of information on you and then about 5 books worth of documentation.

If you are just starting out it helps to learn in chunks, go to each section, and just try to read a page on one of the ideas I talk about.
