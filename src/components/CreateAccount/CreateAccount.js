import React from "react";

const CreateAccountSlide = () => {
  // Your account creation logic here

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-#090c29 to-#041c4a">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Account</h1>
        {/* Account creation form */}
        <form className="flex flex-col space-y-4">
          {/* Input fields for creating an account */}
          {/* Slide-in animation for account creation */}
          {/* Back to login button */}
          <button
            type="button"
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={() => {
              // Handle sliding back to the login section
            }}
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountSlide;
