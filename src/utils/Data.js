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
        project_name: "Campground App",
        project_desc: "A travel applicaton that allows the user to book campsites, loot at reviews of those campsites, and plan out vacations",
        tech_stack: ['React JS', "Bootstrap", "Redux JS"],
        project_img: Project1,
        project_url: 'https://www.google.com',
        reverse: false,
    },
    {
        id: 1,
        project_name: "Local Meat Distributor App",
        project_desc: "This application has features such as viewing different products, adding those products to a reserve list, contact information, as well other capabilities",
        tech_stack: ['Javascript', "Bootstrap", "HTML"],
        project_img: Project2,
        project_url: 'https://www.google.com',
        reverse: false,
    },
]
