import { Key } from "react";
import { data } from "../data";


const CssGrid = () => {
  return (
    <div className="grid grid-cols-12 auto-rows-[200px] gap-1 p-4 max-w-7xl mx-auto">
      {data.map((img: { id: Key | null | undefined; image: string | undefined; }, index: any) => {
        switch (index) {
          case 0:
            return (
              <div
                key={img.id}
                className="col-span-6 row-span-2 relative overflow-hidden rounded-xl border-4"
                style={{ borderColor: "rgba(114,160,199,1)" }}
              >
                <img
                  src={img.image}
                  alt={`Image ${img.id}`}
                  className="w-full h-full object-cover rounded-lg transform scale-95"
                />
                <div
                  className="absolute bottom-4 right-4 text-white text-5xl font-extrabold p-2"
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
                className="col-span-3 relative overflow-hidden rounded-xl border-4"
                style={{ borderColor: "rgba(114,160,199,1)" }}
              >
                <img
                  src={img.image}
                  alt={`Image ${img.id}`}
                  className="w-full h-full object-cover rounded-lg transform scale-95"
                />
              </div>
            );

          case 5:
            return (
              <div
                key={img.id}
                className="col-span-3 row-span-2 relative overflow-hidden rounded-xl border-4"
                style={{ borderColor: "rgba(114,160,199,1)" }}
              >
                <img
                  src={img.image}
                  alt={`Image ${img.id}`}
                  className="w-full h-full object-cover rounded-lg transform scale-95"
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
                className="col-span-3 row-span-2 relative overflow-hidden rounded-xl border-4"
                style={{ borderColor: "rgba(114,160,199,1)" }}
              >
                <img
                  src={img.image}
                  alt={`Image ${img.id}`}
                  className="w-full h-full object-cover rounded-lg transform scale-95"
                />
              </div>
            );

          default:
            return (
              <div
                key={img.id}
                className="col-span-4 relative overflow-hidden rounded-xl border-4"
                style={{ borderColor: "rgba(114,160,199,1)" }}
              >
                <img
                  src={img.image}
                  alt={`Image ${img.id}`}
                  className="w-full h-full object-cover rounded-lg transform scale-95"
                />
              </div>
            );
        }
      })}
      <div className="col-span-3 row-span-2 flex flex-col gap-1">
        {[6, 7].map((index) => {
          const img = data[index];
          return (
            <div
              key={img.id}
              className="flex-1 relative overflow-hidden rounded-xl border-4"
              style={{ borderColor: "rgba(114,160,199,1)" }}
            >
              <img
                src={img.image}
                alt={`Image ${img.id}`}
                className="w-full h-full object-cover rounded-lg transform scale-95"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CssGrid;
