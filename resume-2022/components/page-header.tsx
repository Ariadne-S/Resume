import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC} from "react";
import styled from "styled-components";

import {findIconDefinition, IconDefinition, IconLookup} from '@fortawesome/fontawesome-svg-core'

const emailLookup: IconLookup = {prefix: 'fas', iconName: 'envelope'}
const emailIconDefinition: IconDefinition = findIconDefinition(emailLookup)

const githubLookup: IconLookup = {prefix: 'fab', iconName: 'github'}
const githubIconDefinition: IconDefinition = findIconDefinition(githubLookup)

const linkedInLookup: IconLookup = {prefix: 'fab', iconName: 'linkedin'}
const linkedInIconDefinition: IconDefinition = findIconDefinition(linkedInLookup)

const PageHeader: FC = () => {
    return (
        <PageHeaderContainer>
            <div>
                <h1>Toni Sefton</h1>
                <h2>Software Engineer</h2>
            </div>
            <PersonalInfo>
                <Info href="mailto:tonisefton@outlook.com?">
                    <FontAwesomeIcon icon={emailIconDefinition}/>
                    tonisefton@outlook.com
                </Info>
                <Info href="https://www.linkedin.com/in/toni-sefton/">
                    <FontAwesomeIcon icon={linkedInIconDefinition}/>
                    https://www.linkedin.com/in/
                    <wbr/>
                    toni-sefton/
                </Info>
                <Info href="https://github.com/Ariadne-S">
                    <FontAwesomeIcon icon={githubIconDefinition}/>
                    https://github.com/Ariadne-S
                </Info>
            </PersonalInfo>
        </PageHeaderContainer>
    )
}

const PageHeaderContainer = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;

    margin-top: 0;
    
    h1 {
        margin-bottom: 0px;
    }
    
   @media screen and (max-width: 700px) {
        flex-direction: column;
        text-align: center;
   }
   
    @media screen {
        background-color: #31435d;
        border-bottom: 3px solid #91a0b7;
        
        * {
            color: #ffffffed;
        }
    }
    
    @media print {
       padding: 1rem;
        border-bottom: 3px solid black;
        * {
            color: black;
        }
    }
`;

const PersonalInfo = styled.div`
    display: flex;
    width: 50vw;
    flex-direction: column;
    justify-content: space-evenly;
    
    @media screen and (max-width: 700px) {
        margin-top: 20px;
    }
`;

const Info = styled.a`
    text-align: right;
    margin-bottom: 10px;
    
    svg {
        margin-right: 10px;
    };
    
    @media screen and (max-width: 700px) {
        text-align: center;
    }
    
   @media screen and (max-width: 450px) {
        display: flex;
        margin-top: 10px;
        flex-direction: column;
        
        svg {
            margin: auto;
            margin-bottom: 5px;
        };
   }
   
   @media print {
   color: #4b4e4e;
    svg {
        color: black;
    }
   }
`;

export default PageHeader