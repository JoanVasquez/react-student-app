export interface TableHeaderGeneratorProps {
  column: string;
  label: string;
}

type thList = TableHeaderGeneratorProps[];

export const TableHeaderGenerator: React.FC<{ th: thList }> = ({ th }) => {
  return (
    <>
      {th.map((item: TableHeaderGeneratorProps) => (
        <th key={item.column}>{item.label}</th>
      ))}
    </>
  );
};
