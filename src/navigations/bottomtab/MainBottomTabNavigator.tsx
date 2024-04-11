import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import {bottomtabNavigations} from '../../constants/navigations';
import HomeScreen from '../../screens/bottomtab/HomeScreen';
import StoreScreen from '../../screens/bottomtab/StoreScreen';
import ProductScreen from '../../screens/bottomtab/ProductScreen';
import MypageScreen from '../../screens/bottomtab/MypageScreen';
import ReviewScreen from '../../screens/bottomtab/ReviewScreen';
import useAuth from '../../hooks/queries/useAuth';
import {removeHeader} from '../../utils/header';

export type MainBottomTabParamList = {
  [bottomtabNavigations.HOME]: undefined;
  [bottomtabNavigations.STORE]: undefined;
  [bottomtabNavigations.PRODUCT]: undefined;
  [bottomtabNavigations.REVIEW]: undefined;
  [bottomtabNavigations.MYPAGE]: undefined;
};

const Tab = createBottomTabNavigator();

function MainBottomTabNavigator() {
  // const {logoutMutation} = useAuth();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={bottomtabNavigations.HOME}
        component={HomeScreen}
        options={{title: '홈화면'}}
      />
      <Tab.Screen
        name={bottomtabNavigations.STORE}
        component={StoreScreen}
        options={{title: '상점'}}
      />
      <Tab.Screen
        name={bottomtabNavigations.PRODUCT}
        component={ProductScreen}
        options={{title: '제품'}}
      />
      <Tab.Screen
        name={bottomtabNavigations.REVIEW}
        component={ReviewScreen}
        options={{title: '리뷰'}}
      />
      <Tab.Screen
        name={bottomtabNavigations.MYPAGE}
        component={MypageScreen}
        options={{title: '마이페이지'}}
      />
    </Tab.Navigator>
    // {/* <Button title="로그아웃" onPress={() => logoutMutation.mutate(null)} /> */}
  );
}

const styles = StyleSheet.create({
  tabcontainer: {},
});

export default MainBottomTabNavigator;
