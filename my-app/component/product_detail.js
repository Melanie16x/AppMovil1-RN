import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../style/catalogo.js';
import products from './../products';

export default function ProductDetail({ route }) {

  const { productId } = route.params;
  
  const selectedProduct = products.find(product => product.id === productId);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalle del producto</Text>
      <View>
        <View>
          <Image source={selectedProduct.image} style={styles.imageProductDetail} />
        </View>
        <View>
          <Text style={styles.price}>{selectedProduct.price}</Text>
          <Text style={styles.dues}>{selectedProduct.dues}</Text>
        </View>
        <View style={styles.detail}>
          <Text>{selectedProduct.detail}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
