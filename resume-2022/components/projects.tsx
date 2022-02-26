import {FC, useState} from "react";
import {work180projectData} from "../data/data";
import styled, {css} from "styled-components";
import {colorKey, colors, Project} from "../data/types";
import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const ProjectsCallout: FC = () => {
    shuffleArray(colors)
    return (
        <div>
            <h5>Projects</h5>
            <ProjectGrid>
                {work180projectData.map((project, index) => {
                    return <ProjectDisplay key={project.title} project={project} color={colors[(index % colors.length)]} />})}
            </ProjectGrid>
        </div>

    )
}

const ProjectGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
    
    @media print {
        flex-direction: column;
    }
`

const ProjectDisplay: FC<{ project: Project, color: string}> = ({project, color}) => {
    return (
        <ProjectCard color={color}>
            <CardPullDown>
                <SkillTags tags={project.tags}/>
            </CardPullDown>
            <h6>{project.title}</h6>
            <ProjectDescription>
                <p>{project.description}</p>
                <SkillTags tags={project.tags} noHover />
            </ProjectDescription>
            {project.icon ? <FontAwesomeIcon icon={project.icon} size={"2x"}/> : project.svg}
        </ProjectCard>
    )
}

const SkillTags: FC<{ tags: string[], noHover?: boolean}> = ({tags, noHover = false }) => {
    const tagIcon = findIconDefinition({prefix: 'fas', iconName: 'tag'});

    return (
        <SkillTagList noHover={noHover}>
            {tags.map((tag, index) =>
                <li key={`${tag}-${index}`}>
                    <FontAwesomeIcon icon={tagIcon} color={"hsl(234,12%,34%)"}/>
                    {tag}
                </li>
            )}
        </SkillTagList>
    )
}

const CardPullDown = styled.div`
    position: relative;
    left: -30px;
    top: -40px;
    padding: 15px;
    width: calc(100% + 60px);
    display: none;
    height: 0;
    
    li, svg {
        color: white !important;
    }
    
    @media print {
        display: none;
    }
`;

const noHoverEffect = css`
    @media (any-hover: hover) {
        display: none;
    }
    
    @media print {
        display: block;
    }
`

const SkillTagList = styled.ul<{ noHover: boolean }>`
    list-style-type: none;
    margin: 0;
    padding: 0;
    columns: 2; 
    
    @media print {
        columns: 3; 
    } 
    
    ${props => props.noHover ? noHoverEffect : ''};

    li {
        display: flex;
        padding-bottom: 2.5px;
        align-items: center;
        
        svg {
            padding-right:1em;
            padding-left: 1em;
        }
    }
`;

const ProjectCard = styled.div<{ color: string }>`
    flex: 1 0px;
    min-width: 250px;
    font-size: 12px;
    border-radius: 5px;
    padding: 30px;
    padding-top: 40px;
    margin: 20px 0;  
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-top: 5px solid ${props => props.color};
    
    h6 {
        line-height: 0.8;
        margin: 0;
        line-height: 1.5;
        color: hsl(234, 12%, 34%);
        font-weight: 600;
        font-size: 16px;
    }
    
    p, li {
        color: hsl(229, 6%, 66%);
    }
    
    > svg {
        margin-top: 10px;
        align-self: flex-end;
        color: ${props => props.color};
    }
    
    @media screen and (any-hover: hover) {
        height: 300px;
        justify-content: space-between;
        
        ${CardPullDown} {
             background-color: ${props => props.color};
             transition: all .10s ease-in-out;
        }
        
        ${CardPullDown} {
             display: none;
        }
    
        &:hover {
            ${CardPullDown} {
                 height: auto;
                 display: block;
            }
            
            p {
                height: 38px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    @media screen {
        box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
        background-color: hsl(0, 0%, 98%);
    }
    
    @media print {
        width: 100%;
        border-top: 0;
        padding: 0;
        margin: 0;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        
        p, li {
            color: #4b4e4e;
        }

        h6 {
            flex-grow: 2;
            font-size: 14px;
        }
        
        h6, svg {
            color: #2f2f2f;
        }
        
        > svg {
            order: -1;
            align-self: flex-start;
            margin: 0;
            margin-right: 15px;
        }
    }
`;

const ProjectDescription = styled.div`
     flex: 1 100%;
`

export default ProjectsCallout;