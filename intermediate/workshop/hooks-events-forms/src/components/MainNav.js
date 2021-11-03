import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "@epignosis_llc/gnosis";
import { PlayUnitSVG } from "@epignosis_llc/gnosis/dist/cjs/icons/";

const MainNav = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onToggle = () => {
    setIsCollapsed((val) => !val);
  };

  return (
    <Sidebar isCollapsed={isCollapsed} onToggle={onToggle}>
      <div>
        <ul>
          <li>
            <Link to="/hooks/use-state" title="useState()">
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="useState()"
                isExpanded={!isCollapsed}
                isActive={location.pathname === "/hooks/use-state"}
              />
            </Link>
          </li>
          <li>
            <Link to="/hooks/use-effect" title="useEffect() example 1">
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="useEffect() example 1"
                isExpanded={!isCollapsed}
                isActive={location.pathname === "/hooks/use-effect"}
              />
            </Link>
          </li>
          <li>
            <Link to="/hooks/use-effect-2" title="useEffect() example 2">
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="useEffect() example 2"
                isExpanded={!isCollapsed}
                isActive={location.pathname === "/hooks/use-effect-2"}
              />
            </Link>
          </li>
          <li>
            <Link to="/hooks/use-effect-3" title="useEffect() example 3">
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="useEffect() example 3"
                isExpanded={!isCollapsed}
                isActive={location.pathname === "/hooks/use-effect-3"}
              />
            </Link>
          </li>
          <li>
            <Link to="/hooks/use-effect-4" title="useEffect() example 4">
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="useEffect() example 4"
                isExpanded={!isCollapsed}
                isActive={location.pathname === "/hooks/use-effect-4"}
              />
            </Link>
          </li>
          <li>
            <Link to="/hooks/use-reducer" title="useReducer()">
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="useReducer()"
                isExpanded={!isCollapsed}
                isActive={location.pathname === "/hooks/use-reducer"}
              />
            </Link>
          </li>
          <li>
            <Link to="/forms/simple-input" title="Input">
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="Input"
                isExpanded={!isCollapsed}
                isActive={location.pathname === "/forms/simple-input"}
              />
            </Link>
          </li>
          <li>
            <Link to="/forms/input-and-textarea" title="Input and textarea">
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="Input and textarea"
                isExpanded={!isCollapsed}
                isActive={location.pathname === "/forms/input-and-textarea"}
              />
            </Link>
          </li>
          <li>
            <Link
              to="/forms/select-radio-button-checkbox"
              title="Select, radio button and checkbox"
            >
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="Select, radio button and checkbox"
                isExpanded={!isCollapsed}
                isActive={
                  location.pathname === "/forms/select-radio-button-checkbox"
                }
              />
            </Link>
          </li>
          <li>
            <Link to="/forms/form-submit-async" title="Form submit (async)">
              <Sidebar.Item
                icon={<PlayUnitSVG height={32} />}
                label="Form submit (async)"
                isExpanded={!isCollapsed}
                isActive={location.pathname === "/forms/form-submit-async"}
              />
            </Link>
          </li>
        </ul>
      </div>
    </Sidebar>
  );
};

export default MainNav;
