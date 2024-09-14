import { Alert, Image, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  closeStatus,
  openStatus,
  deletePhoto,
} from "../../redux/slices/inputs/inventorySlice";
import Photos from "./Photos";
import {
  CheckGreenIcon,
  CheckRedIcon,
  DownArrowIcon,
  UpArrowIcon,
} from "../Icons";
import { Comment } from "./Comment";


const InventoryItem = ({ name, status, fotos, videos, detalles }) => {
  
  const dispatch = useDispatch();
  const abrir_cerrar = () => {
    status ? dispatch(closeStatus(name)) : dispatch(openStatus(name));
  };

  const deletefoto = (file) => {
    Alert.alert('Eliminar', '¿Eliminar la foto?',[
      {text: 'Si', onPress: () => dispatch(deletePhoto({file}))},
      {text: 'No',  style: 'cancel' },
     ]
    )
    
  };

  return (
    <View className="w-11/12 h-auto border rounded-3xl p-2 my-2">
      <Pressable onPress={abrir_cerrar}>
        <View className="w-full h-12 flex-row bg-alnago-1 px-2 rounded-2xl items-center justify-between">
          <View className="p-1">
            {status ? <UpArrowIcon /> : <DownArrowIcon />}
          </View>
          <Text className="text-2xl font-bold text-black">{name}</Text>
          <View>{fotos != "" ? <CheckGreenIcon /> : <CheckRedIcon />}</View>
        </View>
      </Pressable>

      {status ? (
        <View className="w-full">
          <View className="flex-row flex-wrap items-center justify-center">
            {fotos?.map((item) => (
              <Pressable
                key={item}
                onPress={() => {
                  deletefoto(item);
                }}
              >
                <Image
                  source={{ uri: item }}
                  className="w-20 h-20 object-cover rounded-3xl mx-1 my-3"
                />
              </Pressable>
            ))}
            <Photos name={name} />
          </View>

          {/* <View className="flex-row flex-wrap items-center justify-center">
            {videos?.map((item) => (
              <Image
                source={{ uri: item }}
                key={item}
                className="w-20 h-20 object-cover rounded-3xl mx-1 my-3"
              />
            ))}
            <Videos name={name} />
          </View> */}

          <View className='w-full flex items-center justify-center'>
            <Text className='text-xl'>Comentarios</Text>
            <Text className='text-base'>{detalles}</Text>

          </View>

          <Comment name={name}/>

        </View>

      ) : (
        <></>
      )}
    </View>
  );
};

export default InventoryItem;
