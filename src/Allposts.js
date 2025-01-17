export const allPosts = {
    game:
    {
        experiencePosts:
        [
            {
                title: "Square Enix: Gameplay Programmer Intern",
                date: "Sep 2024 - present",
                desc: "Working on gameplay systems and mechanics for an unannounced project",
                points: [
                    "Implemented trading mechanic for weapons and consumables in C++ with item validation and memoization",
                    "Developed stat calculation system for item upgrades and hierarchical buff effects to determine HUD values",
                    "Integrated animations and UI for resizing puzzle game by calculating border anchor points and grid snap"
                ],
                sources: [
                ]
            },
            {
                title: "AI Arena: Game Programmer Intern",
                date: "Jan 2024 - May 2024",
                desc: "A platform fighter game where players train reinforcement learning agents to compete in ranked matchmaking",
                points: [
                    "Constructed a utility AI system with dynamic response curves to manage behavior trees based on game state and spatial queries, creating 9 opponent agents for 40,000+ players",
                    "Developed aerial dodge, grab, and throw via finite state machines, applying framedata & collision responses",
                    "Built a tutorial NPC with integrated input capture and sequencer tool to edit & replay 12 challenge solutions",
                    "Optimized asset pipeline by abstracting resource loading and disposal to fix WebGL memleaks of 4MB/match",
                    "Implemented middleware plugins for hot module replacement to cache 3D models and handle exceptions"
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
                title: "L-Mesh",
                date: "",
                desc: "A 3D procedural generation tool using stochastic and parametric l-systems for modelling complex structures",
                points: [ // maybe talk about using transactions to validate and protect data for tree-based schemas
                    "Implemented a context-free grammar interpreter using Three.js to model 3D structures and simulate motion",
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
                title: "Compiler for C++ subset",
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
                title: "Square Enix: Gameplay Programmer Intern",
                date: "Sep 2024 - present",
                desc: "Working on gameplay systems and mechanics for an unannounced project",
                points: [
                    "Implemented trading mechanic for weapons and consumables in C++ with item validation and memoization",
                    "Developed stat calculation system for item upgrades and hierarchical buff effects to determine HUD values",
                    "Integrated animations and UI for resizing puzzle game by calculating border anchor points and grid snap"
                ],
                sources: [
                ]
            },
            {
                title: "AI Arena: Game Programmer Intern",
                date: "Jan 2024 - May 2024",
                desc: "A platform fighter game where players train reinforcement learning agents to compete in ranked matchmaking",
                points: [
                    "Constructed a utility AI system with dynamic response curves to manage behavior trees based on game state and spatial queries, creating 9 opponent agents for 40,000+ players",
                    "Developed aerial dodge, grab, and throw via finite state machines, applying framedata & collision responses",
                    "Built a tutorial NPC with integrated input capture and sequencer tool to edit & replay 12 challenge solutions",
                    "Optimized asset pipeline by abstracting resource loading and disposal to fix WebGL memleaks of 4MB/match",
                    "Implemented middleware plugins for hot module replacement to cache 3D models and handle exceptions"
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
                title: "L-Mesh",
                date: "",
                desc: "A 3D procedural generation tool using stochastic and parametric l-systems for modelling complex structures",
                points: [ // maybe talk about using transactions to validate and protect data for tree-based schemas
                    "Built a model manager REST API via Node.js & SQL with transactions for operations on tree-based schemas",
                    "Implemented a context-free grammar interpreter using Three.js to model 3D structures and simulate motion",
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
                title: "Compiler for C++ subset",
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
                    "Developed and designed a cross-platform, responsive UI with React and Figma",
                    "Managed user-uploaded media using AWS S3 to store and deliver up to 25GB of static files"
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
                    "Implemented persistent reminder tracking system by parsing messages into JSON format, indexing each by timestamp, and saving into local files"
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