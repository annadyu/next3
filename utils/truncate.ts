
 export function truncate(str:string, maxLength:number) {
  if (str.length <= maxLength) return str;
  const truncated = str.slice(0, maxLength);
  return truncated.slice(0, truncated.lastIndexOf(' ')) + '...';
}

//  function truncate(str, maxLength) {
//     return (str.length > maxLength) ?
//     str.slice(0,maxLength-1) +  '…' : str;
//   }

export default truncate