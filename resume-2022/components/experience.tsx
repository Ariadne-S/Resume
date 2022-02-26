import {FC} from "react";
import styled from "styled-components";
import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {work180projectData} from "../data/data";
import {Project} from "../data/types";
import Timeline from "./experience-timeline";

const Experience: FC = () => {
    return (
        <div>
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
        </div>
    )
}

const ProjectsCallout: FC = () => {
    return (
        <div>
            <h5>Projects</h5>
            <ProjectGrid>
                {work180projectData.map(project => <ProjectDisplay key={project.title} project={project}/>)}
            </ProjectGrid>
        </div>

    )
}

const ProjectGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

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
            padding-bottom: 2.5px;
            
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

export default Experience;