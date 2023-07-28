import "./style.css";
import { useRoute, Link } from "react-router5";
import { BackButton } from "@twa-dev/sdk/react";

export default function App() {
  const { route } = useRoute();
  return (
    <>
      <nav>
        <Link routeName="back">Home</Link> |{" "}
        <Link routeName="about">About</Link>
      </nav>
      <main>
        {route.name === "back" && <button><Link class="buyitem" routeName="buy">Купить</Link></button>}
        {route.name === "buy" && (
          <>
            <BackButton />
            <h1>h1</h1>
          </>
        )}
        {route.name === "about" && (
          <>
            <BackButton />
            <h1>About</h1>
          </>
        )}
      </main>
    </>
  );
}
