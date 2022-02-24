import React from 'react'

const Table_w3 = ({pp_data_users}) => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>family</th>
              <th>firstName</th>
              <th>title</th>
              <th>image</th>
              
            </tr>

            {pp_data_users.map((ppp_item) => (
              <tr key={ppp_item.id}>
                <td>{ppp_item.family}</td>
                <td>{ppp_item.firstName}</td>
                <td>{ppp_item.title}</td>
                <td><img src={ppp_item.imageUrl}/></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

export default Table_w3