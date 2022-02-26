import {FC} from "react";
import {work180projectData} from "../data/data";
import styled, {css} from "styled-components";
import {Project} from "../data/types";
import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
    
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

const ProjectDisplay: FC<{ project: Project }> = ({project}) => {
    return (
        <ProjectCard color={project.color}>
            <CardPullDown>
                <SkillTags tags={project.tags}/>
            </CardPullDown>
            <div>
                <h6>{project.title}</h6>
                <p>{project.description}</p>
                <SkillTags tags={project.tags} noHover />
            </div>
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
    
    li, svg {
        color: white !important;
    }
    
    @media (any-hover: none) {
        display: none;
    }
`;

const noHoverEffect = css`
    @media (any-hover: hover) {
        display: none;
    }
`

const SkillTagList = styled.ul<{ noHover: boolean }>`
    list-style-type: none;
    margin: 0;
    padding: 0;
    columns: 2;  
    
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
    width: 28%;
    font-size: 12px;
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
    padding: 30px;
    padding-top: 40px;
    margin: 20px 0;  
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
    
    p, li {
        color: hsl(229, 6%, 66%);
    }
    
    > svg {
        margin-top: 10px;
        align-self: flex-end;
        color: ${props => props.color}
    }
    
    @media (any-hover: hover) {
        ${CardPullDown} {
             background-color: ${props => props.color};
             transition: all .5s ease-in-out;
        }
    
        justify-content: space-between;
        ${CardPullDown} {
             display: none;
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
    }

    @media screen and (max-width: 700px) {
        width: 95%;
    }
    
        
    @media screen and (min-width: 700px) and (max-width: 1010px) {
       width: 44%;
    }
`;

export default ProjectsCallout;