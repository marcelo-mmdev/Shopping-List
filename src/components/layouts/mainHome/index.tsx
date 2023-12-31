/* eslint-disable react/jsx-key */
import {
  Box,
  Button,
  Icon,
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
import React, { useEffect } from "react";
import { useState } from "react";
import { MdDelete, MdEdit, MdAddShoppingCart } from "react-icons/md";
import ModuleAddProducts from "@/components/templates/modules/moduleAddProducts";
import {
  IProducts,
  ProductsService,
} from "@/core/services/api/products/ProductsService";
import { ApiException } from "@/core/services/api/ApiException";
import ModuleEditProducts from "@/components/templates/modules/moduleEditProducts";
import ModuleDeleteProducts from "@/components/templates/modules/moduleDeleteProducts";

const MainHome = () => {
  // Click da cor da tabela
  const [getRowColor] = useState("CINZ.20");
  const [getRowId, setRowId] = useState("0");
  // Chamadas da API
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    ProductsService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setProducts(result);
      }
    });
  }, []);

  // Funções dos Modais
  const {
    isOpen: isOpenAddProducts,
    onOpen: onOpenAddProducts,
    onClose: onCloseAddProducts,
  } = useDisclosure();
  const {
    isOpen: isOpenEditProducts,
    onOpen: onOpenEditProducts,
    onClose: onCloseEditProducts,
  } = useDisclosure();
  const {
    isOpen: isOpenDeleteProducts,
    onOpen: onOpenDeleteProducts,
    onClose: onCloseDeleteProducts,
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
                        bg={"VERD.30"}
                        borderRadius="10px"
                        onClick={() => {
                          onOpenAddProducts();
                        }}
                        _hover={{
                          bg: "VERD.20",
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
          // borderRadius={"8px"}
          mt="5px"
          overflowY="auto"
          color="#000"
        >
          <Table>
            <Tbody>
              {products.map((data: any) => {
                return (
                  <Tr
                    key={data.id}
                    onDoubleClick={() => {
                      getRowId === "1" ? setRowId("0") : setRowId(data.id);
                      onOpenEditProducts();
                    }}
                    backgroundColor={
                      getRowId === data.id ? getRowColor : "#ffffff"
                    }
                    onClick={() => {
                      getRowId === "1" ? setRowId("0") : setRowId(data.id);

                      getRowId === data.id ? getRowColor : "#ffffff";
                    }}
                  >
                    <Td w="100%" h="2vh">
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Box
                          w="90%"
                          display={"flex"}
                          alignItems={"center"}
                          // justifyContent={"space-between"}
                        >
                          <Box
                            w="60%"
                            display={"flex"}
                            alignItems={"center"}
                            // justifyContent={"space-between"}
                          >
                            <Box>{data.name}</Box>
                          </Box>
                          <Box w="20%" gap="3" display={"flex"}>
                            <Text>Quantidade:</Text>
                            <Text>{data.amount}</Text>
                          </Box>
                          <Box
                            w="20%"
                            display={"flex"}
                            // justifyContent={"space-between"}
                          >
                            <Box w="50%" gap="3" display={"flex"}>
                              <Text>Preço:</Text>
                              <Text>{data.price}</Text>
                            </Box>
                            <Box w="50%" gap="3" display={"flex"}>
                              <Text>Ultimo Preço:</Text>
                              <Text>{data.current}</Text>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          w="20%"
                          display={"flex"}
                          justifyContent={"space-between"}
                        >
                          <Box />
                          <Box display={"flex"} gap="1">
                            <Box>
                              <Button
                                w="20px"
                                h="30px"
                                bg={"AMAR.30"}
                                borderRadius="10px"
                                onClick={() => {
                                  onOpenEditProducts();
                                }}
                                _hover={{
                                  bg: "AMAR.40",
                                }}
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
                            <Box>
                              <Button
                                w="20px"
                                h="30px"
                                bg={"VERM.30"}
                                borderRadius="10px"
                                onClick={() => {
                                  onOpenDeleteProducts();
                                }}
                                _hover={{
                                  bg: "VERM.10",
                                }}
                              >
                                <Icon
                                  as={MdDelete}
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
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <ModuleAddProducts
        openModal={isOpenAddProducts}
        closeModal={onCloseAddProducts}
      />
      <ModuleEditProducts
        openModal={isOpenEditProducts}
        closeModal={onCloseEditProducts}
      />
      <ModuleDeleteProducts
        openModal={isOpenDeleteProducts}
        closeModal={onCloseDeleteProducts}
      />
    </>
  );
};

export default MainHome;
