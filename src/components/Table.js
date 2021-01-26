import React, { Component } from 'react'
import axios from 'axios'
import MaterialTable from 'material-table'

export default class DemoTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('https://restcountries.eu/rest/v2/all')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [
      { title: 'Code', field: 'numericCode'},
      { title: 'Name', field: 'name'},
      { title: 'Capital', field: 'capital'},
      { title: 'Region', field: 'region'},
      { title: 'Sub Region', field: 'subregion'},
      { title: 'Population', field: 'population'},
      { title: 'Area', field: 'area'}
    ]
    
    return (
      <>
        <MaterialTable 
          title="Country Details"
          data={this.state.users}
          columns={columns}
          left
          options={{
            headerStyle: {
              backgroundColor: '#8080ff',
              color: '#FFF',
              fontSize: '20px'
            },
            draggable: false,
            pageSize: 10,
            pageSizeOptions: [10,50,100],
            paginationType: 'stepped',
            searchAutoFocus: true,
            maxBodyHeight: 'auto',
          }}
        />
      </>
    )
  }
}

