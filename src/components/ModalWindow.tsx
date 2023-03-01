import { Box, Modal, styled } from "@mui/material";
import React from "react";
import CreateProduct from "./CreateProduct";

interface ICangeModalWindow {
  openModal: boolean;
  closeModal: () => void;
}
const ModalWindow: React.FC<ICangeModalWindow> = ({
  openModal,
  closeModal,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid lightBlue",
    boxShadow: 24,
    pt: 3,
    px: 4,
    pb: 3,
  };

  return (
    <Modal open={openModal}>
      <Box sx={{ ...style, width: 400 }}>
        <CreateProduct closeModal={closeModal} />
      </Box>
    </Modal>
  );
};

export default ModalWindow;
