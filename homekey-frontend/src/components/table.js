export function Table({ title, headers, rowData }) {
  return (
    <div className="rounded-sm border px-5 pt-6 text-white pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-white">{title}</h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-meta-4 sm:grid-cols-5">
          {headers.map((header, index) => {
            return (
              <div className={`${index !== 0 && "text-center"} p-2.5 xl:p-5`}>
                <h5 className="text-sm font-medium uppercase xsm:text-base">{header.name}</h5>
              </div>
            );
          })}
        </div>

        {rowData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === rowData.length - 1 ? "" : "border-b border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt="Brand" />
              </div>
              <p className="hidden text-white sm:block">{brand.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
