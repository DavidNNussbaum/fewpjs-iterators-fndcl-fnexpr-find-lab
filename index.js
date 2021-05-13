const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ] 
  superbowlWin = (record) => {
    let result = record.find( rec => rec.result === "W" )
    return !!result ? result.year : undefined
  }
console.log(superbowlWin(record))

 