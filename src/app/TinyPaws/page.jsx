"use client";

import React from "react";
import ImageRoulette from "@/components/roulette";

const TinyPaws = () => {
  const images1 = [
    "/tinypaws/1.png",
    "/tinypaws/2.png",
    "/tinypaws/3.png",
    "/tinypaws/4.png",
    "/tinypaws/5.png",
  ];
  const images2 = [
    "/tinypaws/L1.png",
    "/tinypaws/L2.png",
    "/tinypaws/lo-fi.png",
  ];
  const images3 = ["/tinypaws/hi-fi.png", "/tinypaws/persona.png"];

  return (
    <main className="overflow-scroll h-full flex justify-center items-center">
      <div className="max-w-7xl h-full px-4 my-8">
        <div className="my-20 gap-20 flex flex-col md:flex-row items-center justify-center space-y-20 md:space-y-20 md:space-x-20">
          <div className="w-full">
            <div className="rounded-lg shadow-lg">
              <video
                className="w-full"
                width="100%"
                height="100%"
                controls
                preload="none"
              >
                <source
                  src="/images/NewHabitsWebAppDemo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="w-full">
            <div className="text-left">
              <div className="text-4xl font-bold mb-8">Tiny Paws</div>
              <div className="text-lg mb-8 max-w-3xl">
                Tinypaws is a cat adoption website aimed to help people find
                their perfect cat. With bringing light to neglected cats in mind
                Tinypaws wanted to be easy access and not a hastle to use. With
                many features like an events page to showcase cats that are up
                for adoption , or a blog page to read about the latest news on
                cats, Tinypaws is the perfect place to find your new furry
                friend.
              </div>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.figma.com/proto/RhxeuuIO366EJiKVQJbZMJ/tinypaws---purradise?type=design&node-id=265-5512&t=KevRorScvSlb8S9x-0&scaling=min-zoom&page-id=265%3A3056&starting-point-node-id=265%3A5512&show-proto-sidebar=1"
                  target="_blank"
                >
                  See Prototype
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 my-20 space-y-20">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-20 md:space-y-0 md:space-x-20">
            <div className="w-full md:w-1/2">
              <ImageRoulette
                images={images1}
                id="1"
                style={{ width: "100%" }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-left">
                <div className="text-lg font-bold mb-8">The Style Guide</div>
                <div className="text-lg mb-8 max-w-xl">
                  Tinypaws was designed to be friendly, easy to use and easy to
                  navigate, and so the colours and fonts were chosen to reflect
                  that. The colour scheme was made to be soft and not harmful to
                  the eyes. orange colours were chosen because they are friendly
                  and inviting. The fonts were chosen to be rounded, soft and
                  easy to read.
                </div>
                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://www.figma.com/proto/jwQtp1e8FBRAKCCgcckOVG/Baja-Design?type=design&node-id=54-52&t=avstkbmllAAJhJZl-1&scaling=scale-down&page-id=37%3A25&starting-point-node-id=54%3A52&mode=design"
                    target="_blank"
                  >
                    See Prototype
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-20 md:space-y-0 md:space-x-20">
            {/* Text section */}
            <div className="w-full md:w-1/2 md:text-left">
              <div className="text-lg font-bold mb-8">
                Planning and Ideation
              </div>
              <div className="text-lg mb-8 max-w-xl">
                Using figma, the website was planned and ideated. The website
                was planned to be easy to navigate and understand. The planning
                oh how the website would look took 2 levels of planning. The
                first level was a basic draft on the overall consistant feel of
                the website. The second level was the planning of the individual
                pages and how they would look. finally, after the two levels
                were complete, the lo-fi version was ready to be made.
              </div>
            </div>
            {/* Roulette section */}
            <div className="w-full md:w-1/2 md:text-right">
              <ImageRoulette
                images={images2}
                id="2"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-20 md:space-y-0 md:space-x-20">
            <div className="w-full md:w-1/2">
              <ImageRoulette
                images={images3}
                id="3"
                style={{ width: "100%" }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-left">
                <div className="text-lg font-bold mb-8">Design</div>
                <div className="text-lg mb-8 max-w-xl">
                  The design was to to showcase cats for adoption, so the team
                  put lots of images of cats on the website for users to see.
                  The website was designed to be easy to navigate and easy to
                  use so that users could find their perfect cat easily.
                </div>
                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://www.figma.com/proto/RhxeuuIO366EJiKVQJbZMJ/tinypaws---purradise?type=design&node-id=265-5512&t=KevRorScvSlb8S9x-0&scaling=min-zoom&page-id=265%3A3056&starting-point-node-id=265%3A5512&show-proto-sidebar=1"
                    target="_blank"
                  >
                    See Prototype
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TinyPaws;
