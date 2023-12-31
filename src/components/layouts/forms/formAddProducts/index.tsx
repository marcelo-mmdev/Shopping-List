import { ProductsService } from "@/core/services/api/products/ProductsService";
import { Box, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";

const FormAddProducts = () => {
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const handleInputProduto = (e: any) => setProduto(e.target.value);
  const handleInputPreco = (e: any) => setPreco(e.target.value);
  const handleInputQuantidade = (e: any) => setQuantidade(e.target.value);

  // Criar produto na API

  // ProductsService.create({ name: produto, price: preco }).then((result) => {
  //   if (result instanceof ApiException) {
  //     alert(result.message);
  //   } else {
  //     setProduto(result);
  //   }
  // });

  return (
    <>
      <Box>
        <FormControl>
          <FormLabel color={"CINZ.60"}>Produto</FormLabel>
          <Input
            type="text"
            variant="flushed"
            value={produto}
            onChange={handleInputProduto}
          />
        </FormControl>
      </Box>
      <Box display={"flex"} gap="3" mt="20px">
        <Box>
          <FormControl>
            <FormLabel color={"CINZ.60"}>Preço</FormLabel>
            <Input type="number" value={preco} onChange={handleInputPreco} />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel color={"CINZ.60"}>Q. em casa</FormLabel>
            <Input
              type="number"
              value={quantidade}
              onChange={handleInputQuantidade}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel color={"CINZ.60"}>Q. para compra</FormLabel>
            <Input
              type="number"
              value={quantidade}
              onChange={handleInputQuantidade}
            />
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default FormAddProducts;
