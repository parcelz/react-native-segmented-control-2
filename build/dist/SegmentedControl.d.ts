import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
export declare type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
declare type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
interface SegmentedControlProps {
    style?: CustomStyleProp;
    tabs: any[];
    width?: number;
    initialIndex?: number;
    activeTextColor?: string;
    activeTabColor?: string;
    tabStyle?: CustomStyleProp;
    textStyle?: CustomTextStyleProp;
    onChange: (index: number) => void;
}
declare const SegmentedControl: React.FC<SegmentedControlProps>;
export default SegmentedControl;
