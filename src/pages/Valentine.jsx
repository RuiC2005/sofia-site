import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const NO_PHRASES = [
  "No 💔",
  "Pretty please? 🥺",
  "But we'd be so cute together! 💕",
  "One more chance, pookie?",
  "Don't break my heart :(",
  "What about a maybe?",
  "Please don't do this to me, I'm fragile",
];

export default function Valentine() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);

  const firstImg =
    "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg =
    "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

  // Layout-aware growth for YES button
  const yesStyle = useMemo(() => {
const fontSize = 28 + noClicks * 8;
        const padY = 18 + noClicks * 3;
        const padX = 36 + noClicks * 6;
        const minW = 190 + noClicks * 16;

    return {
      fontSize: `${fontSize}px`,
      padding: `${padY}px ${padX}px`,
      minWidth: `${minW}px`,
    };
  }, [noClicks]);

  const noText =
    noClicks === 0
      ? "No"
      : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)];

  const handleNo = () => setNoClicks((prev) => prev + 1);
  const handleYes = () => setIsValentine(true);

  return (
    <div
      className={`relative min-h-screen w-full transition-colors duration-700 ${
        isValentine
          ? "bg-gradient-to-b from-sky-200 via-sky-100 to-white"
          : "bg-gradient-to-b from-rose-100 via-white to-white"
      }`}
    >
      {/* Back button */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-sm text-zinc-600 hover:text-zinc-900 transition"
      >
        ← Back
      </Link>

      {/* Centered content (slightly raised) */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-4xl text-center -translate-y-14">
          {!isValentine ? (
            <>
              {/* Bear */}
              <div className="mx-auto mb-8 w-44 sm:w-56">
                <img src={firstImg} alt="Cute bear gif" className="w-full" />
              </div>

              {/* Question */}
              <h1
                style={{ fontFamily: '"Dancing Script", cursive' }}
                className="text-zinc-900 text-6xl sm:text-8xl font-bold tracking-tight">

                Can I be your Valentine? 💘
              </h1>

              {/* Buttons */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                <button
                  onClick={handleYes}
                  style={{ ...yesStyle, backgroundColor: "#22c55e", color: "white" }}
                  className="
                    rounded-2xl
                    font-semibold
                    shadow-lg
                    transition-all duration-300
                    text-xl
                  "
                >
                  Yes 💖
                </button>

                <button
                  onClick={handleNo}
                  style={{ backgroundColor: "#ef4444", color: "white" }}
                  className="rounded-2xl text-2xl font-semibold shadow-lg transition-all duration-300 px-10 py-5">

                  {noText}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Celebration */}
              <div className="mx-auto mb-8 w-52 sm:w-64">
                <img src={secondImg} alt="Celebration gif" className="w-full" />
              </div>

              <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-sky-600">
                YAY!!! 💙✨
              </div>

              <p className="mt-4 text-zinc-600 text-lg">
                Okay now you’re officially stuck with me.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
