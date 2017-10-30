import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import GuideItem from './GuideItem';

const guides = [
    {
        picUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17862834_1258688320851648_3905539345754178613_n.jpg?oh=e81b4e0c12a8eb137569a44592eb5110&oe=5A7F5C47',
        guideName: 'Hwan Seob Lee',
        introduction: "I am good in english",
        license: true,
        rating: 100,
        activation: true,
        regions: [
            {
                location: "서울특별시 강남구"
            },
            {
                location: "서울특별시 도봉구"
            },
            {
                location: "경상남도 경주시"
            }
        ],
        languages: [
            {
                languageName: "English",
                languageLevel: "상"
            }
        ]
    },
    {
        picUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17862834_1258688320851648_3905539345754178613_n.jpg?oh=e81b4e0c12a8eb137569a44592eb5110&oe=5A7F5C47',
        guideName: 'Min Ho Kang',
        introduction: "Loream Ipsum EveryOasfsfsfsfdfsff",
        license: false,
        rating: 75,
        activation: true,
        regions: [
            {
                location: "서울특별시 홍대"
            },
            {
                location: "서울특별시 이태원"
            },
            {
                location: "부산광역시 해운대"
            }
        ],
        languages: [
            {
                languageName: "Chinese",
                languageLevel: "중"
            },
            {
                languageName: "Japanese",
                languageLevel: "상"
            }
        ]
    },
    {
        picUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17862834_1258688320851648_3905539345754178613_n.jpg?oh=e81b4e0c12a8eb137569a44592eb5110&oe=5A7F5C47',
        guideName: 'Yun Jeong Jang',
        introduction: "I can speak French very well",
        license: true,
        rating: 65,
        activation: false,
        regions: [
            {
                location: "인천광역시 연수구"
            },
            {
                location: "경기도 화성시"
            },
            {
                location: "강원도 원주시"
            }
        ],
        languages: [
            {
                languageName: "French",
                languageLevel: "상"
            }
        ]
    }
];

class GuideList extends Component {
    constructor(props) {
        super(props);
    }

    renderGuideItem = (datas) => {
        const mappedData = datas.map((guide, index) => {
            return <GuideItem
                        key={index}
                        guide={guide}
                    />
        });
        
        return mappedData;
    }

    render() {
        return (
            <ScrollView style={styles.listContainer}>
                {this.renderGuideItem(guides)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        paddingTop: 20,
        flex: 1,
    }
});

export default GuideList;