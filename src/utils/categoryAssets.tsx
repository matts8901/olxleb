
import { ImageSourcePropType } from 'react-native';

interface CategoryImageMap {
    [key: number]: ImageSourcePropType;
    default: ImageSourcePropType;
}

export const getCategoryImage = (categoryId: number): ImageSourcePropType => {
    const images: CategoryImageMap = {
        1: require('../../assets/vehicules.png'),
        2: require('../../assets/properties.png'),
        3: require('../../assets/furniture.png'),
        4: require('../../assets/mobile.png'),
        5: require('../../assets/electronics.png'),
        6: require('../../assets/fashion.png'),
        7: require('../../assets/pets.png'),
        8: require('../../assets/kids.png'),
        9: require('../../assets/sports.png'),
        10: require('../../assets/hobbies.png'),
        11: require('../../assets/jobs.png'),
        12: require('../../assets/business.png'),
        13: require('../../assets/services.png'),
        default: require('../../assets/default.png'),
    };

    return images[categoryId] || images.default;
};