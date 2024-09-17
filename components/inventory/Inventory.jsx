import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import InventoryItem from "./InventoryItem.jsx";
import { sendInventory, reset } from "../../redux/slices/inputs/inventorySlice.js";
import { useState } from "react";




export default function Inventory() {
  
  const inventory = useSelector((state) => state.inventory.inventario);
  const completo = useSelector((state) => state.inventory.complete);
  const [direccion, setDireccion ] = useState('')
  const dispatch = useDispatch();
  
  const sendFotos = () => {
     try{
      dispatch(sendInventory({direccion}));
     }catch(error){
       Alert.alert("Error al enviar el inventario", error.message);
     }finally{
       dispatch(reset());
       Alert.alert("Inventario enviado exitosamente");
       setDireccion('');
     }
  };
  
  const validacion = () => {
    Alert.alert("Debe ingresar una dirección valida y tomar fotos en cada zona para poder enviar el inventario");
  };

  return (
    <View className="w-full h-auto justify-center items-center gap-y-5 pt-8 pb-8">
      <TextInput
        className="w-11/12 h-16 border-2 rounded-3xl px-3 py-1 my-4 text-2xl"
        placeholder="Dirección"
        onChangeText={setDireccion}
        value={direccion}
      />

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


      <Pressable onPress={ (completo && direccion != "" ) ? sendFotos : validacion}>
        <View className={ (completo && direccion != "" ) ? "w-11/12 h-14 bg-alnago-2 rounded-2xl border-2 border-alnago-1 justify-center items-center" : "w-11/12 h-14 bg-stone-500 rounded-2xl border-2 border-red-400 justify-center items-center"}>
          <Text
            className={ (completo && direccion != "" ) ? "w-full text-alnago-1 text-3xl mx-5" : "w-full text-red-400 text-3xl mx-5" } >
            Finalizar inventario
          </Text>
        </View>
      </Pressable>
      
    </View>
  );
}
