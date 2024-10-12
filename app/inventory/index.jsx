import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../redux/slices/login/loginController";
import Inventory from "../../components/inventory/Inventory";

export default function InventoryHome() {
  const router = useRouter();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.loginStatus.status);

  useEffect(() => {
    dispatch(checkLogin());
    if (status == "offline") {
      router.push("/");
    }
  }, [status]);

  return (
    <View className="w-full min-h-full justify-center items-center">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full"
      >
        <Inventory />
      </ScrollView>
    </View>
  );
}
