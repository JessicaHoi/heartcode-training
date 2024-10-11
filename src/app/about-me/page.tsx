"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutMe() {
  const [showMore, setShowMore] = useState(false);
  const [randomSkill, setRandomSkill] = useState("");

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML & CSS",
    "Python",
    "Linux",
  ];

  const toggleShowMore = () => setShowMore(!showMore);

  const getRandomSkill = () => {
    const randomIndex = Math.floor(Math.random() * skills.length);
    setRandomSkill(skills[randomIndex]);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Hello, I'm Jessica</CardTitle>
          <img
            src="https://i.pinimg.com/originals/f2/f0/e0/f2f0e067ce9b8de1cdd98c9ee9605b55.png"
            className="w-48 h-auto rounded-full mx-auto mb-4 border-4 border-blue-300"
            alt="Jessica"
          />
          <CardDescription className="text-center text-lg">I love to sleep a lot!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="font-bold">Name:</p> Jessica
          </div>
          <div className="mb-4">
            <p className="font-bold">Major:</p> Information Systems
          </div>
          <div className="mb-4 text-center">
            <p className="font-bold">I like capybaras!</p>
            <img
              src="https://media1.tenor.com/images/77cdd2dc4a12883d1ad7c7b77b3eb770/tenor.gif?itemid=16689914" // Replace with a different capybara GIF URL if you like
              alt="Cute Capybara"
              className="w-auto h-auto mx-auto rounded-lg"
            />
          </div>
          {showMore && (
            <div className="mt-2">
              <p className="font-bold">Skills:</p>
              <div className="flex overflow-x-auto space-x-4 p-2">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-green-100 p-3 rounded-lg shadow-md flex-shrink-0">
                    {skill}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <p className="font-bold">Bio:</p>
                <p>
                  Hi, dying in IS please send halp.
                </p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Contact:</p>
                <p>Email: <a href="mailto:jessica.hoi.2024@computing.smu.sg" className="text-blue-600 hover:underline">please no</a></p>
              </div>
            </div>
          )}
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded transition-colors duration-200 hover:bg-blue-600"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          <button
            className="mt-2 p-2 bg-green-500 text-white rounded transition-colors duration-200 hover:bg-green-600"
            onClick={getRandomSkill}
          >
            Random Skill
          </button>
          {randomSkill && <p className="mt-2 text-lg">Your random skill: <strong>{randomSkill}</strong></p>}
        </CardContent>
      </Card>
    </div>
  );
}