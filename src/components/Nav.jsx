import React from "react";

function Nav({ name, home, about, proyects, contact }) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{home}</li>
        <li>{about}</li>
        <li>{proyects}</li>
        <li>{contact}</li>
      </ul>
    </div>
  );
}

export default Nav;
