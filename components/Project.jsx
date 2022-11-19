import React from "react";

export const Project = () => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-20 md:p-44 h-screen">
      <div>
        <img src="favicon.ico" alt="fav" />
      </div>
      <div className="space-y-5 text-center px-0 md:px-10 max-w-5xl">
        <h4 className="text-2xl font-semibold text-center">
          <span className="underline decoration-yellow-400">
            Case Study 1 of 6 UPS clone
          </span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illo
          ratione ullam sequi culpa id ipsa ut labore esse, quod dolores
          provident accusamus modi molestias soluta! Ullam, rerum quisquam? Ad.
        </p>
      </div>
    </div>
  );
};
