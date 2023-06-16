import dynamic from "next/dynamic";
// import Home from "./home/pages";

const Home = dynamic(() => import("./home/pages"), { ssr: false });
export default function Main() {
  return (
    <>
      <Home />
    </>
  );
}
