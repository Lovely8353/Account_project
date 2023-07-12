import { Platform } from 'react-native'
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';




export const Fontsize = {
    button:wp('5.3'),
    headerfont:wp('4.5'),
    maintitle:wp('6'),
    medium:wp('4.2'),
    small:wp('3.8'),
    smalltext:wp('3.2'),
    extrasmall:wp('3.5'),
    extraextrasmall:wp('3'),
};

export const appcolor={
    blue:'#1b3592',
    titleblack:'#373f4a',
    gray:'#717a81',
    white:'#f1f4f9',
    purewhite:'#ffffff',
    titleblack:'#1f2734',
    focushadecoloe:'#d3d9ec',
    darkgray:'#7d8192',
    red:'red',
    grayborderonblue:'#2947a6',
    grayborderonlightblue:'#edf0f5'
}
// imagestyle for plateforms
export const resizeMode = Platform.OS == 'ios' ? 'contain' : 'center'

export const Images = {     
      menu: require('../Src/Images/menu.png'),
      cap: require('../Src/Images/cap.png'),
      search: require('../Src/Images/search.png'),
      notification: require('../Src/Images/Loginicon.png'),
      profile: require('../Src/Images/contact.png'),
      home: require('../Src/Images/home.png'),
      customer: require('../Src/Images/contact.png'),

      vendor: require('../Src/Images/cube.png'),
      goods: require('../Src/Images/bag.png'),
      setting: require('../Src/Images/settings.png'),
      report: require('../Src/Images/report.png'),
      dropdown: require('../Src/Images/dropdown.png'),
      cross: require('../Src/Images/cross.png'),
      switchon: require('../Src/Images/SwitchOn.png'),
      switchoff: require('../Src/Images/SwitchOff.png'),



  }