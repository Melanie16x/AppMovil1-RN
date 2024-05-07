import React, { useState } from 'react';
import { Text, View, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../style/catalogo.js';
import products from '../products.js';

export default function Home({ navigation }) {

  const [data] = useState(products)

  const handleProductPress = (productId) => {
    navigation.navigate('Product_detail', { productId: productId });
  };

  const showProducts = ({ item }) => {
    return (
      <View style={styles.productGrid}>
        <View key={item.id} style={styles.cardRow}>
          <TouchableOpacity onPress={() => handleProductPress(item.id)} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
      <View style={styles.buttonContainer}>
        <Button title='Contactos' onPress={() => navigation.navigate('Contactos')} />
      </View>
      <FlatList
        data={data}
        renderItem={showProducts}
      />
    </View>
  );
}

