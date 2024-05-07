import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../style/catalogo.js';

export default function Contacts() {

  const contactsData = [
    { name: 'Juan Pérez', phoneNumber: '123-456-7890', email: 'juan@gmail.com', occupation: 'Gerente General' },
    { name: 'María González', phoneNumber: '987-654-3210', email: 'maria@gmail.com', occupation: 'Administración' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre la empresa</Text>
      <Text style={styles.description}>
        En nuestra empresa, nos comprometemos a proporcionar a nuestros clientes una experiencia excepcional.
        Nuestra misión es brindar productos electrónicos de calidad que mejoren la vida cotidiana de las personas,
        mientras que nuestra visión es ser líderes en innovación y servicio al cliente.
        Estamos aquí para ayudarte en todo lo que necesites. ¡No dudes en contactarnos!
      </Text>
      <Text style={styles.contactTitle}>Contactenos</Text>
      {contactsData.map((contact, index) => (
        <View style={styles.contactContainer} key={index}>
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactInfo}>Teléfono: {contact.phoneNumber}</Text>
          <Text style={styles.contactInfo}>Correo electrónico: {contact.email}</Text>
          <Text style={styles.contactInfo}>Ocupación: {contact.occupation}</Text>
        </View>
      ))}
    </View>
  );
}