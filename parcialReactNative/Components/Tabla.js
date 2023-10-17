import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Tabla extends Component {
  constructor(props){
    super(props);
    this.state = {
      HeadTable: ['nombre', 'apellido', 'edad','celular'],
      DataTable: [
        ['Juan','Gil','15','1234'],
        ['Juan','Gil','15','1234'],
        ['Juan','Gil','15','1234'],
        ['Juan','Gil','15','1234'],
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.containet} >
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} />
          <Rows data={state.DataTable} textStyle={styles.TableText} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  }
});