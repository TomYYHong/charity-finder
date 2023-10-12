import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout(): JSX.Element {
  return (
    <main className="place-item-center flex flex-col">
      <Header />
      <Outlet />
    </main>
  );
}
