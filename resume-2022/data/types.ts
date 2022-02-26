import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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

interface Education {
    time: string,
    title: string,
    subtitle: string,
    description: JSX.Element,
}

export type { Project, Education };
export { colors }