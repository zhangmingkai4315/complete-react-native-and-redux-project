import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {ListView,View} from 'react-native';
import {CardSection,Card,Spinner} from './common';
import ListItem from './ListItem'
class LibraryList extends Component{
  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2)=>r1!=r2
    })
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  renderRow(itemData){
    return <ListItem item={itemData}/>
  }
  render(){
    return (
      <ListView 
      dataSource = {this.dataSource}
      renderRow={this.renderRow}/>
      // </View>
    )
  }
}

const mapStateToProps=state=>{
  return {
    libraries:state.libraries
  }
}
export default connect(mapStateToProps)(LibraryList);
