import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center; 
  padding: 25px ;
  list-style: none;
  height: 10px;
  text-decoration: none;
  font-size: 20px;
  background-color: ${({ isActive }) => (isActive ? '#c2ffe0' : 'white')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2ffe0;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 25px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #c5c8d3;
    cursor: pointer;
  }
`;

const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const location = useLocation();

  const showSubnav = () => setSubnav(!subnav);

  const isActive = location.pathname === item.path;

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav} isActive={isActive}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default Submenu;
