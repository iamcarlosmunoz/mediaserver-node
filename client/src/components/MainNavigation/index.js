import React from "react";
import { Link, useLocation } from "wouter";
import { Nav, List, NavLink, Item } from "./styles";
import {
  IconHome,
  IconMovie,
  IconSerie,
  IconSettings,
  IconUpload,
} from "../common/SvgIcons";

const MenuItems = ["", "movies", "series", "settings", "upload"];

const MainNavigation = () => {
  const [location] = useLocation();

  return (
    <Nav>
      <List>
        {MenuItems.map((item) => {
          return (
            <Item
              active={location === `/${item}` ? true : false}
              margin={item !== "" ? true : false}
            >
              <Link href={`/${item}`}>
                <NavLink>
                  {item === "" && <IconHome />}
                  {item === "movies" && <IconMovie />}
                  {item === "series" && <IconSerie />}
                  {item === "settings" && <IconSettings />}
                  {item === "upload" && <IconUpload />}
                </NavLink>
              </Link>
            </Item>
          );
        })}
      </List>
    </Nav>
  );
};

export default MainNavigation;
