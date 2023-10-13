import { FC, forwardRef, JSX } from "react";
import { Group, Avatar, Text, Menu, UnstyledButton, rem } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import { IconLogout } from "@tabler/icons-react";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.md,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  )
);

const User: FC = (): JSX.Element => {
  return (
    <Group position="center">
      <Menu withArrow offset={0}>
        <Menu.Target>
          <UserButton
            image="https://steamuserimages-a.akamaihd.net/ugc/2015953485210417383/10318882DC26525C9BCEFFBD82631A60822233C5/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
            name="Simon Riley Ghost"
            email="ghost@gmail.com"
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            icon={<IconSettings style={{ width: rem(22), height: rem(22) }} />}
          >
            Settings
          </Menu.Item>
          <Menu.Item
            color="red"
            icon={<IconLogout style={{ width: rem(22), height: rem(22) }} />}
          >
            Log out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};

export default User;
