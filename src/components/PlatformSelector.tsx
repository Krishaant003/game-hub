import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((Platform) => (
          <MenuItem key={Platform.id}>{Platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
