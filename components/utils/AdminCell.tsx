import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  Alert,
  Text,
  View,
  Button,
  TextInput,
  Image,
} from 'react-native';
import AppStyles from '../../styles/AppStyles.tsx';
import Primary_button from './Primary_button.tsx';

const AdminCell = ({
  name,
  created,
  onApprove,
  onDetails
}: {
  name: string;
  created: string;
  onApprove: () => void;
  onDetails: () => void;
}) => {
  return (
    <View style={[AppStyles.admin_cell, AppStyles.horizontaly_centered]}>
      <View style={[AppStyles.admin_cell_brighter]}>
        <Text style={[AppStyles.boldFontWeight, AppStyles.paragraph_3]}>
          {name}
        </Text>
      </View>
      <View style={AppStyles.admin_cell_darker}>
        <Text style={AppStyles.paragraph_3}>Created:{created}</Text>
      </View>
      <View style={AppStyles.admin_cell_brighter}>
        <Primary_button
          onPressFunction={onDetails}
          text="Details"></Primary_button>
      </View>
      <View style={AppStyles.admin_cell_darker}>
        <Text style={AppStyles.paragraph_3}>Name:</Text>
      </View>
      <View style={AppStyles.admin_cell_brighter}>
        <Text style={AppStyles.paragraph_3}>{name}</Text>
      </View>

      <View style={AppStyles.admin_cell_darker}>
        <Primary_button
          onPressFunction={onApprove}
          text="Approve"></Primary_button>
      </View>
    </View>
  );
};

export default AdminCell;
