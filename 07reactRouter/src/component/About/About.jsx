import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                         React development is driven by a vibrant community of passionate developers who constantly push the boundaries of what is possible on the web. These developers bring creativity, skill, and dedication to building interactive, efficient, and user-friendly interfaces using React. 
                         They not only develop innovative applications but also contribute to improving the React library itself through open-source contributions, tutorials, and tools that benefit the entire ecosystem. 
                         Their passion for clean code, modern practices, and sharing knowledge fosters a collaborative environment where beginners and experts alike can thrive. This collective effort keeps React at the forefront of front-end development.
                        </p>
                        <p className="mt-4 text-gray-600">
                          React development is  driven by passionate developers who create dynamic and user-friendly web applications.
                          Their dedication and innovation keep the React ecosystem growing and evolving every day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
