import React, { useState } from "react";
import { TextInput, View, Text, Pressable, Keyboard, TouchableOpacity, Vibration } from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errroMessage, setErrorMessage] = useState(null);

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        return setImc((weight / (heightFormat * heightFormat)).toFixed(2));
    }

    function verificationIMC() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo Obrigatório*");
        }
    }

    function validationIMC() {
        if (weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC("Seu IMC é igual: ");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);

        } else {
            verificationIMC()
            setImc(null);
            setTextButton("Calcular");
            setMessageIMC("Preencha o peso e altura");
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errroMessage}</Text>
                    <TextInput
                        style={styles.input}
                        value={height}
                        onChangeText={setHeight}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                    ></TextInput>
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errroMessage}</Text>
                    <TextInput
                        style={styles.input}
                        value={weight}
                        onChangeText={setWeight}
                        placeholder="Ex. 75.67"
                        keyboardType="numeric"
                    ></TextInput>

                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationIMC();
                            Keyboard.dismiss();
                        }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>

                </Pressable>
                :
                <View style={styles.exibitionResultImc}>
                    <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />

                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationIMC();
                            Keyboard.dismiss();
                        }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    );
}