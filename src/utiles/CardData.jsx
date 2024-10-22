import React, { createContext, useState } from 'react'

export const cardData = createContext()

const CardData = (props) => {

    const [data, setdata] = useState(
        [
            {
                id: 'pack1',
                internet: {
                    Provider: 'Telus',
                    Price: 60,
                    title: 'Internet 250/250'
                },
                mobility: {
                    Provider: 'Rogers',
                    Price: 45,
                    title: '100GB +US/CAN Calling Free',
                    note: true,
                }

            },
            {
                id: 'pack2',
                internet: {
                    Provider: 'Telus',
                    Price: 70,
                    title: 'Internet 1GBPS'
                },
                mobility: {
                    Provider: 'Rogers',
                    Price: 45,
                    title: '100GB+ Canadawide Calling Free',
                    note: true,
                }

            },
            {
                id: 'pack3',
                internet: {
                    Provider: 'Telus',
                    Price: 75,
                    title: '⁠Internet 1.5 GBPS'
                },
                mobility: {
                    Provider: 'Koodo',
                    Price: 34,
                    title: '50GB+ Canada Calling (1000 International Minutes)',
                    note: false,
                }

            },
            {
                id: 'pack4',
                internet: {
                    Provider: 'Telus',
                    Price: 80,
                    title: 'Internet 3GBPS'
                },
                mobility: {
                    Provider: 'Koodo',
                    Price: 54,
                    title: '60GB+Canada Calling (1000 International Mins)',
                    note: false,
                }

            },
            {
                id: 'pack5',
                internet: {
                    Provider: 'Rogers',
                    Price: 70,
                    title: 'Internet 250/250'
                },
                mobility: {
                    Provider: 'Fido',
                    Price: 39,
                    title: '50 GB Data+Canadawide Calling',
                    note: false,
                }

            },
            {
                id: 'pack6',
                internet: {
                    Provider: 'Rogers',
                    Price: 75,
                    title: 'Internet 500/500'
                },
                mobility: {
                    Provider: 'Fido',
                    Price: 45,
                    title: '75 GB Data+ Canadawide Calling',
                    note: false,
                }

            },
            {
                id: 'pack7',
                internet: {
                    Provider: 'Rogers',
                    Price: 80,
                    title: 'Internet 1GBPS'
                },
                mobility: {
                    Provider: 'Telus',
                    Price: 50,
                    title: '100GB Data + Canada-wide Calling (Students Only)',
                    note: true,
                }

            },
            {
                id: 'pack8',
                internet: {
                    Provider: 'Rogers',
                    Price: 90,
                    title: 'Internet 1.5GBPS'
                },
                mobility: {
                    Provider: 'Telus',
                    Price: 65,
                    title: '75GB+Unlimited with telus Internet',
                    note: true,
                }

            },
            // {
            //     id: 'pack9',
            //     mobility: {
            //         Provider: 'Telus',
            //         Price: 80,
            //         title: '150GB+Unlimited US/CAN Calling Free',
            //         note: true,
            //     }

            // },
            // {
            //     id: 'pack10',
            //     mobility: {
            //         Provider: 'Telus',
            //         Price: 105,
            //         title: '200GB+Unlimited US/CAN Calling free',
            //         note: true,
            //     }

            // },

        ]
    )

    return (
        <cardData.Provider value={[data, setdata]}>
            {props.children}
        </cardData.Provider>
    )
}

export default CardData