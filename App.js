/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import { changeCount } from './actions/counts';
import { bindActionCreators } from 'redux';

class App extends Component {

  // console.log("Props =>",this.props)
  increment = () => {
    let { count, actions } = this.props;
    count.count++;
    actions.changeCount(count.count);
  }

  decrement = () => {
    let { count, actions } = this.props;
    count.count--;
    actions.changeCount(count.count);
  }

  textColor = (count) => {
    if (count === 0) {
      return 'black';
    }
    else if (count > 0) {
      return 'green';
    }
    else {
      return '#ff5733';
    }
  }

  render() {
    const { count } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
          <Text style={{ textAlign: 'center', fontSize: 28 }}>Redux Tutorial</Text>
          <View style={{ marginTop: 50, height: "20%", width: "25%", justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderRadius: 12, borderColor: 'blue' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: this.textColor(count.count) }}>{count.count}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#ff5733" }]} onPress={this.decrement}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#6495ED" }]} onPress={this.increment}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderWidth: 0

  },
  button: {
    marginTop: 10,
    padding: 10,
    width: 55,
    borderRadius: 15,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps = state => ({
  count: state.count
});

const ActionCreators = Object.assign(
  {},
  changeCount,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({changeCount}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
