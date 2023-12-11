import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';


export default function GoogleMapView() {
  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} showsUserLocation={true}  style={styles.map}
      >
      </MapView>
      <Marker
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        title="Marker Title"
        description="Marker Description"
      />
        {/* <Text>This is a simple map showing user location</Text>         */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:15,
      
    },
    map: {
      width: Dimensions.get('screen').width * 0.90,
      height: Dimensions.get('screen').height * 0.26,
      alignSelf: "center",
          
    },
  });