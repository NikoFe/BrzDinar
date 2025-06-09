import { StyleSheet } from 'react-native';

const header1_size = 48;
const header2_size = 44;
const header3_size = 40;

const paragraph_size1 = 35;
const paragraph_size2 = 30;
const paragraph_size3 = 25;
const paragraph_size4 = 24;
const paragraph_size5 = 16;

const spacing1 = 8;
const spacing2 = 16;
const spacing3 = 24;
const spacing4 = 32;
const spacing5 = 40;
const spacing6 = 48;
const spacing7 = 56;
const spacing8 = 64;
const spacing9 = 72;
const spacing10 = 80;
const spacing11 = 88;
const spacing12 = 96;
const spacing13 = 104;
const spacing14 = 112;
const spacing15 = 120;
const spacing16 = 128;
const spacing17 = 136;
const spacing18 = 144;
const spacing19 = 152;
const spacing20 = 160;
const spacing21 = 168;
const spacing22 = 176;
const spacing23 = 184;
const spacing24 = 192;
const spacing25 = 200;
const spacing26 = 208;
const spacing27 = 216;
const spacing28 = 224;
const spacing29 = 232;
const spacing30 = 240;
const spacing31 = 248;
const spacing32 = 256;
const spacing33 = 264;
const spacing34 = 272;
const spacing35 = 280;
const spacing36 = 288;
const spacing37 = 296;

const primary_pressed = '#9C3131';
const primary_default = '#E45C5C';
const primary_disabled = '#A14C4C';

const secondary_pressed = '#BEBEBE';
const secondary_default = '#CFCFCF';
const secondary_disabled = '#858585';

const app_black = '#000000';
const header_black = '#3E3E3E';
const app_gray = '#D9D9D9';
const app_gray2 = '#565656';
const app_gray3 = '#707070';
const app_gray4 = '#AFAFAF';
const app_gray5 = '#CDCCCC';
const app_white = '#FFFFFF';

