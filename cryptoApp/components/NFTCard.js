import { View, Text,Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

//constants 
import {COLORS,SIZES,SHADOWS,assets } from '../constants'

//components
import { CircleButton, RectButton } from './Button'

import { SubInfo, EthPrice, NFTTitle } from './SubInfo'

const NFTCard = ({data}) => {

  const navigation = useNavigation();

  return (
    <View
    style = {{
      backgroundColor:COLORS.white,
      marginBottom:SIZES.extraLarge,
      borderRadius:SIZES.font,
      margin:SIZES.base,
      ...SHADOWS.dark
    }}
    >
      <View
      style = {{ width:'100%', height:250 }}>
        <Image
          source={data.image}
          resizeMode='cover'
          style={{
            height:'100%',
            width:'100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10}/>
        </View>
          <SubInfo />
        <View style={{ width:'100%', padding:SIZES.font }}>
          <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />

          <View
            style={{
              marginTop: SIZES.font,
              flexDirection: 'row',
              justifyContent:'space-between',
              alignItems: 'center'
            }}
          >
            <EthPrice price={data.price}/>
            <RectButton
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate("Details", {data})}
            />
          </View>
        </View>
      
      {/* <Text>{data.name}</Text> */}
    </View>
  )
}

export default NFTCard