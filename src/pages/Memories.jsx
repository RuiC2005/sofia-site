import { Link } from "react-router-dom";
import leftPic from "../assets/sofia-left.jpg";
import rightPic from "../assets/sofia-right.jpg";

export default function Memories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 via-rose-50 to-white text-zinc-800">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        {/* Back link */}
        <Link
          to="/"
          className="inline-block mb-6 text-sm text-zinc-600 hover:text-zinc-900"
        >
          ← Back
        </Link>

        <h1 
        style={{ fontFamily: '"Dancing Script", cursive' }}
        className="font-cursive text-3xl font-semibold tracking-tight sm:text-4xl">
          Us
        </h1>
        <p 
        style={{ fontFamily: '"Lora", serif'}}
        className="font-body mt-2 max-w-xl text-zinc-600">
          This page is under development but only because I want to add more memories for us to look back on together! As time goes on I can add pictures of special moments for us to look back on.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm scale-85">
            <img
              src={leftPic}
              alt="Sofia and I"
              className="h-full w-full object-contain scale-85"
            />
          </div>
          

          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm scale-85">
            <img
              src={rightPic}
              alt="Sofia and I"
              className="h-full w-full object-contain scale-85"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
