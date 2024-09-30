import { Box, ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout'
import Card from './components/Card'

export default function App() {
  return (
    <Layout>
      <ChakraProvider>
        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
          <Card />
        </Box>
      </ChakraProvider>
    </Layout>
  )
}
