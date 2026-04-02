import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Text,
    Image
} from 'react-native';

interface SearchBarProps {
    onSearch?: (text: string) => void;
    onFilterPress?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilterPress }) => {
    const [query, setQuery] = useState<string>('');

    const handleChange = (text: string) => {
        setQuery(text);
        if (onSearch) onSearch(text);
    };

    return (
        <View style={styles.outerContainer}>
            <View style={styles.searchSection}>
                <Image
                    source={require("../../assets/SearchIcon.png")}
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="What are you looking for?"
                    placeholderTextColor="#585858"
                    value={query}
                    onChangeText={handleChange}
                />
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fffefe',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 45,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    icon: {
        paddingHorizontal: 5,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#333',
        paddingVertical: 0,
    },
    searchIcon: {
        width: 40,
        height: 40,
        tintColor: "#000000",
    }
});

export default SearchBar;