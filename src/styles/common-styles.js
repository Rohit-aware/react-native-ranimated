import { StyleSheet ,Dimensions} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colorses from '../constants/colors';
const SCREEN_WIDTH= Dimensions.get('screen').width

const commonStyles = StyleSheet.create({
  containerACBcW: {
    flex: 1,
    backgroundColor: '#EEEE',
  },
  flexOne: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexRow: { 
    flexDirection: 'row' 
  },
  flexRowJSBAC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },  
  flexRowJSEAC: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  RowJFSAC: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  JFSAC: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  RowJFEAC: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flexRowJCAC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowAC:{
    xDirection: 'row',
    alignItems: 'center',
  },

  centerJCAC: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  AlignSelfC: {
    alignSelf: 'center',
  },
  AlignSelfFE: {
    alignSelf: 'flex-end',
  },

  //  ! Shadow Style

  shadowStyle: {
    shadowColor: Colorses.primaryColor,
    shadowOffset: {
      width: 10,
      height: 18,
    },
    shadowOpacity: 0.78,
    shadowRadius: 24.00,
    
    elevation: 20,
    backgroundColor: '#ffff',
  },

  boxShadow: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 10,
  },

  // !Login 
  inpContainer: { 
    borderBottomWidth: 0.4, 
    borderColor: Colorses.textGrey, 
    width: '85%' 
  },

  container: {
    flex:1,
    top: moderateScale(55,0.9),
    width: SCREEN_WIDTH * 90/100,
    backgroundColor: '#FFFEFA',
    borderTopLeftRadius: moderateScale(48),
    borderTopRightRadius: moderateScale(8),
  },
  loginLogo: {
    top: moderateScale(33),
    height: moderateScale(150),
    width: moderateScale(200),
    alignSelf: 'center',
  },
  loginBtn: {
    marginHorizontal: moderateScale(10),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: Colorses.primaryColor
  }

});
export default commonStyles;