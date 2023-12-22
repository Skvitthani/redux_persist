import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {userData} from '../../redux/actios/Action';
import ButtonComp from '../../components/ButtonComp';
import InputTextComp from '../../components/InputTextComp';
import {DealerNavigNavigationType} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type AddUserDataScreen = NativeStackScreenProps<
  DealerNavigNavigationType,
  'AddUserDataScreen'
> & {
  navigation: () => void;
};

const AddUserDataScreen: React.FC<AddUserDataScreen> = ({navigation}) => {
  const dispatch = useDispatch();
  const [age, setAge] = useState<string | number>('');
  const [city, setCity] = useState<string | number>('');
  const [name, setName] = useState<string | number>('');

  const onAddPress = () => {
    let userDetails = {
      age: age,
      name: name,
      city: city,
    };
    dispatch(userData(userDetails));
    setAge('');
    setName('');
    setCity('');
  };

  return (
    <View style={styles.container}>
      <InputTextComp
        inputTestID="name_text_input"
        value={name}
        placeholder="Enter Name"
        inputStyle={styles.inputStyle}
        onChangeText={(txt: string | number) => setName(txt)}
      />
      <InputTextComp
        inputTestID="age_text_input"
        value={age}
        placeholder="Enter Age"
        inputStyle={styles.inputStyle}
        onChangeText={(txt: string | number) => setAge(txt)}
      />
      <InputTextComp
        inputTestID="city_text_input"
        value={city}
        placeholder="Enter City"
        inputStyle={styles.inputStyle}
        onChangeText={(txt: string | number) => setCity(txt)}
      />
      <View style={styles.buttonView}>
        <ButtonComp
          buttonCompTestCase="add_user_data"
          onPress={onAddPress}
          title="Add"
        />
      </View>
      <View style={styles.buttonView}>
        <ButtonComp
          buttonCompTestCase="get_user_data"
          onPress={() => {
            navigation.navigate('GetUserData');
          }}
          title="Go to next screen"
        />
      </View>
    </View>
  );
};

export default AddUserDataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A4D39',
  },
  inputStyle: {
    padding: 10,
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    marginHorizontal: 10,
  },
  buttonView: {
    marginTop: 20,
  },
});
