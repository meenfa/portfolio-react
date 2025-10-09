import React from 'react';

const Portfolia = () => {
    const portfolios = [
        {
            name: "Victor Eke",
            role: "Frontend Developer",
            url: "https://victoreke.com",
            repo: "https://github.com/ekevictor",
            tech: ["Next.js", "Sanity", "Tailwind", "TypeScript"]
        },
        {
            name: "Kent C. Dodds",
            role: "Educator & Developer",
            url: "https://kentcdodds.com",
            repo: "https://github.com/kentcdodds",
            tech: ["React", "TypeScript", "Remix", "Prisma"]
        },
        {
            name: "Brittany Chiang",
            role: "Frontend Developer",
            url: "https://v4.brittanychiang.com",
            repo: "https://github.com/bchiang7",
            tech: ["React", "Gatsby", "Styled-components"]
        },
        {
            name: "Ahmet",
            role: "Designer & Developer",
            url: "https://ahmet.studio",
            repo: "https://github.com/ahmet",
            tech: ["React", "Next.js", "Framer Motion", "Tailwind"]
        },
        {
            name: "Lee Robinson",
            role: "Developer Advocate",
            url: "https://leerob.io",
            repo: "https://github.com/leerob",
            tech: ["Next.js", "PlanetScale", "Prisma", "Vercel"]
        },
        {
            name: "Josh Comeau",
            role: "Educator & Developer",
            url: "https://joshwcomeau.com",
            repo: "https://github.com/joshwcomeau",
            tech: ["NextJS", "Styled Components", "MDX", "MongoDB"]
        },
        {
            name: "Tania Rascia",
            role: "Developer & Writer",
            url: "https://taniarascia.com",
            repo: "https://github.com/taniarascia",
            tech: ["React", "Gatsby", "CSS", "Netlify"]
        },
        {
            name: "Emma Bostian",
            role: "Software Engineer",
            url: "https://emmabostian.com",
            repo: "https://github.com/emmabostian",
            tech: ["React", "TypeScript", "Gatsby", "CSS"]
        },
        {
            name: "Cassidy Williams",
            role: "Developer & Educator",
            url: "https://cassidoo.co",
            repo: "https://github.com/cassidoo",
            tech: ["HTML", "CSS", "JavaScript"]
        },
        {
            name: "Anurag Hazra",
            role: "Frontend Developer",
            url: "https://anuraghazra.dev",
            repo: "https://github.com/anuraghazra",
            tech: ["React", "Gatsby", "Styled-components"]
        },
        {
            name: "Jason Lengstorf",
            role: "Developer & Educator",
            url: "https://jason.energy",
            repo: "https://github.com/jlengstorf",
            tech: ["JavaScript", "TypeScript", "Nunjucks", "CSS"]
        },
        {
            name: "Sarah Drasner",
            role: "Developer & Designer",
            url: "https://sarahdrasnerdesign.com",
            repo: "https://github.com/sdras",
            tech: ["Vue", "JavaScript", "CSS", "SVG"]
        },
        {
            name: "Wes Bos",
            role: "Developer & Educator",
            url: "https://wesbos.com",
            repo: "https://github.com/wesbos",
            tech: ["React", "JavaScript", "CSS", "Node.js"]
        },
        {
            name: "Scott Tolinski",
            role: "Developer & Educator",
            url: "https://scotttolinski.com",
            repo: "https://github.com/stolinski",
            tech: ["React", "JavaScript", "CSS", "Gatsby"]
        },
        {
            name: "Sarah Dayan",
            role: "Frontend Engineer",
            url: "https://sarahdayan.dev",
            repo: "https://github.com/sarahdayan",
            tech: ["NextJS", "Tailwind CSS", "NodeJS", "Vercel"]
        },
        {
            name: "Theodorus Clarence",
            role: "Full Stack Developer",
            url: "https://theodorusclarence.com",
            repo: "https://github.com/theodorusclarence",
            tech: ["NextJS", "TypeScript", "Tailwind CSS", "MDX Bundler"]
        },
        {
            name: "Delba Oliveira",
            role: "Developer & Writer",
            url: "https://delba.dev",
            repo: "https://github.com/delbaoliveira",
            tech: ["Next.js", "MDX", "Tailwind", "Prisma"]
        },
        {
            name: "Anthony Fu",
            role: "Open Source Developer",
            url: "https://antfu.me",
            repo: "https://github.com/antfu",
            tech: ["VueJS", "Markdown", "TypeScript", "CSS"]
        },
        {
            name: "Adam Wathan",
            role: "Full Stack Developer",
            url: "https://adamwathan.me",
            repo: "https://github.com/adamwathan",
            tech: ["Laravel", "PHP", "JavaScript", "Tailwind"]
        },
        {
            name: "Taylor Otwell",
            role: "Creator of Laravel",
            url: "https://taylorotwell.com",
            repo: "https://github.com/taylorotwell",
            tech: ["Laravel", "PHP", "JavaScript", "Vue"]
        },
        {
            name: "Dan Abramov",
            role: "React Core Team",
            url: "https://overreacted.io",
            repo: "https://github.com/gaearon",
            tech: ["React", "JavaScript", "CSS", "Gatsby"]
        },
        {
            name: "Brian Lovin",
            role: "Product Designer",
            url: "https://brianlovin.com",
            repo: "https://github.com/brianlovin",
            tech: ["NextJS", "TypeScript", "Tailwind CSS", "Prisma"]
        },
        {
            name: "Guillermo Rauch",
            role: "CEO of Vercel",
            url: "https://rauchg.com",
            repo: "https://github.com/rauchg",
            tech: ["Next.js", "JavaScript", "CSS", "Vercel"]
        },
        {
            name: "Addy Osmani",
            role: "Engineering Manager",
            url: "https://addyosmani.com",
            repo: "https://github.com/addyosmani",
            tech: ["JavaScript", "HTML", "CSS", "Web Performance"]
        },
        {
            name: "Rachel Andrew",
            role: "CSS Expert",
            url: "https://rachelandrew.co.uk",
            repo: "https://github.com/rachelandrew",
            tech: ["HTML", "CSS", "JavaScript", "Grid"]
        }
    ];
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gray-50 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            {/* <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <i className="fas fa-laptop-code text-white text-xl"></i>
              </div> */}
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">Portfolia</h1>
                                <p className="text-xs text-gray-500">Developer Portfolio Showcase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Page Header */}
                {/* <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Developer Portfolio Showcase</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through a curated collection of developer portfolios for inspiration.
          </p>
        </div> */}

               {/* Portfolio Table */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                                        Developer
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                                        Portfolio
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                                        Repository
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                                        Tech Stack
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {portfolios.map((portfolio, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{portfolio.name}</div>
                                            <div className="text-sm text-gray-500">{portfolio.role}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <a
                                                href={portfolio.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                {portfolio.url.replace('https://', '')}
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <a
                                                href={portfolio.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                                View
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-2">
                                                {portfolio.tech.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white mt-12 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400 text-sm">
                        Released under the MIT License • Copyright © 2022-present Portfolia
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolia;