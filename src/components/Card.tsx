import { Box, Button, Center, ChakraProvider, Input } from '@chakra-ui/react'
import { login } from '../services/login'

export default function Card() {
  return (
    <ChakraProvider>
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center marginBottom="10px">
          <h1>Faça o Login</h1>
        </Center>
        <Input placeholder="email" />
        <Input marginTop="5px" placeholder="senha" />

        <Center>
          <Button
            onClick={login}
            colorScheme="teal"
            size="sm"
            width="20%"
            marginTop="15px"
          >
            Button
          </Button>
        </Center>
      </Box>
    </ChakraProvider>
  )
}
