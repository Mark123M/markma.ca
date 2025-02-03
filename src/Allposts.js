export const allPosts = {
    game:
    {
        experiencePosts:
        [
            {
                title: "Electronic Arts: Engine Programmer Intern",
                date: "Incoming Sep 2025 - Dec 2025",
                desc: "Audio and movie tools for the Frostbite engine",
                points: [
                ],
                sources: [
                ]
            },
            {
                title: "Tactic Studios: Game Programmer Intern",
                date: "Sep 2024 - Dec 2024",
                desc: "An unannounced project for Square Enix",
                points: [
                    "Developed inventory system in C++ with network replication and LRU cache scheme to sort and trade items",
                    "Created multiplayer scoreboard with minimap indicators to visualize stats, clues, and spatial data on suspects",
                    "Improved gunplay mechanics using raycasts and layer masks to handle target validation and weapon collision",
                    "Implemented stat system calculations and localization tools to embed item upgrades and buff effects in HUD",
                ],
                sources: [
                ]
            },
            {
                title: "AI Arena: Gameplay Programmer Intern",
                date: "Jan 2024 - May 2024",
                desc: "A platform fighter game where players train reinforcement learning agents to compete in ranked matchmaking",
                points: [
                    "Constructed a utility AI system with Three.js and TypeScript to manage behavior trees for 8 opponent agents",
                    "Developed aerial dodge, grab, and throw via finite state machines, applying framedata & collision responses",
                    "Built a tutorial NPC with integrated input capture and sequencer tools to edit & replay 12 challenge solutions",
                    "Optimized asset pipeline by abstracting resource loading and disposal to fix WebGL memleaks of 4MB/match",
                ],
                sources: [
                    ["https://www.youtube.com/embed/xcXjY55xUVY?si=CNpcwYgSy0OYxcRS", 2, "AI Arena"],
                ]
            },
            {
                title: "eButterfly: Software Developer Intern",
                date: "May 2023 – Sep 2023",
                desc: "A data-driven platform for collecting and analyzing butterfly distribution, phenology, and flight patterns",
                points: [
                    "Developed geospatial heatmaps for butterfly observations using Python and PostgreSQL by applying grid-based aggregation to cap plotted geometries for 500,000+ data points",
                    "Built data import system with Node.js and React to extract and validate CSV rows with database schemas",
                    "Implemented SSO and automated post creation to integrate discussion forum with main site for 4,000+ users",
                    "Created a taxonomy dashboard via recursive form components & lazy loading for 22,000+ butterfly species",
                ],
                sources: [
                    ["/heatmap.png", 0, "Geospatial Heatmap"],
                    ["/eb.png", 0, "eButterfly"],
                ]
            },
        ],
        projectPosts:
        [
            {
                title: "GPU Raytracer",
                date: "",
                desc: "A monte carlo pathtracer for rendering and light transport simulations",
                points: [ // maybe talk about using transactions to validate and protect data for tree-based schemas
                    "Built a Monte Carlo raytracer using C++ to render 3D environments with light transport and BSDF models",
                    "Implemented an n-dimensional Halton sequence generator for sampling quasirandom values over light paths",
                    "Used multiple importance sampling with next event estimation on lights and materials to reduce image noise",
                ],
                sources: []
            },
            {
                title: "L-Mesh",
                date: "",
                desc: "A 3D procedural generation tool using stochastic and parametric l-systems for modelling complex structures",
                points: [ // maybe talk about using transactions to validate and protect data for tree-based schemas
                    "Implemented a parametric L-system interpreter with Three.js to compute and animate recursive 3D models",
                    "Built a model manager REST API via Node.js & SQL with transactions for operations on tree-based schemas",
                    "Developed a responsive formal language editor in React with error highlighting and 20 customizable presets",
                ],
                sources: [
                    ["/ash_tree.png", 0, "ash tree"],
                    ["/bush.png", 0, "bush"],
                    ["/flower_plant.png", 0, "flower plant"],
                    ["/weeping_willow.png", 0, "weeping willow"],
                    ["/koch_3.png", 0, "koch curve"]
                ]
            },
            {
                title: "Astroship",
                date: "",
                desc: "A top-down space shooter game with physics-based weapons and enemies",
                points: [
                "Developed all game mechanics and art, including characters, controls, camera, combat, and environment",
                "Optimized C# memory usage by applying object pooling on factory classes to recycle game entities",
                "Batched component updates using an event queue by aggregating frequent particle and audio emitter calls"
                ],
                sources: [["/astroship.mp4", 1, "combat and ai"]]
            },
            {
                title: "Compiler for C-like language",
                date: "",
                desc: "A compiler for translating a subset of C++ features into MIPS machine language",
                points: [
                "Applied an SLR(1) bottom-up parsing algorithm to construct type-annotated parse trees for semantic analysis",
                "Implemented code generation for functions, control flow, and dynamic memory allocation with free lists",
                "Created loaders and static linkers with relocation algorithms to resolve external symbol exports and usage"
                ],
                sources: [
                ]
            },
            {
                title: "Chess Engine",
                date: "",
                desc: "A C++ chess engine built using OOP principles and MVC architecture",
                points: [
                "Created AI players using an alpha-beta searching algorithm with iterative deepening to evaluate new moves",
                "Developed a legal move generator with bit encoding to calculate and benchmark over 1.6M moves per sec",
                "Implemented an XWindow GUI using the observer pattern with customizable boards and 5 difficulty settings"
                ],
                sources: []
            },
        ]
    },
    general:
    {
        experiencePosts:
        [
            {
                title: "Electronic Arts: Engine Programmer Intern",
                date: "Incoming Sep 2025 - Dec 2025",
                desc: "Audio and movie tools for the Frostbite engine",
                points: [
                ],
                sources: [
                ]
            },
            {
                title: "Tactic Studios: Game Programmer Intern",
                date: "Sep 2024 - Dec 2024",
                desc: "An unannounced project for Square Enix",
                points: [
                    "Developed inventory system in C++ with network replication and LRU cache scheme to sort and trade items",
                    "Created multiplayer scoreboard with minimap indicators to visualize stats, clues, and spatial data on suspects",
                    "Improved gunplay mechanics using raycasts and layer masks to handle target validation and weapon collision",
                    "Implemented stat system calculations and localization tools to embed item upgrades and buff effects in HUD",
                ],
                sources: [
                ]
            },
            {
                title: "AI Arena: Gameplay Programmer Intern",
                date: "Jan 2024 - May 2024",
                desc: "A platform fighter game where players train reinforcement learning agents to compete in ranked matchmaking",
                points: [
                    "Constructed a utility AI system with Three.js and TypeScript to manage behavior trees for 8 opponent agents",
                    "Developed aerial dodge, grab, and throw via finite state machines, applying framedata & collision responses",
                    "Built a tutorial NPC with integrated input capture and sequencer tools to edit & replay 12 challenge solutions",
                    "Optimized asset pipeline by abstracting resource loading and disposal to fix WebGL memleaks of 4MB/match",
                ],
                sources: [
                    ["https://www.youtube.com/embed/xcXjY55xUVY?si=CNpcwYgSy0OYxcRS", 2, "AI Arena"],
                ]
            },
            {
                title: "eButterfly: Software Developer Intern",
                date: "May 2023 – Sep 2023",
                desc: "A data-driven platform for collecting and analyzing butterfly distribution, phenology, and flight patterns",
                points: [
                    "Developed geospatial heatmaps for butterfly observations using Python and PostgreSQL by applying grid-based aggregation to cap plotted geometries for 500,000+ data points",
                    "Built data import system with Node.js and React to extract and validate CSV rows with database schemas",
                    "Implemented SSO and automated post creation to integrate discussion forum with main site for 4,000+ users",
                    "Created a taxonomy dashboard via recursive form components & lazy loading for 22,000+ butterfly species",
                ],
                sources: [
                    ["/heatmap.png", 0, "Geospatial Heatmap"],
                    ["/eb.png", 0, "eButterfly"],
                ]
            },
        ],
        projectPosts:
        [
            {
                title: "GPU Raytracer",
                date: "",
                desc: "A monte carlo pathtracer for rendering and light transport simulations",
                points: [ // maybe talk about using transactions to validate and protect data for tree-based schemas
                    "Built a Monte Carlo raytracer using C++ to render 3D environments with light transport and BSDF models",
                    "Implemented an n-dimensional Halton sequence generator for sampling quasirandom values over light paths",
                    "Used multiple importance sampling with next event estimation on lights and materials to reduce image noise",
                ],
                sources: []
            },
            {
                title: "L-Mesh",
                date: "",
                desc: "A 3D procedural generation tool using stochastic and parametric l-systems for modelling complex structures",
                points: [ // maybe talk about using transactions to validate and protect data for tree-based schemas
                    "Implemented a parametric L-system interpreter with Three.js to compute and animate recursive 3D models",
                    "Built a model manager REST API via Node.js & SQL with transactions for operations on tree-based schemas",
                    "Developed a responsive formal language editor in React with error highlighting and 20 customizable presets",
                ],
                sources: [
                    ["/ash_tree.png", 0, "ash tree"],
                    ["/bush.png", 0, "bush"],
                    ["/flower_plant.png", 0, "flower plant"],
                    ["/weeping_willow.png", 0, "weeping willow"],
                    ["/koch_3.png", 0, "koch curve"]
                ]
            },
            {
                title: "Compiler for C-like language",
                date: "",
                desc: "A compiler for translating a subset of C++ features into MIPS machine language",
                points: [
                "Applied an SLR(1) bottom-up parsing algorithm to construct type-annotated parse trees for semantic analysis",
                "Implemented code generation for functions, control flow, and dynamic memory allocation with free lists",
                "Created loaders and static linkers with relocation algorithms to resolve external symbol exports and usage"
                ],
                sources: [
                ]
            },
            {
                title: "Chess Engine",
                date: "",
                desc: "A C++ chess engine built using OOP principles and MVC architecture",
                points: [
                "Created AI players using an alpha-beta searching algorithm with iterative deepening to evaluate new moves",
                "Developed a legal move generator with bit encoding to calculate and benchmark over 1.6M moves per sec",
                "Implemented an XWindow GUI using the observer pattern with customizable boards and 5 difficulty settings"
                ],
                sources: []
            },
            {
                title: "WeeklyMix",
                date: "",
                desc: "A social media app for musicians with user profiles, posts, authentication, media uploads, likes and follows",
                points: [
                    "Implemented a REST API using Node.js and MongoDB to facilitate content-sharing and user interactions",
                    "Implemented responsive web pages using React and Figma for discussion boards, user profiles, and logins",
                    "Managed user-uploaded media using AWS S3 and DCT compression to deliver up to 25GB of static files"
                ],
                sources: [
                    ["/discussions.png", 0, "discussions page"],
                    ["/profile.png", 0, "profile modal"],
                ]
            },
            {
                title: "ChatReminder",
                date: "",
                desc: "A Discord plugin for creating auto reminders for ghosted messages and manual reminders for important messages",
                points: [
                    "Developed and integrated custom modals, notifications, and context menus into Discord using JavaScript by patching native Webpack functions and intercepting DOM events",
                    "Implemented persistent reminder tracking by parsing messages into JSON format to saving into local files"
                ],
                sources: [
                    ["/chatreminder1.png", 0, "reminder context menu"],
                    ["/chatreminder2.png", 0, "reminder modal"],
                    ["/chatreminder3.png", 0, "reminder pop-ups"]
                ]
            },
            {
                title: "Astroship",
                date: "",
                desc: "A top-down space shooter game with physics-based weapons and enemies",
                points: [
                "Developed all game mechanics and art, including characters, controls, camera, combat, and environment",
                "Optimized C# memory usage by applying object pooling on factory classes to recycle game entities",
                "Batched component updates using an event queue by aggregating frequent particle and audio emitter calls"
                ],
                sources: [["/astroship.mp4", 1, "combat and ai"]]
            }

        ]
    }
}