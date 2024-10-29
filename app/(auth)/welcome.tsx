import { Text, TouchableOpacity, View, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState, useEffect } from "react";
import { images, onboarding } from "@/app/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

    return () => {
      opacity.setValue(0);
      translateY.setValue(50);
    };
  }, [activeIndex]);

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-blue-300">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JarkartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => {
          setActiveIndex(index);
          opacity.setValue(0);
          translateY.setValue(50);
        }}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Animated.Image
              source={item.image}
              style={{
                width: "100%",
                height: 300,
                opacity,
                transform: [{ translateY }],
              }}
              resizeMode="contain"
            />

            <Animated.View
              style={{
                opacity,
                transform: [{ translateY }],
                marginTop: 10,
              }}
            >
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity,
                transform: [{ translateY }],
                marginTop: 5,
              }}
            >
              <Text className="text-lg font-JarkartaSemiBold text-center text-[#858585] mx-10 mt-3">
                {item.description}
              </Text>
            </Animated.View>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
