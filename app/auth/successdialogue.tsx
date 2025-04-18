import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { useState } from 'react';
import { X } from 'lucide-react-native';

const ResetSuccessDialog = ({ visible, onClose, onContinue }: {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 justify-end bg-black/30">
        <View className="bg-white rounded-t-3xl px-6 pt-6 pb-10">
          {/* Close Button */}
          <TouchableOpacity
            onPress={onClose}
            className="absolute top-4 right-4 z-10 bg-gray-100 p-2 rounded-full"
          >
            <X size={20} color="#000" />
          </TouchableOpacity>

          {/* Image Placeholder */}
          <View className="w-32 h-32 bg-gray-200 self-center rounded-xl mb-6" />

          {/* Title */}
          <Text className="text-center text-xl font-bold mb-2 text-black">
            Reset Successful
          </Text>

          {/* Subtitle */}
          <Text className="text-center text-gray-500 mb-6">
            Your password has been reset! You can now log in.
          </Text>

          {/* Continue Button */}
          <TouchableOpacity
            onPress={onContinue}
            className="bg-[#AEDF2E] py-4 rounded-full items-center"
          >
            <Text className="text-base font-medium text-gray-700">
              Login Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ResetSuccessDialog;
