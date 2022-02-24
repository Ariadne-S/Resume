import {FC} from "react";
import styled from "styled-components";
import {findIconDefinition, IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Project {
    icon?: IconDefinition,
    svg?: JSX.Element,
    title: string,
    description: JSX.Element,
    color: string,
    tags: string[]
}

const colors = {
    red: "hsl(0, 78%, 62%)",
    cyan: "hsl(180, 62%, 55%)",
    orange: "hsl(34, 97%, 64%)",
    blue: "hsl(212, 86%, 64%)",
}

const projectData: Project[] = [
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'copy'}),
        color: colors.cyan,
        title: "Custom Web Scrapers",
        description: <span>One of my first responsibilities at WORK180 was to build custom web scrapers to automate the
                            collection of job ads for new clients. This could involve a JSON/XML feed or a html parser
                            with HTML
                            agility pack and depending on the complexity of the website configuring a headless crawl to
                            retrieve
                            generated html with Puppeteer.</span>,
        tags: ["Dotnet core", "AWS", "Puppeteer", "Seq", "html Agility Pack"]
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'table-list'}),
        color: colors.orange,
        title: "Smart Scraper",
        description: <span>
            Collaborated to plan and implement the "Smart Scraper" project - a database driven scraper
            infrastructure that reduced job automation set up from days to a couple of hours.
        </span>,
        tags: ["Dotnet core", "Octostache", "Entity Framework"]
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'vials'}),
        color: colors.blue,
        title: "Smart Scraper Test Builder",
        description: <span>
            Encaptualisated logic to remove duplication and simplify the configuration of Smart
            Scraper tests
        </span>,
        tags: ["Dotnet core"]
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'baby-carriage'}),
        color: colors.blue,
        title: "Structured Employer Benefits Data",
        description: 
            <span>
                Designed and migrated a structred data schema for the Employer Benefits area to enable
                functionality such as comparing benifits and search. Worked alongside the customer success
                team to clean and migrate old data to the new structure. I
    
                Worked alongside UX to build their vision for the Employer Benefits tables
            </span>,
        tags: ["Dotnet core", "Entity Framework", "Hangfire", "Elastic Search"]
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'heart'}),
        color: colors.red,
        title: "Save job functionality",
        description: 
            <span>
                Built the save job functionality, which entails an register/sign in gate, the ability to
                save a job and to remove a saved job from multiple places across the website. With google analytics
                events firing for each action.
            </span>,
        tags: ["Dotnet core", "Entity Framework", "Hangfire", "React", "Styled Components"]
    },
    {
        svg: <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
            <path
                d="M119.617.069c-.55.05-2.302.225-3.879.35c-36.36 3.278-70.419 22.894-91.99 53.044c-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64c6.957 48.065 41.165 88.449 87.56 103.411c8.309 2.678 17.067 4.504 27.027 5.605c3.879.425 20.645.425 24.524 0c17.192-1.902 31.756-6.155 46.12-13.486c2.202-1.126 2.628-1.426 2.327-1.677c-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648l-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932c-.1-.025-.2 16.84-.25 37.431c-.076 36.055-.1 37.506-.551 38.357c-.65 1.226-1.151 1.727-2.202 2.277c-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126l.05-50.166l.075-50.192l.776-.976c.4-.525 1.251-1.2 1.852-1.526c1.026-.5 1.426-.55 5.755-.55c5.105 0 5.956.2 7.282 1.651c.376.4 14.264 21.318 30.88 46.514c16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7l1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07c16.191-18.59 26.626-41.258 30.13-65.428c1.026-7.031 1.151-9.108 1.151-18.64c0-9.534-.125-11.61-1.151-18.641c-6.957-48.065-41.165-88.449-87.56-103.411c-8.184-2.652-16.892-4.479-26.652-5.58c-2.402-.25-18.943-.525-21.02-.325Zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953c.2.65.25 14.562.2 45.913l-.074 44.987l-7.933-12.16l-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603c.4-1.401 1.277-2.502 2.478-3.153c1.026-.525 1.401-.575 5.33-.575c3.704 0 4.354.05 5.18.5Z"/>
        </svg>,
        color: colors.cyan,
        title: "Port the frontend to NextJs typescript",
        description: <span>
            Spearheaded a greenfield project to port the jobsite frontend from a Razor/javascript React
            project to Typescript React NextJs, drastically improving page speed and improving developer
            experience
        </span>,
        tags: ["React", "NextJs", "Javascript", "Typescript", "Styled Components"]
    }
    ,
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'at'}),
        color: colors.orange,
        title: "Domain Migration",
        description: <span>
            Investigated and implemented NextJs internationalised routing and worked with the team to
            migrate the website from regionalised sub domains to sub paths to create a website with a
            more globalised feel.
        </span>,
        tags: ["NextJs", "Typescript"]

    }
    ,
    {
        icon: findIconDefinition({prefix: 'fab', iconName: 'wordpress'}),
        color: colors.blue,
        title: "CMS Migration",
        description: <span>
            Migrate content and assets from Squidex to Wordpress
        </span>,
        tags: ["Dotnet core", "MartenDb", "Hangfire", "Seq"]
    }
]

