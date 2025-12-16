const roadmapData = {
    "Foundations": {
        description: "The boring stuff you skipped to learn React. Go back and learn it properly.",
        items: [
            { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", desc: "Glorified XML. You'll spend 50% of your time remembering which tag is semantic.", mustLearn: true },
            { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", desc: "The art of centering a div and crying when it breaks on mobile.", mustLearn: true },
            { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", desc: "The language that lets you do anything, including shooting yourself in the foot. Repeatedly.", mustLearn: true },
            { name: "Browser APIs", link: "https://developer.mozilla.org/en-US/docs/Web/API", desc: "Fetch, LocalStorage, and other magic you copy-paste from MDN without reading the docs." },
        ]
    },
    "Core Frontend": {
        description: "The tools you actually use. Or strictly speaking, the tools you complain about.",
        items: [
            { name: "TypeScript", link: "https://www.typescriptlang.org/docs/", desc: " spending 3 hours fixing 'any' type errors to save 5 minutes of debugging later.", mustLearn: true },
            { name: "React", link: "https://react.dev/", desc: "The library everyone hates but can't get a job without. `useEffect` will be your ruin.", mustLearn: true },
            { name: "Next.js", link: "https://nextjs.org/docs", desc: "React, but with opinions, vendor lock-in, and a distinct lack of `index.html`.", mustLearn: true },
            { name: "Tailwind CSS", link: "https://tailwindcss.com/docs", desc: "Writing CSS in your HTML like it's 1999, but now it's 'modern' and 'scalable'.", mustLearn: true },
            { name: "Modern CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", desc: "Fancy features like :has() that you can't use because your client is on Safari 12." },
        ]
    },
    "State Management": {
        description: "Complicated ways to move a boolean from A to B.",
        items: [
            { name: "Redux Toolkit", link: "https://redux-toolkit.js.org/", desc: "Boilerplate for your boilerplate. But hey, at least you have time travel debugging!" },
            { name: "Zustand", link: "https://docs.pmnd.rs/zustand", desc: "Redux for people who value their sanity and free time.", mustLearn: true },
        ]
    },
    "Data Fetching & APIs": {
        description: "Asking the backend for data and handling the 500 error they send back.",
        items: [
            { name: "REST API", link: "https://developer.mozilla.org/en-US/docs/Glossary/REST", desc: "Old reliable. It works, mostly. Until you need that one extra field.", mustLearn: true },
            { name: "GraphQL", link: "https://graphql.org/learn/", desc: "Ask for exactly what you want, and get a complex caching headache in return." },
            { name: "TanStack Query", link: "https://tanstack.com/query/latest", desc: "Because `useEffect` for data fetching is a crime against humanity.", mustLearn: true },
            { name: "Axios", link: "https://axios-http.com/docs/intro", desc: "Because `fetch` syntax is apparently too hard for us to remember." },
        ]
    },
    "Forms": {
        description: "The reason most frontend developers drink.",
        items: [
            { name: "React Hook Form", link: "https://react-hook-form.com/", desc: "Making forms slightly less painful. You'll still cry, but less.", mustLearn: true },
            { name: "Formik", link: "https://formik.org/docs/overview", desc: "The old king. Still hanging around legacy codebases like a ghost." },
        ]
    },
    "Rendering & Architecture": {
        description: "Buzzwords to explain why your site takes 3 seconds to load.",
        items: [
            { name: "CSR", link: "https://nextjs.org/docs/app/building-your-application/rendering/client-components", desc: "Loading spinners. Loading spinners everywhere." },
            { name: "SSR", link: "https://nextjs.org/docs/app/building-your-application/rendering/server-components", desc: "Render on the server so the user sees a white screen slightly faster.", mustLearn: true },
            { name: "SSG", link: "https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation", desc: "Blazingly fast, until you need to change a typo and rebuild the whole internet." },
            { name: "ISR", link: "https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration", desc: "Static sites that aren't actually static. Vercel magic." },
            { name: "Hybrid Rendering", link: "https://vercel.com/blog/hybrid-rendering", desc: "A little bit of everything to ensure your codebase is impossible to debug." },
            { name: "Islands Architecture", link: "https://jasonformat.com/islands-architecture/", desc: "Hydrating only the stuff that clicks. The rest is just dead HTML." },
            { name: "Routing", link: "https://reactrouter.com/", desc: "Changing the URL without refreshing the page. Simple concept, complex implementation.", mustLearn: true },
            { name: "Mobile-First", link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries", desc: "Designing for 320px screens because users love suffering." },
        ]
    },
    "Componentization & UI Libraries": {
        description: "Why build it yourself when you can npm install 50MB of dependencies?",
        items: [
            { name: "Micro-Frontends", link: "https://micro-frontends.org/", desc: "How to take a simple monolith and turn it into a distributed nightmare." },
            { name: "Module Federation", link: "https://webpack.js.org/concepts/module-federation/", desc: "Webpack black magic. Do not touch unless you are a wizard." },
            { name: "Web Components", link: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components", desc: "The standard that's been 'the future' for the last 10 years." },
            { name: "MUI", link: "https://mui.com/", desc: "If you want your app to look exactly like every other Google enterprise product." },
            { name: "Tailwind UI", link: "https://tailwindui.com/", desc: "Paid components for your free framework. It looks good though." },
            { name: "Shadcn UI", link: "https://ui.shadcn.com/", desc: "Copy-paste code. You own the bugs now. Congratulations.", mustLearn: true },
            { name: "Chakra/Radix", link: "https://www.radix-ui.com/", desc: "Accessible primitives. Because keyboard navigation is hard." },
            { name: "Headless UI", link: "https://headlessui.com/", desc: "Components without styles. Sounds like a scam, but it's actually genius." },
        ]
    },
    "Tooling & Performance": {
        description: "Spending 4 days optimizing the build config to save 20ms.",
        items: [
            { name: "Vite", link: "https://vitejs.dev/", desc: "It's fast. Blazingly fast. Unlike your career progression.", mustLearn: true },
            { name: "Webpack", link: "https://webpack.js.org/", desc: "A config file so complex it requires a PhD to understand." },
            { name: "Lazy Loading", link: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading", desc: "Procrastination as a performance strategy.", mustLearn: true },
            { name: "Suspense", link: "https://react.dev/reference/react/Suspense", desc: "A fancy way to show 'Loading...' while React figures itself out." },
            { name: "Code Splitting", link: "https://react.dev/reference/react/lazy#suspense-for-code-splitting", desc: "Breaking your app into tiny pieces so the network tab looks like a confetti explosion." },
            { name: "Virtualization", link: "https://virtuoso.dev/", desc: "Rendering only what the user sees, because the DOM is weak." },
            { name: "Lozad.js", link: "https://github.com/ApoorvSaxena/lozad.js", desc: "Lazy loading for people who don't want to use the native attribute." },
            { name: "Lenis", link: "https://github.com/darkroomengineering/lenis", desc: "Smooth scrolling. Because native scrolling isn't 'smooth' enough for your award-winning portfolio." },
        ]
    },
    "Animations": {
        description: "Making things move so the user doesn't notice the data hasn't loaded.",
        items: [
            { name: "Framer Motion", link: "https://www.framer.com/motion/", desc: "Animation for React devs who failed physics class.", mustLearn: true },
            { name: "GSAP", link: "https://gsap.com/", desc: "The heavy artillery. Use this to animate a button hover if you hate performance." },
            { name: "ScrollTrigger", link: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/", desc: "Parallax effects that make your users motion sick." },
            { name: "anime.js", link: "https://animejs.com/", desc: "Simple animations. It does what it says on the tin." },
            { name: "barba.js", link: "https://barba.js.org/", desc: "Seamless transitions. Ideally. Usually just confusing." },
            { name: "3D Physics", link: "https://brm.io/matter-js/", desc: "Simulating gravity in the browser. Why? Why not." },
        ]
    },
    "3D & Graphics": {
        description: "Turning your laptop fan into a jet engine.",
        items: [
            { name: "Three.js", link: "https://threejs.org/", desc: "WebGL wrapper. Prepare to learn what a 'quaternion' is." },
            { name: "React Three Fiber", link: "https://docs.pmnd.rs/react-three-fiber", desc: "Three.js for people who refuse to leave the React ecosystem.", mustLearn: true },
            { name: "Babylon.js", link: "https://www.babylonjs.com/", desc: "The Microsoft game engine. Powerful, but you'll probably just use R3F." },
        ]
    },
    "AI Native Engineering": {
        description: "The stuff that will eventually replace you. Learn it or perish.",
        items: [
            { name: "Vercel AI SDK", link: "https://sdk.vercel.ai/docs", desc: "Streaming AI responses. Essentially a fancy wrapper for `fetch`.", mustLearn: true },
            { name: "WebGPU & LLMs", link: "https://webllm.mlc.ai/", desc: "Melting the user's GPU to run a chatbot locally. Privacy!", mustLearn: true },
            { name: "Generative UI", link: "https://vercel.com/blog/generative-ui", desc: "Streaming React components. The AI writes the UI, you fix the bugs.", mustLearn: true },
            { name: "RAG", link: "https://pinecone.io/learn/retrieval-augmented-generation/", desc: "Giving the AI a cheat sheet so it stops lying to your users.", mustLearn: true },
            { name: "Agentic Patterns", link: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/", desc: "Building bots that do your job better than you do.", mustLearn: true }
        ]
    },
    "Security": {
        description: "The checklist you ignore until the audit.",
        items: [
            { name: "CORS", link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS", desc: "The red error message that haunts your console and your dreams.", mustLearn: true },
            { name: "Auth", link: "https://auth0.com/intro-to-iam/what-is-authentication", desc: "Logins. Passwords. Just use Auth0 and pray.", mustLearn: true },
            { name: "JWT", link: "https://jwt.io/introduction", desc: "Don't put them in LocalStorage. (You're going to put them in LocalStorage)." },
            { name: "OAuth", link: "https://oauth.net/2/", desc: "Delegating responsibility to Google and Facebook." },
            { name: "HTTPS", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS", desc: "Encryption. If you don't have this, you're irrelevant." },
            { name: "Input Validation", link: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html", desc: "Trust no one. Especially not your users." },
        ]
    },
    "Testing": {
        description: "Code that checks if your code works. (Spoiler: It doesn't).",
        items: [
            { name: "Jest", link: "https://jestjs.io/", desc: "Unit tests. They pass, but the app is still broken." },
            { name: "React Testing Library", link: "https://testing-library.com/docs/react-testing-library/intro/", desc: "Testing implementation details? Jail. Testing user behavior? Good." },
            { name: "Storybook", link: "https://storybook.js.org/", desc: "A gallery of your components that is always out of date." },
            { name: "Cypress", link: "https://www.cypress.io/", desc: "Great tool. Flaky tests. 'It worked on my machine'." },
            { name: "Playwright", link: "https://playwright.dev/", desc: "Microsoft's answer to Cypress. Faster, but you still hate writing tests.", mustLearn: true },
            { name: "Testim/QA Wolf", link: "https://www.qawolf.com/", desc: "Paying someone else (or an AI) to write your tests." },
        ]
    },
    "Development Workflow": {
        description: "How we herd cats and merge conflicts.",
        items: [
            { name: "Git", link: "https://git-scm.com/doc", desc: "`git push --force` and run away.", mustLearn: true },
            { name: "GitHub", link: "https://github.com/", desc: "Social media for introverts." },
            { name: "NPM/Yarn", link: "https://docs.npmjs.com/", desc: "Downloading the entire internet into a black hole called `node_modules`.", mustLearn: true },
            { name: "ESLint", link: "https://eslint.org/", desc: "The red squiggly line that judges your coding style." },
            { name: "CI/CD", link: "https://about.gitlab.com/topics/ci-cd/", desc: "Automating the process of breaking production." },
        ]
    },
    "Accessibility": {
        description: "Making the web usable for everyone (and avoiding lawsuits).",
        items: [
            { name: "Keyboard Nav", link: "https://webaim.org/techniques/keyboard/", desc: "If you can't use it without a mouse, it's trash.", mustLearn: true },
            { name: "ARIA", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles", desc: "Attributes you add when you're too lazy to use semantic HTML." },
            { name: "Semantic HTML", link: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics", desc: "Using button tags instead of divs with onClick." },
            { name: "Forms", link: "https://www.w3.org/WAI/tutorials/forms/labels/", desc: "Labels. Please, just add labels." },
        ]
    },
    "Soft Skills & Growth": {
        description: "The hard skills. Dealing with humans.",
        items: [
            { name: "Communication", desc: "Explaining why the button color change takes 3 days.", mustLearn: true },
            { name: "Mentorship", desc: "Teaching juniors so you can eventually take a vacation." },
            { name: "Business Acumen", desc: "Realizing that 'clean code' doesn't pay the bills." },
            { name: "Adaptive Learning", desc: "Accepting that everything you learned 6 months ago is now obsolete.", mustLearn: true }
        ]
    }
};
