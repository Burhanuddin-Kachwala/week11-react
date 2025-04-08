import React from "react";

function Card({title="Topic 101", description="This is a topic description"}) {
  // const { title, description } = props;
  return (
    <>
      <a
        href="#"
        className="mt-3 block max-w-sm p-6 bg-gray-200 white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </a>
    </>
  );
}

export default Card;
