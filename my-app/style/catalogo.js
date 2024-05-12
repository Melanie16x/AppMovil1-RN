import { ScaledSheet } from 'react-native-size-matters';
import { ms } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  description: {
    fontSize: ms(16),
    textAlign: 'center',
    marginBottom: ms(20),
    margin: ms(10),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: ms(10)
  },
  title: {
    fontSize: ms(40),
    textAlign: 'center',
    marginTop: ms(10),
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: ms(20),
    marginBottom: ms(20)
  },
  cardRow: {
    width: '100%',
    marginBottom: ms(10),
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: ms(8),
    padding: ms(10),
    alignItems: 'center',
  },
  image: {
    width: ms(90),
    height: ms(120),
    marginBottom: ms(10),
  },
  productName: {
    fontSize: ms(18),
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: ms(14),
    textAlign: 'center',
  },
  contactList: {
    flexGrow: 1,
  },
  contactContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: ms(8),
    padding: ms(10),
    marginBottom: ms(10),
  },
  contactName: {
    fontSize: ms(18),
    fontWeight: 'bold',
    marginBottom: ms(5),
  },
  contactInfo: {
    fontSize: ms(14),
  },
  contactTitle: {
    fontSize: ms(30),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageProductDetail: {
    width: ms(300),
    height: ms(400),
    marginTop: ms(15)
  },
  price: {
    fontSize: ms(40),
    marginTop: ms(20),
    margin: ms(10)
  },
  dues: {
    margin: ms(10),
    marginTop: ms(20),
    fontSize: ms(22),
  },
  description: {
    fontSize: ms(20),
    textAlign: 'center',
    margin: ms(10),

  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    fontSize: ms(40),
    fontWeight: 'bold'
  }
})