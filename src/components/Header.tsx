import { Center, ChakraProvider } from '@chakra-ui/react'

export default function Header() {
  return (
    <ChakraProvider>
      <Center
        padding="10px"
        color="white"
        bgColor="#4B0082"
        fontSize="20px"
        fontWeight="800"
      >
        <header>Dio Bank</header>
      </Center>
    </ChakraProvider>
  )
}
