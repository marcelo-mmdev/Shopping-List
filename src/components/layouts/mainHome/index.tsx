import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { MdClose, MdEdit, MdAddShoppingCart } from "react-icons/md";
import ModuleAddProducts from "@/components/templates/modules/moduleAddProducts";

const MainHome = () => {
  const [getRowColor] = useState("CINZ.20");
  const [getRowId, setRowId] = useState("0");
  const {
    isOpen: isOpenAddProducts,
    onOpen: onOpenAddProducts,
    onClose: onCloseAddProducts,
  } = useDisclosure();

  return (
    <>
      <Box m="5px">
        <TableContainer>
          <Table>
            <Thead>
              <Tr bg="AZUL.30">
                <Th
                  onClick={() => {}}
                  borderTopRadius={"8px"}
                  w="100%"
                  h="60px"
                  color="#ffffff"
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Box>Produtos</Box>
                    <Box>
                      <Button
                        w="38px"
                        h="32px"
                        bg={"VERD.20"}
                        borderRadius="10px"
                        onClick={() => {
                          onOpenAddProducts();
                        }}
                      >
                        <Icon
                          as={MdAddShoppingCart}
                          w="17px"
                          h="17px"
                          display="center"
                          alignItems="center"
                          justifyContent="center"
                        />
                      </Button>
                    </Box>
                  </Box>
                </Th>
              </Tr>
            </Thead>
          </Table>
        </TableContainer>
        <TableContainer
          h="100%"
          borderRadius={"8px"}
          mt="5px"
          // height="70vh"
          // overflowY="scroll"
          // border="solid 1px #000"
          color="#000"
        >
          <Table>
            <Tbody>
              <Tr
                onDoubleClick={() => {
                  getRowId === "1" ? setRowId("0") : setRowId("1");
                }}
                backgroundColor={getRowId === "1" ? getRowColor : "#ffffff"}
                onClick={() => {
                  getRowId === "1" ? setRowId("0") : setRowId("1");

                  getRowId === "0" ? getRowColor : "#ffffff";
                }}
              >
                <Td w="100%">
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Box display={"flex"} gap="2">
                      <Box>O</Box>
                      <Box>Produtos</Box>
                    </Box>
                    <Box display={"flex"} gap="1">
                      <Box>
                        <Button
                          w="20px"
                          h="30px"
                          bg={"VERM.30"}
                          borderRadius="10px"
                          // onClick={onClose}
                        >
                          <Icon
                            as={MdClose}
                            w="20px"
                            h="20px"
                            color={"BRPR.10"}
                            display="center"
                            alignItems="center"
                            justifyContent="center"
                          />
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          w="20px"
                          h="30px"
                          bg={"AMAR.30"}
                          borderRadius="10px"
                          // onClick={onClose}
                        >
                          <Icon
                            as={MdEdit}
                            w="20px"
                            h="20px"
                            color={"BRPR.10"}
                            display="center"
                            alignItems="center"
                            justifyContent="center"
                          />
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <ModuleAddProducts
        openModal={isOpenAddProducts}
        closeModal={onCloseAddProducts}
      />
    </>
  );
};

export default MainHome;
