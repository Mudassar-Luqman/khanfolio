import React from "react";

const Counter = () => {
  return (
    <>
      <div className="flex justify-around gap-5 mt-16 flex-wrap">
        <div className="counter-shadow py-6 px-10 text-center">
          <h2 className="text-primary-yellow text-4xl font-medium">10+</h2>
          <p className="text-xl pt-2">Years Experience</p>
        </div>
        <div className="counter-shadow py-6 px-10 text-center">
          <h2 className="text-primary-yellow text-4xl font-medium">250+</h2>
          <p className="text-xl pt-2">Happy Clients</p>
        </div>
        <div className="counter-shadow py-6 px-10 text-center">
          <h2 className="text-primary-yellow text-4xl font-medium">650+</h2>
          <p className="text-xl pt-2">Projects Done</p>
        </div>
        <div className="counter-shadow py-6 px-10 text-center">
          <h2 className="text-primary-yellow text-4xl font-medium">38</h2>
          <p className="text-xl pt-2">Got Awards</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
