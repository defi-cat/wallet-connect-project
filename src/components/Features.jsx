import React from "react";
import {
  RocketLaunchIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <RocketLaunchIcon className="h-12 w-12" />,
    title: "To the Moon!",
    description: "Our advanced meme technology guarantees astronomical gains*",
  },
  {
    icon: <CurrencyDollarIcon className="h-12 w-12" />,
    title: "Much Wow Economy",
    description: "Powered by the strongest memes in the cryptosphere",
  },
  {
    icon: <UserGroupIcon className="h-12 w-12" />,
    title: "Meme Community",
    description: "Join thousands of fellow meme enthusiasts",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
          Why DogeCat?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-200">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-center mt-8 text-gray-400">
          * Gains not guaranteed. May result in loss of all funds. DYOR.
        </p>
      </div>
    </section>
  );
};

export default Features;
