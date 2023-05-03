// Section to initiate a new campaign

import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });
  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campign);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <span className="coverLine">
        <img src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?
           auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full" />
        <div className="relative bg-opacity-75 backgroundMain">
          <svg className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163">
            <path
              fill='currentColor'
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl
          md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl m-12 xl:mb-0 xl-pr-16 xl:w-7/12">
                
                
                <h2 className="max-w--lg mb-l font-serif text-3xl font-bold hover:scale-110 duration-500 text-merablue tracking-tight text-white sm:text-5xl sm:leading-none">
                  ShardScape <br className="hidden md:block" />
                </h2>

                
                <p className="max-w-xl mb-4 text-base text-gray-200 hover:text-xl duration-500 md:text-lg">
                Raising Funds made Simple!
                </p>
                
                
                {/*<a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider tansition-colors duration-200 text-teal-accent-700 text-gray-200">
                  Learn More
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12">
                  </svg>
                </a>*/}

                
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-meraslate border-1 rounded sm:p-10">
                  
                  
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Campaign
                  </h3>
                  

                  <form>
                    
                    
                    <div className="mb-1 sm:mb-2 ">
                      <label
                        htmlFor="FirstName"
                        className="inline-block mb-1 font-medium">
                        TITLE
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            title: e.target.value,
                          })
                        }
                        placeholder="Title for your Campaign"
                        required type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition
                      duration-200 bg-merapurple hover:border-2
                       hover:border-meradarkpink-400 rounded shadow-sm-apperance-none 
                      focus:border-deep-purple-acccent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>

                      
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="description"
                        className="inline-block mb-1 font-medium">
                        Description
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            description: e.target.value,
                          })
                        }
                        placeholder="Description of Campaign"
                        required type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition
                        duration-200 bg-merapurple hover:border-2
                         hover:border-meradarkpink-400 rounded shadow-sm-apperance-none 
                        focus:border-deep-purple-acccent-400 focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                      />
                    </div>

                    
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium">
                        Target Amount
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            amount: e.target.value,
                          })
                        }
                        placeholder="Amount to be Raised"
                        required type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition
                        duration-200 bg-merapurple hover:border-2
                         hover:border-meradarkpink-400 rounded shadow-sm-apperance-none 
                        focus:border-deep-purple-acccent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    
                    
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium">
                        Target Amount
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            deadline: e.target.value,
                          })
                        }
                        placeholder="Date"
                        required type="date"
                        className="flex-grow w-full h-12 px-4 mb-2 transition
                        duration-200 bg-merapurple hover:border-2
                         hover:border-meradarkpink-400 rounded shadow-sm-apperance-none 
                        focus:border-deep-purple-acccent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    
                    
                    <div className="mt-4 mb-2 sm:mb-4 ">
                      <button onClick={(e) => createNewCampaign(e)}
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12  px-6 font-medium tracking-wide
                      text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 
                      hover:bg-deep-purple-accent-700 focus:shadow-outline
                      focus:outline-none newColor">
                        Create campaign
                      </button>
                    </div>


                    <p className=" flex justify-center text-xs text-gray-600 sm:text-sm">
                      create your campiagn to raise some juicy funds
                    </p>


                  </form>


                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  )
};

export default Hero;