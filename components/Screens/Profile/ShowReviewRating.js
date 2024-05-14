import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/selectors/userSelect';
import AuthScreen from '../../global/AuthScreen';

const ShowReviewRating = () => {
    const { averageRatingData } = useSelector(selectUser);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); // Format as "yyyy-mm-dd"
    };
    return (
        <AuthScreen>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Review Rating</Text>
                {averageRatingData && (
                    <>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>Rating:</Text>
                            <Text style={{ marginLeft: 10 }}>{averageRatingData?.rating}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>Average Rating:</Text>
                            <Text style={{ marginLeft: 10 }}>{averageRatingData?.averageRating}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>Date:</Text>
                            <Text style={{ marginLeft: 10 }}>{formatDate(averageRatingData.date)}</Text>
                        </View>
                    </>
                )}
            </View>
        </AuthScreen>
    );
}

export default ShowReviewRating;