const AppStyles = StyleSheet.create({
  grayBackground: {
    backgroundColor: app_gray2,
  },

  grayBackground_down: {
    backgroundColor: app_gray2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  headerBackground: {
    backgroundColor: header_black,
  },

  verticalCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  customHeader: {
    backgroundColor: header_black,
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },

  whiteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  primary_button: {
    backgroundColor: primary_default,
    color: app_white,
    paddingTop: spacing1,
    paddingBottom: spacing1,
    alignSelf: 'flex-start',
    marginHorizontal: 'auto',
    width: 195,
  },

  primary_pressed: {
    backgroundColor: primary_pressed,
    color: app_white,
    paddingTop: spacing1,
    paddingBottom: spacing1,
    alignSelf: 'flex-start',
    marginHorizontal: 'auto',
    width: 195,
  },

  secondary_button: {
    backgroundColor: secondary_default,
    color: app_gray2,
    paddingTop: spacing1,
    paddingBottom: spacing1,
    alignSelf: 'flex-start',
    marginHorizontal: 'auto',
    width: 195,
  },

  secondary_pressed: {
    backgroundColor: secondary_pressed,
    color: app_gray2,
    paddingTop: spacing1,
    paddingBottom: spacing1,
    alignSelf: 'flex-start',
    marginHorizontal: 'auto',
    width: 195,
  },


  header_2_bold_Inter_white: {
    fontSize: header2_size,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: 'white',
  },

  header_3_bold_Inter_white: {
    fontSize: header3_size,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: 'white',
  },

  paragraph_1: {
    fontSize: paragraph_size1,
    fontFamily: 'Inter',
  },

  paragraph_3: {
    fontSize: paragraph_size3,
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  paragraph_3_non_center: {
    fontSize: paragraph_size3,
    fontFamily: 'Inter',
  },

  paragraph_4_label: {
    fontSize: paragraph_size4,
    fontFamily: 'Inter',
  },

  paragraph_4: {
    fontSize: paragraph_size4,
    fontFamily: 'Inter',
  },
  paragraph_5: {
    fontSize: paragraph_size5,
    fontFamily: 'Inter',
  },

  white: {
    color: app_white,
  },

  horizontaly_centered: {
    marginHorizontal: 'auto',
  },
  verticaly_centered: {
    marginVertical: 'auto',
  },

  margin_top_spacing1: {
    marginTop: spacing1,
  },
  margin_top_spacing2: {
    marginTop: spacing2,
  },
  margin_top_spacing3: {
    marginTop: spacing3,
  },
  margin_top_spacing4: {
    marginTop: spacing4,
  },
  margin_top_spacing5: {
    marginTop: spacing5,
  },
  margin_top_spacing6: {
    marginTop: spacing6,
  },
  margin_top_spacing8: {
    marginTop: spacing6,
  },
  margin_top_spacing10: {
    marginTop: spacing10,
  },
  margin_top_spacing12: {
    marginTop: spacing12,
  },
  margin_top_spacing13: {
    marginTop: spacing13,
  },

  margin_top_spacing26: {
    marginTop: spacing26,
  },

  margin_left_spacing6: {
    marginTop: spacing6,
  },

  margin_top_spacing36: {
    marginTop: spacing36,
  },
  margin_top_spacing37: {
    marginTop: spacing37,
  },
  margin_bottom_spacing1: {
    marginBottom: spacing1,
  },

  margin_bottom_spacing10: {
    marginBottom: spacing10,
  },
  margin_bottom_spacing15: {
    marginBottom: spacing15,
  },

  margin_bottom_spacing20: {
    marginBottom: spacing20,
  },
  margin_bottom_spacing35: {
    marginBottom: spacing35,
  },

  image_80x80: {
    width: 80,
    height: 80,
  },

  image_100x100: {
    width: 100,
    height: 100,
  },

  image_200x200: {
    width: 200,
    height: 200,
  },

  image_400x200: {
    width: 400,
    height: 200,
  },
  image_300x150: {
    width: 300,
    height: 150,
  },

  width_200: {
    width: 200,
  },
  width_300: {
    width: 300,
  },

  width_350: {
    width: 350,
  },

  width_400: {
    width: 400,
  },

  width_600: {
    width: 600,
  },

  brzDinar_image: {
    width: 325,
    height: 175,
  },

  wait_image: {
    width: 236,
    height: 201,
  },

  brzDinar_image_small: {
    width: 162,
    height: 87,
  },

  textArea: {
    minWidth: 300,
    maxWidth: 300,
    minHeight: 186,
    backgroundColor: app_gray4,
    textAlignVertical: 'top',
    fontSize: paragraph_size3,
  },

  textInput: {
    width: 300,
    height: 50,
    backgroundColor: app_gray4,
    fontSize: paragraph_size3,
  },

  dropDownButton: {
    width: 300,
    height: 50,
    backgroundColor: app_gray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bold: {
    fontWeight: 'bold',
  },
  dropdown_arrow: {
    position: 'absolute',
    left: 10,

  },

  dropdown_arrow_up_div: {
    position: "absolute",
    backgroundColor: app_gray,
    left: 10,
    zIndex: 5,
    transform: 'rotate(180deg)',
  },

  error_text: {
    fontSize: paragraph_size3,
    fontFamily: 'Inter',
    textAlign: 'center',
    color: primary_default,
  },
  red: {
    color: primary_default,
  },
  progress_image: {
    width: 328,
    height: 43,
  },

  date_picker_cell: {
    backgroundColor: app_gray4,
    width: 100,
    height: 30,
    fontSize: paragraph_size3,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date_inputs: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 230,
    alignItems: 'center',
  },
  date_row: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
    //backgroundColor:"green",
    gap: 20,
    height: 40,
  },
  date_dots: {
    marginBottom: 20,
    color: app_gray4,
    //backgroundColor:"pink",
    height: 50,
    width: 25,
  },
  action_button: {
    width: 51,
    height: 50,
  },
  exchange_rate_div: {
    backgroundColor: app_gray4,
    width: '100%',
    maxWidth: 328,
    minHeight: 294,
    marginHorizontal: 'auto',
    overflow: 'hidden',
    flex: 1,
  },
  flag_image: {
    width: 88,
    height: 54,
    position: 'absolute',
    left: 120,
    top: 40,
  },
  exchange_buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 328,
    //backgroundColor:"green",
    padding: 10,
  },

  exchange_text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 328,
    //backgroundColor:"red",
    paddingLeft: 25,
    paddingRight: 25,
    height: 'auto',
  },
  exchange_text2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 328,
    //backgroundColor:"red",
    paddingLeft: 18,
    paddingRight: 18,
    height: 'auto',
  },
  exchange_border: {
    width: 300,
    height: 5,
    backgroundColor: app_gray3,
  },
  exchange_plus_button: {
    //position: 'absolute',
    //left: 140,
    // top: 400,
    //  zIndex: 3,
    marginHorizontal: "auto"

  },

  office_data_header: {
    width: 360,
    backgroundColor: app_white,
    display: 'flex',
    padding: 5,
  },
  office_data_white_row: {
    width: 360,
    backgroundColor: app_white,
    display: 'flex',
    padding: 5,
  },
  office_data_gray_row: {
    backgroundColor: app_gray3,
    width: 360,
    display: 'flex',
    padding: 5,
  },
  boldFontWeight: {
    fontWeight: 'bold',
  },

  ExchangeOfficeData_height: {
    height: 'auto',
  },
  greenBackground: {
    backgroundColor: 'green',
  },
  map_image: {
    width: 319,
    height: 431,
  },
  admin_cell: {
    width: 300,
  },

  admin_cell_brighter: {
    backgroundColor: app_gray4,
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  admin_cell_darker: {
    backgroundColor: app_gray5,
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  smaller_primary_button: {
    backgroundColor: primary_default,
    color: app_white,
    paddingTop: spacing1,
    paddingBottom: spacing1,
    alignSelf: 'flex-start',
    marginHorizontal: 'auto',
    width: 169,
    height: 67,
  },
  margin_left_35: {
    marginLeft: 35,
  },
  gray5: {
    color: app_gray4,
  },
  number_input_arrow_down: {
    width: 22,
    height: 22,
    position: 'absolute',
    right: 5,
    top: 64,
    zIndex: 10,
  },
  number_input_arrow_up: {
    width: 22,
    height: 22,
    position: 'absolute',
    right: 5,
    top: 44,
    zIndex: 10,
    transform: 'rotate(180deg)',
  },
  invisible_image: {
    opacity: 0,
  },

  dropdownCell: {
    backgroundColor: header_black,
    color: app_white,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    fontSize: paragraph_size4

  },
  hiddenDropdown: {
    top: 50,
    position: "absolute",
    zIndex: 200,
    width: 300
  },

  number_input_div: {

    display: "flex",
    justifyContent: "flex-end"

  },
  up_pressable: {

    width: 20,
    height: 20,
    // backgroundColor:"green",
    position: "absolute",
    zIndex: 100,
    left: 275,
    top: 42,
  },
  down_pressable: {

    width: 20,
    height: 20,
    //backgroundColor:"red",
    position: "absolute",
    zIndex: 100,
    left: 275,
    top: 65,
  },

  number_textInput: {
    width: 300,
    height: 50,
    padding: 10,
    backgroundColor: app_gray4,
    fontSize: paragraph_size3,
  },

});




export default AppStyles;
