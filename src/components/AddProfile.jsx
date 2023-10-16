import React, { useState } from "react";
import Model from 'react-modal';

export default function AddProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagramLink: "",
    youtubeLink: "",
  });

  const [currentStep, setCurrentStep] = useState("basic");
  const [visible, setvisible] = useState(false);
  const [visible1, setvisible1] = useState(false);
  const [visible2, setvisible2] = useState(false);

  const handleSaveProfile = () => {
    if (currentStep === "basic") {
      setCurrentStep("social");
    } else {
      setvisible(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div>
      <div className="w-[38rem] h-[15rem] rounded-lg bg-white p-4 ml-6 mr-0 rounded-sm border border-gray-200 flex flex-col">
        <strong className="text-gray-700 font-medium"></strong>
        <div className="mt-3 w-full flex-1 text-xs">
          {formData.name ? (
            <div>
             <h1>{formData.name} </h1>
              <div>
                <span>Phone: {formData.phone}</span>
                <span className="pl-6px">Email: {formData.email}</span>
              </div>
              <div>
                <span>Instagram Link: {formData.instagramLink}</span>
                <span className="pl-16px">Youtube Link: {formData.youtubeLink}</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <button
                className="bg-stone-400 text-white font-bold text-lg px-4 py-2 rounded-full hover:bg-stone-200"
                onClick={() => setvisible(true)}
              >
                +
              </button>
              <h2 className="mt-2 text-xl font-semibold">Add Profile</h2>
            </div>
          )}
        </div>
      </div>
      <Model isOpen={visible} onRequestClose={() => setvisible(false)}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}>
        <div className="flex">
          <div className="w-1/2">
            <div>
              {currentStep === "basic" && (
                <>
                <h2 className="mt-2 text-xl font-semibold">Add Profile</h2>
                <div>
                  <button
                    className="cursor-pointer"
                    onClick={() => setvisible1(true)}
                  >
                    Basic
                  </button>
                  <button
                    className="cursor-pointer pl-4"
                    onClick={() => setvisible2(true)}
                  >
                    Social
                  </button>
                </div>
                  <form isOpen={visible1}>
                  <div>
                    <label htmlFor="name">Enter Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Enter Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Enter Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-blue-500 text-white font-bold text-lg px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer"
                    onClick={handleSaveProfile}
                  >
                    Next
                  </button>
                </div>
                </>
              )}
              {currentStep === "social" && (
                <>
                <form isOpen={visible2}>
                  <div>
                    <label htmlFor="instagramLink">Instagram Link</label>
                    <input
                      type="text"
                      className="form-control"
                      id="instagramLink"
                      placeholder="instagram.com/username"
                      value={formData.instagramLink}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="youtubeLink">Youtube Link</label>
                    <input
                      type="text"
                      className="form-control"
                      id="youtubeLink"
                      placeholder="youtube.com/username"
                      value={formData.youtubeLink}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
                <div className="flex justify-between mt-4">
                  <button
                    className="text-gray-600 font-bold text-lg cursor-pointer"
                    onClick={() => setCurrentStep("basic")}
                  >
                    Back
                  </button>
                  <button
                    className="bg-blue-500 text-white font-bold text-lg px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer"
                    onClick={handleSaveProfile}
                  >
                    Done
                  </button>
                </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Model>
    </div>
  );
}
