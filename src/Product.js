import React from 'react'
const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
})

export default ({ index, name, price, description, image }) => (
    <tr>
        {/*<td>
            <img src={image} />
        </td>*/}
        <th>{name}</th>
        <td>{formatter.format(price)} </td>
        <td>{description ? description : <em>keine Angaben</em>}</td>
    </tr>
)
