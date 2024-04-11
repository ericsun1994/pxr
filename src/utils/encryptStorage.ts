import EncryptedStorage from 'react-native-encrypted-storage';

const setEncrypStorage = async <T>(key: string, data: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};

const getEncrptsStorage = async (key: string) => {
  const storedData = await EncryptedStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : null;
};

const removeEncryptStorage = async (key: string) => {
  const data = await getEncrptsStorage(key);
  if (data) {
    await EncryptedStorage.removeItem(key);
  }
};

export {setEncrypStorage, getEncrptsStorage, removeEncryptStorage};
