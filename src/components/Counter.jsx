import React from "react";

const Counter = () => {
  return (
    <>
      <div className="flex justify-around gap-5 mt-16 flex-wrap">
        <div
          className="counter-shadow py-6 px-10 text-center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <h2 className="text-primary-yellow text-4xl font-medium">8+</h2>
          <p className="text-xl pt-2">Years Experience</p>
        </div>
        <div
          className="counter-shadow py-6 px-10 text-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h2 className="text-primary-yellow text-4xl font-medium">120+</h2>
          <p className="text-xl pt-2">Happy Clients</p>
        </div>
        <div
          className="counter-shadow py-6 px-10 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-primary-yellow text-4xl font-medium">150+</h2>
          <p className="text-xl pt-2">Projects Done</p>
        </div>
        <div
          className="counter-shadow py-6 px-10 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-primary-yellow text-4xl font-medium">11</h2>
          <p className="text-xl pt-2">Got Awards</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
