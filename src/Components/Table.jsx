

const Table = ({item, index}) => {
    console.log(item);
    return (
        <tr className=" shadow text-gray-200 border">
            <td className="shadow  border text-center">{index}</td>
            <td className="shadow  border text-center">{item.amount}.00 TK</td>
            <td className="shadow  border text-center">{item.pen_amount}.00 TK</td>
            <td className="shadow  border text-center">{item.exdate}</td>
            <td className="shadow  border text-center">{item.date}</td>
        </tr>
    );
};

export default Table;