import React, { useEffect, useState } from "react";
import { getMentorsList } from "../API/ApiEndpoints";


interface Mentor {
  id: number;
  firstName: string;
  email: string;
  isAvailable: boolean;
}

const MentorList: React.FC = () => {

  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMentors = async () => {
      try {
        const data = await getMentorsList();
        if (data.success) {
          setMentors(data.mentorsData);
        } else {
          setError("Failed to load mentor data.");
        }
      } catch (err) {
        console.error("An error occurred while loading data:", err);
        setError("An error occurred while loading data.");
      } finally {
        setLoading(false);
      }
    };

    loadMentors();
  }, []);

  return (
    <div className="max-w-6xl mt-4 mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Browse mentors
      </h2>

      {/* loading state*/}
      {loading ? (
        <p className="text-center text-white">Loading mentors...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 transition duration-300 ease-in-out p-5"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {mentor.firstName}
              </h3>
              <p className="text-gray-600">{mentor.email}</p>
              <span
                className={`mt-3 inline-block px-3 py-1 text-sm rounded-full ${
                  mentor.isAvailable
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {mentor.isAvailable ? "Available" : "Unavailable"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MentorList;
