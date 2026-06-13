import usePlatforms from "@/hooks/usePlatforms";
import { Button, HStack, Menu, Portal } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <div>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button>Platforms</Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.map((platform) => (
                <Menu.Item value={platform.name} key={platform.id}>
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

export default PlatformSelector;
