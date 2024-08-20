function kgTobs(weight: number | string) {
    if (typeof weight === 'number')
        return weight * 2.2
    else 
        return parseInt(weight) * 2.2
}

kgTobs(1)
kgTobs('10kg')