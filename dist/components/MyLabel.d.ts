/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Text of the label
     */
    label: string;
    /**
     * Size of the text
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * All caps lock?
     */
    allCaps?: boolean;
    /**
     * Color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Select a Hex color
     */
    fontColor?: string;
    /**
     * Choose de background color
     */
    backgroundColor?: string;
}
/**
 * Label for user Interation
 */
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
