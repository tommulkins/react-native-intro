import React, { useState, useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const allPalettes = await result.json();
    if (result.ok) {
      setPalettes(allPalettes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setIsRefreshing(false);
  }, [handleFetchPalettes]);

  useEffect(() => {
    handleFetchPalettes();
  }, [handleFetchPalettes]);

  return (
    <FlatList
      data={palettes}
      keyExtractor={item => `palettes-${item.id}`}
      renderItem={({ item }) => (
        <PalettePreview palette={item} navigation={navigation} />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};

export default Home;
