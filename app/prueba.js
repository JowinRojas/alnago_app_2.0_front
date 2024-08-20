
import { Pressable, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { mandarSomething } from "../redux/slices/imagenes/imagenesFetch";

export default function Prueba() {

    const llegoEsto = useSelector( state => state.imagenes.imagen);

    const dispatch = useDispatch();
    const mandar = ()=>{
      dispatch(mandarSomething())
    }

  return (
    <View className="flex-1 bg-alnago-1 justify-center items-center">  

          <Pressable onPress={mandar} className="flex-row justify-between items-center bg-alnago-2 rounded-md px-4">
            <Text className="text-alnago-1 text-2xl p-1">Mandar Algo</Text>
          </Pressable>

          <Text className="text-alnago-1 text-2xl p-1">{llegoEsto}</Text>
    </View>
  );
}
