import React from 'react';
import './portfolio.css';
import Navigation from '../navigation/Navigation'; // Import the Navigation component

const projects = [
  {
    title: 'Toy XML Visualizer',
    description: `A toy XML Parser with basic feature support. Parsed XML tree is visualized with D3.`,
    projectLink: '/xml-tree/',
    codeLink: 'https://github.com/cranberrymuffin/xml-tree/', // Replace with your code repo link
  },
  {
    title: 'Toy JSON Validator',
    description: `A JSON validator built with a custom parser written in javascript.`,
    projectLink: '/json-validator/',
    codeLink: 'https://github.com/cranberrymuffin/json-validator', // Replace with your code repo link
    blogLink: '/#/blog/json-validator', // Replace with your blog link
  },
  {
    title: 'WebRTC Video Chat',
    description: `WebRTC two person video chat app built with React and PeerJS.`,
    projectLink: '/peerjs-video-chat/',
    codeLink: 'https://github.com/cranberrymuffin/peerjs-video-chat', // Replace with your code repo link
  },
  {
    title: 'Akinator App',
    description: `LLM-powered Akinator game that guesses who you're thinking of with dynamic yes/no questions. Built with React, Node.js, Express, and Gemini AI. Deployed with Docker on Disco hosting.`,
    projectLink: 'https://akinator.rcdis.co/',
    codeLink: 'https://github.com/cranberrymuffin/akinator-app', // Replace with your code repo link
    blogLink: '/#/blog/gemini-akinator', // Replace with your blog link
  },
  {
    title: 'ASCII Art Generator',
    description:
      'An image processing tool to transform images into ASCII art and display them on the web. Built with TypeScript and CSS.',
    projectLink: '/ascii-art/',
    codeLink: 'https://github.com/cranberrymuffin/ascii-art', // Replace with your code repo link
    blogLink: '/#/blog/ascii-art', // Replace with your blog link
  },
  {
    title: 'Valentine',
    description:
      'A 3D heart model generated using parametric equations and rendered with React Three Fiber. Built with React, focusing on procedural mesh generation and material.',
    projectLink: '/valentine',
    codeLink: 'https://github.com/cranberrymuffin/valentine', // Replace with your code repo link
    blogLink: '/#/blog/valentine', // Replace with your blog link
  },
  {
    title: 'Snowstorm',
    description:
      'A React Three Fiber 3D whack-a-mole-style winter web game. Features particle-based snowfall, real-time movement, and a scoring system powered by Zustand.',
    projectLink: '/snowstorm',
    codeLink: 'https://github.com/cranberrymuffin/snowstorm', // Replace with your code repo link
    blogLink: '/#/blog/snowstorm', // Replace with your blog link
  },
  {
    title: 'Web RTC Tic-Tac-Toe',
    description:
      'Single and multiplayer Tic-Tac-Toe with WebRTC and PeerJS for real-time peer-to-peer gameplay. Includes an AI opponent for single-player mode and dynamic state updates with React.',
    projectLink: '/tic-tac-toe',
    codeLink: 'https://github.com/cranberrymuffin/tic-tac-toe', // Replace with your code repo link
    blogLink: '/#/blog/tic-tac-toe', // Replace with your blog link
  },
];

export default function PortfolioPage() {
  return (
    <div className="portfolio-container">
      <Navigation textColor="linear-gradient(45deg, #ff0099, #ff6600, #ff0099, #6600ff)" />
      <header>
        <h1>Aparna Natarajan</h1>
        <p>Full Stack Developer</p>
      </header>

      <section className="portfolio">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h2>{project.title}</h2>
            <p className="desc">{project.description}</p>
            <div className="button-row">
              {project.codeLink && (
                <a href={project.codeLink} className="btn">
                  Code
                </a>
              )}
              {project.projectLink && (
                <a href={project.projectLink} className="btn">
                  Demo
                </a>
              )}
              {project.blogLink && (
                <a href={project.blogLink} className="btn">
                  Blog
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
