import React from "react";

const ProfessionalSkills = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
      <div className="card-shadow p-8">
        <div
          href="#"
          className="p-5 px-6 pro-skills hover:text-white rounded-xl"
        >
          <h1 className="text-primary-yellow text-2xl py-4">
            Mobile App Development
          </h1>

          {/* <p className="">
            <span className="text-primary-yellow">
              My layouts will work on any device big or sma,ll.
            </span>
          </p> */}
          <p className="text-primary-text-gray pt-6">
            Familiarity with mobile app development concepts, such as handling
            device-specific features (camera, GPS, sensors), working with
            RESTful APIs, integrating with backend services, and managing local
            data storage (using SQLite or shared preferences) is necessary.
          </p>
        </div>
        <div
          href="#"
          className="p-5 px-6 pro-skills hover:text-white rounded-xl"
        >
          <h1 className="text-primary-yellow text-2xl py-4">
            Problem Solving and Debugging{" "}
          </h1>

          <p className="text-primary-text-gray pt-6">
            Strong problem-solving skills are vital for a Flutter developer.
            Being able to identify and fix bugs, optimize performance, and
            troubleshoot issues is crucial for delivering high-quality
            applications.
          </p>
        </div>
        <div
          href="#"
          className="p-5 px-6 pro-skills hover:text-white rounded-xl"
        >
          <h1 className="text-primary-yellow text-2xl py-4">
            Product Strategy
          </h1>

          <p className="text-primary-text-gray pt-6">
            The ability to define and communicate the product vision, goals, and
            roadmap is crucial. Product managers need to understand market
            trends, user needs, and business objectives to develop a successful
            product strategy.
          </p>
        </div>
      </div>
      <div className="card-shadow p-8">
        <h1 className="text-white text-2xl py-4">Skills</h1>

        <div className="relative pt-2 mt-4">
          <p className="py-2">DART</p>
          <div class="box-arrow absolute -translate-y-12 -translate-x-2 right-10 text-center rounded-sm">
            85%
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
              class="bg-primary-yellow h-1 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        <div className="relative pt-4 mt-6">
          <p className="py-2">FLUTTER</p>
          <div class="box-arrow absolute -translate-y-12 right-8 text-center rounded-sm">
            88%
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
              class="bg-primary-yellow h-1 rounded-full"
              style={{ width: "88%" }}
            ></div>
          </div>
        </div>
        <div className="relative pt-4 mt-6">
          <p className="py-2">STATE MANAGEMENT</p>
          <div class="box-arrow absolute -translate-y-12 right-14 text-center rounded-sm">
            82%
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
              class="bg-primary-yellow h-1 rounded-full"
              style={{ width: "82%" }}
            ></div>
          </div>
        </div>
        <div className="relative pt-4 mt-6">
          <p className="py-2">FIREBASE & CLOUD FIRESTORE</p>
          <div class="box-arrow absolute -translate-y-12 right-16 text-center rounded-sm">
            80%
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
              class="bg-primary-yellow h-1 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <div className="relative pt-4 mt-6">
          <p className="py-2">PROJECT MANAGEMENT</p>
          <div class="box-arrow absolute -translate-y-12 right-16 -translate-x-2 text-center rounded-sm">
            78%
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
              class="bg-primary-yellow h-1 rounded-full"
              style={{ width: "78%" }}
            ></div>
          </div>
        </div>
        <div className="relative pt-4 mt-6">
          <p className="py-2">PRODUCT MANAGEMENT</p>
          <div class="box-arrow absolute -translate-y-12 right-24 text-center rounded-sm">
            74%
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
              class="bg-primary-yellow h-1 rounded-full"
              style={{ width: "74%" }}
            ></div>
          </div>
        </div>
        <div className="relative pt-4 mt-6">
          <p className="py-2">VERSION CONTROL</p>
          <div class="box-arrow absolute -translate-y-12 right-14 text-center rounded-sm">
            82%
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
              class="bg-primary-yellow h-1 rounded-full"
              style={{ width: "82%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
