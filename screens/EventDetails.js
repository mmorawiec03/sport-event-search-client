import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { levelImages } from '../styles/LevelImages';
import Card from '../shared/Card';


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
            <View style={styles.name}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <Card>
                <Text style={styles.detailsText}>{description}</Text>
            </Card>
            <Card>
                <View style={globalStyles.row}>
                    <View style={globalStyles.column1of3}>
                        <Text style={styles.labelText}>Date</Text>
                        <Text style={styles.detailsText}>{date}</Text>
                    </View>
                    <View style={globalStyles.column1of3}>
                        <Text style={styles.labelText}>Hour</Text>
                        <Text style={styles.detailsText}>{hour}</Text>
                    </View>
                    <View style={globalStyles.column1of3}>
                        <Text style={styles.labelText}>Address</Text>
                        <Text style={styles.detailsText}>{address}</Text>
                    </View>
                </View>
            </Card>
            <Card>
                <View style={globalStyles.row}>
                    <View style={globalStyles.column1of2}>
                        <Text style={styles.labelText}>Discipline</Text>
                        <Text style={styles.detailsText}>{discipline}</Text>
                    </View>
                    <View  style={globalStyles.column1of2}>
                        <Text style={styles.labelText}>Level</Text>
                        <Image source={levelImages.levels[level]} />
                    </View>
                </View>
            </Card>
            <Card>
                <Text style={styles.labelText}>Participants limit</Text>
                <Text style={styles.detailsText}>{participantsLimit}</Text>
                <Button title='Sign up' color='grey' />
            </Card>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        alignItems: 'center',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 25,
        margin: 10
    },
    detailsText: {
        fontSize: 16,
        marginBottom: 8
    },
    labelText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
    }
});