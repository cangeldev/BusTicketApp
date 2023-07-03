import auth from '@react-native-firebase/auth';

export const handleCreated = (email: string, password: string, checkPassword: string, navigation: any): void => {
    if (!email || !password) {
        console.log("Email veya şifre boş geçilemez!");
        return;
    }
    if (checkPassword !== password) {
        console.log("Şifreleriniz Uyuşmuyor!");
        return;
    }
    auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log("Kaydınız Başarıyla oluşturuldu.");
            navigation.navigate("LoginPage")
            auth().signOut();
        })
        .catch((err) => {
            console.log(err.code);
        });
}

export const handleLogin = (mail: string, password: string, navigation: any): void => {

    if (!mail || !password) {
        console.log("Email veya şifre boş geçilemez!")
        return;
    }
    auth().signInWithEmailAndPassword(mail, password)
        .then(() => {
            navigation.navigate("HomePage")
        })
        .catch((err) => {
            console.log(err)
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