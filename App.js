import { StyleSheet, Text, View } from 'react-native';
import Image from './components/image';
import Button from './components/button';
import Button2 from './components/button2';


const profile = {
  name: 'Mifta Setya Pratama',
  kelas: 'XI RPL B',
  no: '20',
  foto: require('./assets/me.jpg')
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image imgsource={profile.foto} />
        <Text style={styles.text}> {profile.name}</Text>
        <Text style={styles.text}> {profile.kelas}</Text>
        <Text style={styles.text}> {profile.no}</Text>
      </View>
      <View style={styles.footerContainer}>
        <Button style={{ flex: 1 }} label={'Exit'} />
        <Button2 style={{ flex: 1 / 3 }} label={'Instagram'} url={"https://instagram.com/mftasty_"} />
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold'
  },
  A: {
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flex: 4,
  }
})