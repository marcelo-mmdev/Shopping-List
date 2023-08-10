import { Box, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";

const FormAddProducts = () => {
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const handleInputProduto = (e: any) => setProduto(e.target.value);
  const handleInputPreco = (e: any) => setPreco(e.target.value);
  const handleInputQuantidade = (e: any) => setQuantidade(e.target.value);

  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>Produto</FormLabel>
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
            <FormLabel>Preço</FormLabel>
            <Input type="number" value={preco} onChange={handleInputPreco} />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Quantidade</FormLabel>
            <Input
              type="number"
              value={quantidade}
              onChange={handleInputQuantidade}
            />
            {/* <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select> */}
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default FormAddProducts;
