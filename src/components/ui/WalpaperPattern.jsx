import pinkPattern from "../../assets/img/background/pink_pattern.webp";
import greenPattern from "../../assets/img/background/green_pattern.webp";
export default function WalpaperPattern({ pattern }) {
  if (pattern === "pink") {
    return (
      <div className="z-0 ">
        <img
          className="absolute right-[0px] h-200 z-0"
          src={pinkPattern}
          alt="Pink Wallpaper Pattern"
        />
        <img
          className="absolute left-[0px] h-200 z-0"
          src={pinkPattern}
          alt="Pink Wallpaper Pattern"
        />
        <img
          className="absolute right-[-150px] h-200 z-0"
          src={pinkPattern}
          alt="Pink Wallpaper Pattern"
        />
        <img
          className="absolute left-[-150px] h-200 z-0"
          src={pinkPattern}
          alt="Pink Wallpaper Pattern"
        />
        <img
          className="absolute bottom-[-650px] h-200 z-0"
          src={pinkPattern}
          alt="Pink Wallpaper Pattern"
        />
        <img
          className="absolute bottom-[-650px] right-[0px] h-200 z-0"
          src={pinkPattern}
          alt="Pink Wallpaper Pattern"
        />
        <img
          className="absolute bottom-[-650px] right-[-150px] h-200 z-0"
          src={pattern}
          alt="Pink Wallpaper Pattern"
        />
        <img
          className="absolute bottom-[-650px] left-[-150px] h-200 z-0"
          src={pinkPattern}
          alt="Pink Wallpaper Pattern"
        />
      </div>
    );
  } else if (pattern === "green") {
    return (
      <div className="z-0 ">
        <img
          className="absolute right-[-200px] h-200 z-0"
          src={greenPattern}
          alt="Green Wallpaper Pattern"
        />
        <img
          className="absolute left-[0px] h-200 z-0"
          src={greenPattern}
          alt="Green Wallpaper Pattern"
        />
        <img
          className="absolute right-[-1100px] h-200 z-0"
          src={greenPattern}
          alt="Green Wallpaper Pattern"
        />
        <img
          className="absolute left-[-1050px] h-200 z-0"
          src={greenPattern}
          alt="Green Wallpaper Pattern"
        />
        <img
          className="absolute bottom-[-585px] h-200 z-0"
          src={greenPattern}
          alt="Green Wallpaper Pattern"
        />
        <img
          className="absolute bottom-[-585px] right-[-200px] h-200 z-0"
          src={greenPattern}
          alt="Green Wallpaper Pattern"
        />
        <img
          className="absolute top-[-750px] right-[-200px] h-200 z-0"
          src={greenPattern}
          alt="Green Wallpaper Pattern"
        />
        <img
          className="absolute top-[-750px] left-[0px] h-200 z-0"
          src={greenPattern}
          alt="Green Wallpaper Pattern"
        />
      </div>
    );
  }
}
