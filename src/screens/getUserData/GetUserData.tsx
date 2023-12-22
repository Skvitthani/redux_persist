import React from 'react';
import {RootState, flatListItem} from '..';
import ButtonComp from '../../components/ButtonComp';
import {useDispatch, useSelector} from 'react-redux';
import {DELETE_DATA} from '../../redux/types/Actiontype';
import {DealerNavigNavigationType} from '../../navigation';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type AddUserDataScreen = NativeStackScreenProps<
  DealerNavigNavigationType,
  'GetUserData'
> & {
  navigation: () => void;
};

const GetUserData: React.FC<AddUserDataScreen> = ({navigation}) => {
  const dispatch = useDispatch();
  const Userdata = useSelector((state: RootState) => state?.user?.UserData);
  const renderItem = ({item}: {item: flatListItem}) => {
    return (
      <View style={styles.renderItemView}>
        <Text style={styles.textStyle}>{`Name:${item?.name}`}</Text>
        <Text style={styles.textStyle}>{`City:${item?.city}`}</Text>
        <Text style={styles.textStyle}>{`Age:${item?.age}`}</Text>
      </View>
    );
  };
  const onDeleteDataPress = () => {
    dispatch({
      type: DELETE_DATA,
    });
    navigation.goBack();
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.noDataText}>No Data Found</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        // testID="List_Data_FlatList"
        contentContainerStyle={{flex: 1}}
        data={Userdata}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
      <View style={styles.buttonView}>
        <ButtonComp
          buttonCompTestCase="delete_data_button"
          onPress={onDeleteDataPress}
          title="Delete Data"
        />
      </View>
    </View>
  );
};

export default GetUserData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  renderItemView: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1B4242',
  },
  textStyle: {
    color: 'white',
  },
  buttonView: {
    marginBottom: 50,
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
