export const moneyFormat = amount => {
    return amount.toLocaleString('em-US', {
        style: 'currency',
        currency: 'USD'
    })
}