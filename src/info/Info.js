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
    initials: "Dev", 
    // position: "CEO of grouzy.com",
    selfPortrait: me,
    gradient: `-webkit-linear-gradient(
        135deg, 
        ${colors}
    )`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🔥',
            text: 'fueled by passion,  ambittion and people'
        },
        {
            emoji: '🌎',
            text: 'based in Barcelona, Spain'
        },
        {
            emoji: "💼",
            text: "creating software that makes money"
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
    bio: "Hello! I'm Rubén. I'm a FullStack Developer that loves selling. I keep studing coding at OpenBootCamp.com. For another hand, I enjoy long walks on the mountain and I love hamster and cats, dogs as well :)",
    skills:
        {
            experienceWith: [
                'Java', 
                'Spring', 
                'Node', 
                'Git', 
                'Html', 
                'Css',
                'Figma',
                'React',
                'Angular'
            ],
            exposedTo: [
                'Solidity',
                'Elixir',
                'AWS'
            ]
        }
    ,
    hobbies: [
        {
            label: 'Theater',
            emoji: '🎭'
        },
        {
            label: 'Personal Development',
            emoji: '🤔'
        },
        {
            label: 'Read and learn new things',
            emoji: '📖'
        },
        {
            label: 'Kung Fu',
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
            title: "Grouzy",
            live: "https://grouzy.com/",
            source: "",
            image: img2
        },
    ]
}