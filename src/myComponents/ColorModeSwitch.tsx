import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root colorPalette={'green'}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
      
    </HStack>
  );
};

export default ColorModeSwitch;
