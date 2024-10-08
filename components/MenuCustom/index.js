import { HStack, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, MenuGroup, Text, Spacer } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

import Link from "next/link";

import React from "react";

const MenuCustom = ({ isMenuOpen }) => {
  return (
    <div>
      <Menu isOpen={isMenuOpen}>
        <MenuButton as={Button} variant={"outline"} colorScheme={"blue"} size={"sm"} mr={4} leftIcon={<AddIcon />}>
          Services
        </MenuButton>
        <MenuList>
          <MenuGroup title="I want to plan my">
            <Link href="/long-term-plan/retirement">
              <MenuItem>
                Retirement
              </MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="I want to find the right">
            <Link href="/map">
              <MenuItem>
                Community
              </MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="I want support with">
          <Link href="/aging">
            <MenuItem>
              Aging-in-Place
            </MenuItem>
          </Link>
        </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default MenuCustom;
