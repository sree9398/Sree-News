import React from "react";

function Menu({ setCategory }) {
  const links = [
    { id: 1, name: "Political", value: "political" },
    { id: 2, name: "Weather", value: "weather" },
    { id: 3, name: "Market", value: "market" },
    { id: 4, name: "Business", value: "business" },
    { id: 5, name: "Cinema", value: "cinema" },
    { id: 6, name: "Health", value: "health" },
  ];

  const onClick = (id, value) => {
    setCategory(value);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <nav className="menu">
        <ul>
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => onClick(link.id, link.value)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search keyword for news ..."
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
