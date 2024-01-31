import React from "react";
import { FlatList } from "react-native";
import { ProductContainer } from "../ProductContainer";
import { Container } from "./styles";
import { DATA } from "~/utils/data";
import { Separator } from "../Separator";

export const ProductsFlatlist: React.FC = () => {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        numColumns={2}
        ItemSeparatorComponent={() => <Separator width={10} />}
        renderItem={({ item }) => (
          <ProductContainer imagem={item.imagem} titulo={item.titulo} />
        )}
      />
    </Container>
  );
};
