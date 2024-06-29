
// Bold Text : [ward](BOLD-TEXT)
// Link Text : [here](LINK-TEXT,https://www.example.com) 
// Background Text : [background](BACKGROUND-TEXT) 


const blogPost = [
    {
        "id": 1,
        "imageURL": "blog-Id-1.webp",
        "link": "how-to-create-custom-svg-icons-in-react",
        "title": "How to create custom SVG icons in React",
        "description": "In this article, we will learn how to create custom SVG icons in React.",
        "content": [
            {
                "type": "date",
                "content": "2024-06-13"
            },
            {
                "type": "title",
                "content": "Streamlining SVG Usage in React Native Applications"
            },
            {
                "type": "header",
                "content": "Introduction"
            },
            {
                "type": "paragraph",
                "content": "When developing a full-stack React Native application, incorporating custom SVGs is often necessary for a polished user interface. However, managing a large number of SVGs can become cumbersome and lead to unmanageable code. In this article, I will share an efficient approach to handling SVGs in React Native, ensuring your code remains clean and maintainable."
            },


            {
                "type": "header",
                "content": "React Native SVGs"
            },
            {
                "type": "paragraph",
                "content": "While developing my full-stack React Native application, I encountered a need to use custom SVGs throughout the app. The initial approach of installing the [react-native-svg](BACKGROUND-TEXT) package and using SVGs directly in the code looked something like this:"
            },
            {
                "type": "code",
                "content": `npm install react-native-svg`
            },
            {
                "type": "paragraph",
                "content": "then using the SVG directly in the code as:"
            },
            {
                "type": "code",
                "content":
`// App.js
import React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

    const MySvgComponent = () => (
        <Svg width="100" height="100" viewBox="0 0 100 100">
            <Path d="M10 10 H 90 V 90 H 10 Z" fill="none" stroke="black" />
        </Svg>
    );

    const App = () => {
        return (
            <View>
                <MySvgComponent />
            </View>
        );
    };

export default App;`
            },
            {
                "type": "paragraph",
                "content": "However, when the number of SVGs in an application grows beyond a handful, creating individual components for each SVG becomes impractical and leads to messy, unmanageable code. So, what’s the solution? How can we utilize the [react-native-svg](BACKGROUND-TEXT) package more efficiently and maintain clean, readable code?"
            },
            {
                "type": "header",
                "content": "The Solution: A Custom SVG Component"
            },
            {
                "type": "paragraph",
                "content": "The key is to create a custom component that accepts parameters such as strokeWidth, strokeColor, fill, width, and height. This component will use the SvgXml function from react-native-svg to dynamically render SVGs based on these parameters."
            },
            {
                "type": "paragraph",
                "content": "Here’s how you can create such a component:"
            },
            {
                "type": "code",
                "content": 
`import { SvgXml } from "react-native-svg";
import svgData from "../../assets/images/SVG/SvgStorage";
                
/**
 * Renders an SVG component based on the provided parameters.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.svgKey - The key to identify the SVG markup in the svgData object.
 * @param {number} props.width - The width of the SVG component.
 * @param {number} props.height - The height of the SVG component.
 * @param {string} props.fill - The fill color of the SVG component.
 * @param {string} props.stroke - The stroke color of the SVG component.
 * @param {number} props.strokeWidth - The stroke width of the SVG component.
 * @returns {JSX.Element} - The rendered SVG component.
 */
export default function SvgComponent({ svgKey, width, height, fill, stroke, strokeWidth }) {
    const svgMarkup = svgData[svgKey];
    const svgProps = { width, height, fill, stroke, strokeWidth };
                
        return <SvgXml xml={svgMarkup} {...svgProps} />;
}`
            },
            {
                "type": "header",
                "content": "Creating the svgData File"
            },
            {
                "type": "paragraph",
                "content": "Next, we need a file to store our SVGs as JavaScript objects. This file will export an object where each key corresponds to a unique SVG. Here’s an example:"
            },
            {
                "type": "code",
                "content": 
`const svgData = {

    HomeSVG: '<Svg viewBox="0 0 100 100">
                <Path d="M10 10 H 90 V 90 H 10 Z" />
             </Svg>',

    ChatSVG: '<Svg viewBox="0 0 100 100">
                <Path d="M10 10 H 90 V 90 H 10 Z" />
             </Svg>',
            }
                  
export default svgData; `
            },
            {
                "type": "paragraph",
                "content": "When creating the svgData file, ensure that the SVG elements do not have predefined attributes for width, height, stroke, or fill, as these will be dynamically applied through our custom component."
            },
            {
                "type": "header",
                "content": "Using the Custom Component"
            },
            {
                "type": "paragraph",
                "content": "With our custom component and svgData file in place, we can now use the component throughout the application like this:"
            },
            {
                "type": "code",
                "content": 
`// App.js
import React from 'react';
import { View } from 'react-native';
import SvgComponent from '../../utils/SvgComponents'

const App = () => {
    return (
    <View>
        <SvgComponent svgKey="HomeSVG" width={60)} 
            height={60} stroke={"#fff"} />
    </View>
    );
};
                
export default App;`
            },
            {
                "type": "header",
                "content": "Handling Complex SVGs"
            },
            {
                "type": "paragraph",
                "content": "One limitation of this approach is handling SVGs with mixed stroke widths and colors. Since our custom component applies these properties to the parent <Svg> element, individual path elements within the SVG cannot have different styles. To overcome this, consider creating specific components for SVGs that require such complexity or extending the custom component to handle more detailed styling logic."
            },
            {
                "type": "paragraph",
                "content": "By following this method, you can manage a large number of SVGs efficiently, maintain clean code, and easily customize SVG properties throughout your React Native application."
            },
            {
                "type": "paragraph",
                "content": "Check out the [react-native-svg-rendo](LINK-TEXT,https://www.npmjs.com/package/react-native-svg-rendo) documentation for a ready package to load SVG."
            },
        ]
    },
    {
        "id": 2,
        "imageURL": "blog-Id-2.webp",
        "link": "how-to-create-responsive-elements-in-react-native",
        "title": "How to create responsive elements in React-Native",
        "description": "In this article, we will learn how to create responsive elements in React-Native.",
        "content": [{
            "type": "date",
            "content": "2024-06-29"
        },
        {
            "type": "title",
            "content": "How to Create Responsive Elements in React Native"
        },
        {
            "type": "header",
            "content": "Introduction"
        },
        {
            "type": "paragraph",
            "content": "Creating responsive elements in React Native is crucial for ensuring your application looks great on a variety of devices. In this article, I'll share tips and best practices for building responsive elements that adapt to different screen sizes and orientations using the [Dimensions](BACKGROUND-TEXT) method from React Native."
        },
        {
            "type": "header",
            "content": "Setting Up the Utility Function"
        },
        {
            "type": "paragraph",
            "content": "First, let's create a utility function for making elements responsive. Start by creating a directory named [utils](BOLD-TEXT), and within that directory, create a file called [NormalizedSize.js](BOLD-TEXT)."
        },
        {
            "type": "header",
            "content": "Importing Dimensions"
        },
        {
            "type": "paragraph",
            "content": "We need to import the [Dimensions](BOLD-TEXT) method from React Native. To avoid passing [Dimensions](BOLD-TEXT) every time we call the function, we'll import it directly into our utility function:"
        },
        {
            "type": "code",
            "content": `import { Dimensions } from 'react-native';`
        },
        {
            "type": "header",
            "content": "Defining Base Guidelines"
        },
        {
            "type": "paragraph",
            "content": "Next, define the base guidelines for width and height. These standards are based on a ~5' screen mobile device:"
        },
        {
            "type": "code",
            "content":
`function normalizedSize() {
    const { width, height } = Dimensions.get('window');
    const guidelineBaseWidth = 350;
    const guidelineBaseHeight = 680;
    //...
}`
        },
        {
            "type": "header",
            "content": "Creating Scaling Methods"
        },
        {
            "type": "header",
            "content": "Horizontal Scaling"
        },
        {
            "type": "paragraph",
            "content": "We'll create a method to scale a given size based on the device width. The width from [Dimensions](BOLD-TEXT) returns the current width size of the used screen. Here's the algorithm for horizontal scaling:"
        },
        {
            "type": "code",
            "content": `scale = (device width / guideline base width) * given size`
        },
        {
            "type": "paragraph",
            "content": "For instance, scaling the number '18' on an iPhone 11 (width of 414px):"
        },
        {
            "type": "code",
            "content": `scale = (414 / 350) * 18 ≈ 21`
        },
        {
            "type": "paragraph",
            "content": "In code, the method looks like this:"
        },
        {
            "type": "code",
            "content": `const scale = size => width / guidelineBaseWidth * size;`
        },
        {
            "type": "header",
            "content": "Vertical Scaling"
        },
        {
            "type": "paragraph",
            "content": "Similarly, we'll create a method for vertical scaling based on the device height. Using the same iPhone 11 (height of 896px):"
        },
        {
            "type": "code",
            "content": `vertical scale = (device height / guideline base height) * given size`
        },
        {
            "type": "paragraph",
            "content": "For instance, scaling the number '18' vertically:"
        },
        {
            "type": "code",
            "content": "vertical scale = (896 / 680) * 18 ≈ 24"
        },
        {
            "type": "paragraph",
            "content": "In code, the method looks like this:"
        },
        {
            "type": "code",
            "content": "const verticalScale = size => height / guidelineBaseHeight * size;"
        },
        {
            "type": "header",
            "content": "Creating the Normalized Scale Method"
        },
        {
            "type": "paragraph",
            "content": "Finally, we'll create a method that provides the best results for responsive scaling across different devices. This method, [normalizedScale](BOLD-TEXT), will take a number to scale, a factor (default is 0.5), and an orientation for scaling."
        },
        {
            "type": "header",
            "content": "Horizontal Orientation"
        },
        {
            "type": "paragraph",
            "content": "For a horizontal orientation, using an iPhone 11 and iPad Pro as examples:"
        },
        {
            "type": "code",
            "content": "normalized scale = given size + ((device width / guideline base width * given size) - given size) * factor"
        },
        {
            "type": "header",
            "content": "iPhone 11:"
        },
        {
            "type": "code",
            "content": "normalized scale = 18 + ((414 / 350 * 18) - 18) * 0.5 ≈ 19"
        },
        {
            "type": "header",
            "content": "iPad Pro:"
        },
        {
            "type": "code",
            "content": "normalized scale = 18 + ((1024 / 350 * 18) - 18) * 0.5 ≈ 35"
        },
        {
            "type": "header",
            "content": "Vertical Orientation"
        },
        {
            "type": "paragraph",
            "content": "For a vertical orientation:"
        },
        {
            "type": "code",
            "content": "normalized scale = given size + ((device height / guideline base height * given size) - given size) * factor"
        },
        {
            "type": "header",
            "content": "iPhone 11:"
        },
        {
            "type": "code",
            "content": "normalized scale = 18 + ((896 / 680 * 18) - 18) * 0.5 ≈ 20"
        },
        {
            "type": "header",
            "content": "iPad Pro:"
        },
        {
            "type": "code",
            "content": "normalized scale = 18 + ((1366 / 680 * 18) - 18) * 0.5 ≈ 27"
        },
        {
            "type": "paragraph",
            "content": "In code, the method looks like this:"
        },
        {
            "type": "code",
            "content": 
`import { Dimensions } from 'react-native';

    function normalizedSize(inputSize, factor = 0.5, orientation = "horizontal") {
        const { width, height } = Dimensions.get('window');
            
        const guidelineBaseWidth = 350;
        const guidelineBaseHeight = 680;
            
        const scale = size => width / guidelineBaseWidth * size;
        const verticalScale = size => height / guidelineBaseHeight * size;
            
        if (orientation === "vertical") {
            return inputSize + (verticalScale(inputSize) - inputSize) * factor;
        }
            
        return inputSize + (scale(inputSize) - inputSize) * factor;
    }
            
export default normalizedSize;`
        },
        {
            "type": "header",
            "content": "Using the Utility Function"
        },
        {
            "type": "paragraph",
            "content": "Now, you can use this function to create responsive elements in your React Native application:"
        },
        {
            "type": "code",
            "content": 
`import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import normalizedSize from '../utils/normalizedSize';
            
    const App = () => {
        return (
            <SafeAreaView>
                <Text style={{ fontSize: normalizedSize(20) }}>Hello World!</Text>
            </SafeAreaView>
        );
    };
            
export default App;`
        },
        {
            "type": "paragraph",
            "content": "By following these steps, you can ensure your React Native application looks great on any device, providing a consistent and responsive user experience. If you are interested you can check the [react-native-normalized-size](LINK-TEXT,https://www.npmjs.com/package/react-native-normalized-size) package for a ready solution."
        }
        ]
    }
]
export default blogPost;