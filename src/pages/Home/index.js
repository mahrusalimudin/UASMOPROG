import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/FIREBASE';
import Tampil from '../../components/EditTampil';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontaks: {},
      kontaksKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref('Kontak')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        this.setState({
          kontaks: kontakItem,
          kontaksKey: Object.keys(kontakItem),
        });
      });
  };

  removeData = id => {
    Alert.alert(
      'Info',
      'Anda yakin akan menghapus Data ?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            FIREBASE.database()
              .ref('Kontak/' + id)
              .remove();
            this.ambilData();
            Alert.alert('Hapus', 'Sukses Hapus Data');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {kontaks, kontaksKey} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>AddTours</Text>
          <View style={styles.garis} />
        </View>

        <View style={styles.listKontak}>
          {kontaksKey.length > 0 ? (
            kontaksKey.map(key => (
              <Tampil
                key={key}
                kontakItem={kontaks[key]}
                id={key}
                {...this.props}
                removeData={this.removeData}
              />
            ))
          ) : (
            <Text>Tidak Ada Daftar Wisata</Text>
          )}
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnTambah}
            onPress={() => this.props.navigation.navigate('Tambahkontak')}>
            <FontAwesomeIcon
              icon={faSearchLocation}
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFA500',
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: '#8FBC8F',
    borderRadius: 30,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
