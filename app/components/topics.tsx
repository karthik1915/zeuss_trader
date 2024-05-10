"use client";
import React, { useState } from "react";
import CoursesList from "@/app/constants/courseTier";

interface TopicsProps {}
export type Topic = "Beginner" | "Intermediate" | "Advanced";

function Courses(): React.ReactElement {
  const [topic, setTopic] = useState<Topic>("Intermediate");
  const currentCourse = CoursesList.find((course) => course.tier === topic);

  return (
    <div className="my-10">
      <p className="my-5 px-5 text-center font-RobotoSlab text-3xl font-semibold sm:text-4xl">
        Courses
      </p>
      <div className="items-center justify-center lg:flex">
        <div className="mx-4 flex h-auto min-h-[300px] w-auto flex-col justify-center rounded-2xl bg-yellow-500 p-5 md:min-w-[700px] lg:mx-0">
          <p className="text-xl font-bold">{currentCourse?.title}</p>
          <p className="my-2">Duration : {currentCourse?.subtitle}</p>
          <div className="my-3 h-[1px] bg-black"></div>
          <div className="grid grid-cols-2">
            {currentCourse?.point.map((point, index) => {
              return (
                <li
                  className="max-w-xs break-words text-sm md:text-lg"
                  key={index}
                >
                  {point}
                </li>
              );
            })}
          </div>
        </div>
        <div className="mx-4 mt-5 flex h-auto w-auto justify-center lg:mx-0 lg:block">
          <div
            className={`w-32 cursor-pointer px-5 py-4 text-center lg:w-auto lg:px-12 ${
              topic === "Beginner"
                ? "bg-blue-950 text-yellow-500"
                : " bg-zinc-200"
            }`}
            onClick={() => setTopic("Beginner")}
          >
            Beginner
          </div>
          <div
            className={`w-32 cursor-pointer  px-5 py-4  text-center lg:w-auto lg:px-12 ${
              topic === "Intermediate"
                ? "bg-blue-950 text-yellow-500"
                : " bg-zinc-200"
            }`}
            onClick={() => setTopic("Intermediate")}
          >
            Intermediate
          </div>
          <div
            className={`w-32 cursor-pointer  px-5 py-4  text-center lg:w-auto lg:px-12 ${
              topic === "Advanced"
                ? "bg-blue-950 text-yellow-500"
                : " bg-zinc-200"
            }`}
            onClick={() => setTopic("Advanced")}
          >
            Advanced
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
