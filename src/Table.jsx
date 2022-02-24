import React from 'react'

const Table = ({pp_data_users}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {pp_data_users.map((ppp_item) => (
          <tr key={ppp_item.id}>
            <td>{ppp_item.first_name}</td>
            <td>{ppp_item.last_name}</td>
            <td>{ppp_item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table