export const Table = <T extends { id: number | string }>(props: {
  rows: T[];
  render: React.FC<T>;
}) => {
  return (
    <table>
      <tbody>
        {props.rows.map((row) => (
          <props.render {...row} key={row.id} />
        ))}
      </tbody>
    </table>
  );
};

{
  /* <Table
  rows={[{ id: 1, name: "shun", age: 26 }]}
  render={(row) => {
    return (
      <tr>
        <td>{row.name}</td>
      </tr>
    );
  }}
/>; */
}
