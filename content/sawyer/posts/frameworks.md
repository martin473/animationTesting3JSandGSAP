---
slug: "frameworks"
title: "Oops I'm Five Paradigms Deep"
date: "April 23, 2025"
description: "Modern development uses frameworks that are built on top of many moving pieces."
heroImage: "https://www.sawyersweet.net/images/og/turtles.webp"
---

Modern development uses frameworks that are built on top of not one but two or more frameworks.

My first Go website is a perfect example.

It uses Hextra, which is a flavor Hugo, Tailwind, and NextJS. Tailwind and Next are flavors of CSS and React (a flavor of Javascript.) Hugo itself is a flavor of Go. The specific file for this blog post is in Markdown, which is interpreted by a Goldmark flavor of markdown, read by Go and assembled with many other disparate files to create this single page.

This framework analyzes the config files and content files on a cloud server and then delivers a translated HTML/CSS/Javascript package to the end user. Each step is converted to machine code, specific to each OS/Processor combo in order to actually run the program on the computer you are using.

It's pretty normal for frontend, but we often forget how many moving pieces there are.

In my personal opinion, this is due to a lot of factors, two big ones being that computer logic is essentially real time mathematics, and that mathematics operates using discrete transformations, which is very similar to what computer software does on every level. The second factor is the combination of physical entropy and human civilization. Realistically it's not possible to get everyone on the planet to lockstep into best practices, needs day to day and city to city are completely different, and things are constantly falling apart. So you end up with a bunch of differing interests slapped together, using what previous available parts they can until the entire system needs to be reinvented. Humbly, I think this is intractible and a good reason to learn to work between paradigms rather than wishing for a universal one.

I call this "The Law of Specificity." It just means that everything that is happening is specific, therefore there is no generalizeable solution. It's similar philosophically to Gödel's Incompleteness Theorems.

It's not that "you can never know ANYthing." It's just that "your attempt to know NEE thing will never let you know EVERYthing."

Frameworks make most development easier, but not all. Well treaded concepts and included edge cases are extremely easy to execute. And then you break the paradigm by pushing it forward, asking for something it wasn't built to do.

On another site, I tried to use an SVG as a button in NextJS. Next handles the click itself. Tailwind handles the SVG. However Next doesn't consider an SVG a button, so you have to write custom code not in Next, but in React, ported into Next to send a signal from the child SVG to it's parent container to say "I've been clicked." This should be relatively easy. In Tailwind, which handles the parent and child CSS objects, you can have a parent communicate to a child that something has happened. However, because of limitations in CSS, which Tailwind is built on, you can't do the reverse! So because of Next and CSS's limitations there's no clear and easy way to have custom behavior around clicking on an SVG. Luckily, everyone has run into this problem, so there are many workarounds. In fact, there are multiple libraries/paradigms you can install on top of NextJS to do this exact thing.

When you break a paradigm, you have to figure out which layers you're working between. You also want a good sampling of the solutions out there. Paradigms are really beautiful gated communities. When you're working inside them, things flow pretty seamlessly. But once you get into custom functionality, the complexity can cause a lot of unintended consequences. Almost everything you ever build will require custom functionality. The irony is that the paradigms you use will never quite include what you need, but if you go and build your own, you will just recreate the same issue. Ironically as well, your hacked together solution ends up being a patch to the system that helps other users move through the same issue with more ease. It's a feature, not a bug.

It's nice to know what part of the matrix you're tinkering with, and also why people made this or that "arbitrary" decision. In the case of my SVG nightmare, I wanted to "quickly just do this one thing." Which turned into a week of running into walls, and eventually settling for the thing I was avoiding, which was installing and using the SVG library everyone kept recommending

It is really, really easy to get lost reading the wrong documentation because you didn't know it couldn't do something, and there's no obvious place to find it.

If you want to navigate the learning process, it's super helpful to understand which framework you're thinking in at the moment, what are its limitations, and where you would go next. It's also really, really important to understand the syntax of the framework and a bit of what it's doing under the hood. A single block of Next code can involve Typscript, HTML, Tailwind arguments, and React/Next/JS code. Knowing which is which goes lightyears towards helping you figure out which documentation file to open when problem solving.

Good luck!
