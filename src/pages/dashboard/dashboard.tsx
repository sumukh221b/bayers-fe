import React, { useState } from "react";
import Button from "../../components/button/Button";
import Wellness from "../wellness/Wellness";

// Type for Sidebar props
interface SidebarProps {
  setShowWellness: React.Dispatch<React.SetStateAction<boolean>>;
  showWellness: boolean;
}

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-lg bg-white">
      <ul className="flex space-x-6 text-medium font-medium">
        {['Home', 'Health Topic', 'Services', 'Contact'].map((item) => (
          <li key={item} className="hover:text-blue-600 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex space-x-4">
      <Button
  label={"Login"}
  inputButton
  props={{
    className: "text-medium font-medium h-20 font-inter px-30 py-10 rounded-lg"
  }}
/>
<Button
  label={"Register"}
  inputButton
  props={{
    className: "text-medium font-semibold h-20 font-inter px-30 py-10 rounded-lg text-white"
  }}
/>

      </div>
    </nav>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ setShowWellness, showWellness }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-6 fixed top-0 left-0">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <ul>
        {['Dashboard', 'Wellness Goals', 'Logout'].map((item) => (
          <li
            key={item}
            className="text-medium hover:bg-gray-700 p-2 rounded-md cursor-pointer mb-4"
            onClick={() => {
              if (item === 'Wellness Goals') {
                setShowWellness(!showWellness);
              }
            }}
          >
            { item}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [showWellness, setShowWellness] = useState<boolean>(false);

  const cardData = [
    { title: "COVID-19 Updates", description: "Stay informed about the latest COVID-19 guidelines and vaccination information" },
    { title: "Seasonal Flu Prevention", description: "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated" },
    { title: "Mental Health Awareness", description: "Explore resources and support options for maintaining good mental health" },
    { title: "Human metapneumovirus (HMPV)", description: "Human metapneumovirus (HMPV) is a common respiratory virus that causes an upper respiratory infection (like a cold)." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar setShowWellness={setShowWellness} showWellness={showWellness} />
      <div className="ml-64 w-full">
        <Navbar />
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {showWellness?"":cardData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
        {showWellness && <Wellness />} {/* Show Wellness component conditionally */}
      </div>
    </div>
  );
};

export default Dashboard;
