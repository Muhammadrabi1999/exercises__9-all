{
const purchases = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 3000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'},
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 3000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'},
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 3000, category: 'food'},
    ]},
];


const max = purchases.map(item => ({
    date: item.date,
    count: item.values.length
})).reduce((acc, curr) => acc.count > curr.count ? acc : curr);

const result = max.date;
console.log(result);

}

///9.2

{
    
        const purchases = [
            {id: 1, date: '01.01.2020', values: [
                {id: 1, amount: 2000, category: 'auto'},
                {id: 2, amount: 3000, category: 'food'},
                {id: 3, amount: 300, category: 'beauty'},
            ]},
            {id: 2, date: '03.01.2020', values: [
                {id: 4, amount: 3000, category: 'auto'},
                {id: 5, amount: 30000, category: 'travel'},
            ]},
            {id: 6, date: '04.01.2020', values: [
                {id: 6, amount: 4000, category: 'food'},
            ]},
        ];

        const maxAmount = purchases.map((item =>  ({
            date: item.date,
            amount: item.values.reduce((acc, curr) => acc + curr.amount, 0)
        }))).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr);

        const result_2 = maxAmount.date;
        console.log(result_2);
}

///9.3

{
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
        {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];

    const expensivePurchase = purchases.map(item => item.values)
    .flat()
   .reduce((acc,curr) => acc.amount > curr.amount ? acc : curr);
    console.log(expensivePurchase);
}

///9.4

{
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
        {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];

    const searchMaxCategory = purchases.map(item => item.values)
    .flat()
    .reduce((acc, curr) => {
        const comparisonCategory = acc.find(item => item.category === curr.category)
        if(comparisonCategory === undefined) {
            acc.push({
                category: curr.category,
                amount: curr.amount
            });
        }
        else{
            comparisonCategory.amount += curr.amount
        }
        return acc;
    }, []).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr);

    console.log(searchMaxCategory);
}

///9.5

{
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
        {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];

        const spendAmountInDay = purchases.map(item => item.values)
        .flat()
        .map((item, index, array) => item.amount / array.length).reduce((acc, curr) => acc + curr);
        console.log(spendAmountInDay);
}

///9.6

{
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
        {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];

    const statisticInDay = purchases.map(item => ({
        data: item.date,
        amount: item.values.map(a => a.amount).reduce((acc, curr) => acc + curr)
    }))

    console.log(statisticInDay);
}