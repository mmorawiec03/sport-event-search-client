import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Label from '../shared/Label';
import { disciplineColors } from '../styles/DisciplineColors';
import JoinEventButton from '../forms/JoinEventButton';
import LeaveEventButton from '../forms/LeaveEventButton';
import DeleteEventButton from '../forms/DeleteEventButton';



export default function EventDetails({ navigation }) {
    
    const event = navigation.getParam('item');
    const joined = navigation.getParam('joined');
    const owned = navigation.getParam('owned');
    const getEvents = navigation.getParam('getEvents');
    const placesLeft = event.participantsLimit - event.participants.length;
   
    return (
        <View style={globalStyles.container}>
            <ScrollView> 
                <View style={globalStyles.section}>
                    <Label>
                        <Text style={globalStyles.headerText}>{event.name.toUpperCase()}</Text>
                    </Label>
                    <Label>
                        <Text style={globalStyles.paragraph}>{event.description}</Text>
                    </Label>
                </View>
                <View style={globalStyles.section}>
                    <View style={globalStyles.row}>
                        <View style={globalStyles.column1of2}>
                            <Label>
                                <Text style={globalStyles.labelText}>DATE</Text>
                            </Label>
                            <Label>
                                <Entypo name='calendar' color='lightgrey' size={18} style={globalStyles.icon} />
                                <Text style={globalStyles.paragraph}>{event.date}</Text>
                            </Label>
                        </View>
                        <View style={globalStyles.column1of2}>
                            <Label>
                                <Text style={globalStyles.labelText}>TIME</Text>
                            </Label>
                            <Label>
                                <Entypo name='clock' color='lightgrey' size={18} style={globalStyles.icon} />
                                <Text style={globalStyles.paragraph}>{event.hour}</Text>
                            </Label>
                        </View>
                    </View>
                    <View>
                        <Label>
                            <Text style={globalStyles.labelText}>PLACE</Text>
                        </Label>
                        <Label>
                            <Entypo name='location' color='lightgrey' size={18} style={globalStyles.icon} />
                            <Text style={globalStyles.paragraph}>{event.address}</Text>
                        </Label>
                    </View>
                </View>
                <View style={globalStyles.section}>
                    <View style={globalStyles.row}>
                        <View style={globalStyles.column1of2}>
                            <Label>
                                <Text style={globalStyles.labelText}>DISCIPLINE</Text>
                            </Label>
                            <Label>
                                <Text style={globalStyles.paragraph}>{event.discipline}</Text>
                                <FontAwesome name='circle' color={disciplineColors.colors[event.discipline]} size={24} style={globalStyles.icon} />
                            </Label>
                        </View>
                        <View style={globalStyles.column1of2}>
                            <Label>
                                <Text style={globalStyles.labelText}>LEVEL</Text>
                            </Label>
                            <Label>
                                { [...Array(event.level)].map((e, i) => <Entypo name='star' color='#ffae00' size={23} key={i} />) }
                            </Label>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.section}>
                    <Label>
                        <Text style={globalStyles.labelText}>OWNER</Text>
                    </Label>
                    <Label>
                        <Text style={globalStyles.paragraph}>{event.owner.fullName}</Text>
                    </Label>
                    { (joined || owned) && 
                        <Label>
                            <Text style={globalStyles.paragraph}>{event.owner.email}</Text>
                        </Label>
                    }
                    { ((joined || owned) && event.owner.phoneNumber) && 
                        <Label>
                            <Text style={globalStyles.paragraph}>{event.owner.phoneNumber}</Text>
                        </Label>
                    }
                </View>
                { (joined || owned) &&
                    <View style={globalStyles.section}>
                        <Label>
                            <Text style={globalStyles.labelText}>PARTICIPANTS</Text>
                        </Label>
                        { event.participants.map(participant => {
                            return (
                                <View key={participant.userId}>
                                    <Label>
                                        <View style={globalStyles.centerContext}>
                                            <Text style={globalStyles.paragraph}>{participant.fullName}</Text>
                                            { owned &&
                                                <>
                                                <Text style={globalStyles.paragraph}>{participant.email}</Text>
                                                { participant.phoneNumber && 
                                                    <Text style={globalStyles.paragraph}>{participant.phoneNumber}</Text>
                                                }
                                                </>
                                            }
                                        </View>
                                    </Label>
                                </View>
                            )
                        })}
                    </View>
                }
                <View style={globalStyles.section}>
                    <Label>
                        <Text style={globalStyles.labelText}>PLACES LEFT</Text>
                    </Label>
                    <Label>
                        <Text style={globalStyles.paragraph}>{placesLeft > 0 ? placesLeft : "No places left!"}</Text>
                    </Label>
                    { (placesLeft > 0 && !joined && !owned) && <JoinEventButton navigation={navigation} eventId={event._id} /> }
                    { joined && <LeaveEventButton navigation={navigation} eventId={event._id} getEvents={getEvents} /> }
                    { owned && <DeleteEventButton navigation={navigation} eventId={event._id} getEvents={getEvents} /> }
                </View>
            </ScrollView>
        </View>
    );
}
