import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Import useParams
import { fetchData } from "../redux/features/posisiSlice";

const ListHead = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posisi.data);

  const { permalink } = useParams();
  
  useEffect(() => {
    if (permalink) {
      dispatch(fetchData(permalink));
    }
  }, [dispatch, permalink]);

  console.log(data);

  return (
    <div className="flex flex-col gap-4">
      {data.nama_posisi ? (
        <p>{data.nama_posisi}</p>
      ) : (
        <p>Loading data for {permalink}...</p>
      )}
    </div>
  );
};

export default ListHead;
