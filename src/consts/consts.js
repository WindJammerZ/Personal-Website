import { faJsSquare, faHtml5, faCss3Alt, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import rango_img from '../imgs/projects/rango.jpg'

export const COLOR = {
    r: 0.2627,
    g: 0.9765,
    b: 1.0
}

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
    { name: "projects", id: "projects" },
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

export const PROJECT_PAGE_PROFESSIONAL_PROJECTS_INFORMATION = [
    {
        name: 'rango',
        title: 'Operating Reactor Analytics',
        description: "Operating Reactor Analytics is a complete rebuild of the current Nuclear Regulatory Commission's (NRC) nuclear power plant performance indicator webpage.  Operating Reactor Analytics displays current and historical quarterly data of all operating nuclear power plants.  This application was built using React.js.",
        status: 'active',
        thumbnail: rango_img,
        link: 'https://www.nrc.gov/reactors/operating/oversight/analytics.html',
        github: null
    }
]