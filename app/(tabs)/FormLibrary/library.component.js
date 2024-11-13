import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';
import { Icon } from '@ui-kitten/components';

export default function LibraryButton({ title, subheader, isImportant, onPress }) {
  const StarIcon = () => (
    <Icon
      name="star"
      style={styles.starIcon}
      fill="#08415C" // Dark blue color for the star icon
    />
  );

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.contentContainer}>
        {/* File Icon Container */}
        <View style={styles.fileIconContainer}>
          {isImportant && <StarIcon />}
          <Image
            style={styles.fileIcon}
            source={require('@/assets/images/file_img.png')} // Replace with your actual file image path
          />
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.subheader}>{subheader}</Text>
        </View>

        {/* Three-dot Menu Icon */}
        <Image
          style={styles.dotsIcon}
          source={require('@/assets/images/3_points_icon.png')} // Replace with your actual three-dot icon path
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fileIconContainer: {
    position: 'relative',
    marginRight: 10,
  },
  fileIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  starIcon: {
    position: 'absolute',
    top: -5,   // Adjusted position for top-left alignment
    left: -5,  // Adjusted position for top-left alignment
    width: 18,
    height: 18,
  },
  textContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#08415C',
    flex: 1,
  },
  subheader: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  dotsIcon: {
    width: 24,
    height: 24,
  },
});
