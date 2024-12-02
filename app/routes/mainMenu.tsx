import { Outlet } from "react-router";

export default function MainMenu() {
    return (
        <div>
            <h1>Main Menu</h1>
            <Outlet />
        </div>
    )
}