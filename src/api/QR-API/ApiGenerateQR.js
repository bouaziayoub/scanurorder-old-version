// Generate QR for each establishment
const idEstablishment = localStorage.getItem("id_establishment");
export const imgQr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${idEstablishment}`;

// Generate QR for each Table

export function qrTable(numTable) {
    const url = encodeURIComponent(`https://scanurorder.com/#/`);
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}${idEstablishment}-${numTable}`;
}

// export function qrTable(idEstablishment, numTable) {

//     const url = encodeURIComponent(`scanurorder.com/#/`);
//     return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}${idEstablishment}-${numTable}`;
// }
