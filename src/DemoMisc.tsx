import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Heading, IconButton, Input, Stack, Text, Tooltip } from '@chakra-ui/react';

export function DemoMisc() {
    return (
        <Stack spacing={4} direction='column' align='center'>

            <Heading>Hello!</Heading>
            <Input placeholder='search term' />

            <Stack spacing={4} direction='row' align='center'>
                <Button>
                    Button
                </Button>
                <Button>
                    Button
                </Button>
                <Button>
                    Button
                </Button>
                <Button colorScheme='blue'>Button</Button>

            </Stack>

            <Text fontSize='lg'>This chakra-ui stuff seems easy enough!</Text>

            <Tooltip hasArrow label='Delete the thing!' bg='red.600'>
                <IconButton aria-label='Delete the thing!'
                    icon={<DeleteIcon />} />
            </Tooltip>
        </Stack>

    );
}
