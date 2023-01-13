import { DeleteIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Heading, IconButton, Input, Stack, Tooltip } from "@chakra-ui/react";

export function AmazingChakraDemo() {
    return (
        <Stack spacing={4} direction='column' align='center'>
            <Heading>
                Let's look at chakra-ui
            </Heading>
            <Input placeholder='Search term...' />
            <Input placeholder='Desired price' />
            <Stack spacing={4} direction='row' align='center'>
                <Button colorScheme='blue'>Button</Button>
                <Button colorScheme='blue'>Button</Button>
                <Button colorScheme='blue'>Button</Button>
                <Button colorScheme='blue'>Button</Button>
            </Stack>
            <Tooltip hasArrow label='Delete the thing' bg='red.600'>

                <IconButton aria-label='Delete the thing!' icon={<DeleteIcon />} />
            </Tooltip>
            <Accordion>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    );
}
