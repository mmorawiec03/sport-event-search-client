import React from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { disciplineColors } from '../styles/DisciplineColors';
import { disciplines } from '../shared/DisciplinesList';
import Card from '../shared/Card';
import { FontAwesome } from '@expo/vector-icons';


export default function SearchByDiscipline({ getByDiscipline, getAll }) {
    return (
        <FlatList
          ListHeaderComponent={
            <TouchableOpacity onPress={getAll}>
                <Card>
                    <Text style={globalStyles.paragraph}>ALL DISCIPLINES</Text>
                    <FontAwesome name='th-large' size={24} color='#0c7070' style={globalStyles.icon} />
                </Card>
            </TouchableOpacity>
          }
          data={disciplines}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => getByDiscipline(item)}>
                <Card>
                    <Text style={globalStyles.paragraph}>{item}</Text>
                    <FontAwesome name='circle' color={disciplineColors.colors[item]} size={24} style={globalStyles.icon} />
                </Card>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
    );
}