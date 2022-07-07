import me from "../img/me.jpg"
import img1 from "../img/oven.jpg"
import img2 from "../img/mock2.png"

export let colors = [
    "rgb(0,255,164)", 
    "rgb(166,104,255)"
];

export const info = {
    firstName: "Rubén",
    lastName: "Díaz",
    initials: "TS", 
    position: "a FullStack Developer",
    selfPortrait: me,
    gradient: `-webkit-linear-gradient(
        135deg, 
        ${colors}
    )`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🔥',
            text: 'fueled by passion'
        },
        {
            emoji: '🌎',
            text: 'based in Spain'
        },
        {
            emoji: "💼",
            text: "Junior Java Development"
        },
        {
            emoji: "📧",
            text: "rubendiaz300000@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Benrhu",
            icon: "fa fa-github"
        },
        {
            link: "https://linkedin.com/rubendiazhuelva",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://www.open-bootcamp.com",
            icon: "fa fa-graduation-cap"
        }

    ],
    bio: "Hello! I'm Rubén. I'm a FullStack Developer. I studied at OpenBootCamp.com, I enjoy long walks on the mountain and I believe blockchain technology will inevitably and forever change the way we relate to and use money. You should hire me :)",
    skills:
        {
            experienceWith: [
                'java', 
                'spring', 
                'node', 
                'git', 
                'github', 
                'html5', 
                'css3', 
                'figma',
                'Angular'
            ],
            exposedTo: [
                'c#',
                '.net',
                'python', 
                'unity'
            ]
        }
    ,
    hobbies: [
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'philosophy',
            emoji: '🤔'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'kungfu',
            emoji: '👊'
        },
    ],
    portfolio: [
        {
            title: "Ovenex",
            source: "https://github.com/Benrhu/Ovenex", // this should be a link to the **repository** of the project, where the code is hosted.
            image: img1
        },
        {
            title: "Project 2",
            live: "",
            source: "",
            image: img2
        },
    ]
}