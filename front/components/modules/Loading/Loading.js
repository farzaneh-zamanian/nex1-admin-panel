import Skeleton from "react-loading-skeleton";
function Loading() {
  return Array(15)
    .fill({})
    .map(() => {
      return (
        <div
          key={Math.random()}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "20px 30px",
            borderRadius: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            width: "250px",
            height:"400px",
            margin: 10,
          }}
        >
  
            <Skeleton width={160} height={200} style={{ marginBottom: 15 }} />

            <Skeleton width={150} height={15} style={{ marginBottom: 15 }} />

            <Skeleton width={100} height={15} style={{ marginBottom: 15 }} />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Skeleton width={30} height={30} style={{ borderRadius: 5 }} />

              <Skeleton width={30} height={30} style={{ borderRadius: 5 }} />
            </div>
        </div>
      );
    });
}

export default Loading;
