import React, { useState, useEffect } from "react";
import { Text, Animated, Dimensions, TouchableOpacity, } from "react-native";
/**
 * ? Local Imports
 */
import styles, { _containerStyle, _selectedTabStyle, } from "./SegmentedControl.style";
const { width: ScreenWidth } = Dimensions.get("screen");
const SegmentedControl = ({ style, tabs, width, onChange, initialIndex = 0, tabStyle, textStyle, activeTextColor = "#000", activeTabColor = "#fff", }) => {
    const translateValue = (width ? width : ScreenWidth - 35) / tabs.length;
    const [slideAnimation, _] = useState(new Animated.Value(0));
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const handleTabPress = React.useCallback((index) => {
        setCurrentIndex(index);
        onChange && onChange(index);
    }, []);
    useEffect(() => {
        Animated.spring(slideAnimation, {
            toValue: currentIndex * translateValue,
            stiffness: 180,
            damping: 25,
            mass: 1,
            useNativeDriver: true,
        }).start();
    }, [currentIndex]);
    const renderSelectedTab = () => (<Animated.View style={[_selectedTabStyle(tabs, activeTabColor, slideAnimation, width)]}/>);
    const renderTab = (tab, index) => {
        const isActiveTab = currentIndex === index;
        const isTabText = typeof tab === "string";
        return (<TouchableOpacity key={index} activeOpacity={0.5} style={[styles.tab, tabStyle]} onPress={() => handleTabPress(index)}>
        {!isTabText ? (tab) : (<Text numberOfLines={1} style={[
                    styles.textStyle,
                    textStyle,
                    isActiveTab && { color: activeTextColor },
                ]}>
            {tab}
          </Text>)}
      </TouchableOpacity>);
    };
    return (<Animated.View style={[_containerStyle(width), style]}>
      {renderSelectedTab()}
      {tabs.map((tab, index) => renderTab(tab, index))}
    </Animated.View>);
};
export default SegmentedControl;
//# sourceMappingURL=SegmentedControl.js.map