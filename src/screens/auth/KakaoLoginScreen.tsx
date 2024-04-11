import axios from 'axios';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import useAuth from '../../hooks/queries/useAuth';
import Config from 'react-native-config';

const REDIRECT_URI = `http://10.0.2.2:3030/auth/oauth/kakao`;

function KakaoLoginScreen() {
  const {kakoLoginMutation} = useAuth();
  const handleOnMessage = (event: WebViewMessageEvent) => {
    if (event.nativeEvent.url.includes(`${REDIRECT_URI}?code=`)) {
      const code = event.nativeEvent.url.replace(`${REDIRECT_URI}?code=`, '');

      requestToken(code);
    }
  };

  const requestToken = async (code: string) => {
    const response = await axios({
      method: 'post',
      url: 'https://kauth.kakao.com/oauth/token',
      params: {
        grant_type: 'authorization_code',
        client_id: Config.KAKAO_REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code,
      },
    });
    console.log('response.data', response.data);
    kakoLoginMutation.mutate(response.data.access_token);
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Config.KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        onMessage={handleOnMessage}
        injectedJavaScript={"window.ReactNativeWebView.postMessage('')"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KakaoLoginScreen;
