import auth from '@react-native-firebase/auth';
import FlashMessage from 'components/flashMessage/flashMessage';

export const handleCreated = (email: string, password: string, checkPassword: string, navigation: any): void => {
    if (!email || !password) {
        FlashMessage("Email veya şifre boş geçilemez!")
        return;
    }
    if (checkPassword !== password) {
        FlashMessage("Şifreleriniz Uyuşmuyor!")
        return;
    }

    auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            FlashMessage("Kaydınız Başarıyla oluşturuldu.")
            navigation.navigate("LoginPage")
            auth().signOut();
        })
        .catch((err) => {
            console.log(err.code)
            if (err.code == "auth/invalid-email") {
                FlashMessage("Lütfen geçerli bir e-posta giriniz!")
                return;
            }
            if (err.code == "auth/weak-password") {
                FlashMessage("Şifreniz en az 6 karakter olmalıdır!")
                return;
            }
        });
}

export const handleLogin = (mail: string, password: string, navigation: any): void => {

    if (!mail || !password) {
        FlashMessage("Email veya şifre boş geçilemez!")
        return;
    }
    auth().signInWithEmailAndPassword(mail, password)
        .then(() => {
            FlashMessage("Giriş Başarılı")
            navigation.navigate("HomePage")
        })
        .catch((err) => {
            console.log(err)

            if (err.code == "auth/invalid-email") {
                FlashMessage("Lütfen geçerli bir e-posta girin!")

                return;
            }
            if (err.code == "auth/wrong-password") {
                FlashMessage("Şifre yanlış!")
                return;
            }
            if (err.code == "auth/user-not-found") {
                FlashMessage("Girdiğin e-posta bir hesaba bağlı değil!")
                return;
            }
        })
}

export const handleSignOut = (navigation: any): void => {

    auth()
        .signOut()
        .then(() => {
            console.log('User signed out!')
            navigation.navigate("LoginPage")
        });
}