import { Link } from "react-router-dom";
import leftPic from "../assets/sofia-left.jpg";
import rightPic from "../assets/sofia-right.jpg";
import carPic from "../assets/pic-in-my-car.jpeg";
import sofiFriendsAndMe from "../assets/sofi-me-and-friends.jpeg";
import drnkCanesPic from "../assets/drnk-at-canes.jpg";

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
          className="font-cursive text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Us
        </h1>

        <p
          style={{ fontFamily: '"Lora", serif' }}
          className="font-body mt-2 max-w-xl text-zinc-600"
        >
          This page is under development but only because I want to add more
          memories for us to look back on together! As time goes on I can add
          pictures of special moments for us to look back on.
        </p>

        {/* Existing two pics */}
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

        
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
              <img
                src={carPic}
                alt="In the car"
                className="h-64 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
              <img
                src={sofiFriendsAndMe}
                alt="Sofia, friends and me"
                className="h-64 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
              <img
                src={drnkCanesPic}
                alt="Drinks at Canes"
                className="h-64 w-full object-cover"
              />
            </div>

          <p
            style={{ fontFamily: '"Lora", serif' }}
            className="mt-6 text-zinc-600 leading-relaxed col-span-3"
          >
            Hi babe! I hope you're doing well. I just wanted to upload these pictures of us to remember this fun weekend. Thank you for coming out and meeting my friends. 
            I seriously had so much fun with you and my friends. Mi querida Sofia how do I start? I guess I should just start typing and we will see how this goes. Sofia, I feel like I haven't really told you how much you mean to me. For the longest time 
            it has been really hard for me to genuinely like someone. Before I met you, it felt like my gut would always have a bad feeling when wanting to commit or I would always find something wrong. With you, things are different. 
            You make everything feel so natural. You make my feelings for you grow every time we see each other and my gut immediately had a good feeling about you. So far, it has been right. One of the many things you have done is rekindle the romantic in me. 
            Before you, it felt like doing all those cringey romantic things were gross and a waste of time. But with you, I want to do all those things. I hate and love the way you
            make time fast-forward, and when I am with you, I always wish the day were longer than 24 hours just so I can spend that much more time with you. 
            All of these things, and many more, are why you mean so much to me.
          </p>

           <p
            style={{ fontFamily: '"Lora", serif' }}
            className="mt-6 text-zinc-600 leading-relaxed col-span-3"
          >
            Sofia, I know that with me you have experienced many firsts, and I want to thank you for putting that trust in me.
            What I will say is that even though you might not be the first for me in some things, but I hope you know that you are the first girl I genuinely have nothing but pure intentions with. 
            When I look into your eyes, I am honestly in awe of how beautiful you are. I love that when I look at you, I get filled with so much joy and appreciation that someone so beautiful can be in front of me.
            And believe me when I say beautiful, I don't just mean the physical side of you, even though that's true too. 
            I also mean the non-physical parts of you: the way you work hard, the way you are kind but also playful and witty, the way you giggle, the way you're kinduh dorky, the way you are so morally grounded, and the way you bring the best out of me. 
            Te quiero con todo mi corazón, Sofia!
         </p>
        </div>
      </div>
    </div>
  );
}