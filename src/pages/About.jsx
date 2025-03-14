import React from 'react'

function About() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/team/john.jpg",
    },
    {
      name: "Jane Smith",
      role: "Operations Manager",
      image: "/team/jane.jpg",
    },
    {
      name: "Michael Brown",
      role: "Community Coordinator",
      image: "/team/michael.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Partnerships",
      image: "/team/sarah.jpg",
    },
    {
      name: "David Kimani",
      role: "Finance Director",
      image: "/team/david.jpg",
    },
    {
      name: "Emily Wangari",
      role: "Project Coordinator",
      image: "/team/emily.jpg",
    },
    {
      name: "James Otieno",
      role: "Media & Communications",
      image: "/team/james.jpg",
    },
  ];

  return (
    <section className=" mx-auto px-6 py-16 bg-green-100" id="about">
      {/* Introduction Section */}
      <div className="text-center mb-12 mt-10">
        <h2 className="text-4xl font-bold text-green-600">About Nawiri</h2>
        <p className="text-gray-700 mt-4 leading-relaxed max-w-3xl mx-auto">
          Nawiri is a charity organization dedicated to empowering communities 
          through education, healthcare, and sustainable development initiatives. 
          Our mission is to uplift lives and create lasting change.
        </p>
      </div>

      {/* Meet the Team Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-green-600">Meet the Team</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About