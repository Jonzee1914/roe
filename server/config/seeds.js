const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    //0
    { name: 'All' },
    //1
    { name: 'Sea Creatures' },
    //2
    { name: 'Sky Creatures' },
    //3
    { name: 'Land Creatures' },
    //4
    //{ name: '' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    //Start of Sea Creatures
    {
      name: 'Cadborosaurus',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',

      image: 'cookie-in.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 2
    },
    {
      name: 'Beast of Busco',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[1]._id,
      price: 1.99,
      quantity: 5
    },
    {
      name: 'Manipogo',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 1
    },
    {
      name: 'Killer Oklahoma Octopus ',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 4
    },
    {
      name: 'Loch Ness Monster',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 1
    },
    
    //Start of Sky Creatures (Category 2)
    {
      name: 'Jersey Devil',
      category: categories[2]._id,
      description:
        'The appearance is that of a bipedal kangaroo-like or wyvern-like creature with a horse- or goat-like head, leathery bat-like wings, horns, small arms with clawed hands, legs with cloven hooves, and a forked tail. It has been reported to move quickly and is often described as emitting a high-pitched "blood-curdling scream',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 5
    },
    {
      name: 'Mothman',
      category: categories[2]._id,
      description:
        'The appearance is that of a half humanoid and half bird like creature.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 5
    },
    {
      name: 'Thunderbird',
      category: categories[2]._id,
      description:
        'The appearance is that of an enormous bird said to create thunder by flapping its wings, and lightning by flashing its eyes.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 4
    },
    
    //Start of Land Creatures (Category 3)
    {
      name: 'Bigfoot',
      category: categories[3]._id,
      description: 'The appearance is that of a large ape like creature.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 2
    },
    {
      name: 'Chupacabra',
      category: categories[3]._id,
      description:
        'The appearance is that of a large dog with a row of spines reaching from the neck to the base of the tail.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 5
    },
    {
      name: 'Mongolian Death Worm',
      category: categories[3]._id,
      description:
        'The appearance is that of a sausage like creature about two feet long, has no head nor leg and it is so poisonous that merely to touch it means instant death.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 5
    },
    {
      name: 'Yeti',
      category: categories[3]._id,
      description:
        'The appearance is that of a large ape like creature that is covered in white hair and known for having large sharp teeth.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 10
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
