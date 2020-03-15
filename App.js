import React, { useState } from 'react';
import Drawer from './routes/Drawer';
import Login from './screens/Login';
import CustomDrawer from './shared/CustomDrawer';
import { View } from 'react-native';
import { globalStyles } from './styles/GlobalStyles';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const content = isAuthenticated ? (<Drawer logout={setIsAuthenticated} />) : (<Login login={setIsAuthenticated} />);
  
  return (
    <View style={globalStyles.container}>
      {content}
    </View>
  );
}
