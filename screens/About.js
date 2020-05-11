import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import Card from '../shared/Card';


export default function About() {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.section}>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.headerText}>SPORT EVENT SEARCH</Text>
                    </View>
                </Card>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.paragraph}>by Mateusz Morawiec</Text>
                    </View>
                </Card>
            </View>
            <View style={globalStyles.section}>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.paragraph}>AGH University of Science and Technology</Text>
                    </View>
                </Card>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.paragraph}>Faculty of Computer Science, Electronics and Telecommunications</Text>
                    </View>
                </Card>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.paragraph}>Information and Communication Technologies</Text>
                    </View>
                </Card>
            </View>
            <View style={globalStyles.section}>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.paragraph}>The application has been created as a part of Bachelor Thesis.
                            The topic the thesis is "Mobile applications security".</Text>
                    </View>
                </Card>
            </View>
        </View>
    );
}