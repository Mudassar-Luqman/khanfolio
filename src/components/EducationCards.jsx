import React from "react";

const EducationCards = () => {
  return (
    <div className="flex gap-4 flex-wrap lg:flex-nowrap mt-12">
      <div className="card-shadow p-8">
        <div
          href="#"
          className="p-10 what-i-do-card hover:text-white rounded-xl"
        >
          <h1 className="text-white text-2xl py-4">Bachelor Degree</h1>

          <p className="flex  justify-between">
            <span className="text-primary-yellow">
              BS (Hons) Software Engineering
            </span>
          </p>
          <p className="text-primary-text-gray pt-6">
            The education should be very interactual. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis mauris.
          </p>
        </div>
      </div>
      <div className="card-shadow p-8">
        <div href="#" className="p-10 what-i-do-card  rounded-xl">
          <h1 className="text-white text-2xl py-4">Intermediate</h1>

          <p className="flex  justify-between">
            <span className="text-primary-yellow">
              Intermediate Computer Science
            </span>
          </p>
          <p className="text-primary-text-gray pt-6">
            The education should be very interactual. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis mauris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCards;
