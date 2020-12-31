import { faJsSquare, faHtml5, faCss3Alt, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import battlefield_casualties_img from '../imgs/projects/battle_casualties_thumb.jpg'
import bug_squasher_img from '../imgs/projects/bug_squasher.jpg'

export const BREAK_POINTS = {
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',
    xs: `(max-width: 400px)`,
    md: `(min-width: 401px)`,
    lg: `(min-width: 700px)`,
    xl: `(min-width: 1000px)`
}

export const sectionsArray = [
    { name: "home", id: "main" },
    { name: "about me", id: "about" },
    { name: "résumé", id: "resume" },
    { name: "projects", id: "portfolio" },
    { name: "contact", id: "contact" },
]

export const TECH_HIERARCHY = [
    {
        section: 'front',
        section_name: 'Front End',
        techs: [
            {
                name: "JavaScript",
                icon: faJsSquare,
                icon_alt: 'Javascript icon',
                color: '#F7DF1E',
                link: '#'
            },
            {
                name: 'HTML',
                icon: faHtml5,
                icon_alt: "HTML icon",
                color: '#e34f26',
                link: '#'
            },
            {
                name: 'CSS',
                icon: faCss3Alt,
                icon_alt: 'CSS icon',
                color: '#156aa6',
                link: '#'
            }
        ]
    }, {
        section: 'framework',
        section_name: 'Frameworks',
        techs: [
            {
                name: 'React.js',
                icon: faReact,
                icon_alt: 'ReactJS icon',
                color: '#00d8ff',
                link: '#'
            }
        ]
    },
    {
        section: 'back',
        section_name: 'Back End',
        techs: [
            {
                name: "Node.js",
                icon: faNodeJs,
                icon_alt: 'Node.js icon',
                color: '#6cc24a',
                link: '#'
            }
        ]
    }
]

export const PROJECT_PAGE_PROOF_OF_CONCEPT_INFORMATION = [
    {
        name: 'battle_casualties',
        title: 'Battlefield Casualties',
        description: "This project looks at the highest casualty counts of battles throughout human history. The data is sourced from Wikipedia (some accuracy and locations are questionable). This project was built using d3.js, dc.js, crossfilter.js, javascript, html, css, and bootstrap. It is not optimized for mobile interaction.",
        thumbnail: battlefield_casualties_img,
        link: 'projects/Battlefield_Casualties_Visualization/battlefield-casualties-viz.html'
    }, {
        name: 'bug_squash',
        title: 'Bug Squasher',
        description: "This project is a bug/feature tracker. The data is supplied by individuals who have created an account through the interface and created reports. This project was built usingthe MERN full stack (MongoDB, Express, React, Node). It is not optimized for mobile interaction as it was developed as more of an internal application.",
        thumbnail: bug_squasher_img,
        link: 'https://jk-bug-squasher-application.herokuapp.com/'
    }
]