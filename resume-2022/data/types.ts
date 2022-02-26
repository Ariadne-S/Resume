import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Project {
    icon?: IconDefinition,
    svg?: JSX.Element,
    title: string,
    description: JSX.Element,
    tags: string[]
}

const colors = [
    '#F94144',
    '#F3722C',
    '#F8961E',
    '#F9C74F',
    '#90BE6D',
    '#43AA8B',
    '#577590'
]

const primaryLightColor = 'hsl(208, 25%, 45%)';
const primaryDarkColor = 'hsl(208, 25%, 30%)';

type colorKey = keyof typeof colors

interface Education {
    time: string,
    title: string,
    subtitle: string,
    description: JSX.Element,
}

export type { Project, Education, colorKey };
export { colors, primaryLightColor, primaryDarkColor }