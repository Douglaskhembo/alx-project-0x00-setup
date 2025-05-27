import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div>
        <h1 className="text-xl font-extralight">Landing Page</h1>
        <Card />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <h1 className="text-2xl font-bold mb-4">Button Component Showcase</h1>

        {/* Small Buttons */}
        <Button title="Small - Rounded Small" styles="text-sm rounded-sm" />
        <Button title="Small - Rounded Medium" styles="text-sm rounded-md" />
        <Button title="Small - Rounded Full" styles="text-sm rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium - Rounded Small" styles="text-base rounded-sm" />
        <Button title="Medium - Rounded Medium" styles="text-base rounded-md" />
        <Button title="Medium - Rounded Full" styles="text-base rounded-full" />

        {/* Large Buttons */}
        <Button title="Large - Rounded Small" styles="text-lg rounded-sm" />
        <Button title="Large - Rounded Medium" styles="text-lg rounded-md" />
        <Button title="Large - Rounded Full" styles="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