const Experience: FC = () => {
    return (
        <ExperienceContainer>
            <h3>Experience</h3>
            <h4>WORK180</h4>
            <Timeline/>
            <p>
                WORK180 is a fully remote start-up that works with employers to improve organizational standards that
                raise the bar for women in the workplace with a presence in Australia, United Kingdom and the United
                States of America.
                During my time at WORK180, we have seen the decreased the client's job automation setup from days to
                meer hours, showcased our client's employee benefits, increased our page speed scores from D's to A's,
                and have already made significant progress in stablising the website and future proofing it for future
                load.
            </p>
            <p>Some of the tasks I have undertaken include;</p>
            <ul>
                <li>Facilitated stand-ups and retros</li>
                <li>Set up elastic search for the employer search, and added filters to the job search</li>
                <li>Used hangfire to set up background tasks, such as collecting user actions for ROI reporting</li>
                <li>Onboarded new engineers to the team, regardless of level</li>
                <li>Mentored junior engineers</li>
                <li>Documented processes and decisions</li>
                <li>Managed damage control during website outages, prioritised vital fixes to keep the website up and
                    investigated and reported potential issues with the system
                </li>
                <li>Investigated and resolved performance issues within the backend project</li>
                <li>Interviewed participants for technical and cultural fits for the engineering and product teams</li>
            </ul>
            <ProjectsCallout/>
        </ExperienceContainer>
    )
}

const ProjectsCallout: FC = () => {
    return (
        <div>
            <h5>Projects</h5>
            <ProjectGrid>
                {projectData.map(project => <ProjectDisplay key={project.title} project={project}/>)}
            </ProjectGrid>
        </div>

    )
}

const ProjectGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Timeline: FC = () => {
    return (
        <TimeLineUl>
            <li data-year="2019" data-text="Junior Software Engineer"/>
            <li className={"pale"} data-year=" " data-text=" "/>
            <li data-year="2021" data-text="Software Engineer"/>
            <li className={"pale"} data-year=" " data-text=" "/>
        </TimeLineUl>
    )
}


const ProjectDisplay: FC<{ project: Project }> = ({project}) => {
    const tagIcon = findIconDefinition({prefix: 'fas', iconName: 'tag'});
    return (
        <ProjectCard color={project.color}>
            <CardPullDown>
                <ul>
                    {project.tags.map((tag, index) =>
                        <li key={`${tag}-${index}`}>
                            <FontAwesomeIcon icon={tagIcon} color={"hsl(234,12%,34%)"}/>
                            {tag}
                        </li>
                    )}
                </ul>
            </CardPullDown>
            <div>
                <h6>{project.title}</h6>
                <p>{project.description}</p>
            </div>
            {project.icon ? <FontAwesomeIcon icon={project.icon} size={"2x"}/> : project.svg}
        </ProjectCard>
    )
}


const CardPullDown = styled.div`
    position: relative;
    width: 280px;
    left: -30px;
    top: -40px;
    padding: 15px;
    
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        columns: 2;  
        
        li {
            display: flex;
            flex-wrap: no-wrap;
            
            svg {
                padding-right:1em;
                padding-left: 1em;
            }
        }
    }
`;


const ProjectCard = styled.div<{ color: string }>`
    width: 280px;
    font-size: 12px;
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
    padding: 30px;
    padding-top: 40px;
    margin: 20px;  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 5px solid ${props => props.color};
    background-color: hsl(0, 0%, 98%);
    
    h6 {
        line-height: 0.8;
        margin-bottom: 50px;
        margin-top: 100px;
        margin: 0 auto;
        line-height: 1.5;
        color: hsl(234, 12%, 34%);
        font-weight: 600;
        font-size: 16px;
    }
    
    p {
        color: hsl(229, 6%, 66%);
    }
    
    > svg {
        align-self: flex-end;
        color: ${props => props.color}
    }
    
    ${CardPullDown} {
         background-color: ${props => props.color};
         display: none;
         transition: all .5s ease-in-out;
    }
    
    &:hover {
        ${CardPullDown} {
             display: block;
        }
        
        p {
            height: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

    }
`;

const ExperienceContainer = styled.div`

`;

const TimeLineUl = styled.ul`
    width:800px;
    height: 20px;
    list-style: none;
    text-align: justify;
    margin: 50px auto;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, #31435d 51%, rgba(255,255,255,0) 57%, rgba(255,255,255,0) 100%);

    &:after {
        display: inline-block;
        content: "";
        width: 100%;
    }
    
    li {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #31435d;
        text-align: center;
        line-height: 1.2;
        position: relative;
        border-radius: 50%;
        margin: 0 96px;

        &:before {
            display: inline-block;
            content: attr(data-year);
            font-size: 16px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
             top: -20px;
        }
        
        &:after {
            display: inline-block;
            content: attr(data-text);
            font-size: 14px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            bottom: 0;
            margin-bottom: -10px;
            transform: translate(-50%, 100%);
        }
   
        &:first-child {
          margin-left: 5px;
        }
        
        &.pale {
            background: #91a0b7;
        }
    }
`


export default Experience;