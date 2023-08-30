import { useRef, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [pass, setPass] = useState<string>("");

    const mostrarAlerta1 = (): void => {
        if (name.length <= 0) alert("O campo nome é necessário");
        else if (surname.length <= 0) alert("O campo sobrenome é necessário");
        else if (pass.length <= 0) alert("O campo senha é necessário");
        else alert("Logado!");
    };

    const mostrarAlerta2 = (): void => {
        alert("Não foi possível logar.");
    };

    return (
        <View style={styles.main}>
            <View style={styles.titleContainer}>
                <Text style={[styles.text, styles.title]}>Tarefa 1</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.tosContainer}>
                    <Text style={[styles.text, styles.p]}>
                        I'd just like to interject for a moment.
                    </Text>

                    <Text style={[styles.text, styles.p]}>
                        What you’re referring to as Linux, is in fact,
                        GNU/Linux,
                    </Text>

                    <Text style={[styles.text, styles.p]}>
                        or as I’ve recently taken to calling it, GNU plus Linux.
                    </Text>

                    <Text style={[styles.text, styles.p]}>
                        Linux is not an operating system unto itself,
                    </Text>

                    <Text style={[styles.text, styles.p]}>
                        but rather another free component of a fully functioning
                        GNU system made useful by the GNU corelibs,
                    </Text>

                    <Text style={[styles.text, styles.p]}>
                        shell utilities and vital system components comprising a
                        full OS as defined by POSIX.
                    </Text>

                    <Text style={[styles.text, styles.p]}>
                        Linux is normally used in combination with the GNU
                        operating system:
                    </Text>

                    <Text style={[styles.text, styles.p]}>
                        the whole system is basically GNU with Linux added, or
                        GNU/Linux.
                    </Text>

                    <Text style={[styles.text, styles.p]}>
                        All the so-called “Linux” distributions are really
                        distributions of GNU/Linux.
                    </Text>
                </View>

                <View style={styles.textBoxContainer}>
                    <TextInput
                        placeholder="Coloque seu nome aqui"
                        style={[styles.textBox, styles.text]}
                        onChangeText={(t) => setName(t)}
                    />

                    <TextInput
                        placeholder="Coloque seu sobrenome aqui"
                        style={[styles.textBox, styles.text]}
                        onChangeText={(t) => setSurname(t)}
                    />

                    <TextInput
                        placeholder="Coloque sua senha do banco aqui"
                        style={[styles.textBox, styles.text]}
                        onChangeText={(t) => setPass(t)}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title="Concordar e Logar"
                        onPress={mostrarAlerta1}
                    />

                    <Button title="Discordar" onPress={mostrarAlerta2} />
                </View>
            </View>
        </View>
    );
}

const styles: StyleSheet.NamedStyles<any> = StyleSheet.create({
    main: {
        flex: 1,
        padding: 24,
        backgroundColor: "#24273a",
        alignItems: "center",
        // justifyContent: "center",
    },

    text: {
        color: "#cad3f5",
        fontSize: 14,
    },

    title: {
        marginTop: 16,
        fontSize: 24,
        textAlign: "center",
    },

    titleContainer: {
        flex: 1,
        borderRadius: 16,
        marginBottom: 16,
        backgroundColor: "#181926",
        width: "100%",
    },

    tosContainer: {
        flex: 2,
        width: "100%",
    },

    contentContainer: {
        flex: 12,
        width: "100%",
        gap: 16,
    },

    p: {
        marginBottom: 12,
    },

    textBox: {
        borderRadius: 16,
        height: 45,
        fontSize: 16,
        padding: 10,
        backgroundColor: "#1e2030",
    },

    textBoxContainer: {
        flex: 0.85,
        gap: 10,
    },

    button: {
        flex: 0.5,
        width: 256,
        margin: "auto",
        gap: 12,
    },
});
