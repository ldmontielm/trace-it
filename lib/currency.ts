import currency from "currency.js"

export const formattedCop = (value: number) => {
    const data = currency(value, {
        symbol: "$",      // Símbolo de la moneda
        decimal: ",",     // Separador decimal
        separator: ".",
        precision: 0
    }).format()
    return data
}