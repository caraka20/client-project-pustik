import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../redux/features/posisiSlice";
import ContentHome from "../components/Content/ContentHome";
import Container from "../components/Container";

const Posisi = () => {
  const dispatch = useDispatch();
  const { permalink } = useParams();
  const data = useSelector((state) => state.posisi.data);
  const error = useSelector((state) => state.posisi.error);

  useEffect(() => {
    if (permalink) {
      dispatch(fetchData(permalink));
    }
  }, [dispatch, permalink]);

  return (
    <Container>
      <ContentHome />
    </Container>
  );
};

export default Posisi;
