
import { View } from "react-native";
import PruebaComponent from "../components/PruebaComponent";
import CamaraPrueba from '../components/CamaraPrueba'

export default function Prueba() {

  return (
      <View className="flex-1 bg-alnago-1 justify-center items-center">  
            <PruebaComponent/>

            <CamaraPrueba/>
      </View>
    
  );
}
