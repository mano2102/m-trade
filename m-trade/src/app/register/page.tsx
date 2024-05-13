import React from "react";

const page = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default page;
