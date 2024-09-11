import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import InventoryItem from "./InventoryItem.jsx";
import { sendInventory } from "../../redux/slices/inputs/inventorySlice.js";

export default function Inventory() {
  const inventory = useSelector((state) => state.inventory);

  const dispatch = useDispatch()
  const sendFotos = () => {
    dispatch(sendInventory());
  }

  return (
    <View className="w-full h-auto justify-center items-center gap-y-5 pt-8 pb-8">

      <TextInput className="w-11/12 h-16 border-2 rounded-3xl px-3 py-1 my-4 text-2xl" placeholder="Dirección" />

      {inventory?.map((item) => (
        <InventoryItem
          key={item.name}
          name={item.name}
          status={item.status}
          fotos={item.fotos}
          videos={item.videos}
          detalles={item.detalles}
        />
      ))}

      <Pressable onPress={sendFotos}>
        <View className="w-11/12 h-14 bg-alnago-2 rounded-2xl border-2 border-alnago-1 justify-center items-center">
          <Text className="w-full text-alnago-1 text-3xl mx-5">
            Finalizar inventario
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
