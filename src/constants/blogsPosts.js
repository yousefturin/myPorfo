
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
                "content": `
                // App.js
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

                export default App;
                `
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
                "content": `import { SvgXml } from "react-native-svg";
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
                }
                `
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
                "content": `const svgData = {

                    HomeSVG: <Svg viewBox="0 0 100 100">
                    <Path d="M10 10 H 90 V 90 H 10 Z" />
                </Svg>,

                ChatSVG: <Svg viewBox="0 0 100 100">
                    <Path d="M10 10 H 90 V 90 H 10 Z" />
                </Svg>,
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
                "content": `// App.js
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
    }
]
export default blogPost;