import { useMemo } from "react";
import {
  TableHeaderGenerator,
  TableHeaderGeneratorProps,
} from "../components/TableHeaderGenerator";
import { useAxios, useAxiosProps } from "../hooks/useAxios";
import studentTH from "../utils/studentTH";
import { Table, TableBody, TableHeader } from "../components/Table";

const axiosRequest = {
  method: "GET",
  url: "http://localhost:9192/api/students",
} as useAxiosProps;

export const Home = () => {
  const { loading, data, error }: any = useAxios(axiosRequest);
  //   const search = "test";

  const studentTableHeader: Array<TableHeaderGeneratorProps> = useMemo(
    () => studentTH,
    []
  );

  const handlerStudentActionClick = (action: any) => {
    console.log(action)
  }

  return (
    <section>
      <Table>
        <TableHeader>
          <TableHeaderGenerator th={studentTableHeader} />
        </TableHeader>
        <TableBody
          data={data}
          header={studentTableHeader}
          shouldDisplayButton={{
            viewBtn: true,
            editBtn: true
          }}
          buttonFunction={handlerStudentActionClick}
        />
      </Table>
    </section>
  );
};
