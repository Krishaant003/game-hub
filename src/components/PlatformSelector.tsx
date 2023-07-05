import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";
import { platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: platform) => void;
  selctedPlatform: platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selctedPlatform }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selctedPlatform?.name}
      </MenuButton>
      <MenuList>
        {data.map((Platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(Platform)}
            key={Platform.id}
          >
            {Platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
