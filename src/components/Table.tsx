import { ReactNode } from "react";
import { FaEdit, FaEye } from "react-icons/fa";

type TableProps = {
  children: ReactNode;
};

export const Table = ({ children }: TableProps) => (
  <table className="table table-bordered table-hover shadow">{children}</table>
);

export const TableHeader = ({ children }: TableProps) => (
  <thead>
    <tr className="text-center">{children}</tr>
  </thead>
);

type TableBodyProps = {
  data: Array<any>;
  header: Array<any>;
  shouldDisplayButton?: {
    viewBtn?: boolean;
    editBtn?: boolean;
    deleteBtn?: boolean;
  };
  buttonFunction?: (action: { type: string; id: number }) => void;
};

export const TableBody = ({
  data,
  header,
  shouldDisplayButton,
  buttonFunction,
}: TableBodyProps) => (
  <tbody className="text-center">
    {data?.map((item: any) => {
      return (
        <tr key={item.id}>
          {header.map((th) => (
            <td key={th.column}>{item[th.column] ? item[th.column] : ""}</td>
          ))}
          {}
          {shouldDisplayButton && buttonFunction ? (
            <>
              {shouldDisplayButton.viewBtn && (
                <td className="mx-2">
                  <button
                    type="button"
                    onClick={() =>
                      buttonFunction!({ type: "view", id: item.id })
                    }
                    className="btn btn-info"
                  >
                    <FaEye />
                  </button>
                </td>
              )}
              {shouldDisplayButton.editBtn && (
                <td className="mx-2">
                  <button
                    type="button"
                    onClick={() =>
                      buttonFunction!({ type: "edit", id: item.id })
                    }
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </button>
                </td>
              )}
            </>
          ) : null}
        </tr>
      );
    })}
  </tbody>
);
