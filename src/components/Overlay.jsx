import { usePlay } from "../context/Play";

export const Overlay = () => {
  const { play, setPlay } = usePlay();

  return (
    <div className={`overlay ${play ? "overlay--disable" : ""}`}>
      <div className={`intro ${play ? "intro--disappear" : ""}`}>
        <h1 className="logo">PORTFOLIO</h1>
        <p className="intro__scroll">of</p>
        <p className="intro__scroll">MANISH KUMAR SINHA</p>
        <button
          className="explore"
          onClick={() => {
            setPlay(true);
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
};
