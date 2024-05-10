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
      <p className="font-RobotoSlab text-3xl my-5 px-5 text-center sm:text-4xl font-semibold">
        Courses
      </p>
      <div className="lg:flex items-center justify-center">
        <div className="mx-4 lg:mx-0 flex flex-col justify-center w-auto h-auto md:min-w-[700px] min-h-[300px] p-5 rounded-2xl bg-yellow-500">
          <p className="text-xl font-bold">{currentCourse?.title}</p>
          <p className="my-2">Duration : {currentCourse?.subtitle}</p>
          <div className="h-[1px] my-3 bg-black"></div>
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
        <div className="mx-4 lg:mx-0 flex justify-center lg:block mt-5 w-auto h-auto">
          <div
            className={`px-5 lg:px-12 w-32 lg:w-auto py-4 cursor-pointer text-center ${
              topic === "Beginner"
                ? "bg-blue-950 text-yellow-500"
                : " bg-zinc-200"
            }`}
            onClick={() => setTopic("Beginner")}
          >
            Beginner
          </div>
          <div
            className={`px-5 lg:px-12  w-32 lg:w-auto  py-4 cursor-pointer text-center ${
              topic === "Intermediate"
                ? "bg-blue-950 text-yellow-500"
                : " bg-zinc-200"
            }`}
            onClick={() => setTopic("Intermediate")}
          >
            Intermediate
          </div>
          <div
            className={`px-5 lg:px-12  w-32 lg:w-auto  py-4 cursor-pointer text-center ${
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
