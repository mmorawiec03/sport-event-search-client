import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Card from '../shared/Card';
import { disciplineColors } from '../styles/DisciplineColors';


export default function EventDetails({ navigation }) {
    const name = navigation.getParam('name');
    const description = navigation.getParam('description');
    const date = navigation.getParam('date');
    const hour = navigation.getParam('hour');
    const address = navigation.getParam('address');
    const discipline = navigation.getParam('discipline');
    const level = navigation.getParam('level');
    const participantsLimit = navigation.getParam('participantsLimit');
    return (
        <View style={globalStyles.container}>
            <ScrollView> 
                <View style={globalStyles.section}>
                    <Card>
                        <View style={globalStyles.labelContainer}>
                            <Text style={globalStyles.headerText}>{name.toUpperCase()}</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={globalStyles.labelContainer}>
                            <Text style={globalStyles.paragraph}>{description}</Text>
                        </View>
                    </Card>
                </View>
                <View style={globalStyles.section}>
                    <View style={globalStyles.row}>
                        <View style={globalStyles.column1of2}>
                            <Card>
                                <View style={globalStyles.labelContainer}>
                                    <Text style={globalStyles.labelText}>DATE</Text>
                                </View>
                            </Card>
                            <Card>
                                <View style={globalStyles.labelContainer}>
                                    <Entypo name='calendar' color='lightgrey' size={18} style={globalStyles.icon} />
                                    <Text style={globalStyles.paragraph}>{date}</Text>
                                </View>
                            </Card>
                        </View>
                        <View style={globalStyles.column1of2}>
                            <Card>
                                <View style={globalStyles.labelContainer}>
                                    <Text style={globalStyles.labelText}>TIME</Text>
                                </View>
                            </Card>
                            <Card>
                                <View style={globalStyles.labelContainer}>
                                    <Entypo name='clock' color='lightgrey' size={18} style={globalStyles.icon} />
                                    <Text style={globalStyles.paragraph}>{hour}</Text>
                                </View>
                            </Card>
                        </View>
                    </View>
                    <View>
                        <Card>
                            <View style={globalStyles.labelContainer}>
                                <Text style={globalStyles.labelText}>PLACE</Text>
                            </View>
                        </Card>
                        <Card>
                            <View style={globalStyles.labelContainer}>
                                <Entypo name='location' color='lightgrey' size={18} style={globalStyles.icon} />
                                <Text style={globalStyles.paragraph}>{address}</Text>
                            </View>
                        </Card>
                    </View>
                </View>
                <View style={globalStyles.section}>
                    <View style={globalStyles.row}>
                        <View style={globalStyles.column1of2}>
                            <Card>
                                <View style={globalStyles.labelContainer}>
                                    <Text style={globalStyles.labelText}>DISCIPLINE</Text>
                                </View>
                            </Card>
                            <Card>
                                <View style={globalStyles.labelContainer}>
                                    <Text style={globalStyles.paragraph}>{discipline}</Text>
                                    <FontAwesome name='circle' color={disciplineColors.colors[discipline]} size={24} style={globalStyles.icon} />
                                </View>
                            </Card>
                        </View>
                        <View style={globalStyles.column1of2}>
                            <Card>
                                <View style={globalStyles.labelContainer}>
                                    <Text style={globalStyles.labelText}>LEVEL</Text>
                                </View>
                            </Card>
                            <Card>
                                <View style={globalStyles.labelContainer}>
                                    {[...Array(level)].map((e, i) => <Entypo name='star' color='#ffae00' size={23} key={i} />)}
                                </View>
                            </Card>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.section}>
                    <Card>
                        <View style={globalStyles.labelContainer}>
                            <Text style={globalStyles.labelText}>PARTICIPANTS LIMIT</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={globalStyles.labelContainer}>
                            <Text style={globalStyles.paragraph}>{participantsLimit}</Text>
                        </View>
                    </Card>
                    <TouchableOpacity onPress={() => console.log('join event')}>
                        <View style={globalStyles.buttonContainer}>
                            <Text style={globalStyles.buttonText}>JOIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 2
    },
});
