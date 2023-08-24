"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Link as RouterLink } from "react-router-dom";
import Swal from "sweetalert2";
import { FaUserCircle  } from "react-icons/fa";
import {AiOutlineLogin } from "react-icons/ai";

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  const LoginSuccess = () => {
    loginWithRedirect();
  };
  const LogOutSuccess = () => {
    Swal.fire("We will be waiting for you", "LogOut Successful !!", "success");
    logout({
      logoutParams: { returnTo: window.location.origin },
    });
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="sticky"
        top="0"
        p={5}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to="/">
            <Text
              fontSize={["14px", "16px", "20px"]}
              fontWeight={"bold"}
              as="h1"
            >
              Your Choice
            </Text>
          </RouterLink>
          {isAuthenticated && (
            <RouterLink to="/saved">
              <Text fontSize={["14px", "16px", "20px"]} fontWeight={"bold"}>
                SavedFeed
              </Text>
            </RouterLink>
          )}
          <Box fontSize={["14px", "16px", "20px"]}>
            {isAuthenticated && `Welcome ${user.given_name}`}
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu ZIndex={10000}>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      isAuthenticated
                        ? user.picture
                        : "https://avatars.dicebear.com/api/male/username.svg"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                {!isAuthenticated &&  <MenuItem
                    fontSize={["14px", "16px", "20px"]}
                    onClick={() => LoginSuccess()}
                  >
                    <Flex justifyContent={"center"} alignItems={"center"} gap={2}> 
                   <FaUserCircle />
                     <Text mr={2}>Login</Text>
                     </Flex>
                  </MenuItem>}

                 {isAuthenticated && <MenuItem onClick={() => LogOutSuccess()}>
                  <Flex justifyContent={"center"} alignItems={"center"} gap={2}>

                  <AiOutlineLogin/> 
                  <Text mr={2}>Log Out</Text> 
                  </Flex>
                  </MenuItem>}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
