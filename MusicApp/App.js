import { StyleSheet, View , FlatList } from 'react-native';
import React , {useState} from 'react';
import music_data from './src/music-data.json';

import SongCard from './src/components/SongCard';
import SearchBar from './src/components/SearchBar';

export default function App() {
  
  const [list,setList]= useState(music_data);

  const renderSong = ({item}) => <SongCard song ={item} />

  const renderSeperator = () => <View style={styles.seperator} />

  const handleSearch = text => {
    console.log('Search text:', text);
    const filteredList = music_data.filter(song => {
    const searchedText= text.toLowerCase();
    const currentTitle= song.title.toLowerCase();

      // return currentTitle.includes(searchedText); // veya 
      return currentTitle.indexOf(searchedText) > -1; //
    });

    setList(filteredList);
    console.log('Filtered List:', list);
  };

  return (
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList 
        keyExtractor={(item)=> item.id} // bu örnekte id olduğu için keyExtractor kullanmaya gerek yoktu ama id yerine başka bir kelime kullanılırsa keyExtractor ile belirtmek gerekir.
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator} // her bir item arasında ayraç yani çizgilerle ayrılmış bir şekilde göstermek için kullandık.
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator:{
    borderWidth:1,
    borderColor:"#e0e0e0",
  },

});
