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
            <h1>Toni Sefton</h1>
            <h2>Software Engineer</h2>
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
    flex-direction: column;
    align-items: center;
    border-bottom: 3px solid #91a0b7;
    padding: 2rem;
    background-color: #31435d;
    margin-top: 0;
    
    * {
        color: #ffffffed;
    }
    
    h1 {
        margin-bottom: 0px;
    }
`;

const PersonalInfo = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
`;

const Info = styled.a`
    svg {
        margin-right: 10px;
    };
`;

export default PageHeader