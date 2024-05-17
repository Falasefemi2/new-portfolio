import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import sketch from "../../public/tech-icons/sketch.svg";
import canva from "../../public/tech-icons/canva.svg";
import ai from "../../public/tech-icons/ai.svg";
import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import cloud from "../../public/tech-icons/creativecloud.svg";
import framer from "../../public/tech-icons/framer.svg";
import github from "../../public/tech-icons/github.svg";
import slack from "../../public/tech-icons/slack.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import notion from "../../public/tech-icons/notion.svg";
import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import react from "../../public/tech-icons/react2.svg";
import js from "../../public/tech-icons/js.svg";
import go from "../../public/tech-icons/go.svg";
import css from "../../public/tech-icons/css.svg"
import { Button } from './ui/button';

const icons = [
    sketch,
    canva,
    ai,
    figma,
    chatgpt,
    cloud,
    framer,
    github,
    slack,
    chrome,
    notion,
    react,
    js,
    go,
    css
];

const socialMedia = [
    {
        id: 1,
        icon: insta,
        name: "Instagram",
        username: "@falase_femi",
        link: "https://www.instagram.com/falase_femi/",
    },
    {
        id: 2,
        icon: twitter,
        name: "X / Twitter",
        username: "@FemiFalase",
        link: "https://twitter.com/FemiFalase",
    },
    {
        id: 3,
        icon: linkedin,
        name: "Linkedin",
        username: "@falase femi",
        link: "https://www.linkedin.com/in/falase-femi-91121b227/",
    },
    {
        id: 4,
        icon: github,
        name: "Github",
        username: "FalaseFemi2",
        link: "https://github.com/Falasefemi2",
    }
];


const CardComponent = () => {
    return (
        <>
            <Card className='bg-gray-100 border-none'>
                <CardHeader>
                    <CardTitle>Explore my stack</CardTitle>
                    <CardDescription>Check out the tools i use daily</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-wrap gap-4'>
                    {icons.map((item, index) => (
                        <img key={index} src={item.src} alt="Icon" className="w-16 h-16" />
                    ))}
                </CardContent>
            </Card>
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
                {socialMedia.map((item) => (
                    <Card
                        key={item.id}
                        className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
                    >
                        <img src={item.icon.src} alt="Icon" className="w-16 h-16" />
                        <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                        <p className="text-muted-foreground">{item.username}</p>
                        <Button className="mt-4" size="sm" asChild>
                            <a href={item.link}>Follow</a>
                        </Button>
                    </Card>
                ))}
            </div>
        </>


    )
}

export default CardComponent