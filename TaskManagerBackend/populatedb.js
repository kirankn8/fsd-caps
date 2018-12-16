exports.product = function (connection) {

    const data = [
        {
            name: 'Super star pen', img: 'https://papierlabor.de/wp-content/uploads/files/2013/10/super5-fountain-pen-australia.jpg',
            description: 'A Pen sees it all, the thought flow from your head and your heart and it’s the most loyal friend and listener so make sure you choose your pen right and you will make great progress.',
            price: 644
        },
        { name: '1 box PaperClips', img: 'https://i.kinja-img.com/gawker-media/image/upload/s--G6ziJ3GH--/c_scale,f_auto,fl_progressive,q_80,w_800/qovj2ha4yfom0jofrsm6.jpg', description: 'Special feature: Rust proof and Durable, Leaves no marks of binding, No punching or piercing of documents, Holds documents firmly. Re ? Usable. High quality material used.', price: 34 },
        { name: 'Markers', img: 'https://target.scene7.com/is/image/Target/GUEST_4625fc21-b4e0-4fd6-994a-161cfacc9d0f?wid=488&hei=488&fmt=pjpeg', description: 'Marker pen, a felt-tipped pen used for drawing and/or coloring.', price: 23 },
        { name: 'Cardboard', img: 'https://cdn2.bigcommerce.com/n-d57o0b/hintl/products/158/images/394/Cardboard__69254.1387800811.380.500.jpg?c=2', description: 'Heavy Duty Double Wall Carton Craft Paper (23.25 Inches * 15 Inches * 15 Inches), 5 PLY Pack of 5 Packaging Box (Pack of 5 Brown)', price: 55 },
        { name: 'A4 sheet', img: 'https://www.boundtoimpress.com.au/shop/images/large/a4-laminating-pouch-250_LRG.jpg', description: 'A Value for money product. Double sided copying advantage. Minimum machine jamming. Trouble free machine run. Minimum wear & tear to machine due to ideal characteristics. Ideal for Photocopying', price: 63 },
        { name: 'Scale', img: 'https://media.tiffany.com/is/image/Tiffany/60558507_973805_ED?$EcomItemL2$&id=mumrH2&fmt=jpg&fit=constrain,1&wid=1250&hei=1250', description: 'Professional is precision molded for accurate straight line plotting. Its completely transparent clear optical finish allows for exact plotting. Material Acrylic Colour- Clear Dimensions - 525X5 MM', price: 150 },
        {
            name: 'Eraser', img: 'https://dictionary.cambridge.org/images/thumb/eraser_noun_002_12686.jpg?version=4.0.47',
            description: 'Erasers are an essential tool for the charcoal, pastel, and sketch artist. Kneadable erasers mould easily into a multitude of shapes and sizes. these erasers are pliable , yet firm enough to hold their shape while erasing . excellent for removing highlights from charcoal, pastel, and pencil Specifications',
            price: 12
        },
        { name: 'Sharpner', img: 'https://www.penmark.co.za/wp-content/uploads/2018/07/PENM_Plastic-Sharpner-PenmarkPDCGVIF-STH9E-1.jpg', description: 'Get this Metal Body Chrome Sharpener for your kid today and surprise them with a smile. It is made from child friendly supreme quality plastic. Useful at School and Home as well. This student table sharpner has non rust high precision blades with attractive designed body. It is very smooth & easy to use. Best to sharpen long fine tips. It has shaving containers to hold extra material after shaving.', price: 23 },
        {
            name: 'Super star pencil', img: 'https://cdn.shopify.com/s/files/1/0787/5255/products/Bando_complimentpencilset-bts16.jpg?v=1525806099',
            description: 'A Pencil sees it all, the thought flow from your head and your heart and it’s the most loyal friend and listener so make sure you choose your pen right and you will make great progress.',
            price: 32
        },
    ];

    connection.query('SELECT COUNT(*) as no_products FROM Product', function (err, result) {
        if (result[0].no_products < data.length) {
            for (let i = 0; i < data.length; i++) {
                var insertRecord = `INSERT INTO Product (name, image, description, price) VALUES ('${data[i].name}', '${data[i].img}', '${data[i].description}', ${data[i].price})`;
                connection.query(insertRecord, function (err, result) {
                    if (err) throw err;
                });
            }
            console.log(data.length + " record(s) inserted");
        }
    });
}

exports.user = function (connection) {

    const data = [
        { username: 'alterego', password: 'alterego' },
        { username: 'superego', password: 'superego' },
    ];

    connection.query('SELECT COUNT(*) as no_users FROM User', function (err, result) {
        if (result[0].no_users < data.length) {
            for (let i = 0; i < data.length; i++) {
                var insertRecord = `INSERT INTO User (username, password) VALUES ('${data[i].username}', '${data[i].password}')`;
                connection.query(insertRecord, function (err, result) {
                    if (err) throw err;
                });
            }
            console.log(data.length + " record(s) inserted");
        }
    });
}

