import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import { Fontsize, Images, appcolor } from '../../ColorConsts';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomDrawer = props => {
  const [openSubMenu, setOpenSubMenu] = useState(0);
  const Data = [
    {
      id: 1,
      title: 'Dashboard',
      img: Images.home,
    },
    {
      id: 2,
      title: 'Customers',
      img: Images.customer,
    },
    {
      id: 3,
      title: 'Vendors',
      img: Images.vendor,
    },
    {
      id: 4,
      title: 'Goods/Services',
      img: Images.goods,
    },
    {
      id: 5,
      title: 'Settings',
      img: Images.setting,
    },
    {
      id: 6,
      title: 'Reports',
      img: Images.report,
    },
  ];

  const rendetListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.id < 4) {
            setOpenSubMenu(0);
            if(item.id==1){
              props.navigation.navigate('DashboardScreen');
            }
          } else if (item.id === 5) {
            setOpenSubMenu(1);
          } else if (item.id === 6) {
            setOpenSubMenu(2);
          }
        }}
        style={styles.buttonView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={item.img}
            style={{...styles.iconStyle,tintColor:appcolor.white}}
          />
          <Text style={{...styles.buttonTitle,fontSize:Fontsize.small}}>{item.title}</Text>
        </View>

        {(index === 4 || index === 5) && (
          <Image
            // source={{
            //   uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAaVBMVEX///8AAABra2u5ublWVlbHx8f5+fnR0dGgoKD8/PxkZGTz8/Ps7OyFhYXn5+dQUFDg4OBCQkKSkpIxMTGMjIwjIyNJSUmampp0dHQ2NjYRERGysrIaGhpeXl7BwcE9PT19fX2pqakqKioileYdAAAEz0lEQVR4nO1a55riIBQ1mmqKKWMZS0x8/4fcmVEuHIpJlOx+u8v5pUDgcBuXslg4ODg4ODg4/LsoTl11PO/yNv1DBLJu6z1wqw0kynjtf+OyL2dgsDp7Aj4DTZP0ILQ4ZJYJhEtPQqe0KbfYwq4ggrPM4EsbEbbJGrmFRTmEuUrgG/tEbNUp9Z01BuWnnoHn7Qreqjiq9YW500nYmwh8o6dmp6e176CsxD63cRTVMF2fzbTWUDjYYIBzW/+MV27EsnN7b/nx+J9HQcDoLN8nkKIrnlh5DMVdKFKIv36vrFFYwUgbwcdQPV4wE4XsAMPEUBl+QGWezkEhuopjfEZKPcTCqtxbpyDNMlFbhCilyjIFFEHDRRDFMf/TasK2JQoJRqNlyCru5sHXwHQ9E4XiInZ5JFdctI+F6NZSUT8LBez1wqcs6J4LpoA4ZYVChiLgUb4FD7itqEJaQ96m0N7E7nzKOlI0/y8cKHeLdmJ5E7xHAdf8msoDKSH6xpZytwTziXzRvkwBo82VvE8VgSIIyJgaFlSmUpBi7gdZXKBJRu44kiBSbWI1kQKuPNzvpM4vYK5eR4JYaXQ1jUKP31LPkhWc5BSCW0SmxqkpFCTvJo9L0T7XmWYsbhG4uE+jsAJtX8gVW0hceZw84baGlFb6L1KQDL5nq2KCItiI6TKO1dEnmE/tRm4+0eCvJALJCqRsuIdKbhGY8R91+z5FBGjwNZuPJBpf2RJgJOcWkWAqnQ8KIgJX5IlBALHmrN0Q9GARDU04giBfKfkWAlXHZ4Ki2Rk2qJjN89RKSrxj/df3LkAEZzLs6Dy2C5zCkSbcgn1Vxj12DO3WTASSdayfbgwLjBGkecynjvpZZCAtrm1MG7mLGpD00JwfffQwwaVmo5+CEiqaKq5VJisQIVnEB5XDXCrVMyDXITlJRxkjd8YoiDMJAsbYK58Jmc6GWZFkBf7okxopMJNFRIKAKuUrrgdKDDBGePGAFYiQAjPFAuF8RqXAvuFiQxFcJ56QFMg/Z+WkWtUpwnt8zZkISjysehZODEBBNEyLD0H4mkCd5tdmw6MRrEnjrUAEWsSWx6lN82lYKkLuqwUwUI13JMAFtlyV2YhFW3TtMbHABIgRmylftsKHL1iBCNEi2uHmDAlf+jcDS+swhFhwGe/WBRfBhFhggnA0MN6xKS2fILlnIL2ehts+wIKSb4fBYsG8Mx9u+gBbtu2c1y74ujV+H8EorIabjsP0zb2j4Cg4Co7CX0whIfwZCkG9XBOW9dOzizkopJge/2BvTghnoBBo72u1t/czUdBdxP7AlJJYpxCYGNxvB38DhdLMwPRGwTYF5fGECP0glilEzxh4njbpt0yBH8HWbfBAy88WtRmqZQrsELEBtZes+DY/BXqcIVWyUY667YpdCswUblIsTJkYdMYwDwU/xPLQdxQcBUfBUXAUHIXfQoHditaaupcosNul8Y8NWQ7U2KLALhZ0c9KD0kPNiS1RkKoSMwV+njz+NDmjq4DrPpDQP2oquYLdwvRyxZ5u5rYTngAbXvi+i/GHr19imIfCpHfQmo3z+5h4s/F0y/Qapj5qSqxzWIfDo0qwrIuX7peKTveI8yWcD68+RS+C/OK/jUse2HoL7+Dg4ODg4PCf4hexEj3lR+9sUAAAAABJRU5ErkJggg==',
            // }}
            source={Images.dropdown}
            style={{...styles.iconStyle,tintColor:appcolor.white}}
          />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: appcolor.blue}}>
      
      <TouchableOpacity
        onPress={() => props.navigation.closeDrawer()}
        style={{alignItems: 'flex-end', paddingVertical: hp('3')}}>
        <Image
          style={{...styles.iconStyle,tintColor:appcolor.white}}
          source={Images.cross}
        />
      </TouchableOpacity>
      <FlatList
        data={Data}
        key={'drawer'}
        keyExtractor={item => item.id.toString()}
        renderItem={rendetListItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp('2'),
    paddingHorizontal: wp('5'),
    justifyContent: 'space-between',
  },
  iconStyle: {
    height: wp('6'),
    width: wp('6'),
    marginRight: wp('4'),
  },
  buttonTitle: {
    fontSize: Fontsize.button,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomDrawer;
