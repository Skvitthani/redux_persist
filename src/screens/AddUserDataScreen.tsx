import {useDispatch} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {userData} from '../redux/actios/Action';
import React, {useEffect, useState} from 'react';
import ButtonComp from '../components/ButtonComp';
import InputTextComp from '../components/InputTextComp';
import {DealerNavigNavigationType} from '../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  TestIds,
  BannerAd,
  RewardedAd,
  AdEventType,
  BannerAdSize,
  InterstitialAd,
  RewardedAdEventType,
} from 'react-native-google-mobile-ads';

type AddUserDataScreen = NativeStackScreenProps<
  DealerNavigNavigationType,
  'AddUserDataScreen'
> & {
  navigation: () => void;
};

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const InterstitialAdID = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(InterstitialAdID, {
  keywords: ['fashion', 'clothing'],
});

const RewardedAdID = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const rewarded = RewardedAd.createForAdRequest(RewardedAdID, {
  keywords: ['fashion', 'clothing'],
});

const AddUserDataScreen: React.FC<AddUserDataScreen> = ({navigation}) => {
  const dispatch = useDispatch();
  const [age, setAge] = useState<string | number>('');
  const [city, setCity] = useState<string | number>('');
  const [name, setName] = useState<string | number>('');
  const [interstitialLoaded, setInterstitialLoaded] = useState(false);
  const [rewardedLoaded, setRewardedLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setInterstitialLoaded(true);
      },
    );
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setRewardedLoaded(true);
      },
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {},
    );
    rewarded.load();
    interstitial.load();
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
      unsubscribe();
    };
  }, []);

  if (!rewardedLoaded) {
    return null;
  }

  if (!interstitialLoaded) {
    return null;
  }

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
      <BannerAd
        unitId={adUnitId as string}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
      <InputTextComp
        value={name}
        placeholder="Enter Name"
        inputStyle={styles.inputStyle}
        onChangeText={(txt: string | number) => setName(txt)}
      />
      <InputTextComp
        value={age}
        placeholder="Enter Age"
        inputStyle={styles.inputStyle}
        onChangeText={(txt: string | number) => setAge(txt)}
      />
      <InputTextComp
        value={city}
        placeholder="Enter City"
        inputStyle={styles.inputStyle}
        onChangeText={(txt: string | number) => setCity(txt)}
      />
      <View style={styles.buttonView}>
        <ButtonComp onPress={onAddPress} title="Add" />
      </View>
      <View style={styles.buttonView}>
        <ButtonComp
          onPress={() => {
            navigation.navigate('GetUserData');
          }}
          title="Go to next screen"
        />
      </View>
      <View style={styles.buttonView}>
        <ButtonComp
          onPress={() => {
            interstitial.show();
          }}
          title="Show Interstitial"
        />
      </View>
      <View style={styles.buttonView}>
        <ButtonComp
          onPress={() => {
            rewarded.show();
          }}
          title="Show Rewarded Ad"
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
