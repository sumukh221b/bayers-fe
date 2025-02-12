import React, { useState } from "react";
import Button from "../../components/button/Button";
import Wellness from "../wellness/Wellness";
import ListPatient from "../provider/ListPatient"; // Import ListPatient component
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

// Type for Sidebar props
interface SidebarProps {
  setShowWellness: React.Dispatch<React.SetStateAction<boolean>>;
  showWellness: boolean;
  setShowListPatient: React.Dispatch<React.SetStateAction<boolean>>;
  showListPatient: boolean;
}

const Navbar = () => {
  const handleChange = () => {
    console.log("login");
    return (window.location.href = `/login`);
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-lg bg-white">
      <ul className="flex space-x-6 text-medium font-medium">
        {["Home", "Health Topic", "Services", "Contact"].map((item) => (
          <li key={item} className="hover:text-blue-600 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex space-x-4">
            <button
              className="mt-4 px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
          onClick={handleChange}
        >Login</button>
            <button
              className="mt-4 px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
              >Register</button>
      </div>
    </nav>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ setShowListPatient, showListPatient, setShowWellness, showWellness }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Handle any necessary logout logic here (e.g., clearing user session)
    navigate("/login"); // Redirect to the login page
  };

  const handleSidebarClick = (item: string) => {
    if (item === "Wellness Goals") {
      if (!showWellness) {
        setShowWellness(true);
        setShowListPatient(false); // Hide ListPatient
      }
    } else if (item === "Dashboard") {
      setShowWellness(false); // Hide Wellness
      setShowListPatient(false); // Hide ListPatient
    } else if (item === "List Patient") {
      if (!showListPatient) {
        setShowWellness(false); // Hide Wellness
        setShowListPatient(true); // Show ListPatient
      }
    } else if (item === "Logout") {
      handleLogout(); // Call handleLogout for the Logout action
    }
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-full p-6 fixed top-0 left-0">
      <ul>
        {["Dashboard", "Wellness Goals", "List Patient", "Logout"].map((item) => (
          <li
            key={item}
            className="text-medium hover:bg-gray-700 p-2 rounded-md cursor-pointer mb-4"
            onClick={() => handleSidebarClick(item)} // Use the new handler function
          >
            {item}
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
  const [showListPatient, setShowListPatient] = useState<boolean>(false); // State for showing ListPatient

  const cardData = [
    { title: "COVID-19 Updates", description: "Stay informed about the latest COVID-19 guidelines and vaccination information" },
    { title: "Seasonal Flu Prevention", description: "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated" },
    { title: "Mental Health Awareness", description: "Explore resources and support options for maintaining good mental health" },
    { title: "HMPV", description: "Human metapneumovirus (HMPV) is a common respiratory virus that causes an upper respiratory infection (like a cold)." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar showListPatient={showListPatient} setShowListPatient={setShowListPatient} setShowWellness={setShowWellness} showWellness={showWellness} />
      <div className="ml-64 w-full">
        <Navbar />
        <div className="p-10">
          {showWellness ? (
            <Wellness />
          ) : showListPatient ? (
            <ListPatient /> // Show ListPatient component
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cardData.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
