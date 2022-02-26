import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";
import { Education, Project} from "./types";
import styled from "styled-components";

const ColumnList = styled.ul`
    columns: 2;
    
    @media print {
        columns: 3;
    }   
`

const work180projectData: Project[] = [
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'copy'}),
        title: "Custom Web Scrapers",
        description: <span>
            One of my first responsibilities at WORK180 was to build custom web scrapers to automate the
            collection of job ads for new clients. This could involve a JSON/XML feed or a html parser
            with HTML
            agility pack and depending on the complexity of the website configuring a headless crawl to
            retrieve
            generated html with Puppeteer.
        </span>,
        tags: [".NET Core", "AWS", "Puppeteer", "Seq", "html Agility Pack"]
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'table-list'}),
        title: "Smart Scraper",
        description: <span>
            Collaborated to plan and implement the "Smart Scraper" project - a database driven scraper
            infrastructure that reduced job automation set up from days to a couple of hours.
        </span>,
        tags: [".NET Core", "Octostache", "Entity Framework"]
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'vials'}),
        title: "Smart Scraper Test Builder",
        description: <span>
            Encaptualisated logic to remove duplication and simplify the configuration of Smart
            Scraper tests
            </span>,
        tags: [".NET Core"]
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'baby-carriage'}),
        title: "Structured Employer Benefits Data",
        description: <span>
            Designed and migrated a structred data schema for the Employer Benefits area to enable
            functionality such as comparing benifits and search. Worked alongside the customer success
            team to clean and migrate old data to the new structure. I
    
            Worked alongside UX to build their vision for the Employer Benefits tables
        </span>,
        tags: [".NET Core", "Entity Framework", "Hangfire", "Elastic Search"]
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'heart'}),
        title: "Save job functionality",
        description: <span>
            Built the save job functionality, which entails an register/sign in gate, the ability to
            save a job and to remove a saved job from multiple places across the website. With google analytics
            events firing for each action.
        </span>,
        tags: [".NET Core", "Entity Framework", "Hangfire", "React", "Styled Components"]
    },
    {
        svg: <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path d="M119.617.069c-.55.05-2.302.225-3.879.35c-36.36 3.278-70.419 22.894-91.99 53.044c-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64c6.957 48.065 41.165 88.449 87.56 103.411c8.309 2.678 17.067 4.504 27.027 5.605c3.879.425 20.645.425 24.524 0c17.192-1.902 31.756-6.155 46.12-13.486c2.202-1.126 2.628-1.426 2.327-1.677c-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648l-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932c-.1-.025-.2 16.84-.25 37.431c-.076 36.055-.1 37.506-.551 38.357c-.65 1.226-1.151 1.727-2.202 2.277c-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126l.05-50.166l.075-50.192l.776-.976c.4-.525 1.251-1.2 1.852-1.526c1.026-.5 1.426-.55 5.755-.55c5.105 0 5.956.2 7.282 1.651c.376.4 14.264 21.318 30.88 46.514c16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7l1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07c16.191-18.59 26.626-41.258 30.13-65.428c1.026-7.031 1.151-9.108 1.151-18.64c0-9.534-.125-11.61-1.151-18.641c-6.957-48.065-41.165-88.449-87.56-103.411c-8.184-2.652-16.892-4.479-26.652-5.58c-2.402-.25-18.943-.525-21.02-.325Zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953c.2.65.25 14.562.2 45.913l-.074 44.987l-7.933-12.16l-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603c.4-1.401 1.277-2.502 2.478-3.153c1.026-.525 1.401-.575 5.33-.575c3.704 0 4.354.05 5.18.5Z"/></svg>,
        title: "Port the frontend to NextJs TypeScript",
        description: <span>
            Spearheaded a greenfield project to port the jobsite frontend from a Razor/JavaScript React
            project to TypeScript React NextJs, drastically improving page speed and improving developer
            experience
        </span>,
        tags: ["React", "NextJs", "JavaScript", "TypeScript", "Styled Components"]
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'at'}),
        title: "Domain Migration",
        description: <span>
            Investigated and implemented NextJs internationalised routing and worked with the team to
            migrate the website from regionalised sub domains to sub paths to create a website with a
            more globalised feel.
        </span>,
        tags: ["NextJs", "TypeScript"]
    
    },
    {
        icon: findIconDefinition({prefix: 'fab', iconName: 'wordpress'}),
        title: "CMS Migration",
        description: <span>
            Migrate content and assets from Squidex to Wordpress
        </span>,
        tags: [".NET Core", "MartenDb", "Hangfire", "Seq"]
    }
]

const educationData: Education[] = [
    {
        time: '2019', 
        title: 'Data Scientist with Python', 
        subtitle: 'Datacamp | Career Track | 40% complete', 
        description: <ColumnList>
            <li>Introduction to Python</li>
            <li>Intermediate Python for Data Science</li>
            <li>Python Data Science Toolbox <span>(Part 1)</span></li>
            <li>Python Data Science Toolbox <span>(Part 2)</span></li>
            <li>Importing Data in Python <span>(Part 1)</span></li>
            <li>Importing Data in Python <span>(Part 2)</span></li>
            <li>Cleaning Data in Python</li>
            <li>pandas Foundations</li>
            <li>Manipulating DataFrames with pandas</li>
        </ColumnList>
    },
    {
        time: '2013-2017',
        title: 'Bachelor of Social Science',
        subtitle: 'University of Queensland | Major in International and Community Development',
        description: <ul>
            <li>A social science perspective on international and community development issues,
                focusing on strategies to alleviate poverty and inequality and to develop sustainable societies,
                communities and environments.
            </li>
            <li>This degree also equipped me with the skills to undertake social impact assessments,
                social planning, project management and social research.
            </li>
        </ul>
    },
    {
        time: '2013-2017',
        title: 'Bachelor of Arts',
        subtitle: 'University of Queensland | Major in Extended History',
        description:<ul>
            <li>Learnt about cause and consequence, focusing on the study of people and their
                attitudes, motivations and prejudices. While developing professional skills including the
                ability to initiate an original inquiry, conduct archival research, analyse documents, write
                convincingly and interpret evidence.
            </li>
        </ul>
    }
]


export { work180projectData, educationData }