import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Sidebar() {
  const navLinkStyles = ({ isActive }: any) => {
    if (isActive)
      return {
        color: isActive ? "white" : "none",
        backgroundColor: isActive ? "black" : "none",
      };
  };
  
  const asideToggle = () => {
    const aside: any = document.querySelector(".sideBar");
    aside.classList.toggle("toggle");
  };

  return (
    <Fragment>
      <span
        style={{ cursor: "pointer", zIndex: "99", position: "fixed" }}
        onClick={asideToggle}
        className="d-inline-block p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </span>
      <aside
        className="px-3 sideBar transition"
        style={{
          width: "260px",
          height: "100%",
          position: "fixed",
          zIndex: "999",
          background: "#F7F7F9",
        }}
      >
        <div className="d-flex justify-content-between align-items-center  py-1">
          <h5 className="my-1" style={{ color: "#4C4E64", fontWeight: "bold" }}>
            <span>Immiflow</span>
          </h5>
          <span onClick={asideToggle} className="d-inline d-lg-none">
            <i
              className="fas fa-duotone fa-angles-left"
              style={{ color: "#4C4E64" }}
            ></i>
          </span>
        </div>
        <div className="mt-2">
          <ul className="ps-0 sideList d-flex flex-column justify-content-start align-items-strech">
            <li className="text-capitalize mt-1" style={{ listStyle: "none" }}>
              <NavLink
                to="/"
                className="p-2 d-flex align-items-center"
                style={navLinkStyles}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-house me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>{" "}
                dashboards
              </NavLink>
            </li>
            <li className="text-capitalize mt-1" style={{ listStyle: "none" }}>
              <NavLink
                to="/addClients"
                className="p-2 d-flex align-items-center"
                style={navLinkStyles}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-envelope me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </span>{" "}
                clients
              </NavLink>
            </li>
            <li className="text-capitalize mt-1" style={{ listStyle: "none" }}>
              <NavLink to="/chat" className="p-2 d-flex align-items-center" style={navLinkStyles}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-left me-2" viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  </svg>
                </span>{" "}
                chat
              </NavLink>
            </li>
            {/* <li className="text-capitalize mt-1" style={{ listStyle: "none" }}>
              <NavLink to="/calender" className="p-2 d-flex align-items-center" style={navLinkStyles}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar me-2" viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                </span>{" "}
                calender
              </NavLink>
            </li> */}
            <li className="text-capitalize mt-1" style={{ listStyle: "none" }}>
              <NavLink
                to="/agent"
                className="textColor p-2 d-flex align-items-center"
                style={navLinkStyles}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person-lines-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                  </svg>
                </span>{" "}
                agent
                <span className="ms-auto">
                  <i className=" fas fa-solid fa-angle-right"></i>
                </span>
              </NavLink>
            </li>
            {/* <li className="text-capitalize mt-1" style={{ listStyle: "none" }}>
              <NavLink to="/Role" className="textColor p-2 d-flex align-items-center" style={navLinkStyles}
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-unlock me-2" viewBox="0 0 16 16">
                    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
                  </svg>
                </span>{" "}
                Roles & permissi...
                <span className="ms-auto"><i className=" fas fa-solid fa-angle-right"></i></span>
              </NavLink>
            </li> */}
            {/* <li className="text-capitalize mt-1" style={{ listStyle: "none" }}>
              <NavLink to="/formHub" className="p-2 d-flex align-items-center" style={navLinkStyles}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-card-list me-2" viewBox="0 0 16 16"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                  </svg>
                </span>{" "}
                Form hub
              </NavLink>
            </li> */}
          </ul>
        </div>
      </aside>
      <Outlet />
    </Fragment>
  );
}

export default Sidebar;
