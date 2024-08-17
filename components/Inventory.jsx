import { Pressable, Text, TextInput, View } from "react-native";
import {
  CameraIcon,
  CheckGreenIcon,
  CheckRedIcon,
  DownArrowIcon,
  VideoIcon,
} from "./Icons";
import Photo from "./Photos";
import Videos from "./Videos";

export default function Inventory() {
  return (
    <View className="w-full h-auto justify-center items-center gap-y-5 pt-5 pb-8">
      <View className="w-11/12 h-auto border-2 rounded-3xl border-alnago-1">
        <View className="w-full h-16 bg-alnago-1 rounded-2xl">
          <Pressable>
            <View className="flex-row w-full h-full justify-between items-center px-5">
              <DownArrowIcon />
              <Text className="text-2xl text-alnago-2">PUERTA PRINCIPAL</Text>
              <CheckGreenIcon />
            </View>
          </Pressable>
        </View>

        <View aria-hidden className="py-4 gap-4">
          <View className="flex-row justify-around">
            <Photo />
          </View>
          <View className="flex-row justify-around">
            <Videos />
          </View>
          <View className="justify-center items-center">
            <TextInput
              editable
              multiline
              numberOfLines={3}
              maxLength={500}
              placeholder="Detalles"
              className="w-11/12 max-h-40 border-2 rounded-2xl p-2"
            />
          </View>
        </View>
      </View>

      <View className="w-11/12 h-auto border-2 rounded-3xl border-alnago-1">
        <View className="w-full h-16 bg-alnago-1 rounded-2xl">
          <Pressable>
            <View className="flex-row w-full h-full justify-between items-center px-5">
              <DownArrowIcon />
              <Text className="text-2xl text-alnago-2">SALA</Text>
              <CheckRedIcon />
            </View>
          </Pressable>
        </View>

        <View className="py-4 gap-4">
          <View className="flex-row justify-around">
            <TextInput
              placeholder="Fotos"
              className="w-5/6 border-2 rounded-2xl px-2"
            />
            <CameraIcon />
          </View>
          <View className="flex-row justify-around">
            <TextInput
              placeholder="Videos"
              className="w-5/6 border-2 rounded-2xl px-2"
            />
            <Pressable>
              <VideoIcon />
            </Pressable>
          </View>
          <View className="justify-center items-center">
            <TextInput
              editable
              multiline
              numberOfLines={3}
              maxLength={500}
              placeholder="Detalles"
              className="w-11/12 max-h-40 border-2 rounded-2xl p-2"
            />
          </View>
        </View>
      </View>

      <View className="w-11/12 h-auto border-2 rounded-3xl border-alnago-1">
        <View className="w-full h-16 bg-alnago-1 rounded-2xl">
          <Pressable>
            <View className="flex-row w-full h-full justify-between items-center px-5">
              <DownArrowIcon />
              <Text className="text-2xl text-alnago-2">COCINA</Text>
              <CheckRedIcon />
            </View>
          </Pressable>
        </View>

        <View className="py-4 gap-4">
          <View className="flex-row justify-around">
            <TextInput
              placeholder="Fotos"
              className="w-5/6 border-2 rounded-2xl px-2"
            />
            <CameraIcon />
          </View>
          <View className="flex-row justify-around">
            <TextInput
              placeholder="Videos"
              className="w-5/6 border-2 rounded-2xl px-2"
            />
            <Pressable>
              <VideoIcon />
            </Pressable>
          </View>
          <View className="justify-center items-center">
            <TextInput
              editable
              multiline
              numberOfLines={3}
              maxLength={500}
              placeholder="Detalles"
              className="w-11/12 max-h-40 border-2 rounded-2xl p-2"
            />
          </View>
        </View>
      </View>

      <View className="w-11/12 h-auto border-2 rounded-3xl border-alnago-1">
        <View className="w-full h-16 bg-alnago-1 rounded-2xl">
          <Pressable>
            <View className="flex-row w-full h-full justify-between items-center px-5">
              <DownArrowIcon />
              <Text className="text-2xl text-alnago-2">BAÑO</Text>
              <CheckRedIcon />
            </View>
          </Pressable>
        </View>

        <View className="py-4 gap-4">
          <View className="flex-row justify-around">
            <TextInput
              placeholder="Fotos"
              className="w-5/6 border-2 rounded-2xl px-2"
            />
            <CameraIcon />
          </View>
          <View className="flex-row justify-around">
            <TextInput
              placeholder="Videos"
              className="w-5/6 border-2 rounded-2xl px-2"
            />
            <Pressable>
              <VideoIcon />
            </Pressable>
          </View>
          <View className="justify-center items-center">
            <TextInput
              editable
              multiline
              numberOfLines={3}
              maxLength={500}
              placeholder="Detalles"
              className="w-11/12 max-h-40 border-2 rounded-2xl p-2"
            />
          </View>
        </View>
      </View>

      <Pressable>
        <View className="w-10/12 h-12 bg-alnago-2 rounded-2xl border-2 justify-center items-center">
          <Text className="text-alnago-1 text-3xl mx-5">
            Finalizar inventario
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
