export function coinFormat(value: number) {
    const formatedCoin = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        }
    ).format(value)

    return formatedCoin
}