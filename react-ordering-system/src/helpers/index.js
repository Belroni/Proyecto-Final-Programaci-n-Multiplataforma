export const Moneyformat = amount => {
    return amount.toLocaleString('em-US', {
        style: 'currency',
        currency: 'USD'
    })
}