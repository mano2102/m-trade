import React from "react";

const page = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <input placeholder="Email" type="Email" />
        </div>
        <div>
          <input placeholder="Password" type="password" />
        </div>
        <div>
          <input type="button" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default page;
