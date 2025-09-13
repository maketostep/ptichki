import bgPink from "../../assets/img/background/bg-pink.webp";
import bgGreen from "../../assets/img/background/bg-green.webp";
export default function WalpaperPattern({ pattern }) {
  if (pattern === "pink") {
    return (
      <img
        className="absolute object-cover background-repeat right-[0px] h-215 md:h-auto z-0"
        src={bgPink}
        alt="Pink Wallpaper Pattern"
      />
    );
  } else if (pattern === "green") {
    return (
      <img
        className="absolute object-cover right-[0px] h-215 md:h-auto z-0"
        src={bgGreen}
        alt="Green Wallpaper Pattern"
      />
    );
  }
}
