import shallowequal from 'shallowequal'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Platform, View, ListView, Text, StyleSheet, InteractionManager, TouchableHighlight, ActivityIndicator} from 'react-native'
import AndroidProgress from 'ProgressBarAndroid'
import * as balloonsActionCreators from '../actions/balloons/actions'
import * as balloonActionCreators from '../actions/balloon/actions'
import {MainRouter} from '../constants/router'

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
    this.state = {
      results: {},
      isLoading: false,
      dataSource: this.dataSource.cloneWithRows(this.props.results),
      page_info: {
        current_page: 0,
        next_page: 0
      }
    }
  }
  //
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props)
    const shouldUpdate =
      !shallowequal(this.props, nextProps) ||
      !shallowequal(this.state, nextState)
    return shouldUpdate
  }

  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.actions.balloonsActions.fetchStuffs(this.props.page_info.current_page)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.dataSource.cloneWithRows(nextProps.results)
    })
  }

  goToBalloonDetail (id) {
    const route = MainRouter.getBalloonRoute(id)
    InteractionManager.runAfterInteractions(() => {
      this.props.actions.balloonActions.fetchStuff(id)
      this.props.navigator.push({ id: 'PageTwo', passProps: {id: 1}})
    })

  }

  handleMoreBalloons() {
    // console.log(this.props)
		this.props.actions.balloonsActions.fetchStuffs(this.props.page_info.next_page)
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
					{Platform.OS === 'ios' ? <ActivityIndicator /> : <AndroidProgress styleAttr="Normal"/>}
				</View>
			)
		} else {
      if (this.state.page_info.next_page !== null) {
        footer = (
          <TouchableHighlight
            style={styles.footer}
            underlayColor="#991111"
            onPress={() => this.handleMoreBalloons()}>
            <Text style={styles.moreButtonText}>Load more</Text>
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
    paddingTop: 0
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
    results: state.balloonstest.items,
    isLoading: state.balloonstest.isLoading,
    page_info: state.balloonstest.page_info
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      balloonsActions: bindActionCreators(balloonsActionCreators, dispatch),
      balloonActions: bindActionCreators(balloonActionCreators, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BalloonListView)
