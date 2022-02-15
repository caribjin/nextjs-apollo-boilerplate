import { Moon, Sun } from '@/components/icons';
import { IconButton, IconButtonProps, useColorMode, useColorModeValue } from '@chakra-ui/react';

type Props = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<Props> = props => {
  const { toggleColorMode } = useColorMode();
  const modeText = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(Moon, Sun);

  return (
    <>
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        marginLeft="2"
        icon={<SwitchIcon />}
        aria-label={`Switch to ${modeText} mode`}
        onClick={toggleColorMode}
        {...props}
      />
    </>
  );
};
