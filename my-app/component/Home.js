import React, { useEffect, useState } from 'react';
import { Text, View, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../style/catalogo.js';

export default function Home({ navigation }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      const filteredProducts = data.filter(product => ![5, 6, 7, 8, 10, 11, 13].includes(product.id));
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error buscando los productos: ', error);
    }
  }

  const sendId = (productId) => {
    navigation.navigate('Product_detail', { productId });
  }

  const showProducts = ({ item }) => {
    return (
        <View key={item.id} style={styles.cardRow}>
          <TouchableOpacity style={styles.card} onPress={() => sendId(item.id)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style>{item.category}</Text>
          </TouchableOpacity>
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
        data={products}
        renderItem={showProducts}
        keyExtractor={(item) => item.id.toString()
        }
      />
    </View>
  );
}

