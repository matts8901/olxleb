import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Text
} from 'react-native';
// You are importing FontAwesome here
import Icon from 'react-native-vector-icons/FontAwesome';

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
                {/* Keep the Emoji as requested */}
                <Icon name="search" size={18} color="#000000" style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="What are you looking for?"
                    placeholderTextColor="#585858"
                    value={query}
                    onChangeText={handleChange}
                />

                {query.length > 0 && (
                    <TouchableOpacity onPress={() => handleChange('')}>
                        <Icon name="times-circle" size={18} color="#999" style={styles.icon} />
                    </TouchableOpacity>
                )}
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
        paddingVertical: 0, // Removes default Android padding
    },
    searchIcon: {
        marginRight: 10,
        marginLeft: 5,
    },
});

export default SearchBar;