import React from 'react'

const Table_w3 = ({pp_data_users}) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>family</th>
            <th>firstName</th>
            <th>image</th>
            
          </tr>

          {pp_data_users.map((ppp_item) => (
            <tr key={ppp_item.id}>
              <td>{ppp_item.family}</td>
              <td>{ppp_item.firstName}</td>
              <td>{ppp_item.image}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

export default Table_w3