"use client";
import React, { useState } from "react";
import CoursesList from "@/app/components/courses/courseList";
import { CrossHairIcon } from "@/app/constants/icons";

export type Courses = "Beginner" | "Advanced";

function Courses(): React.ReactElement {
  const [topic, setTopic] = useState<Courses>("Beginner");
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
          <div className="grid grid-cols-2 grid-rows-6">
            {currentCourse?.point.map((point, index) => {
              return (
                <div
                  className=" flex max-w-xs gap-1 break-words text-sm md:text-lg"
                  key={index}
                >
                  <div className=" mt-1 h-4 w-4">
                    <CrossHairIcon width={16} height={16} />
                  </div>
                  {point}
                </div>
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
