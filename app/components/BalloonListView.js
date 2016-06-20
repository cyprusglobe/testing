import shallowequal from 'shallowequal'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, View, ListView, Text, StyleSheet, InteractionManager, TouchableHighlight, ActivityIndicatorIOS} from 'react-native'
import AndroidProgress from 'ProgressBarAndroid'
import * as balloonActionCreators from '../actions/balloonActions'
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'
import BalloonDetailView from './BalloonDetailView'

class BalloonListView extends Component {
  constructor(props) {
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    console.log(this.props)
    this.state = {
      items: [],
      isLoading: false,
      dataSource: this.dataSource.cloneWithRows(this.props.balloons),
      page_info: {
        current_page: 0,
        total_count: 0,
        number_of_pages: 0
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate =
      !shallowequal(this.props, nextProps) ||
      !shallowequal(this.state, nextState)
    return shouldUpdate
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.fetchAndSetBalloonsWithPage(1)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.dataSource.cloneWithRows(nextProps.balloons)
    })
  }

  goToBalloonDetail (id) {
    Actions.balloons_detail({balloon_detail: {id: id}})
  }

  handleMoreBalloons() {
		this.props.fetchAndSetBalloonsWithPage(1)
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
      <View>
        <TouchableHighlight onPress={()=> this.goToBalloonDetail(balloon.id)}>

           <View style={styles.container}>
             <Image
                 source={{
                   uri: balloon.photos_url + '/300x'
                 }}
                 style={styles.thumbnail} />
             <View style={styles.rightContainer}>
              <Text style={styles.title}>{balloon.balloon_name}</Text>
              <Text style={styles.author}>{balloon.reg_num}</Text>
             </View>
           </View>
         </TouchableHighlight>
         <View style={styles.separator} />
       </View>

    )
  }

  render() {
    const isLoading = this.props.isLoading
    if (isLoading) {
			footer = (
				<View style={styles.footer}>
					<AndroidProgress styleAttr="Normal"/>
				</View>
			)
		} else {
      if (1 < 3) {
        footer = (
          <TouchableHighlight
            style={styles.footer}
            underlayColor="#991111"
            onPress={() => this.handleMoreBalloons()}>
            <Text style={styles.moreButtonText}>Show more</Text>
          </TouchableHighlight>
        )
      } else {
        footer = null
      }
    }
    return (
      <View style={styles.viewContainer}>
        <ListView
          removeClippedSubviews={true}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
          style={styles.listView}
        />
        {footer}
        </View>
    )
  }
}

var styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingTop: 64
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    thumbnail: {
      width: 53,
      height: 81,
      marginRight: 10,
    },
    rightContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
    },
    author: {
      color: '#656565',
    },
   separator: {
      height: 1,
      backgroundColor: '#dddddd',
    },
    listView: {
      backgroundColor: '#F5FCFF',
    },
    moreButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold'
    },
    footer: {
        padding: 20,
        flexDirection: 'column',
        backgroundColor: '#E62117',
        alignItems: 'center',
    },
})

function mapStateToProps(state) {
  console.log(state)
  return {
    balloons: state.balloons.items,
    isLoading: state.balloons.isLoading
    // page_info: {
    //   total_count: state.balloons.page_info.total_count,
    //   number_of_pages: state.balloons.page_info.number_of_pages,
    //   current_page: state.balloons.page_info.current_page
    // }
  }
}
export default connect(mapStateToProps, balloonActionCreators)(BalloonListView)
