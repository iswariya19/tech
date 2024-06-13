import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements';

const Search = () => {
    const Fruits = [
        {
            key: 1,
            name: "Apple",
            rate: 500,
            Image_path: require("../assets/apple.jpg"),
            calory: 33,
            cost: 70,
            rating: 4.3,
            delivery_time: "50-60 min",
            remarks:
                "Strawberries are rich in vitamin C and other antioxidants, which help reduce the risk of serious health conditions like cancer, diabetes,stroke, and heart disease.",
        },

        {
            key: 2,
            name: "Grapes green",
            rate: 400,
            Image_path: require("../assets/o8.png"),
            calory: 67,
            cost: 8.6,
            rating: 4.1,
            delivery_time: "50-60 min",
            remarks:
                "Strawberries are rich in vitamin C and other antioxidants, which help reduce the risk of serious health conditions like cancer, diabetes,stroke, and heart disease.",
        },
        {
            key: 3,
            name: "Strawberry",
            rate: 500,
            Image_path: require("../assets/o4.jpg"),
            calory: 33,
            cost: 14.6,
            rating: 4.2,
            delivery_time: "50-60 min",
            remarks:
                "Strawberries are rich in vitamin C and other antioxidants, which help reduce the risk of serious health conditions like cancer, diabetes,stroke, and heart disease.",
        },
        {
            key: 4,
            name: "Watermelon",
            rate: 500,
            Image_path: require("../assets/watermelon.jpg"),
            calory: 33,
            cost: 70,
            rating: 4.3,
            delivery_time: "50-60 min",
            remarks:
                "Strawberries are rich in vitamin C and other antioxidants, which help reduce the risk of serious health conditions like cancer, diabetes,stroke, and heart disease.",
        },

        {
            key: 5,
            name: "Pine Apple",
            rate: 500,
            Image_path: require("../assets/pineapple.jpg"),
            calory: 33,
            cost: 70,
            rating: 4.3,
            delivery_time: "50-60 min",
            remarks:
                "Strawberries are rich in vitamin C and other antioxidants, which help reduce the risk of serious health conditions like cancer, diabetes,stroke, and heart disease.",
        },
        {
            key: 6,
            name: "Pomegranate",
            rate: 200,
            Image_path: require("../assets/o2.jpg"),
            //Image_path: require("../assets/Veg/onion.jpeg"),
            calory: 233,
            cost: 14.6,
            rating: 4.3,
            delivery_time: "50-60 min",
            remarks:
                "Strawberries are rich in vitamin C and other antioxidants, which help reduce the risk of serious health conditions like cancer, diabetes,stroke, and heart disease.",
        },
    ];

    const [searchword, setSearchWord] = useState("");
    const [FlatListdata, setflatlistdata] = useState(Fruits);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = Fruits.filter(function (item) {
                const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                //  alert(itemData)
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });

            //alert(newData[0].name);

            setflatlistdata(newData);
            setSearchWord(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setflatlistdata(Fruits);
            setSearchWord(text);
        }
    };

    return (
        <View style={{ flex: 1, marginTop: 60 }}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={(text) => searchFilterFunction(text)}
                value={searchword}
                //style={{backgroundColor: "#FF8376"}}
                lightTheme={true}
            />

            <View>

                <FlatList
                    data={FlatListdata}
                    keyExtractor={(item) => item.key}
                    //ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: "#E5E0E0", height: 30 }}>

                            <Text style={{ fontSize: 24 }}>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};


export default Search

const styles = StyleSheet.create({})