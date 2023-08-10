import { Grid, GridItem } from "@chakra-ui/react";
import HeaderHome from "@/components/layouts/headerHome";
import NavbarHome from "@/components/layouts/navbarHome";
import MainHome from "@/components/layouts/mainHome";
import FooterHome from "@/components/layouts/footerHome";

// import styles from "@/styles/Home.module.css";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Grid
        templateAreas={`"header header""nav main""nav footer"`}
        gridTemplateRows={"80px 1fr 50px"}
        gridTemplateColumns={"200px 1fr"}
        h="100vh"
        // gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="AZUL.20" area={"header"}>
          <HeaderHome />
        </GridItem>
        <GridItem pl="2" bg="CINZ.60" area={"nav"}>
          <NavbarHome />
        </GridItem>
        <GridItem bg="BRPR.10" area={"main"}>
          {/* Main */}
          <MainHome />
        </GridItem>
        <GridItem pl="2" bg="VERM.30" area={"footer"}>
          {/* Footer */}
          <FooterHome />
        </GridItem>
      </Grid>
    </>
  );
}
