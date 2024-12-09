import { Box, Flex, Text, HStack, Link } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box bg="teal.500" px={4} shadow="md" position="sticky" top="0" zIndex="10">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Canchas Paddle: Final
        </Text>

        <HStack as="nav" gap={8} fontSize={20}>
          <Link
            href="/Inicio"
            color="white"
            _hover={{ textDecoration: "ActiveCaption", color: "teal.200" }}
          >
            Inicio
          </Link>
          <Link
            href="/Canchas"
            color="white"
            _hover={{ textDecoration: "ActiveCaption", color: "teal.200" }}
          >
            Canchas
          </Link>
          <Link
            href="/Reservas"
            color="white"
            _hover={{ textDecoration: "ActiveCaption", color: "teal.200" }}
          >
            Reservas
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default NavBar;
