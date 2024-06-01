import { Button, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return <VStack bg="gray.100" justifyContent={"center"} minH={"100vh"}>
        <Heading>Page not found</Heading>
        <Text>It seems that your're loset</Text>
        <NavLink to={"/"}>
            <Button colorScheme={"blue"} variant={"solid"}>
                Go HOME &rarr;
            </Button>
        </NavLink>

    </VStack>
}