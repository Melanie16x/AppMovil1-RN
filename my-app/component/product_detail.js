import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../style/catalogo.js';

export default function ProductDetail({ route }) {
  const { productId } = route.params;
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails(productId);
  }, [productId]);

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.error('Error obteniendo el detalle del producto: ', error);
    }
  };

  if (!selectedProduct) {
    return (
      <View style={styles.containerLoading}>
        <Text style={styles.loading}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalle del producto</Text>
      <View>
        <View>
          <Image source={{ uri: selectedProduct.image }} style={styles.imageProductDetail} />
        </View>
        <View>
          <Text style={styles.price}>${selectedProduct.price}</Text>
        </View>
        <View style={styles.description}>
          <Text>{selectedProduct.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}