import type { Project } from '../types'

export const projects: Project[] = [
    {
        id: 'cozy-market',
        title: 'Cozy Market',
        year: 2024,
        role: 'Game Developer',
        shortDescription: 'A personal mobile Puzzle/Casual game. Players arrange goods and match 3 identical products. Focused on game feel, performance optimization (Object Pooling), and system architecture (Service Locator).',
        fullDescription: 'Mobile Puzzle/Casual game — arrange goods and match 3 identical products. Solo project.',
        thumbnail: 'images/cozy-market/cozy-market-logo.jpg',
        teamSize: 1,
        duration: '~2 weeks',
        tools: ['Unity', 'C#'],
        platform: 'Mobile (iOS/Android)',
        tags: ['Puzzle', 'Casual', 'Mobile', 'Unity'],
        media: [
            { type: 'image', src: 'images/cozy-market/cozy-market-logo.jpg', caption: 'Cozy Market' },
        ],
        links: [
            { label: 'Demo Gameplay', href: '#' },
            { label: 'GitHub', href: '#' },
            { label: 'Tải Game', href: '#' },
        ],
    },
    {
        id: 'sunnyside-acres',
        title: 'Sunnyside Acres',
        year: 2024,
        role: 'Game Developer',
        shortDescription: 'An online farming/simulation WebGL game combining shared-area multiplayer and instance-based personal gameplay. Responsible for the core gameplay loop, backend state sync, and WebGL performance optimization.',
        fullDescription: 'Online farming/simulation WebGL game. Multiplayer + instance-based gameplay. Unity Developer responsible for gameplay and partial UI.',
        thumbnail: 'images/sunnyside-acres/_7RR5R8u_400x400.jpg',
        teamSize: 5,
        duration: '~12 months',
        tools: ['Unity', 'C#'],
        platform: 'WebGL',
        tags: ['Farming', 'Simulation', 'Multiplayer', 'WebGL', 'Unity'],
        media: [],
        links: [],
    },
    {
        id: 'starkmine',
        title: 'Starkmine',
        year: 2024,
        role: 'Game Developer',
        shortDescription: 'An Idle/Incremental WebGL game. Players open orbs to receive spacecraft and use them to mine resources from planets. Responsible for all gameplay: gacha, auto-combat, progression, and backend integration.',
        fullDescription: 'Idle/Incremental WebGL game. Gacha → combat → resource → upgrade loop. Unity Developer responsible for all client/gameplay.',
        thumbnail: 'images/starkmine/VK2cOfmJ_400x400.jpg',
        teamSize: 2,
        duration: '~3 months',
        tools: ['Unity', 'C#'],
        platform: 'WebGL',
        tags: ['Idle', 'Incremental', 'Gacha', 'WebGL', 'Unity'],
        media: [],
        links: [],
    },
    {
        id: 'nlu-exploration',
        title: 'NLU Exploration',
        year: 2024,
        role: 'Game Developer',
        shortDescription: 'A multiplayer pixel-art game simulating the Nong Lam University campus. Students explore the campus, choose career paths, and collaborate in real-time. Currently used as the official campus introduction tool.',
        fullDescription: 'Multiplayer pixel-art simulation of Nong Lam University. Graduation thesis project.',
        thumbnail: 'images/nlu-exploration/Logo_HCMUAF.png',
        teamSize: 2,
        duration: '~6 months',
        tools: ['Cocos Creator', 'JavaScript'],
        platform: 'WEBGL/MOBILE',
        tags: ['Multiplayer', 'Pixel Art', 'Simulation', 'Cocos Creator'],
        media: [],
        links: [],
    },
]

export const skills = [
    'Unity', 'C#', 'Cocos Creator', 'Multiplayer', 'Git',
]

export const education = [
    {
        school: 'Nong Lam University – HCMC (2020–2024)',
        degree: 'Information Technology',
    }
]
