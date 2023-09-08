import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ imgsource }) {
    return (
        <Image source={imgsource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 220,
        height: 220,
        borderRadius: 200,
        marginBottom: 20
    },
});