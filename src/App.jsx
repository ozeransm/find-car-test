import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./page/Navbar"
import { Homepage } from "./page/Homepage"
import { Catalog } from "./page/Catalog"
import { Favorites } from "./page/Favorites"
import { ChakraProvider, useDisclosure } from "@chakra-ui/react"
import "@fontsource/manrope"
import theme from "../font/theme.font"
import { ModalWin } from "./components/Modal"
import { useSelector } from "react-redux"
import { dataModal } from "./redux/selectors"

function App() {

  const elem = useSelector(dataModal);
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
     {/* basename="/find-car-test" */}
    <Router >
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<Homepage />} />
            <Route path="catalog" element={<Catalog onOpen={onOpen} onClose={onClose} isOpen={isOpen} />} />
            <Route path="favorites" element={<Favorites onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>} />
            <Route path="*" redirectTo="" />
          </Route>               
        </Routes>
          {elem.id && <ModalWin onOpen={onOpen} onClose={onClose} isOpen={isOpen} elem={elem} />}
      </ChakraProvider>      
    </Router>
    
    </>     
  )
}

export default App
