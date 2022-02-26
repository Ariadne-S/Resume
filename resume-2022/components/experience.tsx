import {FC} from "react";
import Timeline from "./experience-timeline";
import ProjectsCallout from "./projects";

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

export default Experience;