import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";


export default function ResultIMC(props){

    const onShare = async () => {
        const result = await Share.share({
            message:`Meu IMC hoje é: ${props.resultIMC}` 
        });
        
    }

    return(
        <View style={styles.contextImc}>
        <View style={styles.boxShareButton}>
            {props.resultIMC != null ?
            <TouchableOpacity 
            style={styles.shared}
            onPress={onShare}
            >
                <Text style={styles.sharedText}>Share</Text>
            </TouchableOpacity>
            :
            <View/>
            }
        </View>
            <Text style={styles.titleResultImc}>{props.messageResultIMC}</Text>
            <Text style={styles.resultImc}>{props.resultIMC}</Text>
        </View>
    );

}