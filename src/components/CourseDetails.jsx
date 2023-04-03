import React, { useState } from "react";
import {
  BsBarChart,
  BsClock,
  BsFillJournalBookmarkFill,
  BsPeople,
  BsPuzzle,
} from "react-icons/bs";
import { IoDocumentsOutline } from "react-icons/io5";

const CourseDetails = () => {
  const [content, setContent] = useState("Overview");


  return (
    <section className="bg-slate-50 py-20 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* -----------left side --------------*/}
        <div className="flex flex-col w-full md:w-1/2">
          {/* instructor  */}
          <div className="flex flex-wrap items-center gap-x-16 gap-y-5">
            <div className="flex items-center gap-4">
              <img
                className="w-20 h-full rounded-full"
                src="https://secure.gravatar.com/avatar/c98bb1db01e83b0183281b6aa6173647?s=250&d=mm&r=g"
                alt=""
              />
              <div>
                <h4 className="text-base text-gray-500 uppercase">
                  Instructor
                </h4>
                <h1 className="text-xl text-gray-800 font-medium">
                  Kelly Anderson
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoDocumentsOutline className="text-6xl text-[#ff5b4a]" />
              <div>
                <h4 className="text-base text-gray-500 uppercase">Category</h4>
                <h1 className="text-xl text-gray-800 font-medium">
                  Web Design
                </h1>
              </div>
            </div>
          </div>
          {/* header & course details */}
          <div className="mt-10">
            <h1 className="text-4xl font-medium text-gray-800">
              Top HTML Interview Question
            </h1>
            <div className="flex flex-row flex-wrap gap-5 mt-3 text-gray-800 font-medium">
              <div className="flex gap-2">
                <BsClock className="text-2xl text-[#ff5b4a]" />
                <p className="text-lg">6 weeks</p>
              </div>
              <div className="flex gap-2">
                <BsBarChart className="text-2xl text-[#ff5b4a]" />
                <p className="text-lg">all levels</p>
              </div>
              <div className="flex gap-2">
                <BsFillJournalBookmarkFill className="text-2xl text-[#ff5b4a]" />
                <p className="text-lg">3 lessons</p>
              </div>
              <div className="flex gap-2">
                <BsPuzzle className="text-2xl text-[#ff5b4a]" />
                <p className="text-lg">1 quiz</p>
              </div>
              <div className="flex gap-2">
                <BsPeople className="text-2xl text-[#ff5b4a]" />
                <p className="text-lg">21 students</p>
              </div>
            </div>
          </div>
          {/* --------------
          overview curriculum instrucor
          ------------------------- 
          */}
          <div className="flex justify-between text-lg font-medium text-gray-800 mt-12 mb-8">
            <div
              onClick={() => {
                setContent("Overview");
              }}
              className={`h-12 flex items-center justify-center  w-full ${
                content === "Overview"
                  ? "border-t-[3px] border-t-[#ff5b4a] bg-white"
                  : "border-r border-gray-400 bg-slate-200"
              }`}
            >
              <h3>Overview</h3>
            </div>
            <div
              onClick={() => {
                setContent("Curriculum");
              }}
              className={`h-12 flex items-center justify-center  w-full ${
                content === "Curriculum"
                  ? "border-t-[3px] border-t-[#ff5b4a] bg-white"
                  : "border-r border-gray-400 bg-slate-200"
              }`}
            >
              <h3>Curriculum</h3>
            </div>
            <div
              onClick={() => {
                setContent("Instructor");
              }}
              className={`h-12 flex items-center justify-center w-full ${
                content === "Instructor"
                  ? "border-t-[3px] border-t-[#ff5b4a] bg-white"
                  : "border-r border-gray-400 bg-slate-200"
              }`}
            >
              <h3>Instructor</h3>
            </div>
          </div>
          {content === "Overview" && (
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
                consequatur veniam, deleniti inventore esse corporis ullam
                deserunt aperiam necessitatibus debitis qui, eveniet modi nam
                nihil laborum recusandae maiores rerum quas blanditiis atque rem
                soluta voluptatem fugit? Magni optio consectetur aliquam. Rem
                iste quisquam consequuntur quasi ea vitae. Ullam accusamus hic,
                maxime atque, harum necessitatibus dolore reprehenderit officia
                nostrum similique minus, fuga veritatis exercitationem. Facere
                quaerat similique sequi eos quae perferendis perspiciatis?
                Possimus asperiores ut similique? Ipsam nisi et sunt! Modi nisi
                eius nesciunt dolore error esse blanditiis ab, aliquid autem
                laboriosam quibusdam, quam eum illo inventore sapiente
                consectetur recusandae molestias.
              </p>
            </div>
          )}
          {content === "Curriculum" && (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                optio saepe temporibus voluptas libero modi nisi fuga
                praesentium quae. Repudiandae.
              </p>
            </div>
          )}

          {content === "Instructor" && (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                optio saepe temporibus voluptas libero modi nisi fuga
                praesentium quae. Repudiandae. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Maiores repellat reprehenderit
                deleniti, earum, sit, quasi et dolorum voluptas est harum
                accusantium quo quas beatae dolorem aliquid voluptatem.
                Inventore non sint odio esse, quo quis cumque tempora sit. Est
                nam illo earum! Nobis beatae nulla animi harum maiores error
                laudantium odio ab, suscipit nihil consequatur repellat dolorem.
                Quisquam minima qui itaque labore quaerat. Sit totam ut
                consectetur cum veritatis! Odit cum, dolorum ullam error quis
                vel obcaecati porro assumenda dolorem ipsum facere magni in
                pariatur, quasi eaque. Est sed magni enim inventore doloremque
                animi ullam architecto voluptate! Totam ad quo expedita
                accusamus praesentium optio debitis corrupti quas sapiente
                libero laboriosam quae ut non tenetur, exercitationem
                consectetur id eum dolores beatae, eveniet ratione quis? Dolores
                tempora beatae magni labore suscipit reprehenderit eum
                inventore, quis et iste sit minus illum minima, quam commodi
                ratione quo iusto, odio nisi id quia! A dolorem magnam sint ut
                ratione libero asperiores dolore fuga esse voluptate corporis,
                provident odit. Distinctio libero reiciendis minima! Non
                distinctio incidunt libero! Sint, iste impedit. Quis temporibus
                consectetur amet quaerat accusantium ullam, voluptas, quia aut
                veritatis reprehenderit dolore mollitia quae quas! Explicabo
                aliquam vitae aliquid necessitatibus veniam cupiditate,
                dignissimos quo expedita minus?
              </p>
            </div>
          )}
        </div>
        {/* --------------right side------------------ */}
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default CourseDetails;
