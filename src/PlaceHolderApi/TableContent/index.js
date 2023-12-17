
const TableContent = ({ data, handleClick }) => {
    let receivedData = [data]
    return (
        <div>
            <table>
                {
                    receivedData &&
                    receivedData.map((item) => {
                        return (
                            <tr>
                                {/* <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td>{item.company.name}</td>
                                <td>{item.address.street}</td> */}
                                {JSON.stringify(data)}
                            </tr>
                        )
                    })

                }
            </table>
        </div>
    )
}
export default TableContent;