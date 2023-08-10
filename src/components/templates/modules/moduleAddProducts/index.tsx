import FormAddProducts from "@/components/layouts/forms/formAddProducts";
import {
  Box,
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdClose, MdCheck } from "react-icons/md";

interface Props {
  openModal: boolean;
  closeModal: () => void;
}

const ModuleAddProducts = ({ openModal, closeModal }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={openModal} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormAddProducts />
          </ModalBody>

          <ModalFooter gap="4">
            <Button
              w="60px"
              h="40px"
              bg={"VERM.30"}
              borderRadius="10px"
              onClick={onClose}
            >
              <Icon
                as={MdClose}
                w="20px"
                h="20px"
                display="center"
                alignItems="center"
                justifyContent="center"
              />
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
            <Button
              w="120px"
              h="40px"
              bg={"VERD.40"}
              borderRadius="10px"
              onClick={onClose}
            >
              <Icon
                as={MdCheck}
                w="20px"
                h="20px"
                display="center"
                alignItems="center"
                justifyContent="center"
              />
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModuleAddProducts;
