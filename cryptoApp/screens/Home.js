import React, {useState} from 'react'
import {View, Text, SafeAreaView, FlatList} from 'react-native'

//constants
import {COLORS, NFTData} from '../constants'

//components
import { HomeHeader, FocusedStatusBar, NFTCard } from '../components'

 const Home = () => {

  const [nftData, setnftData] = useState(NFTData);
  const [noDataFound, setnoDataFound] = useState(false)
  
  const handleSearch = (value) => {

    // return all the NFT-Data if there is nothing in the input field
    if( !value.length ) return setnftData(NFTData)

    // return only searched NFT-Data through input 
     const filteredData = NFTData.filter( (item) => 
     item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) 
     )

     if(filteredData.length) {
      setnftData(filteredData);
      setnoDataFound(false)
     }else{
      setnoDataFound(true)
     }
  }

  return (

    <SafeAreaView style = { { flex: 1} }>
      <FocusedStatusBar backgroundColor={COLORS.primary}/>

      <View style = {{ flex:1 }}>
        <View style = {{ zIndex: 0 }}>
          
          <FlatList
            data={nftData}
            renderItem = {({item}) => <NFTCard data={item}/> }
            keyExtractor = {(item) => item.id}
            showsVerticalScrollIndicator = {false}
            ListHeaderComponent = {<HomeHeader onSearch={handleSearch} searchResult={noDataFound}/>}
          />
        </View>

        {/* background view  */}
        <View
          style={{
            position:'absolute',
            top:0,
            bottom:0,
            right:0,
            left:0,
            zIndex:-1,
          }}
        >
          <View style={{ height: 300, backgroundColor:COLORS.primary}}/>
          <View style={{ flex: 1, backgroundColor:COLORS.white}}/>
        </View>

      </View>

    </SafeAreaView>

  )
}

export default Home;