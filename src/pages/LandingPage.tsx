import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <>
      <section className="bg-blue-600 m-auto max-w-dvw flex flex-col gap-6 text-gray-800 xl:w-1/2">
        <section className="min-h-10 text-gray-800 bg-[url('/images/cover-mountain.jpg')] bg-cover bg-center bg-no-repeat bg-cyan-700 bg-blend-overlay bg-opacity-70 py-10 flex justify-center items-center">
          <div className="container flex flex-col justify-center items-center w-xl bg-opacity-70 mx-auto px-4 py-15 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-6 max-w-3xl text-white">
              We are dedicated to offering an exceptional mentorship experience.
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-amber-400 mx-auto">
              Bringing mentees and mentors together in a collaborative,
              supportive space to grow, learn, and lead.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                to="/signup"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-cyan-600 text-cyan-600 hover:bg-cyan-100 font-semibold px-6 py-3 rounded"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </section>
      <section className="mt-6 m-auto bg-amber-500 px-40 py-40 xl:w-1/2">
        {/* Feature highlights */}
          <h2 className="text-3xl text-center font-bold mb-8 text-cyan-700">
            What We Offer
          </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-cyan-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Expert Mentors</h3>
            <p>
              Connect with experienced mentors from diverse fields who guide you
              through your personal and professional growth journey.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Progress Tracking</h3>
            <p>
              Monitor your goals and development with a personalized dashboard
              designed to help you stay motivated and accountable.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Secure Platform</h3>
            <p>
              Your privacy is our priority, ensuring your data remains safe and
              confidential using advanced security measures.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
            <p>
              Arrange mentoring sessions at your convenience with an easy-to-use
              calendar that adapts to your busy lifestyle.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Resource Library</h3>
            <p>
              Access a curated collection of articles, videos, and tools to
              support your learning and professional development.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Community Support</h3>
            <p>
              Join a vibrant community of mentors and mentees fostering
              collaboration, encouragement, and shared success stories.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Goal Setting</h3>
            <p>
              Define clear, achievable goals with your mentor to track progress
              and celebrate milestones along the way.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Feedback & Reviews</h3>
            <p>
              Receive constructive feedback regularly and review your mentorship
              experience to continuously improve outcomes.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">24/7 Access</h3>
            <p>
              Access mentorship materials, chat, and resources anytime,
              anywhere, supporting your growth beyond scheduled sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 m-auto bg-amber-500 px-40 py-40 xl:w-1/2">
        <h2 className="text-3xl text-center font-bold mb-8 text-cyan-700">
          What Makes Us Unique
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-cyan-50 p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">Tailored Matching</h4>
            <p>
              Our smart algorithm pairs mentees with mentors based on interests,
              goals, and expertise, ensuring meaningful connections.
            </p>
          </div>
          <div className="bg-cyan-50 p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">Community Events</h4>
            <p>
              Regular workshops, webinars, and networking sessions foster a
              vibrant learning community beyond one-on-one mentorship.
            </p>
          </div>
          <div className="bg-cyan-50 p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">Continuous Support</h4>
            <p>
              Our support team and resources are always available, guiding you
              through every step of your mentorship journey.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 m-auto bg-amber-500 px-40 py-40 xl:w-1/2">
        <h2 className="text-3xl text-center font-bold mb-8 text-cyan-700">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-l-4 border-cyan-600 p-6 rounded shadow">
            <p className="italic mb-4">
              "Through Danitors, I found a mentor who helped me land my dream
              job in tech. The personalized guidance made all the difference!"
            </p>
            <span className="font-semibold text-cyan-700">
              — Sarah, Software Engineer
            </span>
          </div>
          <div className="bg-white border-l-4 border-cyan-600 p-6 rounded shadow">
            <p className="italic mb-4">
              "Mentoring on this platform has been rewarding. Watching my mentee
              grow and succeed has been a highlight of my career."
            </p>
            <span className="font-semibold text-cyan-700">
              — David, Senior Mentor
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
