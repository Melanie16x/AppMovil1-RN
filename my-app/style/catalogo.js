import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 20
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
   
  },
  cardRow: {
    width: '45%',
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
  contactList: {
    flexGrow: 1,
  },
  contactContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 14,
  },
  contactTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageProductDetail: {
    width: 400,
    height: 400,
    marginTop: 15
  },
  price: {
    fontSize: 40,
    marginTop: 20,
    margin: 10
  },
  dues: {
    margin: 10,
    marginTop: 20,
    fontSize: 22,
  },
  detail: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  }
});