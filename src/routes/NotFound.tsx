import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return <VStack bg="gray.100" justifyContent={"center"} minH={"100vh"}>
        <Heading>Page not found</Heading>
        <Text>It seems that your're loset</Text>
        <Link to={"/"}>
            <Button colorScheme={"blue"} variant={"solid"}>
                Go HOME &rarr;
            </Button>
        </Link>

    </VStack>
}