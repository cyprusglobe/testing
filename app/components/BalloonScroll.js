
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ListView, Text, StyleSheet, InteractionManager, TouchableHighlight} from 'react-native'
import * as balloonActionCreators from '../actions/balloonActions'
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'

class BalloonScroll extends Component {
  constructor(props) {
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      balloons: {
        items: []
      },
      isLoading: false,
      dataSource: this.dataSource.cloneWithRows(this.props.balloons.items),
      page: 0
    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.fetchAndSetBalloonsWithPage(0)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.dataSource.cloneWithRows(nextProps.balloons.items)
    })
  }

  handleMore() {
		this.props.fetchAndSetBalloonsWithPage(this.props.page+=20)
	}

  renderLoading() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    )
  }

  _renderRow(balloon) {
    return (
      <View style={styles.container} key={balloon.id}>
          <Text style={styles.title}>{balloon.balloon_name}</Text>
          <Text style={styles.year}>{balloon.reg_num}</Text>
          <Button  onPress={() => Actions.balloon_detail({data: balloon})}>Fuck</Button>
      </View>
    )
  }

  render() {
    footer = (
      <TouchableHighlight
        style={styles.footer}
        underlayColor="#991111"
        onPress={() => this.handleMore()}>
        <Text style={styles.moreButtonText}>Show more</Text>
      </TouchableHighlight>
    )
      return (
        <View style={styles.container}>
          <ListView
            removeClippedSubviews={true}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this._renderRow(rowData)}
            style={styles.listView}
            contentInset={{top: 0}}
            automaticallyAdjustContentInsets={false}
          />
          {footer}
          </View>
      )
    }
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  footer: {
		padding: 15,
		flexDirection: 'row',
		backgroundColor: '#E62117',
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
  rightContainer: {
    flex: 1,
  },
  moreButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#F5FCFF',
  },
})

function mapStateToProps(state) {
  return {
    balloons: state.balloon.balloons,
    isLoading: state.balloon.isLoading,
    page: state.balloon.page
  }
}
export default connect(mapStateToProps, balloonActionCreators)(BalloonScroll)
