const json1 = {
    "payload": [
        {
            "data": [
                [
                    {
                        "name": "Handbag",
                        "url": "https://example.com/products/handbag",
                        "images": {
                            "small": "https://example.com/products/handbag/images/small.png",
                            "medium": "https://example.com/products/handbag/images/medium.png",
                            "large": "https://example.com/products/handbag/images/large.png"
                        },
                        "color": "black",
                        "price": "$50.00"
                    }
                ],
                [
                    {
                        "name": "Shoes",
                        "url": "https://example.com/products/shoes",
                        "images": {
                            "small": "https://example.com/products/shoes/images/small.png",
                            "medium": "https://example.com/products/shoes/images/medium.png",
                            "large": "https://example.com/products/shoes/images/large.png"
                        },
                        "color": "red",
                        "price": "$35.00"
                    }
                ]
            ]
        }
    ]
};

const result1 = [
    [
        { type: 'TEXT', value: 'Handbag' },
        { type: 'URL', value: 'https://example.com/products/handbag' },
        { type: 'IMAGE', value: 'https://example.com/products/handbag/images/medium.png' },
        { type: 'TEXT', value: '$50.00' }
    ],
    [
        { type: 'TEXT', value: 'Shoes' },
        { type: 'URL', value: 'https://example.com/products/shoes' },
        { type: 'IMAGE', value: 'https://example.com/products/shoes/images/medium.png' },
        { type: 'TEXT', value: '$35.00' }
    ]
];

const json2 = [
    [
        {
            "product_id": "000001",
            "meta": {
                "en_US": {
                    "product_name": "Handbag",
                    "product_urls": ["https://example.com/products/handbag"],
                    "product_image_small": "https://example.com/products/handbag/images/small.png",
                    "product_image_medium": "https://example.com/products/handbag/images/medium.png",
                    "product_image_large": "https://example.com/products/handbag/images/large.png",
                    "product_price_cents": 5000,
                    "product_custom_attributes": {
                        "product_price_string": "$50.00",
                        "product_color": "black"
                    }
                }
            }
        },
        {
            "product_id": "000002",
            "meta": {
                "en_US": {
                    "product_name": "Shoes",
                    "product_urls": ["https://example.com/products/shoes"],
                    "product_image_small": "https://example.com/products/shoes/images/small.png",
                    "product_image_medium": "https://example.com/products/shoes/images/medium.png",
                    "product_image_large": "https://example.com/products/shoes/images/large.png",
                    "product_price_cents": 3500,
                    "product_custom_attributes": {
                        "product_price_string": "$35.00",
                        "product_color": "red"
                    }
                }
            }
        }
    ]
];

const result2 = [
    [
        { type: 'TEXT', value: 'Handbag' },
        { type: 'URL', value: 'https://example.com/products/handbag' },
        { type: 'IMAGE', value: 'https://example.com/products/handbag/images/medium.png' },
        { type: 'TEXT', value: '$50.00' }
    ],
    [
        { type: 'TEXT', value: 'Shoes' },
        { type: 'URL', value: 'https://example.com/products/shoes' },
        { type: 'IMAGE', value: 'https://example.com/products/shoes/images/medium.png' },
        { type: 'TEXT', value: '$35.00' }
    ]
];

class processCarouselService {

    //pick nest obj value dynamically
    getObjConfig(obj, str) {
        const map = str.split('.');
        let val = obj;
        for (const key of map) {
            val = val[key];
            if (!val) {
                return null;
            }
        };
        return val;
    }
    processCarouselJSON(json, config) {
        const carouselData = [];
        const products = this.getObjConfig(json, config.products);
        if (!products || !Array.isArray(products)) {
            return [];
        }
        for (const product of products) {
            const carouselSet = []
            for (const carousel of config.carouselMap) {
                carouselSet.push({
                    type: carousel.type,
                    value: this.getObjConfig(product, carousel.key)
                })
            }
            carouselData.push(carouselSet);
        }
        return carouselData;
    };
}
const TYPES = {
    text: 'TEXT',
    url: 'URL',
    img: 'IMAGE'
}
const config1 = {
    products: 'payload.0.data',
    carouselMap: [
        {
            type: TYPES.text,
            key: '0.name'
        },
        {
            type: TYPES.url,
            key: '0.url'
        },
        {
            type: TYPES.img,
            key: '0.images.medium'
        },
        {
            type: TYPES.text,
            key: '0.price'
        },
    ]
}
const config2 = {
    products: '0',
    carouselMap: [
        {
            type: TYPES.text,
            key: 'meta.en_US.product_name'
        },
        {
            type: TYPES.url,
            key: 'meta.en_US.product_urls.0'
        },
        {
            type: TYPES.img,
            key: 'meta.en_US.product_image_medium'
        },
        {
            type: TYPES.text,
            key: 'meta.en_US.product_custom_attributes.product_price_string'
        },
    ]
}
const carouselSerivce = new processCarouselService();
console.log(carouselSerivce.processCarouselJSON(json1, config1));
console.log(carouselSerivce.processCarouselJSON(json2, config2));