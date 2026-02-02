import { useState } from "react";
import ArchitectModel from "./ArchitectModel";
import { Routes, Route, Link } from "react-router-dom";
import Memories from "./pages/Memories";
import { useNavigate } from "react-router-dom";
import Valentine from "./pages/Valentine";


export default function App() {
  const [picked, setPicked] = useState("Foundation");
  const navigate = useNavigate();

  const notes = {
    Foundation:
      "4. Thank You! PS: There are four hearts because we had our first date on Decmeber 4th. ❤️",
    Structure:
      "2. Leading me to develope a huge crush on you, begging be set up with your for months. ",
    Light:
      "1. To the random chipotle worker I had a thought was cute.",
    Details:
      "3. To that random night I decided to message you on Instagram out of the blue. I never would've thought we would end up where we are. That being said...",
  };

  return (
  <Routes>
    {/* HOME PAGE */}
    <Route
      path="/"
      element={
        <div className="min-h-screen bg-gradient-to-b from-rose-100 via-rose-50 to-white text-zinc-800">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
            {/* Header / Hero */}
            <div className="mb-10">
            <h1
              style={{ fontFamily: '"Dancing Script", cursive' }}
              className="text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              To Sofia,
            </h1>

              <p 
              style={{ fontFamily: '"Lora", serif'}}
              className="font-body mt-3 max-w-2xl text-zinc-600">
                Thank you for giving me the chance to get to know you. I have really enjoyed the last couple months we have spent together, I feel that when we spend time with one another, time seems to pass exponentially and you make me wish some days didn't have 24 hours just so I could see you more. Now, I know I may not have been the most romantic guy but I hope this moment changes that. Below you will be ablle to see a 3D model of hearts. I made this because I wanted to bring both our worlds of Computer Science and Architecture together. Each heart has a small note. Please click them from left to right, on the 3rd heart click "View our Memoriers" and click the big heart last for a final surprise!
              </p>
            </div>

            {/* Main grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* 3D Interactive Model */}
              <ArchitectModel
                    onPick={(name) => {
                      setPicked(name);
                      if (name === "Foundation") {
                        navigate("/valentine");
                      }
                    }}
                  />


              {/* Notes panel */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p 
                style={{ fontFamily: '"Dancing Script", cursive' }}
                className="font-body text-sm font-semibold text-zinc-900">
                  Studio Notes
                </p>

                <p 
                style={{ fontFamily: '"Lora", serif'}}
                className="mt-2 text-sm leading-6 text-zinc-700">
                  {notes[picked]}
                </p>

                {/* 👇 OPTION 1 LINK (RIGHT HERE) */}
                <div className="mt-4">
                  <Link
                    to="/memories"
                    className="inline-flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900 transition"
                  >
                    View our memories →
                  </Link>
                </div>

                <div 
                style={{ fontFamily: '"Lora", serif'}}
                className="font-body mt-5 rounded-xl bg-zinc-50 p-4 text-xs text-zinc-600">
                  Tip: click different hearts to reveal new notes.
                </div>

                
            
              </div>
            </div>

            {/* Footer */}
            <div className="font-cursive mt-12 text-xs text-zinc-500">
              Made with Love, to Sofia 
              ,From Rui ❤️{" "}
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      }
    />

    {/* MEMORIES PAGE */}
    <Route path="/memories" element={<Memories />} />
    <Route path="/valentine" element={<Valentine />} />
  </Routes>
);


}

    //     {/* Footer */}
    //     <div className="mt-12 text-xs text-zinc-500">
    //       Made with Love, to Sofia — From Rui ❤️ {new Date().getFullYear()}
    //     </div>
    //   </div>
    // </div>
