import { 
    type RouteConfig,
    route,
    index,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("./routes/mainMenu.tsx", [
        index("./routes/welcomePage.tsx"),
        route("Home", "./routes/home.tsx"),
        route("Map", "./routes/map.tsx"),
        route("FullCalendar", "./routes/fullCalendar.tsx"),
        route("Graphs", "./routes/graphs.tsx"),
    ])
] satisfies RouteConfig;

