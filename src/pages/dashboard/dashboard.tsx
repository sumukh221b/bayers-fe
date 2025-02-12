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
    <nav className="flex items-center justify-between p-4 bg-white shadow-lg">
      <ul className="flex space-x-6 font-medium text-medium">
        {["Home", "Health Topic", "Services", "Contact"].map((item) => (
          <li key={item} className="cursor-pointer hover:text-blue-600">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 mt-4 text-white rounded-lg bg-violet-500 hover:bg-violet-600"
          onClick={handleChange}>
          Log Out
        </button>
        <button className="px-4 py-2 mt-4 text-white rounded-lg bg-violet-500 hover:bg-violet-600">
          Register
        </button>
      </div>
    </nav>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  setShowListPatient,
  showListPatient,
  setShowWellness,
  showWellness,
}) => {
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
    <div className="fixed top-0 left-0 w-64 h-full p-6 text-white bg-gray-800">
      <ul>
        {["Dashboard", "Wellness Goals", "List Patient", "Logout"].map(
          (item) => (
            <li
              key={item}
              className="p-2 mb-4 rounded-md cursor-pointer text-medium hover:bg-gray-700"
              onClick={() => handleSidebarClick(item)} // Use the new handler function
            >
              {item}
            </li>
          )
        )}
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
    <div className="p-6 transition-all bg-white shadow-md rounded-2xl hover:shadow-lg">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [showWellness, setShowWellness] = useState<boolean>(false);
  const [showListPatient, setShowListPatient] = useState<boolean>(false); // State for showing ListPatient

  const cardData = [
    {
      title: "COVID-19 Updates",
      description:
        "Stay informed about the latest COVID-19 guidelines and vaccination information",
    },
    {
      title: "Seasonal Flu Prevention",
      description:
        "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated",
    },
    {
      title: "Mental Health Awareness",
      description:
        "Explore resources and support options for maintaining good mental health",
    },
    {
      title: "HMPV",
      description:
        "Human metapneumovirus (HMPV) is a common respiratory virus that causes an upper respiratory infection (like a cold).",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        showListPatient={showListPatient}
        setShowListPatient={setShowListPatient}
        setShowWellness={setShowWellness}
        showWellness={showWellness}
      />
      <div className="w-full ml-64">
        <Navbar />
        <div className="p-10">
          {showWellness ? (
            <Wellness />
          ) : showListPatient ? (
            <ListPatient /> // Show ListPatient component
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
