import Toast, { ToastConfig } from "react-native-toast-message";
import ToastComponent from "./ToastComponent";

const toastConfig: ToastConfig = {
  custom: ({ text1 }) => <ToastComponent message={text1 || ''} />
}

export default function ToastService() {
  return (
    <Toast config={toastConfig} />
  );
}

export const showToast = (message: string) => {
  Toast.show({
    type: 'custom',
    text1: message,
    position: 'bottom',
  })
}