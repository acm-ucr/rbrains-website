import { Key } from "react";
import { data } from "../data";

const CssGrid = () => {
  return (
    <div className="mx-auto grid max-w-7xl auto-rows-[200px] grid-cols-12 gap-1 p-4">
      {data.map(
        (
          img: { id: Key | null | undefined; image: string | undefined },
          index: any,
        ) => {
          switch (index) {
            case 0:
              return (
                <div
                  key={img.id}
                  className="relative col-span-6 row-span-2 overflow-hidden rounded-xl border-4"
                  style={{ borderColor: "rgba(114,160,199,1)" }}
                >
                  <img
                    src={img.image}
                    alt={`Image ${img.id}`}
                    className="h-full w-full scale-95 transform rounded-lg object-cover"
                  />
                  <div
                    className="absolute bottom-4 right-4 p-2 text-5xl font-extrabold text-white"
                    style={{
                      textShadow:
                        "4px 4px 8px rgba(114, 160, 199, 1), -4px -4px 8px rgba(114, 160, 199, 1)",
                    }}
                  >
                    Psych Behind Music
                  </div>
                </div>
              );

            case 1:
            case 2:
            case 3:
            case 4:
              return (
                <div
                  key={img.id}
                  className="relative col-span-3 overflow-hidden rounded-xl border-4"
                  style={{ borderColor: "rgba(114,160,199,1)" }}
                >
                  <img
                    src={img.image}
                    alt={`Image ${img.id}`}
                    className="h-full w-full scale-95 transform rounded-lg object-cover"
                  />
                </div>
              );

            case 5:
              return (
                <div
                  key={img.id}
                  className="relative col-span-3 row-span-2 overflow-hidden rounded-xl border-4"
                  style={{ borderColor: "rgba(114,160,199,1)" }}
                >
                  <img
                    src={img.image}
                    alt={`Image ${img.id}`}
                    className="h-full w-full scale-95 transform rounded-lg object-cover"
                  />
                </div>
              );

            case 6:
            case 7:
              return null;

            case 8:
            case 9:
              return (
                <div
                  key={img.id}
                  className="relative col-span-3 row-span-2 overflow-hidden rounded-xl border-4"
                  style={{ borderColor: "rgba(114,160,199,1)" }}
                >
                  <img
                    src={img.image}
                    alt={`Image ${img.id}`}
                    className="h-full w-full scale-95 transform rounded-lg object-cover"
                  />
                </div>
              );

            default:
              return (
                <div
                  key={img.id}
                  className="relative col-span-4 overflow-hidden rounded-xl border-4"
                  style={{ borderColor: "rgba(114,160,199,1)" }}
                >
                  <img
                    src={img.image}
                    alt={`Image ${img.id}`}
                    className="h-full w-full scale-95 transform rounded-lg object-cover"
                  />
                </div>
              );
          }
        },
      )}
      <div className="col-span-3 row-span-2 flex flex-col gap-1">
        {[6, 7].map((index) => {
          const img = data[index];
          return (
            <div
              key={img.id}
              className="relative flex-1 overflow-hidden rounded-xl border-4"
              style={{ borderColor: "rgba(114,160,199,1)" }}
            >
              <img
                src={img.image}
                alt={`Image ${img.id}`}
                className="h-full w-full scale-95 transform rounded-lg object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CssGrid;
