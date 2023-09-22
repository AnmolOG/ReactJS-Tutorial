import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
const Contact = () => {

  useEffect(() => {
    alert('hello user')
  }, [])
  
  return (
    <div style={{ minHeight: "85vh" }}>
      <h2>This is contact us page</h2>
      <div>
        <ul>
          <li>
            <Link to="/contact/application">Application</Link>
          </li>
          <li>
            <Link to="/contact/email">Email</Link>
          </li>
          <li>
            <Link to="/contact/phone">Phone</Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </div>
  );
};

export default Contact;
