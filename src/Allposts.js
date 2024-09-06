export const allPosts = {
    game:
    {
        experiencePosts:
        [
            {
                title: "Tactic Studios: Current Game Programmer Intern",
                date: "Sep 2024 - Jan 2025",
                desc: "",
                points: [
                    "Developing a multiplayer Third Person Shooter game published by Square Enix using C++ and Java"
                ],
                sources: [
                    //["/bg_video.mp4", 1, "forthcoming game"],
                    //["/engine_video.mp4", 1, "proprietary engine"],
                ]
            },
            {
                title: "AI Arena: Game Programmer Intern",
                date: "Jan 2024 - May 2024",
                desc: "A platform fighter game where players train reinforcement learning agents to compete in ranked matchmaking with over 40,000 players.",
                points: [
                    "Constructed a modular utility AI system by applying dynamic response curves to score and execute behavior tree nodes, building 9 opponent agents for challenge arenas",
                    "Created aerial dodge, grab, and throw with improved AABB collision responses and a new combo system",
                    "Built a tutorial NPC with integrated input capturer and sequencer tool to edit & replay 12 challenge solutions",
                    "Profiled and optimized asset pipeline by abstracting resource loading and disposal into mandatory lifecycle methods for 45 game entity classes, resolving WebGL memory leaks of 4MB/match",
                    "Developed middleware plugins for hot module replacement by applying fallback behavior to active modules during code updates, caching 3D scenes and reducing reload times by 40-fold"
                ],
                sources: [
                    ["https://www.youtube.com/embed/xcXjY55xUVY?si=CNpcwYgSy0OYxcRS", 2, "AI Arena"],
                ]
            }
        ],
        projectPosts:
        [
            {
                title: "L-Mesh",
                date: "",
                desc: "A 3D procedural generation tool using stochastic and parametric l-systems for modelling complex structures.",
                points: [
                "Implemented a context-free grammar interpreter using Three.js to draw 3D structures and simulate motion",
                "Developed a responsive formal language editor in Typescript with error highlighting and 20 customizable presets",
                "Created a cloud-based 3D model manager using Node.js and PostgreSQL to support CRUD operations"
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
                title: "Knight Shift (GMTK Game Jam)",
                date: "",
                desc: "A size-scaling action platformer game for the GMTK 2024 game jam.",
                points: [
                "Implemented melee combat system with frame precise weapon collision mappings and status effects",
                "Built hiearchical state machines to develop character movement, AI behaviours, and object scaling"
                ],
                sources: [["/knight_shift.mp4", 1, "combat and ai"]]
            },
            {
                title: "Astroship",
                date: "",
                desc: "A top-down space shooter game with physics-based weapons and enemies.",
                points: [
                "Developed all game mechanics and art, including characters, controls, camera, combat, and environment",
                "Optimized memory usage by applying object pooling on factory classes to recycle characters and projectiles",
                "Batched component updates by aggregating frequent events to reduce particle and audio emitter calls"
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
                desc: "A C++ chess engine built using OOP principles and MVC architecture.",
                points: [
                "Created AI players using an alpha-beta searching algorithm with iterative deepening to evaluate new moves",
                "Developed a legal move generator with bit encoding to calculate and benchmark over 1.6M moves per sec",
                "Implemented an XWindow GUI using the observer pattern with customizable boards and 5 difficulty settings"
                ],
                sources: []
            }
        ]
    },
    general:
    {
        experiencePosts:
        [
            {
                title: "Tactic Studios: Current Game Programmer Intern",
                date: "Sep 2024 - Jan 2025",
                desc: "",
                points: [
                    "Developing a multiplayer Third Person Shooter game published by Square Enix using C++ and Java"
                ],
                sources: [
                    //["/bg_video.mp4", 1, "forthcoming game"],
                    //["/engine_video.mp4", 1, "proprietary engine"],
                ]
            },
            {
                title: "AI Arena: Game Programmer Intern",
                date: "Jan 2024 - May 2024",
                desc: "A platform fighter game where players train reinforcement learning agents to compete in ranked matchmaking with over 40,000 players.",
                points: [
                    "Constructed a modular utility AI system using TypeScript by applying dynamic response curves to score and execute behavior tree nodes, building 9 opponent agents for evaluating over 40,000+ players",
                    "Developed middleware plugins in React for hot module replacement by integrating fallback behavior to active modules during code updates, caching 3D scenes and reducing reload times by 40-fold",
                    "Profiled and optimized asset pipeline by abstracting resource loading and disposal into mandatory lifecycle methods for 45 game entity classes, resolving WebGL memory leaks of 4MB/match",
                    "Implemented a self-play training gamemode for reinforcement learning agents to assess & update policies",
                    "Built a tutorial NPC with integrated input capturer and sequencer tool to edit & replay 12 challenge solutions",
                ],
                sources: [
                    ["https://www.youtube.com/embed/xcXjY55xUVY?si=CNpcwYgSy0OYxcRS", 2, "AI Arena"],
                ]
            },
            {
                title: "eButterfly: Software Developer Intern",
                date: "May 2023 – Sep 2023",
                desc: "A data-driven platform for collecting and analyzing butterfly distribution, phenology, and flight patterns.",
                points: [
                    "Developed geospatial heatmaps for butterfly observations using Python and PostgreSQL by applying grid-based aggregation to cap plotted geometries for 500,000 data points",
                    "Implemented a bulk data import system with Node.js and React by extracting and validating CSV rows with DB schemas, resulting in 5000+ new observations from 2 research teams",
                    "Created a taxonomy dashboard via recursive form components and lazy loading for 2,000+ butterfly species",
                    "Deployed Python microservices for flight data visualizations using FastAPI endpoints and Docker containers",
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
                desc: "A 3D procedural generation tool using stochastic and parametric l-systems for modelling complex structures.",
                points: [ // maybe talk about using transactions to validate and protect data for tree-based schemas
                    "Created a cloud-based 3D model manager using Node.js and PostgreSQL to support CRUD operations",
                    "Developed a responsive formal language editor in React with error highlighting and 20 customizable presets",
                    "Implemented a context-free grammar interpreter using Three.js to draw 3D structures and simulate motion",
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
                desc: "A C++ chess engine built using OOP principles and MVC architecture.",
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
                desc: "A Discord plugin for creating auto reminders for ghosted messages and manual reminders for important messages.",
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
                desc: "A top-down space shooter game with physics-based weapons and enemies.",
                points: [
                "Developed all game mechanics and art, including characters, controls, camera, combat, and environment",
                "Optimized memory usage by applying object pooling on factory classes to recycle characters and projectiles",
                "Batched component updates by aggregating frequent events to reduce particle and audio emitter calls"
                ],
                sources: [["/astroship.mp4", 1, "combat and ai"]]
            },

        ]
    }
}