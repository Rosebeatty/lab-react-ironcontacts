import React, { Component } from 'react'
import Celeb from './Celeb'

export class Table extends Component {
    constructor(props) {
      super();
        this.state = {
          sortedList: true,
          data: props.data,
          allContacts: props.allContacts,
          addRandom: () => {
            let randomCeleb = Math.floor(Math.random() * this.state.allContacts.length);
            const copiedData = this.state.data;
            copiedData.push(this.state.allContacts[randomCeleb]);
            this.setState({data: copiedData})
        },
          sortName: () => {
            var copiedData = this.state.data;
            var nameSort = !this.state.sortedList;
            nameSort
            ? copiedData.sort((a,b) => {return a.name.localeCompare(b.name) })
            : copiedData.sort((a,b) => {return b.name.localeCompare(a.name) })
              this.setState( {data: copiedData, nameSorted: nameSort} )
        },
          sortPop: () => {
            var copiedData = this.state.data;
            var popSort = !this.state.sortedList;
            popSort
            ? copiedData.sort((a,b) => {return a.popularity - b.popularity })
            : copiedData.sort((a,b) => {return b.popularity - a.popularity }) 
              this.setState( {data: copiedData, nameSorted: popSort} )

            },
        
          deleteCeleb: (index) => {
            var copiedData = this.state.data;
            copiedData.splice(index, 1);
            this.setState({data: copiedData})
        },
    }

    }
    render() {
        return (
        <div>
        <div>
            <button onClick={this.state.addRandom}>Add a random celeb</button>
            <button onClick={this.state.sortName}>Sort by name</button>
            <button onClick={this.state.sortPop}>Sort by popularity</button>
        </div>
            <table>
            <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
                </thead>
                 { 
                this.state.data.map( (aCeleb, index) => {
                return (
                <Celeb
                    key={index} 
                    clickToDelete={ ()=> this.state.deleteCeleb(index) }
                    {...aCeleb}
                />
                ) 
            })
                } 
            </table>
            </div>
        )
    }
}

export default Table
