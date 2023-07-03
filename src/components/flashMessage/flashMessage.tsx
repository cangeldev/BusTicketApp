import { showMessage } from "react-native-flash-message"
import colors from 'assets/colors/colors';

export default function FlashMessage(message: string) {
    return (
        showMessage({
            message: message,
            type: "warning",
            color: colors.white,
            backgroundColor: colors.buttonBackground,
            style: { alignItems: "center" }
        })
    )
}