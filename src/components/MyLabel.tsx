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
}

/**
 * Label for user Interation
 */

export const MyLabel = ({
    allCaps = false, 
    color = 'primary',
    label = 'no label', 
    size = 'normal', 
    fontColor
}: MyLabelProps ) => {
  return (
    <span className={`label ${size} 
    ${allCaps&&'allCapsLock'} text-${color} `}
    style = {{color: fontColor}} >
        {label}
    </span>
  )
}
