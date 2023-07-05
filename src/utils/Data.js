import { FaReact, FaNode, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'Node JS',
        icon: <FaNode />
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript />
    }
];


export const projectDetails = [
    {
        id: 0,
        project_name: "Campground Travel Guide",
        project_desc: "A travel applicaton that allows the user to inspect campsites, look at reviews, and book spots!",
        tech_stack: ['React JS', "Bootstrap", "Redux JS"],
        project_img: Project1,
        project_url: 'https://www.google.com',
        reverse: false,
    },
    {
        id: 1,
        project_name: "Local Meat Distributor",
        project_desc: "This e-commerce site allows the user to get to know more about a local farm, check out different proportions of products, and add those products to a cart for check out!",
        tech_stack: ['Javascript', "Bootstrap", "HTML"],
        project_img: Project2,
        project_url: 'https://www.google.com',
        reverse: false,
    },
]

export const NavLinks = [

]
