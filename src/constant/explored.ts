import { TechnologyExploredProps } from "../components/technologies-explored/TechnologyExplored";

export const technologiesExplored: TechnologyExploredProps[] = [
  {
    name: "NodeJS",
    projects: [
      {
        description: "HTTP Server Library",
        codebase: "https://github.com/eye1994/shp-server",
      },
    ],
  },
  {
    name: "GoLang",
    projects: [
      {
        description: "Authentication service built in GoLang",
        codebase: "https://github.com/eye1994/authentication-service-api",
      },
      {
        description: "Websocket for multiplayer games",
        codebase: "https://github.com/eye1994/game-server",
      },
    ],
  },
];
