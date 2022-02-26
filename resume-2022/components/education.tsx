import {FC} from "react";
import styled from "styled-components";
import {educationData} from "../data/data";
import {Education} from "../data/types";

const EducationSection: FC = () => {
    return (
        <div>
            <h3>Education</h3>
            <div>
                {educationData.map((education => 
                    <EducationPanel key={education.title} education={education} />
                ))}
            </div>
        </div>
    )
}

const EducationPanel:FC<{education: Education}> = ({education}) => {
    return (
        <EducationContainer>
            <h4>{education.time}</h4>
            <div>
                <h5>{education.title}</h5>
                <h6>{education.subtitle}</h6>
                {education.description}
            </div>
        </EducationContainer>
    )
}

const EducationContainer = styled.div`
    display: flex;
    
    h4 {
        margin-right: auto;
    }
    
    > div {
        width: 90%;
        
        @media screen {
            h5 {
                margin-bottom: 15px;
            }
        }
        
        @media print {
            h5, h6 {
                margin: 10px 0;
            }
        }
        
        h6 {
            margin-top: 0;
        }
    }
    
`

export default EducationSection;