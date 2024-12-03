export function Table({ title, headers, rowData }) {
  return (
    <div className="rounded-sm border px-5 pt-6 text-white pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-white">{title}</h4>

      <div className="flex flex-col">
        {/* Table headers */}
        <div className={`grid grid-cols-${headers.length} rounded-sm bg-meta-4 sm:grid-cols-${Math.min(headers.length, 5)}`}>
          {headers.map((header, index) => (
            <div
              className={`${index !== 0 && "text-center"} p-2.5 xl:p-5`}
              key={header.key} // Make sure each header is uniquely identified
            >
              <h5 className="text-sm font-medium uppercase xsm:text-base">{header.name}</h5>
            </div>
          ))}
        </div>

        {/* Table rows */}
        {rowData.map((row, key) => (
          <div
            className={`grid grid-cols-${headers.length} sm:grid-cols-${Math.min(headers.length, 5)} ${
              key === rowData.length - 1 ? "" : "border-b border-strokedark"
            }`}
            key={key}
          >
            {headers.map((header) => {
              const value = row[header.key]; // Access the row data dynamically using the header key

              return (
                <div
                  className={`flex items-center justify-center p-2.5 xl:p-5`}
                  key={header.key} // Make sure each column is uniquely identified
                >
                  {/* Render content based on column data */}
                  {header.isImage ? (
                    <img src={value} alt={header.name} className="flex-shrink-0" />
                  ) : (
                    <p className={`text-white ${header.customClass || ""}`}>{value}</p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
