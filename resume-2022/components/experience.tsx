import {FC} from "react";
import styled from "styled-components";
import {findIconDefinition, IconDefinition, IconLookup} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Project {
    icon: IconDefinition
    title: string,
    description: JSX.Element,
    color: string,
    tags: string[]
}

const colors  = {
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
        tags: []
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'table-list'}),
        color: colors.orange,
        title: "Smart Scraper",
        description: <span>
            Collaborated to plan and implement the "Smart Scraper" project - a database driven scraper
            infrastructure that reduced job automation set up from days to a couple of hours.
        </span>,
        tags: []
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'vials'}),
        color: colors.blue,
        title: "Smart Scraper Test Builder",
        description: <span>
            Encaptualisated logic to remove duplication and simplify the configuration of Smart
                                Scraper
                                tests
        </span>,
        tags: []
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'baby-carriage'}),
        color: colors.blue,
        title: "Structured Employer Benefits Data",
        description: <span>
            Designed and migrated a structred data schema for the Employer Benefits area to enable
                            functionality such as comparing benifits and search. Worked alongside the customer success
                            team to clean and migrate old data to the new structure. I

                            Worked alongside UX to build their vision for the Employer Benefits tables
        </span>,
        tags: []
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'heart'}),
        color: colors.red,
        title: "Save job functionality",
        description: <span>
            Built the save job functionality, which entails an register/sign in gate, the ability to
                            save
                            a job
                            and to remove a saved job from multiple places across the website. With google analytics
                            events firing for each action.
        </span>,
        tags: []
    },
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'heart'}),
        color: colors.cyan,
        title: "Port the frontend to NextJs typescript",
        description: <span>
            Spearheaded a greenfield project to port the jobsite frontend from a Razor/javascript React
                            project to Typescript React NextJs, drastically improving page speed and improving developer
                            experience
        </span>,
        tags: []
    }
    ,
    {
        icon: findIconDefinition({prefix: 'fas', iconName: 'heart'}),
        color: colors.orange,
        title: "Domain Migration",
        description: <span>
            Investigated and implemented NextJs internationalised routing and worked with the team to
                            migrate the website from regionalised sub domains to sub paths to create a website with a
                            more
                            globalised feel.
        </span>,
        tags: []
    }
    ,
    {
        icon: findIconDefinition({prefix: 'fab', iconName: 'wordpress'}),
        color: colors.blue,
        title: "CMS Migration",
        description: <span>
            Migrate content and assets from Squidex to Wordpress
        </span>,
        tags: []
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
                {projectData.map(project => <ProjectDisplay project={project}/>)}
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
            <li data-year=" " data-text=" "/>
            <li data-year="2021" data-text="Software Engineer"/>
            <li data-year=" " data-text=" "/>
        </TimeLineUl>
    )
}


const ProjectDisplay: FC<{ project: Project }> = ({project}) => {
    return (
        <ProjectCard color={project.color}>
            <div>
                <h6>{project.title}</h6>
                <p>{project.description}</p>
            </div>
            <FontAwesomeIcon icon={project.icon} size={"2x"}/>
        </ProjectCard>
    )
}

const ProjectCard = styled.div<{color: string}>`
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
    svg {
        align-self: flex-end;
        color: ${props => props.color}
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
    }
`


export default Experience;