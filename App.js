import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from './styles/Global';
import Navigator from './routes/Drawer';

export default function App() {
  return (
    <Navigator />
  );
}
