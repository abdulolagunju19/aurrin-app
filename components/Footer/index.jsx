import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";

import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Image from "next/image";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      target="_blank"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src="/logo.png" height={100} width={100}/>
            </Box>
            <Text fontSize={"sm"}>
              © 2024 Aurrin. All rights reserved.
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"LinkedIn"} href={"https://www.linkedin.com/company/aurrin/"}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"https://www.youtube.com/@Aurrin-ca"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"https://www.instagram.com/aurrin_ca/"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"mailto:abdulsamad@aurrin.ca"}>Contact us</Link>
          </Stack>
          <Spacer />
          <Stack align={"flex-start"}>
            <ListHeader>Join our Newsletter</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("blue.400", "blue.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "blue.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
