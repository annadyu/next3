import { Pagination } from "antd";

const QueryPagination = () => {
  return (
    <div className="flex h-full justify-center mt-3 align-bottom">
      <Pagination defaultCurrent={6} total={500} />
    </div>
  );
};

export default QueryPagination;
