import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Customer from "./Customer";

const About = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div style={{ minHeight: "79vh" }}>
      <h1>This is about us page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda
        alias vel voluptatem veniam perferendis, delectus facere eligendi eaque
        ipsum quo ex officia doloremque totam libero maiores odit laborum
        accusantium voluptates hic velit animi. Maxime voluptatibus, culpa
        delectus omnis doloremque molestias voluptatum soluta, repudiandae sed,
        tempore quas? Quis sed nesciunt ipsam, sapiente voluptatum omnis sit
        reprehenderit distinctio autem nam pariatur iste? Hic eligendi rem vero
        porro ab asperiores officiis provident iste, nemo exercitationem dolores
        aspernatur culpa rerum fugit quasi voluptates. Veritatis unde ea quia
        voluptatibus explicabo odio sit. Eligendi unde error repellat pariatur,
        culpa voluptates doloribus fuga earum fugit eum aliquid, laborum
        consequuntur molestias distinctio exercitationem dolore vero illo
        voluptatibus placeat. Placeat quisquam totam eum, ratione consequuntur
        voluptatibus aut culpa!
      </p>
      <h2>Explore more with us</h2>
      <div className="bg-light text-light py-2">
        <ul className="" style={{ display: "flex", listStyle:'none' }}>
          <li className="mx-4 ">
            <Link to="/about/customer" style={{ textDecoration: "none" }}>
              Our customers
            </Link>
          </li>
          <li className="mx-4 ">
            <Link to="/about/sponser" style={{ textDecoration: "none" }}>
              Our Sponser
            </Link>
          </li>
          <li className="mx-4 ">
            <Link to="/about/team" style={{ textDecoration: "none" }}>
              Our Team
            </Link>
          </li>
        </ul>
      </div>
      <div className="container">
        {location.pathname==='/about' && <Customer/>}
        <Outlet/>
      </div>
    </div>
  );
};

export default About;
