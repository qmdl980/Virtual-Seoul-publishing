import React, { useState, useEffect, useMemo } from "react";
import PcoDocHeader from "../../../components/layout/PcoDocHeader";
import PcoHeader from "../../../components/layout/PcoHeader";
import PcoNavbar from "../../../components/layout/PcoNavbar";
import util from "../../../utils/util";
import { gql, useQuery, useMutation } from "@apollo/client";
import DetailView from "../../../components/common/table/DetailView";
import TheaterVodList, {
  THEATER_VOD_QUERY,
  columns,
} from "../../../components/theaterVod/TheaterVodList";

const TheaterVodDetailPage = ({ idx }) => {
  const { loading, error, data, refetch } = useQuery(THEATER_VOD_QUERY, {
    variables: { idx: parseInt(idx, 10) },
  });
  const [detail, setDetail] = useState();

  const _read = async (prop) => {
    const hasError = util.hasGQLError(error);
    if (hasError) return;
    setDetail(data.theaterVod);
  };
  useEffect(() => {
    if (loading === false) _read();
  }, [loading]);
  return (
    <>
      <PcoDocHeader title={"TheaterVod"} />
      <div className="wrap">
        <PcoHeader />
        <PcoNavbar />
        <div className="contents">
          <div className="contents__wrap detatil__wrap">
            <DetailView
              columns={columns}
              title="Theater Vod"
              detail={detail}
              pageRouter="/pco"
              // detailData={detailData}
            />
            {/* <PcoUserList pcoIdx={idx} />
            <EventList pcoIdx={idx} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const idx = query.idx;
  // console.log("server idx ::", idx);
  return { props: { idx } };
};

// export default PcoDetail;
export default React.memo(TheaterVodDetailPage);
