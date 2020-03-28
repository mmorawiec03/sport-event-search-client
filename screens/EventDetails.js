import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { cardContentStyles } from '../styles/CardContentStyles';
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
            <View style={cardContentStyles.center}>
                <Text style={cardContentStyles.nameText}>{name}</Text>
            </View>
            <Card>
                <Text style={cardContentStyles.detailsText}>{description}</Text>
            </Card>
            <Card>
                <View style={globalStyles.row}>
                    <View style={globalStyles.column1of3}>
                        <Text style={cardContentStyles.labelText}>Date</Text>
                        <Text style={cardContentStyles.detailsText}>{date}</Text>
                    </View>
                    <View style={globalStyles.column1of3}>
                        <Text style={cardContentStyles.labelText}>Hour</Text>
                        <Text style={cardContentStyles.detailsText}>{hour}</Text>
                    </View>
                    <View style={globalStyles.column1of3}>
                        <Text style={cardContentStyles.labelText}>Address</Text>
                        <Text style={cardContentStyles.detailsText}>{address}</Text>
                    </View>
                </View>
            </Card>
            <Card>
                <View style={globalStyles.row}>
                    <View style={globalStyles.column1of2}>
                        <Text style={cardContentStyles.labelText}>Discipline</Text>
                        <Text style={cardContentStyles.detailsText}>{discipline}</Text>
                    </View>
                    <View  style={globalStyles.column1of2}>
                        <Text style={cardContentStyles.labelText}>Level</Text>
                        <Image source={levelImages.levels[level]} />
                    </View>
                </View>
            </Card>
            <Card>
                <Text style={cardContentStyles.labelText}>Participants limit</Text>
                <Text style={cardContentStyles.detailsText}>{participantsLimit}</Text>
                <Button title='Sign up' color='grey' />
            </Card>
            </ScrollView>
        </View>
    );
}
