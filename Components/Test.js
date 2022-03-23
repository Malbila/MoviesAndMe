import React from "react";
import { StyleSheet, View, Platform, Animated, Easing, Dimensions, PanResponder  } from "react-native";
//import HelloWorld from './HelloWorld'

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //topPosition: new Animated.Value(0),
            //leftPosition: new Animated.Value(0)
            topPosition: 0,
            leftPosition: 0,
        }

        var { height, width} = Dimensions.get('window');
        this.pandResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                let touches = evt.nativeEvent.touches
                if(touches.length == 1) {
                    this.setState({
                        topPosition: touches[0].pageY - height/2,
                        leftPosition: touches[0].pageX - width/2
                    })
                }
             }
        })
    }

    // componentDidMount() {
    //     Animated.parallel([
    //       Animated.spring(
    //         this.state.topPosition,
    //         {
    //           toValue: 100,
    //           tension: 8,
    //           friction: 3
    //         }
    //       ),
    //       Animated.timing(
    //         this.state.leftPosition,
    //         {
    //           toValue: 100,
    //           duration: 5000,
    //           easing: Easing.elastic(2)
    //         }
    //       )
    //     ]).start()
    //   }




        // Components/Test.js

    // componentDidMount() {
    //     Animated.sequence([
    //     Animated.spring(
    //         this.state.topPosition,
    //         {
    //         toValue: 100,
    //         tension: 8,
    //         friction: 3
    //         }
    //     ),
    //     Animated.timing(
    //         this.state.topPosition,
    //         {
    //         toValue: 0,
    //         duration: 1000,
    //         easing: Easing.elastic(2)
    //         }
    //     )
    //     ]).start()
    // }
    // componentDidMount() {
    //     Animated.decay(
    //     this.state.topPosition,
    //     {
    //         velocity: 0.8,
    //         deceleration: 0.997,
    //     }
    //     ).start();
    // }

    // componentDidMount() {
    //     Animated.spring(
    //     this.state.topPosition,
    //     {
    //         toValue: 100,
    //         speed: 4,
    //         bounciness: 30
    //     }
    //     ).start();
    // }

    // componentDidMount() {
    //     Animated.timing(             //Animated.spring()
    //         this.state.topPosition,
    //         {
    //             toValue: 100,
    //             duration: 3000,
    //             easing: Easing.linear  //Easing.back(),  Easing.elastic(2), Easing.bounce
    //         }
    //     ).start()
    // }

    render() {
        return (
            <View style={styles.main_container}>
                {/* <View style={styles.subview_container}>
                </View> */}
                <View
                { ...this.pandResponder.panHandlers }
                style={[styles.animation_view, {top: this.state.topPosition, left: this.state.leftPosition }]}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subview_container: {
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
                height: 100,
                width: 50
            },
            android: {
                backgroundColor: 'blue',
                height: 100,
                width: 200
            }
        })
    },
    animation_view: {
        backgroundColor: 'red',
        width: 100,
        height: 100
    }
})

export default Test